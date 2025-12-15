export default function Home() {
  const experiences = [
    {
      company: "KTSPL",
      title: "Full Stack Developer",
      period: "Current",
      bullets: [
        "Shipped REST APIs on Node.js + Express with role-based auth using JWT/OAuth2.",
        "Raised throughput via caching, middleware optimizations, and modular services.",
        "Improved delivery time by 20% through reusable service layers and reviews.",
      ],
    },
    {
      company: "PISC (StudentCorners)",
      title: "Software Developer Trainee",
      period: "May 2024 – Jul 2024",
      bullets: [
        "Built responsive React flows and Redux state for consistent UI data.",
        "Partnered with backend and QA to cut bugs and tighten maintainability.",
      ],
    },
  ];

  const projects = [
    {
      name: "Interactive Chat Platform",
      stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
      summary:
        "Real-time chat backend scaled past 200+ concurrent users with indexed MongoDB models and efficient Socket.io events.",
      highlights: [
        "JWT auth with refresh tokens and role-based protections.",
        "Optimized media uploads via Cloudinary (~40% smaller payloads).",
        "Indexed message fetch for faster chat retrieval.",
      ],
    },
  ];

  const education = [
    {
      institution: "Graphic Era Hill University",
      location: "Dehradun, Uttrakhand",
      degree: "BCA (Bachelor of Computer Applications)",
      period: "2018-2021",
    },
    {
      institution: "Narayana Educational Institute",
      location: "Hyderabad, Telangana",
      degree: "PCM (Physics, Chemistry and Maths)",
      period: "2016-2018",
    },
    {
      institution: "D.A.V High School",
      location: "",
      degree: "10th",
      period: "2016",
    },
  ];

  const skills = {
    Languages: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    Frontend: ["ReactJS", "Next.js 15", "Tailwind CSS", "Redux Toolkit", "Shadcn UI"],
    Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth2", "Redis"],
    Databases: ["MongoDB (Mongoose)", "MySQL", "Sequelize ORM"],
    DevOps: ["Docker", "AWS S3", "CI/CD (Basics)"],
    Tooling: ["Postman", "Swagger", "Chrome DevTools", "Git/GitHub"],
    "Core Concepts": ["System Design Fundamentals", "Query Optimization", "Caching", "Debugging"],
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="grid-overlay animate-fade-in" />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 z-10">
        <header className="glass-panel card-shadow relative overflow-hidden rounded-lg p-6 sm:p-10 animate-fade-in-up">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="font-mono text-sm text-code-blue animate-slide-in-right">
                Backend Developer
                <span className="terminal-cursor"></span>
              </p>
              <h1 className="text-4xl font-semibold text-gray-100 sm:text-5xl animate-fade-in-up animate-delay-200">
                Saurav Singh Dhanola
              </h1>
              <p className="text-lg text-gray-400 animate-fade-in-up animate-delay-300">
                Backend Developer • Node.js • Express • SQL • MongoDB • Docker • Redis • AWS S3
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="badge animate-fade-in-up animate-delay-400">Backend Engineer</span>
                <span className="badge animate-fade-in-up animate-delay-500">REST APIs</span>
                <span className="badge animate-fade-in-up animate-delay-600">Caching & Performance</span>
                <span className="badge animate-fade-in-up animate-delay-600">System Design Fundamentals</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-lg border border-gray-700/30 bg-gray-900/40 px-4 py-3 font-mono text-sm text-gray-300 lg:items-end">
              <span className="text-code-blue">contact</span>
              <a className="text-gray-300 hover:text-code-blue" href="mailto:sauravsingh16101999@gmail.com" target="_blank" rel="noopener noreferrer">
                sauravsingh16101999@gmail.com
              </a>
              <a className="text-gray-300 hover:text-code-blue" href="tel:+911916301809631">
                +91 91 63018 09631
              </a>
              <a className="text-gray-300 hover:text-code-blue" href="https://github.com/Sauravdhanola1999" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="text-gray-300 hover:text-code-blue" href="https://www.linkedin.com/in/saurav-singh-dhanola-1ba75b36b/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel card-shadow overflow-hidden rounded-lg animate-fade-in-up animate-delay-200">
            <div className="terminal-bar">
              <span className="terminal-dot bg-code-red animate-pulse-slow" />
              <span className="terminal-dot bg-code-orange animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
              <span className="terminal-dot bg-code-green animate-pulse-slow" style={{ animationDelay: '0.4s' }} />
              <span className="ml-auto font-mono text-xs text-gray-400">portfolio.ts</span>
            </div>
            <div className="bg-[#1e1e1e] px-5 py-4 font-mono text-sm text-gray-300">
              <p className="animate-slide-in-right">
                <span className="text-code-blue">const</span> <span className="text-code-orange">intro</span> <span className="text-gray-500">=</span> <span className="text-code-green">`</span>
                <span className="terminal-cursor"></span>
              </p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Ever since I discovered the world of coding, I've been fascinated by the possibilities it opens up. I remember the thrill I felt when I developed my first basic website. From that point forward, I dove headfirst into learning coding languages and techniques.
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                I pursued a degree in BCA from Graphic Era Hill University, where I spent countless hours creating and experimenting with different technologies. I'm a passionate learner who's always open to discussing anything related to tech and web development, with an insatiable curiosity to learn new things.
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                As a backend developer, I specialize in building robust, scalable APIs that power modern applications. My focus is on crafting reliable systems with optimized database queries, implementing production-grade observability, and ensuring secure authentication flows. I leverage Node.js, Express, Redis for caching, Docker for containerization, and AWS S3 for scalable storage solutions.
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                <span className="text-code-blue">Toolbelt:</span> Node.js, Express, Redis, Docker, SQL/MongoDB, AWS S3. Shipping secure auth, intelligent caching strategies, and comprehensive documentation that makes complex systems maintainable.
              </p>
              <p className="mt-2">
                <span className="text-code-green">`</span><span className="text-gray-500">;</span>
              </p>
            </div>
          </div>

          <div className="glass-panel card-shadow flex flex-col gap-4 rounded-lg p-5 sm:p-6 animate-fade-in-up animate-delay-300">
            <div className="flex items-center gap-2">
              <span className="server-indicator" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400">Availability</p>
            </div>
            <h2 className="text-2xl font-semibold text-gray-100">Open to backend opportunities</h2>
            <p className="text-gray-400">
              Focused on shipping fast, observable services with solid authentication, caching, and clean data modeling.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Remote-friendly", "API First", "Performance Tuning", "Secure Auth"].map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel card-shadow rounded-lg p-6 sm:p-7 animate-fade-in-up animate-delay-400">
            <div className="mb-4 flex items-center gap-2">
              <span className="server-indicator" />
              <h2 className="text-xl font-semibold text-gray-100">Experience</h2>
            </div>
            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <div 
                  key={exp.company} 
                  className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 sm:p-5 animate-fade-in-up"
                  style={{ animationDelay: `${0.5 + idx * 0.15}s`, opacity: 0 }}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-mono text-code-blue">{exp.period}</p>
                      <h3 className="text-lg font-semibold text-gray-100">{exp.company}</h3>
                      <p className="text-gray-400">{exp.title}</p>
                    </div>
                    <span className="badge">Node.js + Express</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-code-blue" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel card-shadow rounded-lg p-6 sm:p-7 animate-fade-in-up animate-delay-500">
            <div className="mb-4 flex items-center gap-2">
              <span className="server-indicator" />
              <h2 className="text-xl font-semibold text-gray-100">Projects</h2>
            </div>
            <div className="space-y-5">
              {projects.map((project, idx) => (
                <div 
                  key={project.name} 
                  className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 sm:p-5 animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + idx * 0.15}s`, opacity: 0 }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100">{project.name}</h3>
                      <p className="text-sm text-gray-400">{project.summary}</p>
                    </div>
                    <span className="badge">Real-time</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-code-green" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass-panel card-shadow rounded-lg p-6 sm:p-7 animate-fade-in-up animate-delay-600">
          <div className="mb-4 flex items-center gap-2">
            <span className="server-indicator" />
            <h2 className="text-xl font-semibold text-gray-100">Education</h2>
          </div>
          <div className="space-y-5">
            {education.map((edu, idx) => (
              <div 
                key={edu.institution} 
                className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 sm:p-5 animate-fade-in-up"
                style={{ animationDelay: `${0.7 + idx * 0.15}s`, opacity: 0 }}
              >
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-mono text-code-blue">{edu.period}</p>
                    <h3 className="text-lg font-semibold text-gray-100">{edu.institution}</h3>
                    {edu.location && <p className="text-gray-400">{edu.location}</p>}
                    <p className="text-gray-300 mt-1">{edu.degree}</p>
                  </div>
                </div>
            ))}
          </div>
        </section>

        <section className="glass-panel card-shadow rounded-lg p-6 sm:p-7 animate-fade-in-up animate-delay-600">
          <div className="mb-4 flex items-center gap-2">
            <span className="server-indicator" />
            <h2 className="text-xl font-semibold text-gray-100">Skills</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([group, list], idx) => (
              <div 
                key={group} 
                className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 animate-fade-in-up"
                style={{ animationDelay: `${0.9 + idx * 0.1}s`, opacity: 0 }}
              >
                <p className="text-sm font-semibold text-gray-300">{group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {list.map((item) => (
                    <span key={item} className="badge text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel card-shadow rounded-lg p-6 sm:p-7 animate-fade-in-up animate-delay-600">
          <div className="mb-4 flex items-center gap-2">
            <span className="server-indicator" />
            <h2 className="text-xl font-semibold text-gray-100">Contact</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 animate-fade-in-up animate-delay-700">
              <p className="text-sm font-mono text-code-blue">Email</p>
              <a className="text-gray-300 hover:text-code-blue" href="mailto:sauravsingh16101999@gmail.com" target="_blank" rel="noopener noreferrer">
                sauravsingh16101999@gmail.com
              </a>
            </div>
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 animate-fade-in-up animate-delay-800">
              <p className="text-sm font-mono text-code-blue">Phone</p>
              <a className="text-gray-300 hover:text-code-blue" href="tel:+911916301809631">
                +91 191 63018 09631
              </a>
            </div>
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 animate-fade-in-up animate-delay-900">
              <p className="text-sm font-mono text-code-blue">GitHub</p>
              <a className="text-gray-300 hover:text-code-blue" href="https://github.com/Sauravdhanola1999" target="_blank" rel="noopener noreferrer">
                github.com/Sauravdhanola1999
              </a>
            </div>
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 animate-fade-in-up animate-delay-900">
              <p className="text-sm font-mono text-code-blue">LinkedIn</p>
              <a className="text-gray-300 hover:text-code-blue" href="https://www.linkedin.com/in/saurav-singh-dhanola-1ba75b36b/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/saurav-singh-dhanola
              </a>
            </div>
            <div className="rounded-lg border border-gray-700/30 bg-gray-900/40 p-4 animate-fade-in-up animate-delay-900">
              <p className="text-sm font-mono text-code-blue">Focus</p>
              <p className="text-gray-400">Backend roles with Node.js, caching, and secure authentication.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
