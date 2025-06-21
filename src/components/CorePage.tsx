import { Box, Column, Flex, Text} from 'gestalt';
import HeroSection from './HeroSection';
import WelcomeSection from './WelcomeSection';
import PersonCard from './PersonCard';
import { exec, internal, external, creative } from '../data/people';
import BlogGallerySection from './BlogGallerySection';

function CorePage() {
  return (
    <Box width='100%' display="flex" justifyContent='center'>
        <Column span={10}>
            <HeroSection
                title="Collaborative spaces to inspire your best work"
                description="As a global company, we have offices in cities around the world. Find a community that energizes your life and career."
                imageSrc={'https://pasae.studentorg.berkeley.edu/img/core/core36.jpg'}
            />
            <WelcomeSection
                title="Welcome to PASAE!"
                description="No matter where you are in your journey, PASAE is here to support your growth and success. Our organization brings together passionate individuals who share a commitment to leadership, service, and celebrating Filipino culture. Through our diverse programs and tight-knit community, we create opportunities for meaningful connections and personal development."
                secondDescription="As you scroll through this section, you'll experience our innovative content presentation. This second paragraph demonstrates how we can showcase additional information in an engaging way. Our community values creativity and technical excellence, and this interactive experience reflects that commitment to innovation."
                imageSrc={'https://pasae.studentorg.berkeley.edu/img/core/core36.jpg'}  // You'll want to replace this with a different image
                secondImageSrc={'https://pasae.studentorg.berkeley.edu/img/core/core35.png'}
            />
            
            {/* People Cards Section */}
            <Box padding={4}>
                <Text size="600" align="center">Executive Component</Text>
                {/* First row: 3 cards (span 4 each) */}
                <Box marginBottom={4}>
                    <Flex direction="row">
                        {exec.slice(0, 2).map((person) => (
                            <Column key={person.id} span={6}>
                                <Box padding={2}>
                                    <PersonCard person={person} />
                                </Box>
                            </Column>
                        ))}
                    </Flex>
                </Box>
                
                {/* Second row: 2 cards (span 6 each) */}
                <Flex direction="row">
                    {exec.slice(2, 5).map((person) => (
                        <Column key={person.id} span={4}>
                            <Box padding={2}>
                                <PersonCard person={person} />
                            </Box>
                        </Column>
                    ))}
                </Flex>
            </Box>

            {/* People Cards Section */}
            <Box padding={4}>
                <Text size="600" align="center">Internal Component</Text>
                {/* First row: 3 cards (span 4 each) */}
                <Box marginBottom={4}>
                    <Flex direction="row">
                        {internal.slice(0, 2).map((person) => (
                            <Column key={person.id} span={6}>
                                <Box padding={2}>
                                    <PersonCard person={person} />
                                </Box>
                            </Column>
                        ))}
                    </Flex>
                </Box>
                
                {/* Second row: 2 cards (span 6 each) */}
                <Flex direction="row">
                    {internal.slice(2, 4).map((person) => (
                        <Column key={person.id} span={6}>
                            <Box padding={2}>
                                <PersonCard person={person} />
                            </Box>
                        </Column>
                    ))}
                </Flex>
            </Box>
            {/* People Cards Section */}
            <Box padding={4}>
                <Text size="600" align="center">External Component</Text>
                {/* First row: 3 cards (span 4 each) */}
                <Box marginBottom={4}>
                    <Flex direction="row">
                        {external.slice(0, 2).map((person) => (
                            <Column key={person.id} span={6}>
                                <Box padding={2}>
                                    <PersonCard person={person} />
                                </Box>
                            </Column>
                        ))}
                    </Flex>
                </Box>
                
                {/* Second row: 2 cards (span 6 each) */}
                <Flex direction="row">
                    {external.slice(2, 5).map((person) => (
                        <Column key={person.id} span={4}>
                            <Box padding={2}>
                                <PersonCard person={person} />
                            </Box>
                        </Column>
                    ))}
                </Flex>
            </Box>
            {/* People Cards Section */}
            <Box padding={4}>
                <Text size="600" align="center">Creative Component</Text>
                {/* First row: 3 cards (span 4 each) */}
                <Box marginBottom={4}>
                    <Flex direction="row">
                        {creative.slice(0, 3).map((person) => (
                            <Column key={person.id} span={6}>
                                <Box padding={2}>
                                    <PersonCard person={person} />
                                </Box>
                            </Column>
                        ))}
                    </Flex>
                </Box>
            </Box>
            <BlogGallerySection />
        </Column>
    </Box>
  );
}

export default CorePage; 