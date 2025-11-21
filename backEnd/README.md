# Simple CRUD Backend API

A basic FastAPI backend with SQLite database for learning purposes.

## Features
- 2 API endpoints: Create and Read items
- SQLite database connection
- Automated tests with pytest

## Project Structure
```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py          # FastAPI app
│   ├── database.py      # DB connection
│   ├── models.py        # DB models
│   ├── schemas.py       # Pydantic schemas
│   └── crud.py          # CRUD operations
├── tests/
│   ├── __init__.py
│   └── test_main.py
├── requirements.txt
└── README.md
```

## Setup Instructions

### 1. Create the project structure
```bash
mkdir backend
cd backend
mkdir app tests
touch app/__init__.py tests/__init__.py
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the server
```bash
uvicorn app.main:app --reload
```

The API will be available at: `http://localhost:8000`

### 4. Access API Documentation
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## API Endpoints

### Create Item
```bash
POST http://localhost:8000/items/
Content-Type: application/json

{
  "name": "My Item",
  "description": "Item description"
}
```

### Read All Items
```bash
GET http://localhost:8000/items/
```

## Testing

Run tests with pytest:
```bash
pytest tests/ -v
```

## Database

The application uses SQLite database (`app.db` file) which will be created automatically when you first run the application.

## Next Steps
- Add Docker containerization
- Create frontend
- Setup CI/CD pipeline