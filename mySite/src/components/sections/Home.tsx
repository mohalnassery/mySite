import '@/styles/components/Home.css';

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <div className="home-content">
          <h1 className="fade-in">
            Welcome to My Portfolio
          </h1>
          <p className="lead fade-in">
            Building business solutions with modern web technologies
          </p>
          <div className="home-cta fade-in">
            <a href="#projects" className="button button-primary">
              View My Work
            </a>
            <a href="#contact" className="button button-outline ml-3">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;