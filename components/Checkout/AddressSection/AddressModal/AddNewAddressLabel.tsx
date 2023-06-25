import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
const AddNewAddressLabel = () => {
  return (
    <Button
      variant="text"
      startIcon={
        <AddCircleOutlineIcon className="text-primary-color" fontSize="large" />
      }
      className="text-primary-color hover-no-bg is-capitalized"
    >
      Add New Address
    </Button>
  );
};

export default AddNewAddressLabel;
