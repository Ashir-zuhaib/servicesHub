import { Stack } from "@mui/material";
import { UploadCloud } from "react-feather";
const UploadPrescriptionLabel = () => {
  return (
    <Stack
      direction="row"
      className="text-dawaai-blue has-text-weight-semibold underline my-2"
    >
      <UploadCloud size={25} />
      <p className="ml-3 text-dawaai-blue is-size-14">Upload Prescription</p>
    </Stack>
  );
};

export default UploadPrescriptionLabel;
