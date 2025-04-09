import { useState } from 'react';
import { skillsData, skillCategories } from '@/data/skills';
import '@/styles/components/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="skills-header">
          <h2>Skills & Expertise</h2>
          <p className="section-description">
            A comprehensive overview of my technical skills and proficiency levels across
            various technologies and development methodologies.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map(category => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-content">
          {skillsData.map(category => (
            <div
              key={category.name}
              className={`skills-category ${activeCategory === category.name ? 'active' : ''}`}
            >
              <div className="skills-grid">
                {category.skills.map(skill => (
                  <div key={skill.name} className="skill-item fade-in">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: `var(--primary-color)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          <p>
            * Skill levels are based on relative experience and proficiency in each technology
            or methodology
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;