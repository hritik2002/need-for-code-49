import { Stack, Button } from "@mui/material";
import React from "react";

const AdminPage = () => {
  const [addedSubjects, setAddedSubjects] = React.useState([]);
  const [teacherDetail, setTeacherDetail] = React.useState({});
  const subjects_arr = [
    {
      id: "1",
      name: "Maths",
    },
    {
      id: "2",
      name: "English",
    },
    {
      id: "3",
      name: "History",
    },
    {
      id: "4",
      name: "Science",
    },
  ];

  const addTeacher = () => {
    console.log(teacherDetail,subjects, "teacherDetail");
    // post api call
  };

  const toggleSubject = (subject_id) => {
    let temp = [...addedSubjects];
    if (addedSubjects.includes(subject_id)) {
      temp = addedSubjects.filter((val) => val != subject_id);
    } else {
      temp.push(subject_id);
    }

    setAddedSubjects(temp);
  };

  return (
    <Stack>
      <div>
        <input
          value={teacherDetail.name}
          onChange={(e) =>
            setTeacherDetail((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            })
          }
          type="text"
          placeholder="Enter Teacher's name"
        />
        <input
          value={teacherDetail.email}
          onChange={(e) =>
            setTeacherDetail((prev) => {
              return {
                ...prev,
                email: e.target.value,
              };
            })
          }
          type="text"
          placeholder="Enter Email"
        />
        <input
          value={teacherDetail.password}
          onChange={(e) =>
            setTeacherDetail((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            })
          }
          type="text"
          placeholder="Enter Password"
        />
      </div>
      <div>
        <input
          value={teacherDetail.grade}
          onChange={(e) =>
            setTeacherDetail((prev) => {
              return {
                ...prev,
                grade: e.target.value,
              };
            })
          }
          type="text"
          placeholder="Enter Grade"
        />
        <input
          value={teacherDetail.division}
          onChange={(e) =>
            setTeacherDetail((prev) => {
              return {
                ...prev,
                division: e.target.value,
              };
            })
          }
          type="text"
          placeholder="Division"
        />
      </div>
      {subjects_arr.map((subject_obj) => (
        <div key={subject_obj.id} onClick={() => toggleSubject(subject_obj.id)}>
          <input
            type="checkbox"
            checked={addedSubjects.includes(subject_obj.id)}
          />
          <label>{subject_obj.name}</label>
        </div>
      ))}
      <Button onClick={addTeacher}>Add Teacher</Button>
    </Stack>
  );
};

export default AdminPage;
