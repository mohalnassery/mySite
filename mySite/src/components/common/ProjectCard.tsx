interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
        <div className="project-overlay">
          <div className="project-actions">
            <a 
              href={demoUrl}
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a 
              href={githubUrl}
              className="button button-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;