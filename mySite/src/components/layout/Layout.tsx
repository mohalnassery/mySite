import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app">
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;