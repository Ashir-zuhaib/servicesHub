import { Stack } from "@mui/material";
import CustomModal from "../../../shared/Modal/CustomModal";
import PrescriptionrequiredTitle from "../../../shared/PrescriptionRequired/PrescriptionrequiredTitle";
import UploadPrescription from "../../../shared/UploadPrescription/UploadPrescriptionLabel";
import UploadPrescriptionModalContent from "../../../shared/UploadPrescription/PrescriptionModalBody/UploadPrescriptionModalContent";
import BottomSheet from "../../../shared/BottomSheet/BottomSheet";

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
      justifyContent="space-between"
    >
      <div>
        <PrescriptionrequiredTitle />
        <p className="is-size-7">
          Upload Prescription to complete your order process
        </p>
      </div>
      <div>
        <CustomModal
          ModalLabelComponent={<UploadPrescription />}
          ModalBodyToPassDown={<UploadPrescriptionModalContent />}
          ModalWidth="800px"
          ModalTitle="Upload Prescription"
        />
         <BottomSheet
            labelToPass={<UploadPrescription />}
            BodyToPass={<UploadPrescriptionModalContent />}
            BottomSheetTitle="Upload Prescription"
          />
      </div>
    </Stack>
  );
};

export default PrescriptionReqContainer;
