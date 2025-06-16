import {Box, Flex, Button, ButtonGroup, Divider, Layer, ModalAlert, Text, CompositeZIndex, FixedZIndex, Image, Heading} from 'gestalt'
import { Fragment, useState } from 'react';
import { Slideshow } from './components/Slideshow';
import PASAELogo from './assets/pasae_logo_color_transparent.png';

const HEADER_ZINDEX = new FixedZIndex(10);
const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

// Slideshow data
const slides = [
  {
    title: "PASAE",
    description: "Pilipinx Association of Scientists, Arcitects, and Engineers",
    image: "https://pasae.studentorg.berkeley.edu/images/front_page/PASAE37.JPG"
  },
  {
    title: "Professionalism",
    description: "Network, Mentors, Resumes, Interview Prep",
    image: "https://pasae.studentorg.berkeley.edu/images/professionalism_fr.jpg"
  },
  {
    title: "Funnovation",
    description: "Have Fun!",
    image: "https://pasae.studentorg.berkeley.edu/images/front_page/funnovation37.JPG"
  },
  {
    title: "Family",
    description: "A Community",
    image: "https://pasae.studentorg.berkeley.edu/images/front_page/family37.jpg"
  },
  {
    title: "Get Involved!",
    description: "It's easy!",
    image: "https://pasae.studentorg.berkeley.edu/images/front_page/get_involvedCORE37.jpg"
  },
];

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
                <Box width={48} height={48}>
                  <Image
                    alt="PASAE Logo"
                    naturalHeight={1}
                    naturalWidth={1}
                    fit="contain"
                    role="img"
                    src={PASAELogo}
                  />
                </Box>
                <Heading size="600">PASAE</Heading>
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

            <Box marginTop={4}>
              {/* Rest of Page */}
              <Slideshow slides={slides} />
            </Box>
          </Flex>
        </Flex>
      </Box>
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
