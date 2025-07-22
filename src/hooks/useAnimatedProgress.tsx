
import { useState, useEffect, useRef } from 'react';

interface UseAnimatedProgressProps {
  targetValue: number;
  duration?: number;
  delay?: number;
}

export const useAnimatedProgress = ({ 
  targetValue, 
  duration = 1500, 
  delay = 0 
}: UseAnimatedProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            animateProgress();
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, duration, delay, isVisible]);

  const animateProgress = () => {
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentProgress = startValue + (targetValue - startValue) * easeOutCubic;
      
      setProgress(currentProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setProgress(targetValue);
      }
    };

    requestAnimationFrame(animate);
  };

  return { progress, elementRef };
};
