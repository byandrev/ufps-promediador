import { NumberInput, NumberInputField } from "@chakra-ui/react";

function InputExam({ value, setValue, isEditable = false }) {
  const handleChange = (n) => setValue(n);

  return (
    <NumberInput disabled={!isEditable} max={5} min={0} value={value} onChange={handleChange}>
      <NumberInputField minW="40px" p={0} textAlign="center" />
    </NumberInput>
  );
}

export default InputExam;
