import { useState, useEffect } from 'react';
import { getItems, createItem } from './api';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  // Fetch items when component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getItems();
      setItems(data);
    } catch (err) {
      setError('Failed to fetch items. Make sure backend is running!');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await createItem(formData);
      setFormData({ name: '', description: '' });
      await fetchItems(); // Refresh the list
      alert('Item created successfully!');
    } catch (err) {
      setError('Failed to create item');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <h1>📝 Simple CRUD App</h1>
      <p className="subtitle">Frontend connected to FastAPI Backend</p>

      {/* Create Item Form */}
      <div className="form-container">
        <h2>Create New Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Item'}
          </button>
        </form>
      </div>

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      {/* Items List */}
      <div className="items-container">
        <h2>All Items ({items.length})</h2>
        <button onClick={fetchItems} disabled={loading} className="refresh-btn">
          🔄 Refresh
        </button>

        {loading && <p>Loading...</p>}

        {items.length === 0 && !loading && (
          <p className="no-items">No items yet. Create one above!</p>
        )}

        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <small>Created: {new Date(item.created_at).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;