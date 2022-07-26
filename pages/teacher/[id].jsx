import React from "react";
import { useRouter } from "next/router";
import { Teacher } from "../../components/teacher";
import { Stack, Paper, Typography } from "@mui/material";
const GET_TEACHER_DETAIL = ""; // url

const TeacherPage = () => {
  const router = useRouter();
  const [teacherDetail, setTeacherDetail] = React.useState({});

  const handleClickStudentCard = (student_id) => {
    router.push("/student/" + student_id);
  };

  React.useEffect(() => {
    const { id } = router.pathname;
    console.log(router.pathname);
    // const res = API_METHOD_GET({
    //   url: GET_TEACHER_DETAIL,
    //   params: { id },
    // });
    setTeacherDetail(
      new Teacher({
        grade: "X",
        division: "A",
        students: ["1", 2, 3, 4, 5, 6],
      })
    );
  }, []);

  return (
    <Stack
      sx={{ maxWidth: " 1200px", margin: "0 auto" }}
      direction="row"
      flexWrap={"wrap"}
    >
      {teacherDetail.students?.map((student) => (
        <Paper
          elevation={4}
          sx={{
            width: "33%",
            minHeight: "80px",
            margin: "20px",
            maxWidth: "140px",
            padding: "10px",
            cursor: " pointer",
          }}
          onClick={() => handleClickStudentCard(student.id)}
        >
          <Typography variant="body">Name : {student.name}</Typography>
          <Typography>ROll no. : {student.roll_number}</Typography>
        </Paper>
      ))}
    </Stack>
  );
};

export default TeacherPage;
