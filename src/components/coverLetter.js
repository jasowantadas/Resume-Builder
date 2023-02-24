import { useSelector, useDispatch } from "react-redux";
import { TextField, CardContent, Grid } from "@mui/material";
import { addCoverLetter } from "../redux/form";
function CoverLetter() {
  const coverLetterAll = useSelector((state) => state.FormReducer.CoverLetter);
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
                  addCoverLetter({
                    coverLetter: e.target.value,
                  })
                );
              }}
              multiline
              rows={5}
              size="small"
              id="outlined-basic"
              label="Cover Letter"
              variant="outlined"
              value={coverLetterAll.coverLetter}
              sx={{ m: 1 }}
            />
          </CardContent>
          {console.log(coverLetterAll)}
        </Grid>
      </Grid>
    </>
  );
}

export default CoverLetter;
