import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import PASAELogo from './assets/pasae_logo_color_transparent.png';
import MissionSection from './components/MissionSection';
import Footer from './components/Footer';
import BlogGallerySection from './components/BlogGallerySection';
import CorePage from './components/CorePage';
import { Box, Flex, Button, ButtonGroup, Divider, Layer, Text, CompositeZIndex, FixedZIndex, Image, Heading } from 'gestalt';
import { Slideshow } from './components/Slideshow';

const HEADER_ZINDEX = new FixedZIndex(10);
const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

function HomePage() {
  return (
    <Fragment>
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Flex direction="column" gap={{ column: 4, row: 0 }} width="100%">
          {/* Main Content */}
          <Flex direction="column" alignItems="center" gap={4}>
            <Slideshow />
            <MissionSection
              title="PASAE's Mission"
              description="Established in 1988, the Pilipinx Association of Scientists, Architects, and Engineers (PASAE) serves as a close-knit support group for students in the technical fields, providing student members a space for social interaction, cultural understanding, professional guidance, and academic support."
              imageSrc="https://pasae.studentorg.berkeley.edu/images/front_page/CORE37_SP'24.JPG"
              imageAlt="PASAE CORE 37"
            />
            <MissionSection
              title="What PASAE Does"
              description="PASAE provides a variety of events and resources for our members. We provide a social and cultural space for students in the technical fields to cultivate connections with students of similar backgrounds and de-stress through events like PAS'Glade and Chill and PASAE'ce Skating. Professionally and academically, we provide workshops and access to our network of alumni working in industry through events like our Alumni Mixer and Gilead Panel."
              imageSrc="https://pasae.studentorg.berkeley.edu/images/eau_fa22.jpg"
              imageAlt="PASAE Selling Food At EAU Fa'22"
              layout="image-left"
            />
          </Flex>
          <BlogGallerySection />
        </Flex>
      </Flex>
    </Fragment>
  );
}

function Header() {
  const navigate = useNavigate();
  return (
    <Flex alignItems="center" height="100%" justifyContent="center" width="100%">
      <Flex direction="column" gap={{ column: 4, row: 0 }} width="100%">
        <Flex alignItems="center" justifyContent="between">
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
            <Button color="transparent" text="Home" onClick={() => navigate('/')} />
            <Button color="transparent" iconEnd="arrow-down" text="Get Involved" />
            <Button color="transparent" text="Core" onClick={() => navigate('/core')} />
            <Button color="transparent" text="Contact" />
            <Button color="transparent" text="Log In" />
          </ButtonGroup>
        </Flex>
        <Divider />
      </Flex>
    </Flex>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Box paddingX={8} paddingY={8}>
          <Header />
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/core" element={<CorePage />} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
