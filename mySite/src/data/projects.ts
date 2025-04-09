export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Expense Tracker',
    description: 'A comprehensive expense tracking system with data visualization and reporting features. Manage your finances with ease using interactive charts and detailed analytics.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Local Storage'],
    imageUrl: '/assets/projects/expense-tracker.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'Business',
  },
  {
    id: 2,
    title: 'Inventory Management',
    description: 'Advanced inventory tracking system with real-time updates, stock alerts, and detailed reporting capabilities. Perfect for small to medium-sized businesses.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Material-UI'],
    imageUrl: '/assets/projects/inventory-manager.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'Business',
  },
  {
    id: 3,
    title: 'Loan Calculator',
    description: 'Interactive loan calculator with amortization schedules, payment breakdowns, and visual representations of loan terms and interest rates.',
    technologies: ['React', 'TypeScript', 'Recharts', 'Styled Components'],
    imageUrl: '/assets/projects/loan-calculator.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'Utility',
  },
  {
    id: 4,
    title: 'Task Manager',
    description: 'Collaborative task management system with drag-and-drop interface, real-time updates, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'React DnD', 'Context API'],
    imageUrl: '/assets/projects/task-manager.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'Web App',
  },
  {
    id: 5,
    title: 'Shift Scheduler',
    description: 'Employee shift management system with conflict detection, schedule optimization, and reporting features for business owners.',
    technologies: ['React', 'TypeScript', 'Full Calendar', 'Context API'],
    imageUrl: '/assets/projects/shift-scheduler.jpg',
    demoUrl: '#',
    githubUrl: '#',
    category: 'Business',
  }
];

export const categories = ['All', 'Business', 'Utility', 'Web App'] as const;
export type ProjectCategory = typeof categories[number];