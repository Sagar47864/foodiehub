import { Link } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <nav className="navbar">
      <div className="logo">
        🍔 FoodieHub
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;