import { useState } from "react";
import {
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
} from "@mui/material";
import PersonalDetails from "./components/personalDetails";
import Education from "./components/education";
import Experiance from "./components/experiance";
import Skills from "./components/skills";
import Objective from "./components/objective";
import Referance from "./components/referance";
import Projects from "./components/projects";
//import CoverLetter from "./components/coverLetter";
//import Templatee from "./components/templatee";
import Download from "./components/download";
const steps = [
  {
    label: "Personal Details",
    description: <PersonalDetails />,
  },
  {
    label: "Education",
    description: <Education />,
  },
  {
    label: "Experience",
    description: <Experiance />,
  },
  {
    label: "Skills",
    description: <Skills />,
  },
  {
    label: "Summary",
    description: <Objective />,
  },
  {
    label: "Referance",
    description: <Referance />,
  },
  {
    label: "Projects",
    description: <Projects />,
  },
  {
    label: "Download CV",
    description: (
      <>
        <Download />
      </>
    ),
  },
];
function Start() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, marginLeft: "30px" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Box>{step.description}</Box>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, borderRadius: "100px" }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, borderRadius: "100px" }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <Button
            onClick={handleBack}
            sx={{ mt: 1, mr: 1, borderRadius: "100px" }}
          >
            Back
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default Start;
