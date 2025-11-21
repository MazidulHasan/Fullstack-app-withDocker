from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to Simple CRUD API"}

def test_create_item():
    response = client.post(
        "/items/",
        json={"name": "Test Item", "description": "Test Description"}
    )
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == "Test Item"
    assert data["description"] == "Test Description"
    assert "id" in data
    assert "created_at" in data

def test_read_items():
    # First create an item
    client.post(
        "/items/",
        json={"name": "Test Item 2", "description": "Test Description 2"}
    )
    
    # Then read all items
    response = client.get("/items/")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) > 0