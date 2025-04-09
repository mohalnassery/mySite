import '@/styles/components/Logo.css';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`logo ${className}`}>
      <a href="#home">
        <span className="logo-text">MA</span>
        <span className="logo-separator">|</span>
        <span className="logo-subtitle">Portfolio</span>
      </a>
    </div>
  );
};

export default Logo;