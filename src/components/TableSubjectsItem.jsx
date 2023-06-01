import { useCallback, useEffect, useState } from "react";
import { Button, Checkbox, Flex, Td, Tooltip, Tr } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
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
  const noteNeed = ((3 - def) / 0.3).toFixed(2);

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
    <Tr opacity={subject.enabled ? 1 : 0.4}>
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
        <Flex alignItems="center" gap={2}>
          {subject.enabled && (
            <Tooltip label={noteNeed <= 0 ? "Ya pasaste" : noteNeed}>
              <InfoIcon color="#aaa" cursor="pointer" />
            </Tooltip>
          )}
          <InputExam value={finalExam} setValue={setFinalExam} isEditable={isEditable} />
        </Flex>
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
