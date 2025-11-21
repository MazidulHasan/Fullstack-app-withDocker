# Full Stack CRUD Application with Docker

A full-stack application with FastAPI backend, React frontend, and Docker containerization with CI/CD pipeline.

## 🚀 Features

- ✅ **Backend**: FastAPI with SQLAlchemy ORM
- ✅ **Frontend**: React + Vite with modern UI
- ✅ **Database**: SQLite (can be upgraded to PostgreSQL)
- ✅ **Docker**: Multi-container setup with Docker Compose
- ✅ **CI/CD**: Automated testing and deployment with GitHub Actions
- ✅ **API**: RESTful API with automatic documentation

## 📋 Prerequisites

- Python 3.11+
- Node.js 18+
- Docker & Docker Compose
- Git

## 🏗️ Project Structure
```
.
├── backEnd/
│   ├── app/
│   │   ├── main.py         # FastAPI application
│   │   ├── database.py     # Database configuration
│   │   ├── models.py       # SQLAlchemy models
│   │   ├── schemas.py      # Pydantic schemas
│   │   └── crud.py         # CRUD operations
│   ├── tests/              # Backend tests
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── api.js          # API calls
│   │   └── App.css         # Styles
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── docker-compose.yml
└── .github/
    └── workflows/
        └── ci-cd.yml       # CI/CD pipeline
```

## 🚀 Quick Start

### Option 1: Run with Docker Compose (Recommended)
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Start all services
docker compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Option 2: Run Locally (Development)

**Backend:**
```bash
cd backEnd
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 🧪 Running Tests

**Backend Tests:**
```bash
cd backEnd
pytest tests/ -v
```

**Frontend Build:**
```bash
cd frontend
npm run build
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Root endpoint |
| GET | `/items/` | Get all items |
| POST | `/items/` | Create new item |
| GET | `/docs` | Interactive API documentation |

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- ✅ Automated testing for backend (pytest)
- ✅ Automated build for frontend (npm)
- ✅ Docker image building and testing
- ✅ Runs on every push to main branch

View the pipeline: [Actions](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions)

## 🐳 Docker Commands
```bash
# Build and start containers
docker compose up --build

# Start in detached mode
docker compose up -d

# Stop containers
docker compose down

# View logs
docker compose logs

# Rebuild specific service
docker compose build backend
docker compose build frontend
```

## 🛠️ Technologies Used

### Backend
- FastAPI
- SQLAlchemy
- Pydantic
- Uvicorn
- Pytest

### Frontend
- React
- Vite
- Axios
- CSS3

### DevOps
- Docker
- Docker Compose
- GitHub Actions
- Nginx

## 📝 Environment Variables

**Backend** (`backEnd/.env`):
```
DATABASE_URL=sqlite:///./app.db
```

**Frontend** (`frontend/.env`):
```
VITE_API_URL=http://localhost:8000
```

## 🚧 Future Enhancements

- [ ] Add UPDATE and DELETE operations
- [ ] Switch to PostgreSQL database
- [ ] Add user authentication (JWT)
- [ ] Deploy to cloud (AWS/Azure/GCP)
- [ ] Add frontend tests (Jest/Vitest)
- [ ] Add more comprehensive error handling
- [ ] Implement pagination for items list

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Md Mazidul Hasan -(https://github.com/MazidulHasan)

## 🙏 Acknowledgments

- FastAPI documentation
- React documentation
- Docker documentation

---

⭐ If you found this project helpful, please give it a star!