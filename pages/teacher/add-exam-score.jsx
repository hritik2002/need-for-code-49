import React from "react";
import { useRouter } from "next/router";
import { Stack, Button } from "@mui/material";
import { Teacher } from "../../components/teacher";

const AddExamScore = () => {
  const router = useRouter();
  const [teacherDetail, setTeacherDetail] = React.useState({});
  const [subjectScore, setSubjectScore] = React.useState([{}]);

  React.useEffect(() => {
    const { student_id, teacher_id } = router.query;

    // const res = API_METHOD_GET({
    //   url: GET_TEACHER_DETAIL,
    //   params: { id : teacher_id },
    // });
    setTeacherDetail(
      new Teacher({
        grade: "X",
        division: "A",
        students: ["1", 2, 3, 4, 5, 6],
        subjects: [
          {
            id: "1",
            name: "Maths",
          },
          {
            id: "2",
            name: "Science",
          },
          {
            id: "3",
            name: "History",
          },
        ],
      })
    );
  }, []);

  const addSubjectName = (id, index) => {
    let temp = subjectScore;
    temp[index].subject_id = id;

    setSubjectScore(temp);
  };
  const addSubjectScore = (score, index) => {
    let temp = subjectScore;
    temp[index].marks_obtained = score;

    setSubjectScore(temp);
  };
  const addTotalMarks = (total, index) => {
    let temp = subjectScore;
    temp[index].total_marks = total;

    setSubjectScore(temp);
  };
  const addMoreSubjectScore = () => {
    let temp = [...subjectScore];
    temp.push({});
    setSubjectScore(temp);
  };
  const handleDelete = (index) => {
    let temp = subjectScore.filter((val, i) => i != index);
    setSubjectScore(temp);
  };
  const handleSubmit = (notify) => {
    if (notify) console.log(subjectScore, "subject");
    else console.log(subjectScore, "subject along with notification");
  };

  return (
    <Stack
      sx={{ maxWidth: "1200px", margin: "0 auto", alignItems: "flex-start" }}
    >
      {subjectScore.map((subject, index) => (
        <Stack
          direction="row"
          sx={{
            margin: "10px 0",
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <select value={subject?.subject_id} onChange={(e) => addSubjectName(e.target.value, index)}>
            <option>Select Subject</option>
            {teacherDetail.subjects?.map((subject_object) => (
              <option key={subject_object.id} value={subject_object.id}>
                {subject_object.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            onChange={(e) => addSubjectScore(e.target.value, index)}
            value={subject.marks_obtained}
            placeholder="Marks obtained"
          />
          <input
            type="text"
            onChange={(e) => addTotalMarks(e.target.value, index)}
            value={subject.total_marks}
            placeholder="Total marks"
          />
          <Button onClick={() => handleDelete(index)}>Remove</Button>
        </Stack>
      ))}

      <Button variant={"outlined"} onClick={addMoreSubjectScore}>
        Add more subject score
      </Button>

      <Button onClick={() => handleSubmit(false)}>Submit </Button>
      <Button onClick={() => handleSubmit(true)}>Submit notify parent</Button>
    </Stack>
  );
};

export default AddExamScore;
