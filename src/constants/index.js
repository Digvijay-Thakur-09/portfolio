import {
  mobile,
  backend,
  creator,
  web,
  sharpener,
  handsInTechnology,
  project1,
  project2,
  project3,
  // threejs was removed from here because the file is missing
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Machine Learning Enthusiast',
    icon: web,
  },
  {
    title: 'Data Structures & Algorithms',
    icon: mobile,
  },
  {
    title: 'Python Developer',
    icon: backend,
  },
  {
    title: 'AI Integrator',
    icon: creator,
  },
];

const technologies = [
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' 
  },
  { 
    name: 'C++', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' 
  },
  { 
    name: 'Java', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' 
  },
  { 
    name: 'HTML 5', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' 
  },
  { 
    name: 'Scikit-learn', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg' 
  },
  { 
    name: 'Pandas', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' 
  },
  { 
    name: 'NumPy', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' 
  },
  { 
    name: 'MySQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' 
  },
  { 
    name: 'Git', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' 
  },
  { 
    name: 'GitHub', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' 
  },
];

const experiences = [
  {
    title: 'Competitive Programmer',
    company_name: 'LeetCode',
    icon: sharpener, // You might want to import a LeetCode icon later
    iconBg: '#383E56',
    date: 'Ongoing',
    points: [
      'Solved 400+ problems on LeetCode utilizing C++ and Java.',
      'Developed a solid grasp of data structures, algorithms, and optimization techniques.',
      'Regularly practice advanced algorithmic thinking to build efficient software solutions.',
    ],
  },
  {
    title: 'Hackathon Participant',
    company_name: 'Thapar Institute & Various',
    icon: handsInTechnology, 
    iconBg: '#E6DEDD',
    date: 'Ongoing',
    points: [
      'Regular participant in competitive hackathons, building working prototypes under strict time constraints.',
      'Collaborate with peers to conceptualize, design, and develop practical and scalable software systems.',
      'Focused on integrating LLMs and Machine Learning models into functional web applications.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
   {
    name: 'CineMatch Pro',
    description:
      'A production-ready movie recommendation system utilizing K-Nearest Neighbors (KNN) and Cosine Distance to match user preferences against a database of 600,000+ films. Used GitHub Actions to fetch, deduplicate, and merge live TMDB API data weekly, and built a high-performance interactive UI using Streamlit and Gemini.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
      { name: 'Scikit-Learn', color: 'green-text-gradient' },
      { name: 'Streamlit', color: 'pink-text-gradient' },
    ],
    image: project1, // This will now automatically use your new cinematch.png!
    view: 'https://cinematch-pro-kqoewokn4rnyzpvpjcjztr.streamlit.app/', // <--- Paste your live link here
  },
  {
    name: 'Car Price Prediction',
    description:
      'A machine learning web app to predict car prices based on user inputs. Experimented with multiple regression models (Linear Regression, Decision Tree, KNN, Random Forest) and achieved an R² of ~0.92 using ensemble techniques. Deployed a simple interactive UI for real-time predictions.',
    tags: [
      { name: 'Machine Learning', color: 'blue-text-gradient' },
      { name: 'Pandas', color: 'green-text-gradient' },
      { name: 'Regression', color: 'pink-text-gradient' },
    ],
    image: project2, 
    view: 'https://github.com/Digvijay-Thakur-09',
  },
  {
    name: 'Trust Token',
    description:
      'A system developed during a hackathon to verify social media claims using LLMs (Grok, LLaMA) and trusted sources like PIB. Utilized Pinecone/FAISS for fast retrieval of relevant information and implemented hashing for data integrity to make the verification process transparent and less biased.',
    tags: [
      { name: 'LLMs', color: 'blue-text-gradient' },
      { name: 'Pinecone', color: 'green-text-gradient' },
      { name: 'NLP', color: 'pink-text-gradient' },
    ],
    image: project3, 
    view: 'https://github.com/Digvijay-Thakur-09',
  },
];

export { services, technologies, experiences, testimonials, projects };
