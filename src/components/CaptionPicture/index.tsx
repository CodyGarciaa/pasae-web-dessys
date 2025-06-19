import { Box, Flex, Button, Heading, IconButton, Text, Image } from 'gestalt';

export interface CaptionPictureCard {
  image: string;
  date: string;
  title: string;
  desc: string;
  link: string;
}

interface CaptionPictureProps {
  heading: string;
  buttonText: string;
  cards: CaptionPictureCard[];
}

const CaptionPicture = ({ heading, buttonText, cards }: CaptionPictureProps) => (
  <Flex direction="row" alignItems="center" justifyContent="between" gap={8}>
    {/* Left: Text and Arrows */}
    <Box maxWidth={350}>
      <Heading size="700">{heading}</Heading>
      <Box marginTop={4}>
        <Button text={buttonText} color="white" size="lg" />
      </Box>
      <Box marginTop={6} display="flex" alignItems="center">
        <IconButton
          icon="arrow-back"
          accessibilityLabel="Scroll gallery left"
          size="lg"
          bgColor="transparent"
          onClick={() => {
            const gallery = document.getElementById('caption-picture-gallery');
            if (gallery) gallery.scrollBy({ left: -400, behavior: 'smooth' });
          }}
        />
        <IconButton
          icon="arrow-forward"
          accessibilityLabel="Scroll gallery right"
          size="lg"
          bgColor="transparent"
          onClick={() => {
            const gallery = document.getElementById('caption-picture-gallery');
            if (gallery) gallery.scrollBy({ left: 400, behavior: 'smooth' });
          }}
        />
      </Box>
    </Box>
    {/* Right: Gallery of Cards */}
    <Box
      flex="grow"
      overflow="auto"
      id="caption-picture-gallery"
      dangerouslySetInlineStyle={{
        __style: { overflowX: 'auto', scrollBehavior: 'smooth' },
      }}
    >
      <Flex direction="row" gap={6} wrap={false}>
        {cards.map((card, idx) => (
          <Box
            key={idx}
            rounding={4}
            width={300}
            minHeight={420}
            padding={4}
            display="flex"
            direction="column"
            justifyContent="between"
            color="default"
            borderStyle="shadow"
          >
            <Box rounding={4} overflow="hidden" height={180} marginBottom={4}>
              <Image
                alt={card.title}
                naturalHeight={180}
                naturalWidth={300}
                fit="cover"
                src={card.image}
              />
            </Box>
            <Text size="200" color="subtle">
              {card.date}
            </Text>
            <Box marginTop={2} marginBottom={2}>
              <Text weight="bold" size="400">
                {card.title}
              </Text>
            </Box>
            <Text size="300">{card.desc}</Text>
            <Box marginTop={4}>
              <Text color="subtle" weight="bold" size="200">
                <a
                  href={card.link}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  ↗ Read the full article
                </a>
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  </Flex>
);

export default CaptionPicture;
