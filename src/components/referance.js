import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid, CardContent, TextField, IconButton } from "@mui/material";
import { addReferance, addReferanceDetails, delReferance } from "../redux/form";
function Referance() {
  const referanceAll = useSelector((state) => state.FormReducer.Referance);
  const dispatch = useDispatch();
  return (
    <>
      <Grid container>
        <Grid item>
          {referanceAll.length !== 0
            ? referanceAll.map((i) => {
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
                            addReferanceDetails({
                              id: i.id,
                              referanceName: e.target.value,
                              jobTitle: i.jobTitle,
                              companyName: i.companyName,
                              email: i.email,
                              phone: i.phone,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Referee's Name"
                        variant="outlined"
                        value={i.referanceName}
                        sx={{ m: 1 }}
                      />{" "}
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addReferanceDetails({
                              id: i.id,
                              referanceName: i.referanceName,
                              jobTitle: e.target.value,
                              companyName: i.companyName,
                              email: i.email,
                              phone: i.phone,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Job Title"
                        variant="outlined"
                        value={i.jobTitle}
                        sx={{ m: 1 }}
                      />{" "}
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addReferanceDetails({
                              id: i.id,
                              referanceName: i.referanceName,
                              jobTitle: i.jobTitle,
                              companyName: e.target.value,
                              email: i.email,
                              phone: i.phone,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Company Name"
                        variant="outlined"
                        value={i.companyName}
                        sx={{ m: 1 }}
                      />{" "}
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addReferanceDetails({
                              id: i.id,
                              referanceName: i.referanceName,
                              jobTitle: i.jobTitle,
                              companyName: i.companyName,
                              email: e.target.value,
                              phone: i.phone,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={i.email}
                        sx={{ m: 1 }}
                      />{" "}
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addReferanceDetails({
                              id: i.id,
                              referanceName: i.referanceName,
                              jobTitle: i.jobTitle,
                              companyName: i.companyName,
                              email: i.email,
                              phone: e.target.value,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        value={i.phone}
                        sx={{ m: 1 }}
                      />
                      <IconButton
                        sx={{ color: "red" }}
                        onClick={() => {
                          dispatch(delReferance(i.id));
                        }}
                      >
                        <DeleteForeverIcon sx={{ color: "red" }} />
                      </IconButton>
                      {console.log(referanceAll)}
                    </CardContent>
                  </>
                );
              })
            : console.log()}
          <IconButton
            onClick={() => {
              dispatch(addReferance());
            }}
          >
            <AddCircleIcon sx={{ color: "green" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Referance;
