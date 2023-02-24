import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Grid, CardContent, TextField, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { addProjectDetails, addProjects, delProjects } from "../redux/form";
function Projects() {
  const projectsAll = useSelector((state) => state.FormReducer.Projects);
  const dispatch = useDispatch();
  return (
    <>
      <Grid container>
        <Grid item>
          {projectsAll.length !== 0
            ? projectsAll.map((i) => {
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
                            addProjectDetails({
                              id: i.id,
                              title: e.target.value,
                              description: i.description,
                              thingsUsed: i.thingsUsed,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        value={i.companyName}
                        sx={{ m: 1 }}
                      />
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addProjectDetails({
                              id: i.id,
                              title: i.title,
                              description: e.target.value,
                              thingsUsed: i.thingsUsed,
                            })
                          );
                        }}
                        multiline
                        rows={5}
                        size="small"
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        value={i.details}
                        sx={{ m: 1 }}
                      />
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addProjectDetails({
                              id: i.id,
                              title: i.title,
                              description: i.description,
                              thingsUsed: e.target.value,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Things Used(with ',' in between)"
                        variant="outlined"
                        value={i.companyName}
                        sx={{ m: 1 }}
                      />
                      <br></br>
                      <IconButton
                        sx={{ color: "red" }}
                        onClick={() => {
                          dispatch(delProjects(i.id));
                        }}
                      >
                        <DeleteForeverIcon sx={{ color: "red" }} />
                      </IconButton>
                      {console.log(projectsAll)}
                    </CardContent>
                  </>
                );
              })
            : console.log()}
          <IconButton
            onClick={() => {
              dispatch(addProjects());
            }}
          >
            <AddCircleIcon sx={{ color: "green" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
