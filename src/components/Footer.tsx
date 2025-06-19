import { Box, Flex, Text, Image } from 'gestalt';
import PASAELogo from '../assets/pasae_logo_color_transparent.png';

export default function Footer() {
  return (
    <Box paddingY={12} paddingX={8} color="lightWash" dangerouslySetInlineStyle={{ __style: { background: '#fff', borderTop: '1px solid #eee' } }}>
      <Flex justifyContent="between" alignItems="start" wrap gap={8}>
        <Flex direction='row' alignItems='center' gap={4}>
            <Box width={60} height={60}>
              <Image
                alt="PASAE Logo"
                naturalHeight={1}
                naturalWidth={1}
                fit="contain"
                src={PASAELogo}
              />
            </Box>
            <Text weight="bold" size="600">PASAE</Text>
        </Flex>
        {/* First first column */}
        <Box minWidth={180} marginEnd={8}>
          <Flex direction="column" gap={2}>
            <Text>Lorem ipsum</Text>
            <Text>Lorem ipsum dolar</Text>
            <Text>Lorem</Text>
            <Text>Lorem</Text>
            <Text>Lorem ipsum</Text>
          </Flex>
        </Box>
        {/* Second column */}
        <Box minWidth={180} marginEnd={8}>
          <Flex direction="column" gap={2}>
            <Text>Lorem ipsum dolar</Text>
            <Text>Lorem </Text>
            <Text>Lorem ipsum</Text>
            <Text>Lorem ipsum</Text>
            <Text>Lorem ipsum dolar sit</Text>
            <Text>Land Acknowledgement</Text>
            <Text>Contact Us</Text>
          </Flex>
        </Box>
        {/* Social and legal */}
        <Box minWidth={280} maxWidth={400}>
          <Flex direction="column" gap={2}>
            <Flex gap={2} alignItems="center">
              <Text>✕</Text>
              <Text>🌐</Text>
              <Text>🔗</Text>
              <Text>📸</Text>
            </Flex>
            <Box marginTop={2}>
              <Flex gap={2}>
                <Text>Sitemap</Text>
                <Text>/</Text>
                <Text>Cookie declaration</Text>
              </Flex>
            </Box>
            <Box marginTop={4}>
              <Text weight="bold">PASAE could not be what it is today without the amazing support of our sponsors! Salamat!</Text>
              <Text size="200">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </Text>
              <Box marginTop={2}>
                <Text size="200" color="subtle">© PASAE 2025, all rights reserved.</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
} 