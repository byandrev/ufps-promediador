import { createContext, useEffect, useState } from "react";
import { getSubjects, saveSubjects } from "../utils/localStorage.js";

export const SubjectsContext = createContext();

export default function SubjectsProvider({ children }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const subjectsSaved = getSubjects();
    if (subjectsSaved != null && subjectsSaved.length > 0) setSubjects(subjectsSaved);
  }, []);

  useEffect(() => {
    saveSubjects(subjects);
  }, [subjects]);

  const value = {
    subjects,
    setSubjects
  };

  return <SubjectsContext.Provider value={value}>{children}</SubjectsContext.Provider>;
}
