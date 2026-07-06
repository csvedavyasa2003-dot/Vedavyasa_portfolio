export default function App() {

  const skills = {
    Programming: ['Python', 'Java', 'PHP', 'SQL'],

    Frontend: ['ReactJS', 'HTML', 'CSS', 'JavaScript'],

    Backend: ['Django', 'REST APIs'],

    Tools: [
      'Git & GitHub',
      'Android Studio',
      'VS Code',
      'Power BI',
      'Docker',
    ],

    DataAnalysis: [
      'Data Cleaning',
      'Data Visualization',
      'Power BI',
      'Excel Analytics',
      'Pandas',
      'NumPy',
      'SQL Analysis',
    ],

    Concepts: [
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Computing',
      'RAG',
      'API Integration',
      'Business Analytics',
    ],
  };

  const projects = [
    {
      title: 'AI-Enabled Healthcare Symptom & Medication Analysis System',
      desc: 'AI-powered healthcare analysis platform using Django and RAG techniques for symptom analysis and intelligent medical insights.',
      github: 'https://github.com/yourgithub/healthcare-project',
      live: '',
    },

    {
  title: 'Fake Review Detection System',
  desc: 'Machine learning-based system to classify reviews as genuine or fake using preprocessing and classification algorithms.',
  github: '',
  live: '',
},

    {
      title: 'Small Business Invoice & Billing Portal',
      desc: 'Full-stack billing and invoice management application using ReactJS, PHP, and MySQL with authentication and payment tracking.',
      github: 'https://github.com/yourgithub/billing-portal',
      live: '',
    },

    {
      title: 'IPL Match Predictor',
      desc: 'Machine learning IPL match prediction application with interactive UI and real-time prediction functionality.',
      github: 'https://github.com/yourgithub/ipl-predictor',
      live: 'https://ipl-predictor-2026-mkxzjdayvsou5mfva5jfau.streamlit.app/',
    },

    

    {
      title: 'Coffee Shop Sales Analysis Dashboard',
      desc: 'Performed sales data analysis using Excel, SQL, and Power BI to identify business trends, customer behavior, and revenue insights through interactive dashboards.',
      github: 'https://github.com/yourgithub/coffee-shop-analysis',
      live: '',
    },
  ];

  const internships = [
    {
      company: 'Bluestock Fintech',
      role: 'Software Development Engineer (SDE) Intern',
      work: 'Worked on frontend-backend integration, debugging, application enhancement, and real-world software development workflows.',
      certificate: 'certifications/bluestock.jpeg',
    },

    {
      company: 'PAT Technologies (Edutainer)',
      role: 'Software Development Intern',
      work: 'Worked on software development, API integration, debugging, and full-stack implementation tasks during internship training.',
      certificate: 'certifications/edutainer.pdf',
    },

    {
      company: 'Orb Focus Pvt Ltd',
      role: 'Web Development Intern',
      work: 'Worked on web application development, testing, debugging, and UI improvements using modern web technologies.',
      certificate: 'certifications/orb_focus_internship.jpeg',
    },
  ];

  const certifications = [
    {
      title: 'IBM Introduction to Cloud',
      file: 'certifications/cloud.pdf',
    },

    {
      title: 'Python & SQL Certification',
      file: 'certifications/python-sql.pdf',
    },

    {
      title: 'NPTEL Programming in Java',
      file: 'certifications/java.pdf',
    },

    {
      title: 'IBM SQL and Relational Databases 101',
      file: 'certifications/sql-db.pdf',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-2xl font-bold text-cyan-400">
            Vedavyasa | Developer & Data Analyst
          </h1>

          <div className="space-x-6 hidden md:flex">

            <a href="#about" className="hover:text-cyan-400">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>

            <a href="#internships" className="hover:text-cyan-400">
              Internships
            </a>

            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-gray-900">

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm{' '}
          <span className="text-cyan-400">
            Vedavyasa C S
          </span>{' '}
          
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          MCA Student | Full Stack Developer | Data Analyst | AI & Cloud Enthusiast
        </h2>

        <p className="max-w-3xl text-gray-400 text-lg leading-relaxed">
          Passionate about building scalable web applications and solving
          real-world problems using technology. Skilled in ReactJS,
          Django, Python, SQL, and modern web technologies with hands-on
          experience in AI-powered, data analytics, and full-stack projects.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">

          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-cyan-500 hover:bg-cyan-500 transition font-semibold"
          >
            Contact Me
          </a>

          <a
            href="certifications/Vedavyasa_1DS24MC113.pdf"
            download
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-gray-300"
          >
            Download Resume
          </a>

        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I am currently pursuing my Master of Computer Applications (MCA)
          at Dayananda Sagar College of Engineering, Bengaluru. I have a
          strong interest in Full Stack Development, Data Analytics,
          Artificial Intelligence, and Cloud Computing.

          Through internships and projects, I have gained practical experience
          in web application development, REST API integration, debugging,
          database management, and data analysis using modern tools and technologies.
        </p>

      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-950 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-cyan-400 mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {Object.entries(skills).map(([category, items]) => (

              <div
                key={category}
                className="bg-gray-900 p-6 rounded-3xl shadow-lg border border-gray-800 hover:border-cyan-400 transition"
              >

                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {items.map((item) => (

                    <span
                      key={item}
                      className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-full text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-cyan-400 hover:scale-105 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex gap-4 flex-wrap">

                {project.github && (

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition"
  >
    GitHub
  </a>

)}

                {project.live && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-cyan-400 rounded-xl hover:bg-cyan-500 transition"
                  >
                    Live Demo
                  </a>

                )}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Internships */}
      <section id="internships" className="bg-gray-950 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-cyan-400 mb-12">
            Internship Experience
          </h2>

          <div className="space-y-8">

            {internships.map((internship) => (

              <div
                key={internship.company}
                className="bg-gray-900 p-8 rounded-3xl border border-gray-800"
              >

                <h3 className="text-2xl font-bold text-white">
                  {internship.company}
                </h3>

                <h4 className="text-cyan-300 mb-2">
                  {internship.role}
                </h4>

                <p className="text-gray-500 mb-4">
                  Internship Experience
                </p>

                <p className="text-gray-400 mb-4">
                  {internship.work}
                </p>

                <a
                  href={internship.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition"
                >
                  View Certificate
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((cert) => (

            <div
              key={cert.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition"
            >

              <p className="text-lg text-gray-300 mb-4">
                {cert.title}
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition"
              >
                View Certificate
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* Career Objective */}
      <section className="bg-gray-950 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Career Objective
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            To build a successful career in Software Development and
            Data Analytics by applying my technical knowledge,
            analytical thinking, and problem-solving skills to develop
            innovative and impactful solutions while continuously
            learning emerging technologies.
          </p>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Contact Me
        </h2>

        <div className="space-y-4 text-lg text-gray-300">

          <p>Email: csvedavyasa2003@gmail.com</p>

          <p>Phone: +91 7204826477</p>

          <p>Location: Bengaluru, Karnataka</p>

          <div className="flex justify-center gap-6 mt-4">

            <a
              href="https://github.com/csvedavyasa2003-dot"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-white"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

        <p>
          "Passionate about building technology that solves real-world problems."
        </p>

        <p className="mt-2">
          Copyright 2026 Vedavyasa C S
        </p>

      </footer>

    </div>
  );
}
