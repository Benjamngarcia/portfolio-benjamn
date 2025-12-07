import { useEffect, useState } from 'react';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface TechSliderProps {
  technologies: Technology[];
  speed?: number; // milliseconds per slide
}

export default function TechSlider({ technologies, speed = 3000 }: TechSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, speed);

    return () => clearInterval(interval);
  }, [technologies.length, speed]);

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Get visible technologies (current, next 3)
  const getVisibleTechs = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(technologies[(currentIndex + i) % technologies.length]);
    }
    return visible;
  };

  const visibleTechs = getVisibleTechs();

  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex gap-4 transition-all duration-300 ${
          isAnimating ? 'opacity-50 translate-x-2' : 'opacity-100 translate-x-0'
        }`}
      >
        {visibleTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#222222] rounded-xl border border-gray-200 dark:border-[#2a2a2a] min-w-[160px] transition-all"
          >
            <i
              className={`${tech.icon} text-2xl`}
              style={{ color: tech.color }}
            ></i>
            <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex gap-1.5 mt-4 justify-center">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
              index === currentIndex
                ? 'bg-accent-500 w-8'
                : 'bg-gray-300 dark:bg-gray-700 w-1.5 hover:bg-accent-400 dark:hover:bg-accent-600'
            }`}
            aria-label={`Go to technology ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
