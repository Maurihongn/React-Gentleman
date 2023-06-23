import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import './LayoutPrincipal.css';

const LayoutPrincipal = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPrincipal;
