import { Tbody } from "@chakra-ui/react";
import TableSubjectsItem from "./TableSubjectsItem.jsx";

function TableSubjectsBody({ subjects }) {
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
