import { Grid } from "@mui/material";
import SubHeading from "../../shared/Headings/SubHeading";
import AddNewAddressLabel from "./AddressModal/AddNewAddressLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Address from "./Address";
import AddressModal from "./AddressModal/AddressForm";
import CustomModal from "../../shared/Modal/CustomModal";

const AddressContainer = () => {
  return (
    <div className="bg-gray br-lg px-3 py-2">
      <SubHeading title={"Shipping Address"} />
      <Grid container className="my-1">
        <CustomModal
          ModalLabelComponent={<AddNewAddressLabel />}
          ModalBodyToPassDown={<AddressModal />}
          ModalTitle="Address"
        />
      </Grid>
      <Grid container className="my-1">
        <RadioGroup
          aria-label="gender"
          defaultValue="home"
          name="row-radio-buttons-group"
          sx={{ width: "100%" }}
        >
          <Grid container item xs={12} spacing={2}>
            <Address />
          </Grid>
        </RadioGroup>
      </Grid>
    </div>
  );
};

export default AddressContainer;
