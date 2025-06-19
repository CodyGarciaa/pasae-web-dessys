import {Box, Flex, Button, ButtonGroup, Divider, Layer, Text, CompositeZIndex, FixedZIndex, Image, Heading} from 'gestalt'
import { Fragment, useState } from 'react';
import { Slideshow } from './components/Slideshow';
import PASAELogo from './assets/pasae_logo_color_transparent.png';
import MissionSection from './components/MissionSection';
import Footer from './components/Footer';
import BlogGallerySection from './components/BlogGallerySection';

const HEADER_ZINDEX = new FixedZIndex(10);
const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <Fragment>
      <Box paddingX={8} paddingY={8}>
        <Flex
          alignItems="center"
          height="100%"
          justifyContent="center"
          width="100%"
        >
          <Flex direction="column" gap={{ column: 4, row: 0 }} width="100%">
            <Flex alignItems="center" justifyContent="between">
              {/* Header / Top Nav Bar */}
              <Flex alignItems="center" justifyContent="center">
                <Box width={36} height={36}>
                  <Image
                    alt="PASAE Logo"
                    naturalHeight={1}
                    naturalWidth={1}
                    fit="contain"
                    role="img"
                    src={PASAELogo}
                  />
                </Box>
                <Heading size="400">PASAE</Heading>
              </Flex>
              <ButtonGroup>
                <Button
                  color="transparent"
                  text="Home"
                />
                <Button color="transparent" iconEnd="arrow-down" text="Get Involved"/>
                <Button
                  color="transparent"
                  text="Core"
                />
                <Button color="transparent" text="Contact" />
                <Button color="transparent" text="Log In" />
              </ButtonGroup>
            </Flex>

            <Divider />

            <Flex direction="column" alignItems="center" gap={4}>
              {/* Rest of Page */}
              <Slideshow />
              {/* Mission Section */}
              <MissionSection
                title="PASAE's Mission"
                description="Established in 1988, the Pilipinx Association of Scientists, Architects, and Engineers (PASAE) serves as a close-knit support group for students in the technical fields, providing student members a space for social interaction, cultural understanding, professional guidance, and academic support."
                imageSrc="https://pasae.studentorg.berkeley.edu/images/front_page/CORE37_SP'24.JPG"
                imageAlt="PASAE CORE 37"
              />
              {/* What PASAE Does Section */}
              <MissionSection
                title="What PASAE Does"
                description="PASAE provides a variety of events and resources for our members. We provide a social and cultural space for students in the technical fields to cultivate connections with students of similar backgrounds and de-stress through events like PAS'Glade and Chill and PASAE'ce Skating. Professionally and academically, we provide workshops and access to our network of alumni working in industry through events like our Alumni Mixer and Gilead Panel."
                imageSrc="https://pasae.studentorg.berkeley.edu/images/eau_fa22.jpg"
                imageAlt="PASAE Selling Food At EAU Fa'22"
                layout="image-left"
              />
            </Flex>
            {/* Blog Gallery Section */}
            <BlogGallerySection />
          </Flex>
        </Flex>
      </Box>
      <Footer />
      {/* {showComponent ? (
        <Layer zIndex={zIndex}>
          <ModalAlert
            accessibilityModalLabel="Pinterest Rights disclaimer"
            heading="Disclaimer: Built with Gestalt"
            onDismiss={() => {}}
            primaryAction={{
              accessibilityLabel: 'Bring user to website',
              label: 'Continue to site',
              onClick: () => {setShowComponent(false)},
              role: 'button',
            }}
            secondaryAction={{
              accessibilityLabel: 'Bring user to Gestalt page',
              label: 'Learn more',
              href: 'https://gestalt.pinterest.systems/',
              role: 'link',
            }}
            type="warning"
          >
            <Text>
              As you'll notice, the site may look familiar to Pinterest's pages! That's 
              because it was redesigned as a personal learning project using their 
              open-source Gestalt design system.
              <br />
              <br />
              It is not officially affiliated with or endorsed by Pinterest. This project 
              was created purely for educational purposes to explore design systems in practice.
            </Text>
          </ModalAlert>
        </Layer>
      ) : null} */}
    </Fragment>
  )
}

export default App
