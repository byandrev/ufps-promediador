import { useCallback, useEffect, useState } from "react";
import { Button, Checkbox, Flex, Td, Tr } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import InputExam from "./InputExam.jsx";
import useSubjects from "../hooks/useSubjects.js";
import { getDefinitive } from "../utils/calculations.js";

function TableSubjectsItem({ subject }) {
  const [isEditable, setIsEditable] = useState(false);
  const [examOne, setExamOne] = useState(subject.exams[0] || "");
  const [examTwo, setExamTwo] = useState(subject.exams[1] || "");
  const [examThree, setExamThree] = useState(subject.exams[2] || "");
  const [finalExam, setFinalExam] = useState(subject.finalExam || "");
  const [def, setDef] = useState("");
  const { updateSubject, deleteSubject } = useSubjects();

  const handleGetDef = useCallback(() => {
    let ans = getDefinitive(examOne, examTwo, examThree, finalExam);
    setDef(ans);
  }, [examOne, examTwo, examThree, finalExam]);

  const handleToggleEnabled = () => {
    updateSubject(subject.id, {
      enabled: !subject.enabled
    });
  };

  const handleClickDelete = () => {
    deleteSubject(subject.id);
  };

  const handleClickEdit = () => {
    setIsEditable(true);
  };

  const handleClickSave = () => {
    setIsEditable(false);
    handleGetDef();
    updateSubject(subject.id, {
      exams: [examOne, examTwo, examThree],
      finalExam,
      def
    });
  };

  useEffect(() => {
    handleGetDef();
  }, [handleGetDef]);

  return (
    <Tr>
      <Td>
        <Checkbox isChecked={subject.enabled} onChange={handleToggleEnabled} />
      </Td>
      <Td>{subject.name}</Td>
      <Td>{subject.credits}</Td>

      <Td>
        <InputExam value={examOne} setValue={setExamOne} isEditable={isEditable} />
      </Td>

      <Td>
        <InputExam value={examTwo} setValue={setExamTwo} isEditable={isEditable} />
      </Td>

      <Td>
        <InputExam value={examThree} setValue={setExamThree} isEditable={isEditable} />
      </Td>

      <Td>
        <InputExam value={finalExam} setValue={setFinalExam} isEditable={isEditable} />
      </Td>

      <Td>{def}</Td>
      <Td>
        <Flex gap={2}>
          <Button variant="outline" colorScheme="red" onClick={handleClickDelete}>
            <DeleteIcon />
          </Button>
          {!isEditable ? (
            <Button variant="outline" colorScheme="blue" onClick={handleClickEdit}>
              <EditIcon />
            </Button>
          ) : (
            <Button colorScheme="green" onClick={handleClickSave}>
              <CheckIcon />
            </Button>
          )}
        </Flex>
      </Td>
    </Tr>
  );
}

export default TableSubjectsItem;
