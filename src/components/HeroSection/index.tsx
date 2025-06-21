import { Box, Flex, Heading, Text, Image } from 'gestalt';

interface HeroSectionProps {
  imageSrc: string;
  title: string;
  description: string;
}

const HeroSection = ({ imageSrc, title, description }: HeroSectionProps) => (
  <Flex direction="row" wrap justifyContent="between" alignItems="center">
    {/* Left side - Text content */}
    <Box paddingX={8} paddingY={12} maxWidth={600}>
      <Heading size="600" lineClamp={3}>
        {title}
      </Heading>
      <Box marginTop={4}>
        <Text size="400" color="subtle">
          {description}
        </Text>
      </Box>
    </Box>

    {/* Right side - Image */}
    <Box flex="grow" height={500} position="relative" rounding={4} overflow="hidden">
      <Image
        alt={title}
        naturalHeight={1}
        naturalWidth={1}
        fit="cover"
        src={imageSrc}
      />
    </Box>
  </Flex>
);

export default HeroSection; 