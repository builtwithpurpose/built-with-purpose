# Built with Purpose — Portfolio Website

A modern, full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### 1. Start the Backend
```bash
cd server
npm install
npm run dev
```
The API server will start on `http://localhost:5000`

### 2. Start the Frontend
```bash
cd client
npm install
npm run dev
```
The website will open on `http://localhost:5173`

### 3. MongoDB Setup
- **Local**: Make sure MongoDB is running locally on `mongodb://localhost:27017`
- **Atlas**: Update `server/.env` with your MongoDB Atlas connection string

## 📁 Project Structure
```
portfolio/
├── client/          # React Frontend (Vite)
│   ├── src/
│   │   ├── components/   # All React components
│   │   ├── App.jsx       # Main app layout
│   │   ├── App.css       # Component styles
│   │   └── index.css     # Design system & global styles
│   └── index.html
├── server/          # Express.js Backend
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   ├── server.js    # Express entry point
│   └── .env         # Environment variables
└── README.md
```

## 🛠 Tech Stack
- **Frontend**: React 19, Vite, Vanilla CSS
- **Backend**: Express.js, MongoDB, Mongoose
- **Design**: Glassmorphism, CSS animations, responsive

## ✏️ Customization
All mockup data (team names, projects, testimonials, contact info, social links) is located directly in each component file under `client/src/components/`. Simply edit the data arrays to update with your real information.

## 📬 Contact Form
The contact form submits to the Express.js API (`POST /api/contact`) and stores submissions in MongoDB. Make sure MongoDB is running for the form to work.
