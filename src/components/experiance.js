import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Grid, CardContent, TextField, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  addExperiance,
  addExperianceDetails,
  delExperiance,
} from "../redux/form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DateS(props) {
  const dispatch = useDispatch();
  const { i } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          value={i.startDate}
          onChange={(newValue) => {
            dispatch(
              addExperianceDetails({
                id: i.id,
                companyName: i.companyName,
                jobTitle: i.jobTitle,
                startDate: newValue, //`${newValue.$D}/${newValue.$M + 1}/${newValue.$y}`,
                endDate: i.endDate,
                details: i.details,
              })
            );
          }}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              size="small"
              id="outlined-basic"
              label="Start Date"
              variant="outlined"
              sx={{ m: 1 }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
}
function DateE(props) {
  const dispatch = useDispatch();
  const { i } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="End Date"
          value={i.endDate}
          onChange={(newValue) => {
            dispatch(
              addExperianceDetails({
                id: i.id,
                companyName: i.companyName,
                jobTitle: i.jobTitle,
                startDate: i.startDate,
                endDate: newValue, //`${newValue.$D}/${newValue.$M + 1}/${newValue.$y}`,
                details: i.details,
              })
            );
          }}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              size="small"
              id="outlined-basic"
              label="End Date"
              variant="outlined"
              sx={{ m: 1 }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
}

function Experiance() {
  const experianceAll = useSelector((state) => state.FormReducer.Experiance);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container>
        <Grid item>
          {experianceAll.length !== 0
            ? experianceAll.map((i) => {
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
                            addExperianceDetails({
                              id: i.id,
                              companyName: e.target.value,
                              jobTitle: i.jobTitle,
                              startDate: i.startDate,
                              endDate: i.endDate,
                              details: i.details,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Company Name"
                        variant="outlined"
                        value={i.companyName}
                        sx={{ m: 1 }}
                      />
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addExperianceDetails({
                              id: i.id,
                              companyName: i.companyName,
                              jobTitle: e.target.value,
                              startDate: i.startDate,
                              endDate: i.endDate,
                              details: i.details,
                            })
                          );
                        }}
                        size="small"
                        id="outlined-basic"
                        label="Job Title"
                        variant="outlined"
                        value={i.jobTitle}
                        sx={{ m: 1 }}
                      />
                      <DateS i={i} />
                      <DateE i={i} />
                      <TextField
                        fullWidth
                        onChange={(e) => {
                          dispatch(
                            addExperianceDetails({
                              id: i.id,
                              companyName: i.companyName,
                              jobTitle: i.jobTitle,
                              startDate: i.startDate,
                              endDate: i.endDate,
                              details: e.target.value,
                            })
                          );
                        }}
                        multiline
                        rows={5}
                        size="small"
                        id="outlined-basic"
                        label="Details"
                        variant="outlined"
                        value={i.details}
                        sx={{ m: 1 }}
                      />
                      <br></br>
                      <IconButton
                        sx={{ color: "red" }}
                        onClick={() => {
                          dispatch(delExperiance(i.id));
                        }}
                      >
                        <DeleteForeverIcon sx={{ color: "red" }} />
                      </IconButton>
                      {console.log(experianceAll)}
                    </CardContent>
                  </>
                );
              })
            : console.log()}
          <IconButton
            onClick={() => {
              dispatch(addExperiance());
            }}
          >
            <AddCircleIcon sx={{ color: "green" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Experiance;
