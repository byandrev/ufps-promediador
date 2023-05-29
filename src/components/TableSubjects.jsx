import { Box, Button, Flex, Heading, Table, Text } from "@chakra-ui/react";
import useSubjects from "../hooks/useSubjects.js";
import TableSubjectsHead from "./TableSubjectsHead.jsx";
import TableSubjectsBody from "./TableSubjectsBody.jsx";
import { AddIcon } from "@chakra-ui/icons";

function TableSubjects({ openModal }) {
  const { subjects } = useSubjects();

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Heading as="h2" size="md" mb={6}>
          Mis materias
        </Heading>

        <Button colorScheme="green" onClick={openModal} size="sm" leftIcon={<AddIcon />}>
          Añadir
        </Button>
      </Flex>
      <Table>
        <TableSubjectsHead />
        <TableSubjectsBody subjects={subjects} />
      </Table>
    </Box>
  );
}

export default TableSubjects;
