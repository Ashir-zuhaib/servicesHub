import { Stack } from "@mui/material";
import { UploadCloud } from "react-feather";
const UploadPrescription = () => {
  return (
    <Stack
      direction="row"
      className="text-primary-color has-text-weight-semibold underline my-2"
    >
      <UploadCloud size={25} />
      <p className="ml-3 text-primary-color is-size-14">Upload Prescription</p>
    </Stack>
  );
};

export default UploadPrescription;
