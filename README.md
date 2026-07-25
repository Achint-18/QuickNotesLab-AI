# 🧠 QuickNotesLab AI

Turn any educational YouTube video into beautifully structured AI-powered study notes in seconds.

> An AI-powered study workspace built with **Next.js**, **FastAPI**, and **Google Gemini**.

---

## ✨ Features

- 🎥 Generate notes from any public YouTube educational video
- 🤖 AI-powered note generation using Google Gemini
- 📝 Beautiful Markdown-based study workspace
- 📋 One-click copy notes
- 💾 Download notes as Markdown
- ⚡ Responsive and modern UI
- 🌙 Clean glassmorphism design

---

## 🚀 How It Works

```text
YouTube URL
     │
     ▼
Transcript Extraction
     │
     ▼
Google Gemini AI
     │
     ▼
Structured Study Notes
     │
     ▼
AI Study Workspace
```

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Axios
- React Markdown

### Backend
- FastAPI
- Google Gemini API
- YouTube Transcript API

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/QuickNotesLab-AI.git

# Frontend
cd frontend
npm install
npm run dev

# Backend
cd ../backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🔑 Environment Variables

**Backend (.env)**

```env
GEMINI_API_KEY=YOUR_API_KEY
```

**Frontend (.env.local)**

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🚀 Roadmap

- 🔐 User Authentication
- ☁️ Cloud Sync
- 📝 Flashcards
- ❓ Quiz Generator
- 🤖 AI Tutor
- 📚 Study History

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Developer

Built with ❤️ by **Achint Jain**

⭐ If you like this project, consider giving it a star on GitHub.