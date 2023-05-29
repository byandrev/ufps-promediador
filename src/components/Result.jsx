import { Box, Heading, Text } from "@chakra-ui/react";
import useSubjects from "../hooks/useSubjects.js";

function Result() {
  const { subjects } = useSubjects();

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Promedio
      </Heading>
      <Text>Tu promedio es de: 5</Text>
    </Box>
  );
}

export default Result;
