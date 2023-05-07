import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
const AddNewAddressLabel = () => {
  return (
    <Button
      variant="text"
      startIcon={
        <AddCircleOutlineIcon className="text-dawaai-blue" fontSize="large" />
      }
      className="text-dawaai-blue hover-no-bg is-capitalized"
    >
      Add New Address
    </Button>
  );
};

export default AddNewAddressLabel;
