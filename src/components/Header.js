import '../styles/Header.css';
import { Link } from 'react-router-dom';

export const Header = ({ title, close }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>

      {close ? (
        <Link className="menu-btn close" to="/"></Link>
      ) : (
        <Link className="menu-btn" to="/menu"></Link>
      )}
    </header>
  );
};
