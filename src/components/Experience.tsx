import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Cyberinfrastructure for Network Science Center (CNS@IU)',
      position: 'Software Engineer',
      duration: 'Jan 2025 - Present',
      year: '2025',
      location: 'Bloomington, IN',
      description: 'Lead development of scalable web applications serving 100k+ users. Mentor junior developers and architect cloud-native solutions using AWS.',
      achievements: [
        'Improved application performance by 40%',
        'Led migration to microservices architecture',
        'Mentored 5+ junior developers'
      ]
    },
    {
      company: 'Hyphenova',
      position: 'Software Engineer - AI/ML',
      duration: 'July 2024 - Nov 2024',
      year: '2024',
      location: 'Los Angeles, CA',
      description: 'Developed and maintained multiple client projects using React, Node.js, and various databases. Collaborated with design and product teams.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced deployment time by 60%',
        'Implemented automated testing pipeline'
      ]
    },
    {
      company: 'CanspiritAI',
      position: 'Software Engineer',
      duration: 'Mar 2022 - June 2022',
      year: '2022',
      location: 'Pune, India',
      description: 'Built responsive web applications and RESTful APIs. Gained experience in agile development and collaborative coding practices.',
      achievements: [
        'Contributed to 3 major product releases',
        'Improved code coverage to 85%',
        'Optimized database queries by 30%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development, building impactful solutions and growing teams.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline line */}
              {index !== experiences.length && (
                <div className="absolute left-25.5 top-13 w-0.5 h-60 bg-blue-200"></div>
              )}
              
              <div className="flex items-start gap-6 mb-12">
                {/* Year on the left */}
                <div className="w-16 text-right">
                  <div className="text-2xl font-bold text-blue-600">{exp.year}</div>
                </div>
                
                {/* Timeline dot */}
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border-4 border-white">
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 border-t-4 border-t-blue-600">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-black">{exp.position}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;