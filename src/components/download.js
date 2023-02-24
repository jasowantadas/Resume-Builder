import Templatee from "./templatee";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { Button } from "@mui/material";
//import { useReactToPrint } from "react-to-print";

function Download() {
  let componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <Button variant="contained">Download</Button>}
        content={() => componentRef.current}
        scale={0.32}
      />
      <div ref={componentRef} style={{ imageResolution: "300dpi" }}>
        <Templatee ref={componentRef} />
      </div>
    </div>
  );
}

export default Download;
