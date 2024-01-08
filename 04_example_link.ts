import { Student, Teacher } from "./04_sdk";

function main() {
  const studentJames = new Student("James", 15, 12, ["Math", "English"]);
  const teacherJamie = new Teacher("Jamie", 37, ["Math", "Calculus"]);
}

main();

export {};
