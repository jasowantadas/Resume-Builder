import { useSelector } from "react-redux";

import {
  Container,
  Box,
  Paper,
  Typography,
  LinearProgress,
} from "@mui/material";
import { forwardRef } from "react";
const Templatee = forwardRef((props, ref) => {
  const personalAll = useSelector((state) => state.FormReducer.PersonalDetails);
  const objectiveAll = useSelector((state) => state.FormReducer.Objective);
  //const coverLetterAll = useSelector((state) => state.FormReducer.CoverLetter);
  const educationAll = useSelector((state) => state.FormReducer.Education);
  const experianceAll = useSelector((state) => state.FormReducer.Experiance);
  const projectsAll = useSelector((state) => state.FormReducer.Projects);
  const referanceAll = useSelector((state) => state.FormReducer.Referance);
  const skillsAll = useSelector((state) => state.FormReducer.Skills);

  return (
    <>
      {/*77.5, 109.625 ,585,842, 2480,3508 .#fefeff*/}
      <Box
        container
        sx={{
          backgroundColor: "#fefeff",
          width: 595 * 1.32 * 0.9867,
          height: 842 * 1.32,
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#aeabaa",
            width: "40%",
            height: 3508 * 0.24 * 1.31,
            position: "absolute",
          }}
        >
          {" "}
          <Typography
            align="center"
            sx={{
              color: "white",
              mt: "158.4px",
              fontSize: 80 * 0.24 * 1.32 * 1.32,
              fontWeight: "bold",
              textDecoration: "underline",
              fontFamily: "calibri",
            }}
          >
            Summary
          </Typography>
          <Container sx={{ width: "90%", wordWrap: "break-word" }}>
            <Typography
              align="left"
              sx={{
                color: "white",
                fontSize: 50 * 0.24 * 1.32,
                fontFamily: "calibri",
              }}
              paragraph
            >
              {objectiveAll.objective}
            </Typography>
          </Container>
          {skillsAll.length !== 0 ? (
            <>
              <Typography
                align="center"
                sx={{
                  fontFamily: "calibri",
                  color: "white",

                  fontSize: 80 * 0.24 * 1.32,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Skills
              </Typography>
              <Container sx={{ width: "90%" }}>
                <ul style={{ color: "white", fontSize: "25.35px" }}>
                  {skillsAll.map((i) => {
                    return (
                      <>
                        <li>
                          {" "}
                          <Paper
                            sx={{ backgroundColor: "#aeabaa", mt: "3.168px" }}
                          >
                            <Typography
                              align="left"
                              sx={{
                                fontFamily: "calibri",
                                color: "white",
                                fontSize: 50 * 0.24 * 1.32,
                                fontWeight: "bold",
                              }}
                            >
                              {i.skillName}
                            </Typography>
                            <LinearProgress
                              style={{
                                padding: "0.6336px",
                                backgroundColor: "white",
                              }}
                              variant="determinate"
                              value={Number(i.level) * 20}
                            />
                          </Paper>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </Container>
            </>
          ) : (
            console.log()
          )}
          {referanceAll.length !== 0 ? (
            <>
              <Typography
                align="center"
                sx={{
                  fontFamily: "calibri",
                  color: "white",

                  fontSize: 80 * 0.24 * 1.32,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Referance
              </Typography>

              <Container sx={{ width: "90%" }}>
                <ul style={{ color: "white", fontSize: "25.35px" }}>
                  {/*map for every skills the below paper*/}
                  {referanceAll.map((i) => {
                    return (
                      <>
                        <li>
                          <Typography
                            align="left"
                            sx={{
                              fontFamily: "calibri",
                              color: "white",
                              fontSize: 50 * 0.24 * 1.32,
                              fontWeight: "bold",
                            }}
                          >
                            {i.companyName}
                          </Typography>
                          <Typography
                            align="left"
                            sx={{
                              fontFamily: "calibri",
                              color: "white",
                              fontSize: 50 * 0.24 * 1.32,
                            }}
                          >
                            {i.jobTitle}
                            <br></br>
                            {i.referanceName}
                            <br></br>
                            {i.email}
                            <br></br>
                            {i.phone}
                          </Typography>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </Container>
            </>
          ) : (
            console.log()
          )}
        </Box>
        <Box
          sx={{
            backgroundColor: "#5b9ad4",
            width: "100%",
            mt: "3%",
            position: "absolute",
          }}
        >
          <Typography
            align="center"
            sx={{
              fontFamily: "calibri",
              color: "white",
              fontSize: 170 * 0.24 * 1.32,
              fontWeight: "bold",
            }}
          >
            {personalAll.name}
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "calibri",
              color: "white",
              fontSize: 50 * 0.24 * 1.32,
              mb: "6.336px",
            }}
          >
            {personalAll.address} <br></br> +91 {personalAll.phone} ::&nbsp;
            {personalAll.email} ::&nbsp;{personalAll.linkedin}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "60%",
            mt: "158.4px",
            top: 0,
            right: 0,
          }}
        >
          {/*everything should be inside this box
           */}
          {experianceAll.length !== 0 ? (
            <>
              {" "}
              <Typography
                sx={{
                  fontFamily: "calibri",
                  ml: "6.336px",
                  fontSize: 80 * 0.24 * 1.32,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Experience
              </Typography>
              <ul
                style={{
                  fontSize: "25.35px",
                }}
              >
                {experianceAll.map((i) => {
                  return (
                    <>
                      {" "}
                      <li>
                        <Typography
                          align="left"
                          sx={{
                            fontFamily: "calibri",
                            fontSize: 50 * 0.24 * 1.32,
                            fontWeight: "bold",
                          }}
                        >
                          {i.jobTitle}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontFamily: "calibri",
                            fontSize: 50 * 0.24 * 1.32,
                          }}
                        >
                          {i.companyName}&nbsp;&nbsp;
                          {`${i.startDate.$D}/${i.startDate.$M + 1}/${
                            i.startDate.$y
                          }`}
                          &nbsp;-&nbsp;
                          {`${i.endDate.$D}/${i.endDate.$M + 1}/${
                            i.endDate.$y
                          }`}
                        </Typography>
                        <Typography
                          align="left"
                          color="textSecondary"
                          sx={{
                            fontSize: 50 * 0.24 * 1.32,
                            wordWrap: "break-word",
                            fontFamily: "calibri",
                          }}
                        >
                          {i.details}
                        </Typography>
                      </li>
                    </>
                  );
                })}
              </ul>
            </>
          ) : (
            console.log()
          )}
          {projectsAll.length !== 0 ? (
            <>
              <Typography
                sx={{
                  fontFamily: "calibri",
                  ml: "6.336px",
                  fontSize: 80 * 0.24 * 1.32,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Projects
              </Typography>

              <ul
                style={{
                  fontSize: "25.35px",
                }}
              >
                {projectsAll.map((i) => {
                  return (
                    <>
                      {" "}
                      <li>
                        {" "}
                        <Typography
                          align="left"
                          sx={{
                            fontFamily: "calibri",
                            fontSize: 50 * 0.24 * 1.32,
                            fontWeight: "bold",
                          }}
                        >
                          {i.title}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: 50 * 0.24 * 1.32,
                            wordWrap: "break-word",
                          }}
                        >
                          Things Used-&nbsp;{i.thingsUsed}
                        </Typography>
                        <Typography
                          align="left"
                          color="textSecondary"
                          sx={{
                            fontFamily: "calibri",
                            fontSize: 50 * 0.24 * 1.32,
                            wordWrap: "break-word",
                          }}
                        >
                          {i.description}
                        </Typography>
                      </li>
                    </>
                  );
                })}
              </ul>
            </>
          ) : (
            console.log()
          )}
          {educationAll.length !== 0 ? (
            <>
              <Typography
                sx={{
                  ml: "6.336px",
                  fontFamily: "calibri",
                  fontSize: 80 * 0.24 * 1.32,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Education
              </Typography>

              <ul
                style={{
                  fontSize: "25.35px",
                }}
              >
                {educationAll.map((i) => {
                  return (
                    <>
                      <li>
                        <Typography
                          align="left"
                          sx={{
                            fontFamily: "calibri",
                            fontSize: 50 * 0.24 * 1.32,
                            fontWeight: "bold",
                          }}
                        >
                          {i.course}
                        </Typography>
                        <Typography
                          align="left"
                          color="textSecondary"
                          sx={{
                            fontFamily: "calibri",
                            fontSize: 50 * 0.24 * 1.32,
                            wordWrap: "break-word",
                          }}
                        >
                          {i.school}&nbsp;&nbsp;Score: {i.grade}
                          &nbsp;&nbsp;Passing Year: {i.year}
                        </Typography>
                      </li>
                    </>
                  );
                })}
              </ul>
            </>
          ) : (
            console.log()
          )}
        </Box>
      </Box>
    </>
  );
});

export default Templatee;
