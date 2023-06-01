import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useSubjects from "../hooks/useSubjects.js";

function FormSubject({ closeModal }) {
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");
  const { addSubject } = useSubjects();

  const handleChangeName = (evt) => setName(evt.target.value);

  const handleChangeCredits = (val) => setCredits(val);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setName("");
    setCredits("");
    closeModal();

    addSubject({
      id: uuid(),
      name,
      credits,
      exams: [null, null, null],
      def: null,
      finalExam: null,
      enabled: true
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            type="text"
            placeholder="Nombre"
            mb={2}
            onChange={handleChangeName}
            value={name}
            required
            autoFocus
          />

          <Grid templateColumns="repeat(2, 1fr)">
            <NumberInput max={10} min={1} onChange={handleChangeCredits} value={credits} required>
              <NumberInputField placeholder="Creditos" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Grid>

          <Button mt={4} colorScheme="teal" type="submit">
            Añadir
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export default FormSubject;
