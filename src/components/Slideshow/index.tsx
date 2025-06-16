import { Box } from 'gestalt';
import { useState, useEffect } from 'react';
import { Slide } from './Slide';
import { slides } from '../../data/slides';

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 450);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box position="relative" height={400} overflow="hidden">
      <Box position="relative" height="100%">
        {slides.map((slide, index) => {
          // Calculate the relative position to current slide
          let relativePosition = index - currentSlide;
          
          // Normalize the position to be between -1 and 1
          if (relativePosition > 1) relativePosition -= slides.length;
          if (relativePosition < -1) relativePosition += slides.length;
          
          return (
            <Box
              key={index}
              position="absolute"
              top
              left
              right
              bottom
              dangerouslySetInlineStyle={{
                __style: {
                  transform: `translateX(${relativePosition * 100}%)`,
                  transition: 'transform 450ms cubic-bezier(0.8, 0, 0.2, 1)',
                }
              }}
            >
              <Slide {...slide} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
} 