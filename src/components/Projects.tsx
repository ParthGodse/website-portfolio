import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LiveSync Kanban Dashboard',
      description:
        'Real-time Kanban built with React + Vite and Supabase sync. Drag-and-drop tasks, scheduled reminders, and Vercel CI/CD for zero-touch deploys. Improved workflow clarity by 40% and cut update latency by 30%.',
      image:
        '/task.png',
      technologies: [
        'React',
        'TypeScript',
        'Supabase',
        'Tailwind',
        'Node.js',
        'Python',
        'CI/CD',
      ],
      githubUrl: 'https://github.com/ParthGodse/task-manager', // TODO: add your repo URL
    },
    {
      title: 'Automated Daily News Briefing Agent',
      description:
        'Python + LangChain agent that pulls headlines, summarizes with Google Gemini (GCP), fact-checks via DuckDuckGo and LLM verification, and emails daily digests via GitHub Actions (cron, secrets).',
      image:
        'https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'LangChain', 'RAG', 'GCP', 'GitHub Actions'],
      githubUrl: 'https://github.com/ParthGodse/daily-briefing-agent', // TODO: add your repo URL
    },
    {
      title: 'Amazon Reviews Big Data Analytics',
      description:
        'PySpark ETL on EC2 Spot, 40% faster and 30% cheaper. Trained XGBoost via SageMaker Autopilot (93% accuracy) and shipped QuickSight dashboards to 20+ stakeholders with secure IAM/VPC hardening.',
      image:
        'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [
        'AWS (EC2, S3, SageMaker, QuickSight)',
        'PySpark',
        'XGBoost',
      ],
      githubUrl: 'https://github.com/ParthGodse?tab=repositories', // TODO: add your repo URL
    },
    {
      title: 'Deepfake Audio Detection with XAI',
      description:
        'Built deepfake audio classifiers and explainability pipeline. Achieved 91.5% accuracy with MobileNet and 88.3% with VGG16 using spectrogram features; analyzed GAN/ResNet/VGG/MobileNet variants and XAI (LIME, SHAP, Grad-CAM). Generated deepfake samples scored 23.8 FAD (~23% from authentic).',
      image:
        '/deepfake.png',
      technologies: [
        'TensorFlow',
        'PyTorch',
        'OpenCV',
        'XAI (LIME/SHAP/Grad-CAM)',
        'Generative AI',
      ],
      githubUrl: 'https://github.com/ParthGodse/Deepfake-Audio-Detection', // TODO: add your repo URL
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my projects that showcase real-time systems, big-data pipelines, and agentic AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://via.placeholder.com/800x450?text=Preview';
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Single blue GitHub button */}
                <div className="flex">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium transform hover:scale-105"
                  >
                    <Github className="w-4 h-4 text-white" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
