import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
// import prescriptionReq from "/public/Static/rx.webp";
import Image from "next/image";

const PrescriptionrequiredTitle = () => {
  return (
    <Grid container item xs={12}>
      <Stack direction="row" alignItems="center">
        {/* <Image src={prescriptionReq} width={30} height={22} /> */}
        <p className="is-size-6 my-2 mx-2 has-text-weight-semibold">
          Prescription Required
        </p>
      </Stack>
    </Grid>
  );
};

export default PrescriptionrequiredTitle;
