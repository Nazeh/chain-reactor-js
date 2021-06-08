import { Menu } from '../layouts/Menu';
import '../styles/menu.css';
import { Link } from 'react-router-dom';

export const MenuPage = () => {
  return (
    <Menu title="Menu">
      <nav>
        <Link to="/">Contact US</Link>
        <Link to="/">FAQ</Link>
      </nav>
    </Menu>
  );
};
