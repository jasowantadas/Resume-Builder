import { Grid, CardContent, TextField, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { addEducation, delEducation, addEducationDetails } from "../redux/form";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Education() {
  const educationAll = useSelector((state) => state.FormReducer.Education);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container>
        <Grid item>
          {educationAll.length !== 0
            ? educationAll.map((i) => {
                return (
                  <>
                    <CardContent
                      sx={{
                        margin: "5px",
                        backgroundColor: "#eee",
                        borderRadius: "20px",
                        boxShadow: "0 8px 8px -4px lightblue",
                      }}
                    >
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addEducationDetails({
                              id: i.id,
                              course: e.target.value,
                              school: i.school,
                              grade: i.grade,
                              year: i.year,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Course/Degree"
                        variant="outlined"
                        value={i.course}
                        sx={{ m: 1 }}
                      />
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addEducationDetails({
                              id: i.id,
                              course: i.course,
                              school: e.target.value,
                              grade: i.grade,
                              year: i.year,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="School/University"
                        variant="outlined"
                        value={i.school}
                        sx={{ m: 1 }}
                      />
                      {console.log("HAHAHAHAHAHAHAHAHAAH")}
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addEducationDetails({
                              id: i.id,
                              course: i.course,
                              school: i.school,
                              grade: e.target.value,
                              year: i.year,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Grade/Score(Please provide Unit)"
                        variant="outlined"
                        value={i.grade}
                        sx={{ m: 1 }}
                      />
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addEducationDetails({
                              id: i.id,
                              course: i.course,
                              school: i.school,
                              grade: i.grade,
                              year: e.target.value,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Year"
                        variant="outlined"
                        value={i.year}
                        sx={{ m: 1 }}
                      />
                      <br></br>
                      <IconButton
                        sx={{ color: "red" }}
                        onClick={() => {
                          dispatch(delEducation(i.id));
                        }}
                      >
                        <DeleteForeverIcon sx={{ color: "red" }} />
                      </IconButton>
                    </CardContent>
                  </>
                );
              })
            : console.log(educationAll)}

          <IconButton
            onClick={() => {
              dispatch(addEducation());
            }}
          >
            <AddCircleIcon sx={{ color: "green" }} />
          </IconButton>
        </Grid>
      </Grid>
      {console.log(educationAll)}
    </>
  );
}

export default Education;
