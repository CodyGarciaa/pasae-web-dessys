import { Box, Image, Text } from 'gestalt';
import type { Person } from '../../data/people';

interface PersonCardProps {
  person: Person;
}

function PersonCard({ person }: PersonCardProps) {
  return (
    <Box
      color="secondary"
      padding={3}
      rounding={4}
      borderStyle="sm"
      height="100%"
    >
      <Box display="flex" direction="column" alignItems="center" marginTop={2}>
        <Box
          width={120}
          height={120}
          rounding="circle"
          overflow="hidden"
          borderStyle="sm"
          marginBottom={2}
        >
          <Image
            src={person.imageSrc}
            alt={`${person.name}'s photo`}
            naturalWidth={120}
            naturalHeight={120}
            fit="cover"
          />
        </Box>
        <Text weight="bold" align="center">
          {person.name}
        </Text>
      </Box>
    </Box>
  );
}

export default PersonCard; 