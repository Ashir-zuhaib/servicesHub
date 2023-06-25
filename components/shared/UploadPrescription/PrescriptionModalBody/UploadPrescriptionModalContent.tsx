import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Styles from "./UploadPrescriptionModalContent.module.css";
import { Box, Grid, Stack } from "@mui/material";
import prescription from "/public/Static/prescription.jpeg";
import Image from "next/image";
import { XCircle } from "react-feather";
import PrimaryButton from "../../Buttons/PrimaryButton";
const Input = styled("input")({
  display: "none",
});

const UploadPrescriptionModalContent = () => {
  return (
    <Grid container spacing={2} className="mt-1 px-3 py-2">
      <Grid item xs={12} md={6}>
        <Box className={Styles.buttonContainer} sx={{ height: "110px" }}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button
              component="span"
              className="underline text-primary-color is-capitalized"
            >
              Browse Files
            </Button>
          </label>
        </Box>
        <Stack direction="row" className="mt-2" flexWrap="wrap">
          <div className={Styles.ImgContainer}>
            <XCircle className={Styles.imageCross} size={26} />
            <Image src={prescription} width={100} height={115} />
          </div>
          <div className={Styles.ImgContainer}>
            <XCircle className={Styles.imageCross} size={26} />
            <Image src={prescription} width={100} height={115} />
          </div>
          <p className="text-primary-color has-text-weight-semibold is-size-7">Max 5 Prescription can be uploaded.</p>
        </Stack>
        <PrimaryButton buttonText="Upload" customStyleClasses="br-md" />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={`br-lg bg-gray px-4 py-4 ${Styles.instructions}`}>
          <p className="has-text-weight-semibold mb-2">
            Guide for uploading a valid prescription
          </p>
          <ul>
            <li>Don’t crop out any part of the image</li>
            <li>Avoid blurred image </li>
            <li>Include details of doctor and patient + clinic visit date</li>
            <li>Medicines will be dispensed as per prescription </li>
            <li>Supported files type: jpeg , jpg, png , pdf </li>
            <li>Maximum allowed file size: 5MB</li>
          </ul>
        </div>
      </Grid>
    </Grid>
  );
};

export default UploadPrescriptionModalContent;
