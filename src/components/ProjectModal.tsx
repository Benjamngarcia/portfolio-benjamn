import { useEffect, useState } from 'react';
import { IconX, IconExternalLink, IconBrandGithub, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface Project {
  title: string;
  descriptionEs: string;
  descriptionEn: string;
  demo?: string;
  repo?: string;
  img: string;
  images?: string[]; // Additional images for carousel
  technologies: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang?: 'es' | 'en';
}

export default function ProjectModal({ project, isOpen, onClose, lang = 'es' }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get all images (main image + additional images)
  const images = project ? [project.img, ...(project.images || [])] : [];

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    if (isAnimating || images.length <= 1) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevImage = () => {
    if (isAnimating || images.length <= 1) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (!isOpen || !project) return null;

  const description = lang === 'es' ? project.descriptionEs : project.descriptionEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up dark:bg-[#222222]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-colors shadow-lg dark:bg-[#1a1a1a]/90 dark:hover:bg-[#2a2a2a]"
          aria-label="Close modal"
        >
          <IconX size={24} className="text-gray-700 dark:text-gray-300" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          {/* Image Carousel */}
          {images.length > 0 && (
            <div className="relative h-64 md:h-96 bg-gray-100 overflow-hidden dark:bg-[#1a1a1a]">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* Carousel Controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg dark:bg-[#1a1a1a]/90 dark:hover:bg-[#2a2a2a]"
                    aria-label="Previous image"
                  >
                    <IconChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg dark:bg-[#1a1a1a]/90 dark:hover:bg-[#2a2a2a]"
                    aria-label="Next image"
                  >
                    <IconChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (!isAnimating) {
                            setIsAnimating(true);
                            setCurrentImageIndex(index);
                            setTimeout(() => setIsAnimating(false), 300);
                          }
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-accent-500 w-8'
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {lang === 'es' ? 'Tecnologías' : 'Technologies'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.demo || project.repo) && (
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-[#2a2a2a]">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-colors shadow-sm"
                  >
                    <IconExternalLink size={20} />
                    {lang === 'es' ? 'Ver Demo' : 'View Demo'}
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 hover:border-accent-500 text-gray-700 rounded-lg font-medium transition-colors dark:bg-[#1a1a1a] dark:border-[#2a2a2a] dark:hover:border-accent-500 dark:text-gray-300"
                  >
                    <IconBrandGithub size={20} />
                    {lang === 'es' ? 'Ver Código' : 'View Code'}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
        }

        :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
}
