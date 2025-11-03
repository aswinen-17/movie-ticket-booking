# 🎬 Movie Ticket Booking Website (MERN Stack)

QuickShow A **Full Stack Movie Ticket Booking Application** built using the **MERN Stack** (MongoDB, Express, React, Node.js).  
Users can explore movies, book tickets with seat selection, and manage bookings.  
Admins can manage movies, shows, and bookings via an integrated dashboard.

---

## 🚀 Features

### 🎟️ User Features
- User authentication with **Clerk** (Email, Google Sign-Up).
- Multi-session login support — switch between multiple profiles without logging out.
- Browse and explore available movies with details.
- Book tickets with **interactive seat selection**.
- Secure online payments powered by **Stripe**.
- Receive **email confirmations** for bookings.
- Re-try failed payments within 10 minutes (seats are reserved temporarily).

### 🛠️ Admin Features
- Admin dashboard for managing:
  - 🎞️ Movies
  - 📅 Shows
  - 🎫 Bookings
- Add, edit, and delete movies and show schedules.
- View all users and bookings.

### ⚙️ Backend & Automation
- **Inngest** integrated for background jobs and scheduling.
  - Send email to users when a new movie is added.
  - Send booking confirmation and reminder emails.
  - Auto-release seats if payment fails after 10 minutes.

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | Clerk |
| Payment Gateway | Stripe |
| Background Jobs | Inngest |
| Email Service | Brevo (SMTP) + Nodemailer |
| Deployment | Vercel  |

---
**Live Demo:** 
  👉  [https://quickshow-sand-alpha.vercel.app](https://quickshow-sand-alpha.vercel.app)

