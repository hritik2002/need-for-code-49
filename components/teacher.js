import { Student } from "./student";
import axios from "axios";
import { API_METHOD_GET } from "./api.calls";

class Teacher {
  constructor(teacher) {
    this.id = teacher.id;
    this.grade = teacher.grade;
    this.division = teacher.division;
    this.subjects = teacher.subjects;
    this.students = teacher.students?.map((student) => {
      // const { id } = student;
      // const res = API_METHOD_GET({
      //   url: GET_STUDENT_DETAIL,
      //   params: { id },
      // });

      return new Student({
        name: "Hrtik Sharma",
        id: "1",
        roll_number: "64",
      });
    });
  }
}

export { Teacher };
