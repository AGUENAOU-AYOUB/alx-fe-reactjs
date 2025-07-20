import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '15px', color: '#fff' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px', color: '#fff' }}>About</Link>
      <Link to="/services" style={{ marginRight: '15px', color: '#fff' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
