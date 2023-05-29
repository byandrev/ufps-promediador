import { Tbody, Td, Tr } from "@chakra-ui/react";
import useSubjects from "../hooks/useSubjects.js";
import TableSubjectsItem from "./TableSubjectsItem.jsx";

function TableSubjectsBody({ subjects }) {
  const { findSubject } = useSubjects();

  return (
    <Tbody>
      {subjects && subjects.length > 0 && (
        <>
          {subjects.map((subject) => (
            <TableSubjectsItem key={subject.id} subject={subject} />
          ))}
        </>
      )}
    </Tbody>
  );
}

export default TableSubjectsBody;
