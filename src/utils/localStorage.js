export function saveSubjects(s) {
  localStorage.setItem("subjects", JSON.stringify(s));
}

export function getSubjects() {
  return JSON.parse(localStorage.getItem("subjects"));
}
