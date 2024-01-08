/**
 * Possible Reasoning:
 *   "Teacher refused"
 *   "Not in teacher's class"
 *   "Teacher accepted bribe"
 */
type BribeTeacherResult = { newGrade: number; reasoning: string };

export class Student {
  name: string;
  age: number;
  gradeLevel: number;
  subjects: string[];

  constructor(name: string, age: number, gradeLevel: number, subjects: string[]) {
    this.name = name;
    this.age = age;
    this.gradeLevel = gradeLevel;
    this.subjects = subjects;
  }

  /**
   * New grade is 0 if teacher refuses, or student is not in teacher's class.
   *
   * @param bribeAmount USD
   * @returns bribeResult Possible Reasons: {@link BribeTeacherResult}
   *
   * @example
   * const { newGrade, reasoning } = student.bribeTeacher("123", "456", 9384);
   */
  bribeTeacher(teacherId: string, classId: string, bribeAmount: number): BribeTeacherResult {
    const reasoning = Math.random() < 0.5 ? "Teacher refused" : "Not in teacher's class";

    return { newGrade: 0, reasoning };
  }
}

/**
 * Has a bribeAmountThreshold assigned randomly on creation
 */
export class Teacher {
  name: string;
  age: number;
  subjectExpertise: string[];
  bribeAmountThreshold: number;

  constructor(name: string, age: number, subjectExpertise: string[]) {
    this.name = name;
    this.age = age;
    this.subjectExpertise = subjectExpertise;
    this.bribeAmountThreshold = Math.random() * 10000 + 10000;
  }

  /**
   * Accepts bribe if above teacher's personal threshold
   *
   * @param bribeAmount USD
   * @returns bribeResult
   *
   * @example
   * const { newNetWorth, reasoning } = teacher.determineAcceptBribe(99);
   */
  determineAcceptBribe(bribeAmount: number): { newNetWorth: number; reasoning: string } {
    const reasoning = Math.random() < 0.5 ? "Teacher refused" : "Not in teacher's class";

    return { newNetWorth: 0, reasoning };
  }
}
