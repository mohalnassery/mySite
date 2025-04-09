import { useState } from 'react';
import '@/styles/components/About.css';

const About = () => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-2">
          <div className="about-content fade-in">
            <h2>About Me</h2>
            <p className="mb-4">
              Hi, I'm a passionate software developer focused on creating efficient and user-friendly 
              business applications. With expertise in modern web technologies, I specialize in 
              building solutions that help businesses streamline their operations.
            </p>
            <p className="mb-4">
              My approach combines technical excellence with business acumen, ensuring that every 
              project not only functions flawlessly but also delivers real value to its users.
            </p>
            <div className="about-highlights grid-2 mb-4">
              <div>
                <h3 className="mb-2">Technical Focus</h3>
                <ul>
                  <li>Full Stack Development</li>
                  <li>Business Applications</li>
                  <li>Web Technologies</li>
                  <li>System Architecture</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2">Core Strengths</h3>
                <ul>
                  <li>Problem Solving</li>
                  <li>Clean Code</li>
                  <li>Best Practices</li>
                  <li>Team Collaboration</li>
                </ul>
              </div>
            </div>
            <div className="about-cta">
              <a 
                href="/resume.pdf" 
                className="button button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a 
                href="#projects" 
                className="button button-outline ml-3"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="about-image-container">
            <div className={`about-image fade-in ${isPhotoLoaded ? 'loaded' : ''}`}>
              <img
                src="/profile-placeholder.jpg"
                alt="Professional headshot"
                onLoad={() => setIsPhotoLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;