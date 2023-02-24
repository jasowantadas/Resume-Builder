import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { IconButton, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Container } from "@mui/system";

function FirstPg() {
  const navigate = useNavigate();
  return (
    <div>
      <main>
        <Container maxWidth="sm">
          <Typography
            align="center"
            variant="h1"
            sx={{ marginTop: "25px" }}
            color="textPrimary"
          >
            Get Started...
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            – You’ve just graduated and you’re ready to take on the world. But
            where do you start? The Job Search of course and that one document
            that can make or break your chances of Landing you your dream Job is
            your Resume, CV, and Cover Letter. Download free Resume/CV now
            below.
          </Typography>
          <Box align="center">
            <IconButton
              onClick={() => navigate("/start")}
              sx={{ color: "#f97407" }}
            >
              <ArrowCircleRightRoundedIcon
                sx={{ fontSize: "100px", color: "#f97407" }}
              />
            </IconButton>
          </Box>
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export default FirstPg;
