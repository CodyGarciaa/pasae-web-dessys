import { Box, Flex, Text, Button } from 'gestalt';
import { useState, useEffect } from 'react';

interface Slide {
  title: string;
  description: string;
  image: string;
}

interface SlideshowProps {
  slides: Slide[];
}

export function Slideshow({ slides }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 450);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 450);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 450);
  };

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
              <Box padding={4}>
                <Flex direction="column" alignItems="center" justifyContent="center">
                  <Text size="400" weight="bold" align="center">
                    {slide.title}
                  </Text>
                  <Box marginTop={2}>
                    <Text align="center">
                      {slide.description}
                    </Text>
                  </Box>
                  <Box marginTop={4}>
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box position="absolute" bottom={4} left right>
        <Flex justifyContent="center" gap={2}>
          <Button
            text="Previous"
            onClick={handlePrev}
            disabled={isTransitioning}
          />
          <Button
            text={isAutoPlaying ? "Pause" : "Play"}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          />
          <Button
            text="Next"
            onClick={handleNext}
            disabled={isTransitioning}
          />
        </Flex>
      </Box>
    </Box>
  );
} 