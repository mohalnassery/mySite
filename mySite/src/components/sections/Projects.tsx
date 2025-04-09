import { useState } from 'react';
import ProjectCard from '../common/ProjectCard';
import { projects, categories, type ProjectCategory } from '@/data/projects';
import '@/styles/components/Projects.css';
import '@/styles/components/ProjectCard.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [loading, setLoading] = useState(true);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  // Simulate loading state for demonstration
  setTimeout(() => setLoading(false), 1000);

  if (loading) {
    return (
      <section id="projects" className="section">
        <div className="container">
          <div className="projects-header">
            <h2>Projects</h2>
          </div>
          <div className="projects-loading">
            <div className="loading-spinner" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p className="section-description">
            A collection of business applications and tools I've built. Each project demonstrates
            different aspects of modern web development and solving real-world problems.
          </p>
          <div className="project-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-item fade-in">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}

        <div className="projects-cta">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button button-outline"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;