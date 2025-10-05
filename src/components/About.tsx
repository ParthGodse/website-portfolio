// import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import { Code2, Wrench, Cloud, Brain} from 'lucide-react';

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
      // Databases
      'MySQL', 'PostgreSQL', 'Supabase', 'MongoDB', 'Firebase',
      'BigQuery', 'Faiss Vector DB',
      // Cloud + Big Data
      'AWS',
      'GCP', 'PySpark', 'Hadoop'
    ],
  },
  {
    category: 'AI/ML & Analytics',
    icon: <Brain className="w-5 h-5" />,
    technologies: [
      // AI/ML
      'PyTorch', 'TensorFlow', 'Transformers', 'HuggingFace',
      'LangChain', 'RAG', 'OpenCV', 'NLP', 'LLMs',
      // Analytics
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left side - Education */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Summary</h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm a passionate software developer who enjoys building building 
                scalable web applications and has experience in Machine Learning, Agentic AI and Data Analysis,
                with a interest in leveraging data to solve real-world problems. I love turning complex 
                problems into simple, beautiful, and intuitive solutions.
                
                
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                watching/playing cricket and video games.
              </p>
            </div>
          </div>

                    
          {/* Right side - Summary */}
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

        
        
        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default About;