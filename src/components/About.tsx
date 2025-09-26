import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
    },
    {
      category: 'Tools',
      icon: <Code2 className="w-6 h-6" />,
      technologies: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma']
    }
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
                I'm a passionate software developer with 5+ years of experience building 
                scalable web applications and mobile solutions. I love turning complex 
                problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge through 
                technical writing and mentoring.
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
            {skills.map((skill, index) => (
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
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
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