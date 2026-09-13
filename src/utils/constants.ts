export const skillData = {
  frontend: [
    { name: 'HTML5', proficiency: 95 },
    { name: 'CSS3', proficiency: 90 },
    { name: 'JavaScript', proficiency: 85 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'React', proficiency: 85 },
    { name: 'Vue.js', proficiency: 70 },
    { name: 'Tailwind CSS', proficiency: 80 },
    { name: 'Bootstrap', proficiency: 75 },
  ],
  backend: [
    { name: 'Node.js', proficiency: 80 },
    { name: 'Express.js', proficiency: 75 },
    { name: 'Python', proficiency: 70 },
    { name: 'Django', proficiency: 65 },
    { name: 'MongoDB', proficiency: 80 },
    { name: 'PostgreSQL', proficiency: 70 },
    { name: 'MySQL', proficiency: 65 },
    { name: 'Redis', proficiency: 60 },
  ],
  tools: [
    { name: 'Git', proficiency: 85 },
    { name: 'GitHub', proficiency: 80 },
    { name: 'Docker', proficiency: 70 },
    { name: 'AWS', proficiency: 65 },
    { name: 'Vercel', proficiency: 75 },
    { name: 'Figma', proficiency: 80 },
    { name: 'VS Code', proficiency: 90 },
    { name: 'Postman', proficiency: 75 },
  ]
}

export const projectData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with product catalog, shopping cart, payment integration, and admin dashboard built with React, Node.js, and MongoDB.',
    image: 'https://via.placeholder.com/400x300?text=E-Commerce+Platform',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    github: 'https://github.com/abhinavpadige4/ecommerce-platform',
    live: 'https://ecommerce-platform.vercel.app'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    image: 'https://via.placeholder.com/400x300?text=Task+Management+App',
    tech: ['React', 'Firebase', 'Material-UI', 'WebSockets'],
    github: 'https://github.com/abhinavpadige4/task-manager',
    live: 'https://task-manager-app.vercel.app'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application that displays current conditions, forecasts, and weather maps using a public weather API.',
    image: 'https://via.placeholder.com/400x300?text=Weather+Dashboard',
    tech: ['React', 'CSS3', 'Weather API', 'Chart.js'],
    github: 'https://github.com/abhinavpadige4/weather-dashboard',
    live: 'https://weather-dashboard.vercel.app'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion showcasing my projects and skills.',
    image: 'https://via.placeholder.com/400x300?text=Portfolio+Website',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/abhinavpadige4/vite-react-portfolio-2024',
    live: 'https://vite-react-portfolio-2024.vercel.app'
  }
]

export const experienceData = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    date: 'Jan 2022 - Present',
    description: 'Led frontend development for multiple enterprise applications, mentored junior developers, and implemented performance optimization strategies that improved load times by 40%.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Webpack']
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    date: 'Mar 2020 - Dec 2021',
    description: 'Developed and maintained full-stack applications using MERN stack, implemented RESTful APIs, and integrated third-party services for payment processing and authentication.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT']
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Web Solutions Ltd.',
    date: 'Jun 2018 - Feb 2020',
    description: 'Built responsive websites and web applications using HTML5, CSS3, JavaScript, and PHP. Collaborated with design team to implement UI/UX designs.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
  }
]