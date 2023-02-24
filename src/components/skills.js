import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Grid,
  IconButton,
  TextField,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";
import { addSkillsDetails, delSkills, addSkills } from "../redux/form";
function Skills() {
  const skillsAll = useSelector((state) => state.FormReducer.Skills);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <Grid container>
        <Grid item>
          {skillsAll.length !== 0
            ? skillsAll.map((i) => {
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
                            addSkillsDetails({
                              id: i.id,
                              skillName: e.target.value,
                              level: i.level,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Skills"
                        variant="outlined"
                        value={i.skillName}
                        sx={{ m: 1 }}
                      />
                      <Typography component="legend">Level</Typography>
                      <Rating
                        name="simple-controlled"
                        value={Number(i.level)}
                        onChange={(e) => {
                          dispatch(
                            addSkillsDetails({
                              id: i.id,
                              skillName: i.skillName,
                              level: Number(e.target.value),
                            })
                          );
                        }}
                      />
                      {console.log(skillsAll)}
                      <br></br>
                      <IconButton
                        sx={{ color: "red" }}
                        onClick={() => {
                          dispatch(delSkills(i.id));
                        }}
                      >
                        <DeleteForeverIcon sx={{ color: "red" }} />
                      </IconButton>
                    </CardContent>
                  </>
                );
              })
            : console.log()}
          <IconButton
            onClick={() => {
              dispatch(addSkills());
              console.log(skillsAll);
            }}
          >
            <AddCircleIcon sx={{ color: "green" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Skills;
