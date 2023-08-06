import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
// import prescriptionReq from "/public/Static/rx.webp";
import Image from "next/image";
const PrescriptionRequired = () => {
  return (
    <Grid container item xs={12}>
      <Stack direction="row" alignItems="center">
        {/* <Image src={prescriptionReq} width={20} height={14} /> */}
        <p className="is-size-7 my-4 mx-2">Prescription Required</p>
      </Stack>
    </Grid>
  );
};

export default PrescriptionRequired;
