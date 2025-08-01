export interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  lastUpdated: string;
}

export const projects: Project[] = [
  // Python Projects
  {
    id: 'python-1',
    title: 'FastAPI Sample Project',
    description: 'A sample REST API built with FastAPI. Includes basic CRUD operations for learning and testing purposes.',
    technology: 'Python',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: 'https://github.com/Cnek00/FastAPI_sample_project',
    features: ['FastAPI Framework', 'REST API', 'CRUD Operations', 'Python Backend'],
    lastUpdated: '3 days ago'
  },
  {
    id: 'python-2',
    title: 'Web Scraping Project',
    description: 'Advanced web scraping tool for extracting data from news websites with automated data processing.',
    technology: 'Python',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: 'https://github.com/Cnek00/Web-Scraping',
    features: ['Web Scraping', 'Data Extraction', 'News Processing', 'Automation'],
    lastUpdated: 'Sep 23, 2024'
  },
  {
    id: 'python-3',
    title: 'User Management Panel',
    description: 'Basic infrastructure for user-supported applications with authentication and user management features.',
    technology: 'Python',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: 'https://github.com/Cnek00/User-Management-Panel',
    features: ['User Authentication', 'Management Panel', 'Database Integration', 'Security'],
    lastUpdated: 'Jul 24, 2024'
  },
  {
    id: 'python-4',
    title: 'MP3/MP4 Downloader',
    description: 'PyQt5 ile geliştirilmiş kullanıcı dostu mp3 ve mp4 indirici uygulaması.',
    technology: 'Python',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    features: ['PyQt5 GUI', 'Media Download', 'Desktop Application', 'User Interface'],
    lastUpdated: 'Apr 6, 2024'
  },

  // JavaScript Projects
  {
    id: 'javascript-1',
    title: 'Django BookStore',
    description: 'Junior bir python geliştirici olarak GPT den tasarım ve Get-Post işlemlerinde yardım aldığım taslak proje.',
    technology: 'JavaScript',
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: 'https://github.com/Cnek00/Django-BookStore',
    features: ['Django Framework', 'E-commerce', 'Database Design', 'Web Development'],
    lastUpdated: 'Mar 11, 2024'
  },
  {
    id: 'javascript-2',
    title: 'Interactive Portfolio Dashboard',
    description: 'Modern portfolio website with interactive elements and smooth animations.',
    technology: 'JavaScript',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    features: ['Interactive Design', 'Smooth Animations', 'Responsive Layout', 'Modern UI'],
    lastUpdated: 'Recent'
  },

  // TypeScript Projects
  {
    id: 'typescript-1',
    title: 'Enterprise Task Manager',
    description: 'Scalable task management system with advanced TypeScript features and modern architecture.',
    technology: 'TypeScript',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    features: ['Type Safety', 'Scalable Architecture', 'Task Management', 'Modern Framework'],
    lastUpdated: 'Recent'
  },
  {
    id: 'typescript-2',
    title: 'Real-time Chat Application',
    description: 'Full-featured chat application with real-time messaging and file sharing capabilities.',
    technology: 'TypeScript',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    features: ['Real-time Messaging', 'File Sharing', 'Socket.io', 'TypeScript'],
    lastUpdated: 'Recent'
  },

  // Node.js Projects
  {
    id: 'nodejs-1',
    title: 'API Gateway Service',
    description: 'Microservices architecture with API gateway and service discovery for scalable applications.',
    technology: 'Node.js',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    features: ['Microservices', 'API Gateway', 'Service Discovery', 'Scalability'],
    lastUpdated: 'Recent'
  },
  {
    id: 'nodejs-2',
    title: 'E-commerce Backend',
    description: 'Robust e-commerce backend with payment integration and inventory management.',
    technology: 'Node.js',
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: '#',
    features: ['Payment Integration', 'Inventory Management', 'REST API', 'Database Design'],
    lastUpdated: 'Recent'
  },

  // Java Projects
  {
    id: 'java-1',
    title: 'Password Manager Java',
    description: 'Java ile geliştirilmiş kullanıcı ve şifre yönetim sistemi. 3 arkadaşımla beraber yaptığımız team project.',
    technology: 'Java',
    image: 'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: 'https://github.com/Cnek00/PasswordManagerJava',
    features: ['Password Management', 'Security', 'Java Swing', 'Team Project'],
    lastUpdated: 'Oct 12, 2024'
  },
  {
    id: 'java-2',
    title: 'Django E-commerce Platform',
    description: 'Full-featured e-commerce platform with advanced Java backend architecture.',
    technology: 'Java',
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '#',
    githubUrl: 'https://github.com/Cnek00/Django-E-ecommerce',
    features: ['E-commerce', 'Django Integration', 'Payment System', 'User Management'],
    lastUpdated: 'May 19, 2024'
  }
];

export const technologies = [
  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-300 to-orange-500' },
  { name: 'TypeScript', icon: '🔷', color: 'from-blue-400 to-blue-600' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
  { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-600' }
];