import EditAddressIcon from "./AddressModal/EditAddressIcon";
import AddressLabel from "./AddressLabel";
import FastService from "../../shared/FastService/FastService";
import Styles from "./AddressSection.module.css";
import AddressModal from "./AddressModal/AddressForm";
import { Grid, Stack } from "@mui/material";
import CustomModal from "../../shared/Modal/CustomModal";
import BottomSheet from "../../shared/BottomSheet/BottomSheet";

const Address = () => {
  return (
    <Grid item xs={12} md={8} lg={6}>
      <div className="has-background-white br-lg px-3 py-3">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <AddressLabel value="home" label="Home" />
          <CustomModal
            ModalLabelComponent={<EditAddressIcon />}
            ModalBodyToPassDown={<AddressModal />}
            ModalTitle="Edit Address"
          />
          <BottomSheet
            labelToPass={<EditAddressIcon />}
            BodyToPass={<AddressModal />}
            BottomSheetTitle={"Edit Address"}
          />
        </Stack>
        <p className="is-size-7 px-5">
          Example: 47/E-2, Block 6, PECHS, Karachi, Sindh, Pakistan.
        </p>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={`${Styles.contactContainer} is-size-7 pl-5 pr-2 mt-2`}
        >
          <p>+92-3302345678</p>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <FastService fastHeight="15" fastWidth="50" isMobile={false} />
            delivery location
          </Stack>
        </Stack>
      </div>
    </Grid>
  );
};

export default Address;
