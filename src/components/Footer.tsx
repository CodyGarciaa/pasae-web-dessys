import { Box, Flex, Text, Image } from 'gestalt';
import PASAELogo from '../assets/pasae_logo_color_transparent.png';

export default function Footer() {
  return (
    <Box paddingY={12} paddingX={8} color="lightWash" dangerouslySetInlineStyle={{ __style: { background: '#fff', borderTop: '1px solid #eee' } }}>
      <Flex justifyContent="between" alignItems="start" wrap gap={8}>
        {/* Logo and first column */}
        <Box minWidth={180} marginEnd={8}>
          <Flex direction="column" gap={2}>
            <Box width={120} height={40} marginBottom={4}>
              <Image
                alt="PASAE Logo"
                naturalHeight={1}
                naturalWidth={3}
                fit="contain"
                src={PASAELogo}
              />
            </Box>
            <Text weight="bold">What's PASAE</Text>
            <Text>Brand guidelines</Text>
            <Text>For students</Text>
            <Text>For alumni</Text>
            <Text>Terms of service</Text>
            <Text>Personalized ads</Text>
          </Flex>
        </Box>
        {/* Second column */}
        <Box minWidth={180} marginEnd={8}>
          <Flex direction="column" gap={2}>
            <Text>Help Center</Text>
            <Text>Newsroom</Text>
            <Text>For developers</Text>
            <Text>Engineering Blog</Text>
            <Text>Copyright & Trademark</Text>
            <Text>Privacy policy</Text>
            <Text>Candidate Privacy Notice</Text>
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
              <Text weight="bold">We're looking for all kinds of people.</Text>
              <Text size="200">
                PASAE is an equal opportunity organization and makes membership decisions on the basis of merit. We want to have the best qualified people in every role. All qualified applicants will receive consideration for membership without regard to race, color, ancestry, national origin, religion or religious creed, sex (including pregnancy, childbirth, or related medical conditions), sexual orientation, gender, gender identity, gender expression, age, marital status, status as a protected veteran, physical or mental disability, medical condition, genetic information or characteristics (or those of a family member) or any other consideration made unlawful by applicable federal, state or local laws. We also consider qualified applicants regardless of criminal histories, consistent with legal requirements. See the <a href="#">PASAE EEO Policy Statement</a> for more information. If you require medical or religious accommodation during the application process, please complete <a href="#">this form</a> for support.
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