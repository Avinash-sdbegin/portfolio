# 🌟 Portfolio Website (Frontend + Contact Backend)

A modern personal portfolio project built with **React + Vite** and a **Node.js email backend**.
Recruiters can explore your portfolio and send a message through the Contact form, and the message is delivered to your Gmail inbox using Nodemailer.

---

## 🚀 Live Badges

<p align="center">
	<a href="https://your-vercel-frontend-url" target="_blank">
		<img alt="Live Frontend" src="https://img.shields.io/badge/Live%20Frontend-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
	</a>
	<a href="https://chatify-backend-4qij.onrender.com" target="_blank">
		<img alt="Live Backend" src="https://img.shields.io/badge/Live%20Backend-Render-46E3B7?style=for-the-badge" />
	</a>
	<img alt="Node" src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
	<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
	<img alt="Socket" src="https://img.shields.io/badge/Socket.IO-Realtime-010101?style=for-the-badge&logo=socketdotio&logoColor=white" />
	<img alt="Cloudinary" src="https://img.shields.io/badge/Cloudinary-Media-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
</p>

> ✍️ Replace the frontend URL with your deployed Vercel link when ready.

---

## 📦 Project Structure

```text
PORTFOLIO_/
├── Frontend/                # React + Vite portfolio UI
│   ├── src/components/      # Navbar, Hero, About, Projects, Contact, etc.
│   └── .env                 # VITE_BACKEND_URL
├── Backend/                 # Express + Nodemailer API
│   ├── server.js            # /health and /contact routes
│   └── .env                 # Gmail credentials + CORS origin
└── Readme.md
```

---

## 🧠 Features

- ✨ Clean multi-section portfolio UI
- 📬 Interactive Contact form with loading/success/error feedback
- 🔐 Gmail SMTP integration using App Password
- 🌐 CORS-safe backend for local development ports
- 🩺 Health check endpoint for backend monitoring

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express
- Nodemailer
- dotenv
- cors

---

## 🔄 Message Flow

```text
User fills contact form
				↓
React frontend sends POST /contact
				↓
Node.js backend receives payload
				↓
Nodemailer uses Gmail SMTP
				↓
Email lands in your inbox 📧
```

---

## ✅ Prerequisites

- Node.js 18+
- npm
- Gmail account with 2-Step Verification enabled
- Gmail App Password (16-character)

---

## 🔐 Gmail Setup (Important)

1. Open Google Account → Security.
2. Enable **2-Step Verification**.
3. Search for **App Passwords**.
4. Create a new app password:
	 - App: Mail
	 - Device: Other (Custom name, e.g. `NodeApp`)
5. Copy the generated 16-character password and use it in backend `.env`.

---

## ⚙️ Environment Variables

### Backend `.env` (`PORTFOLIO_/Backend/.env`)

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_char_app_password
RECEIVER_EMAIL=your_email@gmail.com
```

### Frontend `.env` (`PORTFOLIO_/Frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## ▶️ Run Locally

### 1. Start Backend

```bash
cd PORTFOLIO_/Backend
npm install
npm run start
```

Expected log:

```text
Server running on port 5000
```

### 2. Start Frontend

```bash
cd PORTFOLIO_/Frontend
npm install
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173` or `http://localhost:5174`).

---

## 🧪 API Endpoints

### `GET /health`

Checks backend availability.

Response:

```json
{
	"ok": true,
	"message": "Backend running"
}
```

### `POST /contact`

Send contact message.

Request body:

```json
{
	"name": "Recruiter Name",
	"email": "recruiter@example.com",
	"message": "Hi, I would like to connect with you."
}
```

Success response:

```json
{
	"message": "Email sent successfully"
}
```

---

## 🐞 Common Issues & Fixes

### 1) CORS blocked (`Access-Control-Allow-Origin` mismatch)

- Ensure backend is restarted after env/code changes.
- Ensure `FRONTEND_URL` matches your active Vite origin.
- If Vite runs on `5174`, backend CORS must allow that origin.

### 2) `Failed to fetch`

- Backend not running or wrong backend URL.
- Check `VITE_BACKEND_URL` in frontend `.env`.
- Verify `http://localhost:5000/health` works.

### 3) Gmail `Invalid login`

- Use App Password, not Gmail normal password.
- Remove extra spaces in `EMAIL_USER` and `EMAIL_PASS`.

### 4) Mail not received

- Check Spam/Junk folder.
- Check backend logs for nodemailer errors.

---

## 📌 Current Portfolio Sections

- Navbar
- Hero
- About
- Skills
- Projects
- Hackathons
- Positions
- Achievements
- Contact
- Footer

---

## 🤝 Contributing

Suggestions and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

This project is available for personal and educational use.

---

## 👨‍💻 Author

**Avinash Kumar**

- Email: avinashkumarmgr24@gmail.com
- LinkedIn: https://www.linkedin.com/in/avinash-kumar-32020232a/
- GitHub: https://github.com/Avinash-sdbegin

