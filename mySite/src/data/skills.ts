export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Redux', level: 80 },
      { name: 'Next.js', level: 75 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'SQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'GraphQL', level: 65 },
    ],
  },
  {
    name: 'Tools & Methods',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Testing', level: 85 },
      { name: 'Agile', level: 90 },
      { name: 'AWS', level: 70 },
    ],
  },
  {
    name: 'Design & UI',
    skills: [
      { name: 'Responsive Design', level: 95 },
      { name: 'UI/UX Principles', level: 85 },
      { name: 'CSS Animation', level: 80 },
      { name: 'Material-UI', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Figma', level: 75 },
    ],
  },
];

export const skillCategories = skillsData.map(category => category.name);