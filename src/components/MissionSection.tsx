import { Box, Flex, Heading, Text, Image } from 'gestalt';

interface MissionSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  layout?: 'image-right' | 'image-left';
}

const MissionSection = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  imageWidth = 500, 
  imageHeight = 350,
  layout = 'image-right'
}: MissionSectionProps) => {
  const ImageComponent = (
    <Box
      rounding={4}
      overflow="hidden"
      width={imageWidth}
      height={imageHeight}
      dangerouslySetInlineStyle={{
        __style: { boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }
      }}
    >
      <Image
        alt={imageAlt}
        naturalHeight={imageHeight}
        naturalWidth={imageWidth}
        fit="cover"
        src={imageSrc}
      />
    </Box>
  );

  const TextComponent = (
    <Box flex="grow" maxWidth={500}>
      <Heading size="700">{title}</Heading>
      <Box marginTop={4}>
        <Text size="400">
          {description}
        </Text>
      </Box>
    </Box>
  );

  return (
    <Box marginTop={8}>
        {layout === 'image-left' ? (
            <Flex
            direction="row"
            alignItems="center"
            justifyContent="between"
            gap={8}
            wrap>
                {ImageComponent}
                {TextComponent}
            </Flex>
        ) : (
            <Flex
            direction="row"
            alignItems="center"
            justifyContent="between"
            gap={8}
            wrap>
                {TextComponent}
                {ImageComponent}
            </Flex>
        )}
    </Box>
  );
};

export default MissionSection; 