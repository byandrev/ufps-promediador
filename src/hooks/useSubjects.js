import { useContext } from "react";
import { SubjectsContext } from "../context/SubjectsContext.jsx";

function useSubjects() {
  const { subjects, setSubjects } = useContext(SubjectsContext);

  const addSubject = (subject) => {
    if (!subject) return;

    setSubjects((initialSubjects) => {
      return initialSubjects.concat(subject);
    });
  };

  const findSubject = (id) => {
    return subjects.find((s) => s.id === id);
  };

  const updateSubject = (id, newVal) => {
    setSubjects((initialVal) => {
      return initialVal.map((s) => {
        if (s.id === id) {
          return { ...s, ...newVal };
        } else return s;
      });
    });
  };

  const deleteSubject = (id) => {
    setSubjects((initialVal) => {
      return initialVal.filter((s) => s.id !== id);
    });
  };

  return {
    subjects,
    addSubject,
    findSubject,
    updateSubject,
    deleteSubject
  };
}

export default useSubjects;
