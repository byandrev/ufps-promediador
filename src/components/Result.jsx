import { Badge, Box, Text } from "@chakra-ui/react";
import useSubjects from "../hooks/useSubjects.js";
import { useEffect, useState } from "react";

function Result() {
  const { subjects } = useSubjects();
  const [def, setDef] = useState(0);

  const getDef = () => {
    let credits = 0,
      notes = 0;

    if (!subjects) return;

    subjects.forEach((subject) => {
      if (subject.enabled) {
        credits += parseFloat(subject.credits);
        notes += (parseFloat(subject.def) || 0) * parseFloat(subject.credits);
      }
    });

    const ans = (notes / credits).toFixed(2);
    if (!isNaN(ans)) setDef(ans);
  };

  useEffect(() => {
    getDef();
  }, [subjects]);

  return (
    <Box>
      <Text align="right">
        Tu promedio es de{" "}
        <Badge fontSize=".9em" px={2}>
          {def}
        </Badge>
      </Text>
    </Box>
  );
}

export default Result;
