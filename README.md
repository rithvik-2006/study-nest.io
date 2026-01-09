# 📚 StudyNest

**StudyNest** is an all-in-one student productivity platform designed to centralize everything a student needs — from authentication and dashboards today, to AI-powered learning assistance tomorrow.

> Think of it as a **student operating system** rather than just another productivity app.

---

## ✨ Vision

Students today juggle multiple disconnected tools:

* calendars
* notes apps
* grade trackers
* project tools
* AI chatbots

**StudyNest unifies all of this into one coherent platform**, where every feature understands the student’s academic context.

---

## 🚀 Current Features (v0)

* 🔐 **Secure Authentication**

  * Email & password authentication using Firebase Auth
  * HttpOnly session cookies
  * Protected routes via Next.js middleware
* 🧭 **Basic Dashboard**

  * Auth-protected dashboard scaffold
  * Clean and extensible layout
* ⚙️ **DB-Agnostic Architecture**

  * No database lock-in
  * Ready to integrate Neon (PostgreSQL) or any other DB

---

## 🧠 Planned Features

* 📅 Integrated calendar & task scheduling
* 📝 Notes & revision workspace
* 📊 Assignment & grade analytics
* 🧪 AI-generated mock exams
* 🛠 Personal project management
* 🤖 Context-aware AI assistant
* 📈 Performance insights & improvement suggestions

---

## 🏗 Tech Stack

| Layer    | Technology                     |
| -------- | ------------------------------ |
| Frontend | Next.js (App Router)           |
| Auth     | Firebase Authentication        |
| Sessions | Firebase Admin SDK             |
| Styling  | Tailwind CSS                   |
| Database | **Planned:** Neon (PostgreSQL) |
| AI       | **Planned:** LLM + embeddings  |

---

## 📁 Project Structure

```text
src/
 ├─ app/
 │   ├─ login/
 │   ├─ signup/
 │   ├─ dashboard/
 │   ├─ api/
 │   │   ├─ session/
 │   │   └─ logout/
 │   └─ layout.tsx
 ├─ lib/
 │   ├─ firebase.ts        # Client SDK
 │   └─ firebaseAdmin.ts  # Admin SDK
 └─ middleware.ts         # Route protection
```

---

## 🔐 Authentication Flow

1. User signs up / logs in via Firebase Auth
2. Firebase issues an ID token
3. Token is verified using Firebase Admin SDK
4. Secure HttpOnly session cookie is created
5. Middleware protects authenticated routes

This design keeps authentication **secure, scalable, and database-independent**.

---

## ⚙️ Environment Setup

Create a `.env.local` file:

```env
# Firebase Client
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Firebase Admin
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

> ⚠️ Never commit `.env.local` to version control.

---

## 🧪 Running Locally

```bash
npm install
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🛡 Security Notes

* No passwords are ever stored manually
* Firebase handles encryption & hashing
* Sessions use HttpOnly cookies
* Secrets are server-side only
* Middleware prevents unauthorized access

---

## 🧩 Why Firebase Auth + Neon?

* Firebase Auth = **battle-tested security**
* Neon DB = **full control over student data**
* No vendor lock-in
* Clean separation of concerns

Firebase handles *who you are*
Neon handles *what you do*

---

## 🛣 Roadmap

* [ ] Google OAuth
* [ ] Neon DB integration
* [ ] Notes & tasks module
* [ ] Calendar sync
* [ ] AI assistant (context-aware)
* [ ] Mock exams & analytics
* [ ] Mobile app (future)

---

## 🤝 Contributing

This project is in active development.
Ideas, issues, and discussions are welcome.

---

## 📄 License

MIT License

---

## 💡 Final Note

StudyNest is not just a project —
it’s an attempt to **rethink how students interact with their academic lives**.

If you’re building this seriously, you’re already ahead of 90% of student tools.

