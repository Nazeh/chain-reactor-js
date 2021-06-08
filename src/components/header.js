import '../styles/Header.css';

export const Header = ({ title }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>

      <nav>
        <button className="menu-btn"></button>
      </nav>
    </header>
  );
};
