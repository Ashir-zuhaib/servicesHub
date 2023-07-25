import { Stack } from "@mui/material";
import CustomModal from "../../../shared/Modal/CustomModal";
import PrescriptionrequiredTitle from "../../../shared/PrescriptionRequired/PrescriptionrequiredTitle";

interface prescriptionReq {
  bgColor: String;
  directionRow: Boolean;
}
const PrescriptionReqContainer = ({
  bgColor,
  directionRow,
}: prescriptionReq) => {
  return (
    <Stack
      direction={{ xs: "column", md: directionRow ? "row" : "column" }}
      className={`${bgColor} px-4 py-2 my-2 br-lg  w-100`}
      justifyContent="space-between">
      <div>
        <PrescriptionrequiredTitle />
        <p className="is-size-7">
          Upload Prescription to complete your order process
        </p>
      </div>
      <div>
        <CustomModal
          ModalLabelComponent={<h1>Heading</h1>}
          ModalBodyToPassDown={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              mollitia sequi veniam, eveniet soluta aut odit quam dolorem
              quisquam eum blanditiis laudantium magni accusantium delectus
              culpa assumenda! Placeat, distinctio corrupti!
            </p>
          }
          ModalWidth="800px"
          ModalTitle="Upload Prescription"
        />
      </div>
    </Stack>
  );
};

export default PrescriptionReqContainer;
