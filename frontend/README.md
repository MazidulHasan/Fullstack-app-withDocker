# Frontend - React + Vite

Simple React frontend that connects to the FastAPI backend.

## Features
- Display all items from backend
- Create new items with a form
- Beautiful UI with gradient design
- Real-time updates

## Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

The app will be available at: `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```

## Environment Variables

Create a `.env` file in the frontend folder:
```
VITE_API_URL=http://localhost:8000
```

## Project Structure
```
frontend/
├── src/
│   ├── App.jsx       # Main component
│   ├── App.css       # Styles
│   ├── api.js        # API calls to backend
│   └── main.jsx      # Entry point
├── .env              # Environment variables
└── vite.config.js    # Vite configuration
```