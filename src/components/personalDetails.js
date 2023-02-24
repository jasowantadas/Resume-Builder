import { Grid, CardContent, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addPersonalDetails } from "../redux/form";
function PersonalDetails() {
  const personalAll = useSelector((state) => state.FormReducer.PersonalDetails);
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
            <TextField
              fullWidth
              onChange={(e) => {
                dispatch(
                  addPersonalDetails({
                    name: e.target.value,
                    address: personalAll.address,
                    email: personalAll.email,
                    phone: personalAll.phone,
                    linkedin: personalAll.linkedin,
                  })
                );
                console.log(personalAll);
              }}
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={personalAll.name}
              sx={{ m: 1 }}
            />
            <TextField
              fullWidth
              onChange={(e) => {
                dispatch(
                  addPersonalDetails({
                    name: personalAll.name,
                    address: e.target.value,
                    email: personalAll.email,
                    phone: personalAll.phone,
                    linkedin: personalAll.linkedin,
                  })
                );
              }}
              multiline
              rows={5}
              size="small"
              id="outlined-basic"
              label="Address"
              variant="outlined"
              value={personalAll.address}
              sx={{ m: 1 }}
            />
            <TextField
              fullWidth
              onChange={(e) => {
                dispatch(
                  addPersonalDetails({
                    name: personalAll.name,
                    address: personalAll.address,
                    email: e.target.value,
                    phone: personalAll.phone,
                    linkedin: personalAll.linkedin,
                  })
                );
              }}
              size="small"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={personalAll.email}
              sx={{ m: 1 }}
            />
            <TextField
              fullWidth
              onChange={(e) => {
                dispatch(
                  addPersonalDetails({
                    name: personalAll.name,
                    address: personalAll.address,
                    email: personalAll.email,
                    phone: e.target.value,
                    linkedin: personalAll.linkedin,
                  })
                );
              }}
              size="small"
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={personalAll.phone}
              sx={{ m: 1 }}
            />
            <TextField
              fullWidth
              onChange={(e) => {
                dispatch(
                  addPersonalDetails({
                    name: personalAll.name,
                    address: personalAll.address,
                    email: personalAll.email,
                    phone: personalAll.phone,
                    linkedin: e.target.value,
                  })
                );
              }}
              size="small"
              id="outlined-basic"
              label="Linkedin"
              variant="outlined"
              value={personalAll.linkedin}
              sx={{ m: 1 }}
            />
            {console.log(personalAll)}
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
}

export default PersonalDetails;
