export default function App() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Dayananda Sagar College of Engineering',
      years: '2024 - 2026',
      score: 'CGPA: 8.39',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'The National Institute of Engineering (NIE) First Grade College',
      years: '2021 - 2024',
      score: 'CGPA: 8.42',
    },
  ];

  const experiences = [
    {
      role: 'Data Analytics Intern',
      company: 'EDUFYI Tech Solutions',
      period: 'April 2026 - June 2026',
      points: [
        'Performed data cleaning, preprocessing, and exploratory data analysis.',
        'Built interactive dashboards using Excel and Power BI.',
        'Generated business insights using SQL and Python.',
      ],
      certificate: 'certifications/edufyi-data-analytics.pdf',
    },
    {
      role: 'Software Development Intern',
      company: 'PAT Technologies',
      period: 'February 2026 - May 2026',
      points: [
        'Developed a full-stack billing management portal using React.js, PHP, and MySQL.',
        'Integrated REST APIs and managed database operations.',
        'Performed testing, debugging, and feature enhancements.',
      ],
      certificate: 'certifications/edutainer.pdf',
    },
    {
      role: 'Software Development Intern',
      company: 'Bluestock Fintech',
      period: 'March 2026 - May 2026',
      points: [
        'Assisted in developing web applications using Python and Django.',
        'Worked on REST API integration and backend functionality.',
        'Improved application performance through testing and debugging.',
      ],
      certificate: 'certifications/bluestock.jpeg',
    },
    {
      role: 'Web Development Intern',
      company: 'Orb Focus Pvt. Ltd.',
      period: 'February 2024 - June 2024',
      points: [
        'Developed responsive web applications using HTML, CSS, and JavaScript.',
        'Enhanced user interfaces and improved application usability.',
        'Performed testing, debugging, and software maintenance.',
      ],
      certificate: 'certifications/orb_focus_internship.jpeg',
    },
  ];

  const skills = {
    Programming: ['Python', 'JavaScript', 'PHP'],
    'Web Development': ['React.js', 'Django', 'HTML5', 'CSS3', 'REST APIs'],
    Databases: ['SQL', 'MySQL', 'MongoDB'],
    'Data Analytics': [
      'Microsoft Excel',
      'Power BI',
      'Data Cleaning',
      'Data Visualization',
      'Exploratory Data Analysis',
    ],
    'Artificial Intelligence': [
      'Machine Learning',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'Gemini API',
    ],
    Tools: ['Git', 'GitHub', 'VS Code'],
  };

  const projects = [
    {
      title: 'AI-Enabled Healthcare Symptom & Medication Analysis',
      desc: 'Developed an AI-powered healthcare platform using React.js, Django, and Retrieval-Augmented Generation (RAG) for contextual symptom analysis and medication guidance.',
      stack: 'React.js - Django - Python - MySQL - Gemini API - RAG',
      github: '',
      live: '',
    },
    {
      title: 'Small Business Invoice & Billing Portal',
      desc: 'Developed a billing management system with invoice generation, customer management, and payment tracking.',
      stack: 'React.js - PHP - MySQL',
      github: '',
      live: '',
    },
    {
      title: 'IPL Match Predictor',
      desc: 'Built a machine learning application that predicts IPL match outcomes using historical cricket datasets.',
      stack: 'Python - Scikit-learn - Streamlit',
      github: '',
      live: 'https://ipl-predictor-2026-mkxzjdayvsou5mfva5jfau.streamlit.app/',
    },
    {
      title: 'Fake Review Detection System',
      desc: 'Developed a machine learning model to classify genuine and fraudulent product reviews using Natural Language Processing.',
      stack: 'Python - Machine Learning - NLP',
      github: 'https://github.com/csvedavyasa2003-dot/fake-review-detection-system',
      live: '',
    },
  ];

  const certifications = [
    { title: 'IBM SQL and Relational Databases', file: 'certifications/sql-db.pdf' },
    { title: 'Programming in Java - NPTEL', file: 'certifications/java.pdf' },
    { title: 'Python Essentials 1 - Cisco Networking Academy', file: 'certifications/python-essentials-1.pdf' },
    { title: 'Python Essentials 2 - Cisco Networking Academy', file: 'certifications/python-essentials-2.pdf' },
    { title: 'Python Programming - QSpiders', file: 'certifications/python-sql.pdf' },
    { title: 'SQL & Database Management - QSpiders', file: 'certifications/python-sql.pdf' },
    { title: 'Data Analytics Internship - EDUFYI Tech Solutions', file: 'certifications/edufyi-data-analytics.pdf' },
    { title: 'Introduction to Cloud Computing', file: 'certifications/cloud.pdf' },
  ];

  const achievements = [
    'Presented a research paper at ICDCA 2026 on Machine Learning-based Stress Level Classification.',
    'Completed multiple Software Development and Data Analytics internships.',
    'Developed AI, Machine Learning, and Full-Stack applications using modern technologies.',
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-cyan-400">
            Vedavyasa | Software Developer & Data Analyst
          </h1>

          <div className="space-x-5 hidden lg:flex text-sm">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#education" className="hover:text-cyan-400">Education</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 bg-gradient-to-b from-black to-gray-900">
        <p className="text-cyan-300 font-semibold mb-3">Hi, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-cyan-400">
          Vedavyasa C S
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          MCA Graduate | Software Developer | Data Analyst | AI Enthusiast
        </h2>
        <p className="max-w-4xl text-gray-400 text-lg leading-relaxed">
          Passionate about building scalable software, analyzing data, and developing AI-powered solutions. Experienced in full-stack development, data analytics, and machine learning through internships and academic projects. I enjoy solving real-world problems with technology and continuously learning emerging tools and frameworks.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="#projects" className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-2xl border border-cyan-500 hover:bg-cyan-500 transition font-semibold">
            Contact Me
          </a>
        </div>
      </section>

      <section className="bg-gray-950 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
            What I'm Looking For
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am currently seeking Software Developer, Data Analyst, Backend Developer, and Graduate Trainee opportunities where I can apply my technical skills, contribute to impactful projects, and continue growing as a technology professional.
          </p>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h2>
        <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
          <p>
            I am an MCA graduate with a strong foundation in Software Development, Data Analytics, Database Management, and Artificial Intelligence. Through internships and academic projects, I have gained practical experience in developing full-stack applications, analyzing data, building REST APIs, and working with modern web technologies.
          </p>
          <p>
            My technical expertise includes Python, JavaScript, React.js, Django, SQL, MySQL, MongoDB, Microsoft Excel, and Power BI. I enjoy building scalable applications, solving analytical problems, and creating AI-powered solutions while continuously learning new technologies.
          </p>
        </div>
      </section>

      <section id="education" className="bg-gray-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item) => (
              <div key={item.degree} className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 transition">
                <h3 className="text-2xl font-bold text-white mb-3">{item.degree}</h3>
                <p className="text-cyan-300 text-lg mb-2">{item.institution}</p>
                <p className="text-gray-400">{item.years}</p>
                <p className="text-gray-300 font-semibold mt-4">{item.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={`${experience.company}-${experience.role}`} className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 transition">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                  <h4 className="text-cyan-300 text-lg">{experience.company}</h4>
                </div>
                <p className="text-gray-400 font-medium">{experience.period}</p>
              </div>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {experience.certificate && (
                <a href={experience.certificate} target="_blank" rel="noreferrer" className="inline-block mt-6 px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition">
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-gray-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-900 p-6 rounded-3xl shadow-lg border border-gray-800 hover:border-cyan-400 transition">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span key={item} className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-cyan-400 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-5">{project.desc}</p>
              <p className="text-cyan-300 font-semibold mb-6">Tech Stack: {project.stack}</p>
              <div className="flex gap-4 flex-wrap">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 border border-cyan-400 rounded-xl hover:bg-cyan-500 transition">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition">
                <p className="text-lg text-gray-300 mb-4">{cert.title}</p>
                {cert.file ? (
                  <a href={cert.file} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition">
                    View Certificate
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">Certificate link coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement} className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition">
              <p className="text-gray-300 leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gray-950 px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-cyan-400 mb-10">Contact</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>Email: <a href="mailto:csvedavyasa2003@gmail.com" className="text-cyan-400 hover:text-white">csvedavyasa2003@gmail.com</a></p>
            <p>Phone: +91 7204826477</p>
            <p>Location: Bangalore, Karnataka, India</p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-white">
                LinkedIn
              </a>
              <a href="https://github.com/csvedavyasa2003-dot" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>Building scalable software, data solutions, and AI-powered applications.</p>
        <p className="mt-2">Copyright 2026 Vedavyasa C S</p>
      </footer>
    </div>
  );
}