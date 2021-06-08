import { Header } from '../components/Header';
// We need form elements in almost every page
import '../styles/form.css';

export const Menu = ({ title, children }) => {
  return (
    <>
      <Header title={title} close></Header>
      {children}
    </>
  );
};
