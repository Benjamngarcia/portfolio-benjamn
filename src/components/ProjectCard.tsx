import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface Project {
  title: string;
  descriptionEs: string;
  descriptionEn: string;
  demo?: string;
  repo?: string;
  img: string;
  images?: string[];
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  lang?: 'es' | 'en';
  delay?: number;
}

export default function ProjectCard({ project, lang = 'es', delay = 0 }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const description = lang === 'es' ? project.descriptionEs : project.descriptionEn;
  const viewMoreText = lang === 'es' ? 'Ver más' : 'View more';

  return (
    <>
      <div
        className="card overflow-hidden group animate-on-scroll"
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View More Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-colors shadow-sm group"
          >
            <span>{viewMoreText}</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </>
  );
}
