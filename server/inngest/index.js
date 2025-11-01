import { Inngest } from "inngest";
import User from "../models/User.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// inngest function to save user data to a database
const syncUserCreation = inngest.createFunction(
  {id: 'sync-user-from-clerk'},
  {event: 'clerk/user.created'},
  async ({ event }) =>{
      const {id, first_name, last_name, email_addresses, image_url} = event.data
      const userDate = {
        _id: id,
        email: email_addresses[0].email_addresses,
        name:first_name + ' ' +last_name,
        image:image_url
      }
      await User.create(userDate)
  }
)

//inngest function to delete user frm db
const syncUserDeletion = inngest.createFunction(
  {id: 'delete-user-with-clerk'},
  {event: 'clerk/user.deleted'},
  async ({ event }) =>{
      
    const {id} = event.data
    await User.findByIdAndDelete(id)
     
  }
)

//inngest function to update user data in db
const syncUserUpdation = inngest.createFunction(
  {id: 'update-user-from-clerk'},
  {event: 'clerk/user.updated'},
  async ({ event }) =>{
      
    const{id, first_name, last_name, email_addresses, image_url} = event.data
     const userDate = {
        _id: id,
        email: email_addresses[0].email_addresses,
        name:first_name + ' ' +last_name,
        image:image_url
      }
      await User.findByIdAndUpdate(id, userDate)
  }
)

export const functions = [
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation
];