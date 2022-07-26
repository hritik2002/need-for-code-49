import { Exam } from "./exam";
class Student {
  constructor(student) {
    this.id = student.id;
    this.name = student.name;
    this.age = student.age;
    this.phone = student.phone;
    this.parent_phone = student.parent_phone;
    this.division = student.division;
    this.grade = student.grade;
    this.roll_number = student.roll_number;
    this.exams = student.exams?.map((exam) => new Exam(exam));
  }
}

export { Student };

