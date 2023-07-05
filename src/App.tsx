import React, {useState} from 'react';
import './App.css';
import productsData from "./components/packages.json"
import users from "./components/users.json"

function App() {

  const [search, setSearch] = useState({ destination: '', departure: '' });
  const [products, setProducts] = useState(productsData);
  
  const handleSearchChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setSearch((prevSearch) => ({ ...prevSearch, [name]: value }));
  };

  const handleSearchSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const filteredProducts = productsData.filter(
      (product) =>
        product.destination.toLowerCase().includes(search.destination.toLowerCase()) &&
        product.departure.toLowerCase().includes(search.departure.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleSortChange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    const sortedProducts = [...products].sort((a, b) => {
      if (value === 'ascending') {
        return new Date(a.carrier.departure_time).valueOf() - new Date(b.carrier.departure_time).valueOf();
      } else {
        return new Date(b.carrier.departure_time).valueOf() - new Date(a.carrier.departure_time).valueOf();
      }
    });
   setProducts(sortedProducts);
  };

  return (
    <div className="App">
      <div className="product-search">
      <h1>Search for Products</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" name="destination" placeholder="Enter destination" onChange={handleSearchChange} />
        <input type="text" name="departure" placeholder="Enter departure" onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      <label>
        Sort by date:
        <select onChange={handleSortChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </label>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product">
            <h2>{product.destination}</h2>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
