import { Text, Box } from "gestalt";
import type { SlideProps } from "../../../types/types";

export function Slide({ imageSrc, title, description }: SlideProps) {
    return (
        <Box
            width="100%"
            height="100%"
            position="relative"
            dangerouslySetInlineStyle={{
                __style: {
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }
            }}
        >
            <Box
                position="absolute"
                top
                left
                right
                bottom
                dangerouslySetInlineStyle={{
                    __style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }
                }}
            >
                <Box
                    position="absolute"
                    top
                    left
                    right
                    bottom
                    display="flex"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    padding={4}
                >
                    <Text size="600" weight="bold" color="light" align="center">
                        {title}
                    </Text>
                    <Box marginTop={2}>
                        <Text size="400" color="light" align="center">
                            {description}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}