import { useSelector, useDispatch } from "react-redux";
import { TextField, CardContent, Grid } from "@mui/material";
import { addObjective } from "../redux/form";
function Objective() {
  const objectiveAll = useSelector((state) => state.FormReducer.Objective);
  const dispatch = useDispatch();
  return (
    <>
      <Grid container>
        <Grid item>
          <CardContent
            sx={{
              margin: "5px",
              backgroundColor: "#eee",
              borderRadius: "20px",
              boxShadow: "0 8px 8px -4px lightblue",
            }}
          >
            {" "}
            <TextField
              fullWidth
              onChange={(e) => {
                dispatch(
                  addObjective({
                    objective: e.target.value,
                  })
                );
              }}
              multiline
              rows={5}
              size="small"
              id="outlined-basic"
              label="Summary"
              variant="outlined"
              value={objectiveAll.objective}
              sx={{ m: 1 }}
            />
          </CardContent>
          {console.log(objectiveAll)}
        </Grid>
      </Grid>
    </>
  );
}

export default Objective;
