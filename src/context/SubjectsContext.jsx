import { createContext, useState } from "react";

export const SubjectsContext = createContext();

export default function SubjectsProvider({ children }) {
  const [subjects, setSubjects] = useState([]);

  const value = {
    subjects,
    setSubjects
  };

  return <SubjectsContext.Provider value={value}>{children}</SubjectsContext.Provider>;
}
