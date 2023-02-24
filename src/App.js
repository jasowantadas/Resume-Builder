import FirstPg from "./firstPage";
import { AppBar, Typography } from "@mui/material";
import CameraFrontIcon from "@mui/icons-material/CameraFront";
import { Route, Routes } from "react-router-dom";
import Start from "./startpg";
import { useNavigate } from "react-router-dom";
//import Templatee from "./components/templatee";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        position="relative"
        sx={{
          p: 2,
          backgroundColor: "#333333",
          borderRadius: "14px",
          color: "white",
        }}
      >
        <Typography
          onClick={() => navigate("/")}
          variant="h3"
          sx={{ fontSize: "30px" }}
        >
          {" "}
          <CameraFrontIcon
            position="absolute"
            sx={{
              fontSize: "21px",
              marginRight: "10px",
              marginTop: "10px",
              color: "white",
            }}
          />
          CV BUILD
        </Typography>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<FirstPg />} />
        <Route exact path="/start" element={<Start />} />
      </Routes>
    </>
  );
}

export default App;
