import { Code2, Wrench, Cloud, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code2 className="w-5 h-5" />,
      technologies: [
        'Python', 'SQL', 'JavaScript', 'TypeScript', 'C', 'C++', 'HTML', 'CSS', 'Tailwind'
      ],
    },
    {
      category: 'Frameworks & Tools',
      icon: <Wrench className="w-5 h-5" />,
      technologies: [
        'Next.js', 'Node.js', 'FastAPI', 'Flask', 'React',
        'Kubernetes', 'CI/CD', 'Docker', 'Git', 'GitHub', 'ShadCN'
      ],
    },
    {
      category: 'Data & Cloud Platforms',
      icon: <Cloud className="w-5 h-5" />,
      technologies: [
        'MySQL', 'PostgreSQL', 'Supabase', 'MongoDB', 'Firebase',
        'BigQuery', 'Faiss Vector DB', 'AWS', 'GCP', 'PySpark', 'Hadoop'
      ],
    },
    {
      category: 'AI/ML & Analytics',
      icon: <Brain className="w-5 h-5" />,
      technologies: [
        'PyTorch', 'TensorFlow', 'Transformers', 'HuggingFace',
        'LangChain', 'RAG', 'OpenCV', 'NLP', 'LLMs',
        'Power BI', 'Tableau', 'QuickSight', 'A/B Testing', 'Feature Engineering'
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Indiana University Bloomington',
      year: '2023 - 2025',
      gpa: '3.83/4.0'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'MIT WPU',
      year: '2019 - 2023',
      gpa: '9.54/10.0'
    }
  ];

  // Tech logos with their URLs
  const techLogos = [
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'C', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'HTML', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Flask', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'GCP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'TensorFlow', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'OpenCV', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Summary</h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm a passionate software developer who enjoys building scalable web applications 
                and has experience in Machine Learning, Agentic AI and Data Analysis, with an 
                interest in leveraging data to solve real-world problems. I love turning complex 
                problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                watching/playing cricket and video games.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-bold text-black mb-2">{edu.degree}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{edu.school}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{edu.year}</span>
                    <span className="font-medium">GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-black ml-3">
                    {skill.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Scrolling Tech Logos */}
          {/* Scrolling Tech Logos (seamless) */}
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-8 rounded-xl group">
            <style>{`
              /* One-line, GPU-friendly track */
              .marquee-track {
                display: inline-flex;
                width: max-content;            /* shrink-wrap combined content */
                will-change: transform;
                transform: translate3d(0,0,0);
                animation: marquee var(--speed, 30s) linear infinite;
              }
              @keyframes marquee {
                0%   { transform: translate3d(0,0,0); }
                100% { transform: translate3d(-50%,0,0); } /* move by half (since duplicated) */
              }
              .group:hover .marquee-track { 
                animation-play-state: paused; 
              }
              /* Respect reduced motion */
              @media (prefers-reduced-motion: reduce) {
                .marquee-track { animation: none !important; }
              }
            `}</style>

            {/* The outer line box; keep it single-line via whitespace-nowrap */}
            <div className="whitespace-nowrap">
              {/* Combined track = [A][A] */}
              <div className="marquee-track">
                {/* A: first copy */}
                <div className="inline-flex items-center gap-16 pr-16">
                  {techLogos.map((tech, i) => (
                    <div key={`a-${i}`} className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3">
                        <img
                          src={tech.url}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          width={64}
                          height={64}
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs text-gray-600 mt-2 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* A: exact duplicate copy — must match 1:1 for a perfect seam */}
                <div className="inline-flex items-center gap-16 pr-16" aria-hidden="true">
                  {techLogos.map((tech, i) => (
                    <div key={`b-${i}`} className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3">
                        <img
                          src={tech.url}
                          alt="" /* hidden from accessibility; duplicate of first row */
                          className="w-full h-full object-contain"
                          width={64}
                          height={64}
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs text-gray-600 mt-2 font-medium" aria-hidden="true">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;