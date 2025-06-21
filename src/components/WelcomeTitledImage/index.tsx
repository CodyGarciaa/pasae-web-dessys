import { Box, Heading, Text, Image, FixedZIndex } from 'gestalt';
import { useState, useEffect, useRef } from 'react';

interface WelcomeSectionProps {
  imageSrc: string;
  title: string;
  description: string;
  secondDescription?: string;
}

const WelcomeSection = ({ imageSrc, title, description, secondDescription }: WelcomeSectionProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      // The scrollable distance is the total height of the runway minus the viewport height.
      const scrollableHeight = rect.height - window.innerHeight;

      if (scrollableHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      
      // Calculate progress from 0 to 1 as we scroll through the "runway".
      // `rect.top` will be negative as we scroll down.
      const progress = Math.max(0, Math.min(1, (-rect.top) / scrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map scrollProgress (0 to 1) to paragraph positions and opacities.
  const firstParagraphY = -scrollProgress * 100;
  const secondParagraphY = (1 - scrollProgress) * 100;
  const firstParagraphOpacity = 1 - (scrollProgress * 2);
  const secondParagraphOpacity = (scrollProgress - 0.5) * 2;

  return (
    // This outer Box creates a "scroll runway" that is taller than the viewport.
    // Its height determines how many pixels of scrolling are dedicated to the animation.
    <Box ref={sectionRef} height="250vh" position="relative">
      {/* This inner Box becomes sticky, holding the visible content in place. */}
      <Box 
        dangerouslySetInlineStyle={{
          __style: {
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
          }
        }}
      >
        {/* Background Image (inside the sticky viewport) */}
        <Box position="absolute" top left right bottom zIndex={new FixedZIndex(0)}>
          <Image
            alt={title}
            naturalHeight={1}
            naturalWidth={1}
            fit="cover"
            src={imageSrc}
          />
        </Box>

        {/* Overlay content container (also inside sticky) */}
        <Box
          position="relative"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="end"
          zIndex={new FixedZIndex(1)}
        >
          <Box
            padding={12}
            maxWidth={500}
            margin={4}
            color="lightWash"
            rounding={4}
            borderStyle="shadow"
            position="relative"
            dangerouslySetInlineStyle={{ __style: { height: '400px' } }}
          >
            <Heading size="600">{title}</Heading>

            {/* First paragraph */}
            <Box
              position="absolute"
              dangerouslySetInlineStyle={{
                __style: {
                  top: '80px',
                  left: '48px',
                  right: '48px',
                  transform: `translateY(${firstParagraphY}%)`,
                  opacity: firstParagraphOpacity,
                },
              }}
            >
              <Text size="400" color="subtle">
                {description}
              </Text>
            </Box>

            {/* Second paragraph */}
            {secondDescription && (
              <Box
                position="absolute"
                dangerouslySetInlineStyle={{
                  __style: {
                    top: '80px',
                    left: '48px',
                    right: '48px',
                    transform: `translateY(${secondParagraphY}%)`,
                    opacity: secondParagraphOpacity,
                  },
                }}
              >
                <Text size="400" color="subtle">
                  {secondDescription}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeSection; 