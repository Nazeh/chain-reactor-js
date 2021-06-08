import '../styles/Header.css';
import { Link } from 'react-router-dom';

export const Header = ({ title, close }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>

      <nav>
        {close ? (
          <Link className="menu-btn close" to="/" />
        ) : (
          <Link className="menu-btn" to="/menu" />
        )}
      </nav>
    </header>
  );
};
