import { Header } from '../components/Header';
// We need form elements in almost every page
import '../styles/form.css';

export const Page = ({ title, children }) => {
  return (
    <>
      <Header title={title}></Header>
      {children}
    </>
  );
};
