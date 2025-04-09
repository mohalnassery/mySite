import NavBar from './NavBar';
import Logo from '../common/Logo';
import '@/styles/components/Header.css';
import '@/styles/components/NavBar.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Logo />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;