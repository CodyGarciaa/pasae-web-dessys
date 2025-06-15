import {Box, Flex, Icon, Button, ButtonGroup, Divider, BannerUpsell, BannerOverlay, BannerCallout, Layer, ModalAlert, Text, CompositeZIndex, FixedZIndex} from 'gestalt'
import { Fragment, useState } from 'react';

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
          <Flex direction="column" gap={{ column: 4, row: 0 }}>
            <Flex alignItems="center" justifyContent="start">
              {/* Header / Top Nav Bar */}
              <Icon
                accessibilityLabel=""
                color="brandPrimary"
                icon="pinterest"
                size={32}
              />
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
            </Box>
          </Flex>
        </Flex>
      </Box>
      {showComponent ? (
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
              As you’ll notice, the site may look familiar to Pinterest’s pages! That’s 
              because it was redesigned as a personal learning project using their 
              open-source Gestalt design system.
              <br />
              <br />
              It is not officially affiliated with or endorsed by Pinterest. This project 
              was created purely for educational purposes to explore design systems in practice.
            </Text>
          </ModalAlert>
        </Layer>
      ) : null}
    </Fragment>
  )
}

export default App
