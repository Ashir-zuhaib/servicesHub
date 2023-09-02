import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import QuantityUpdateButtons from "../shared/Buttons/QuantityButton/QuantityUpdateButtons";
import Styles from "./bookingSteps.module.css";
import TimeAndDateContainer from "./TimeAndDate/TimeAndDateContainer";
import TextField from "@mui/material/TextField";
import SubTitle from "../shared/Headings/SubTitle";
import firebase from "../../config";
import { useRouter } from "next/router";

const steps = [
  "Select the service hours",
  "Select Desired Time Frame",
  "Enter Your Details",
];

export default function BookingSteps({ providerId }) {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [count, setCount] = React.useState<number>(1);
  const [bookingData, setBookingData] = React.useState({
    apptDate: "",
    startTime: "",
    endTime: "",
    noOfHours: 1,
    address: "", // Add the address field
    contactNumber: "",
    serviceProvider: providerId,
    chargesPerHour: "",
    serviceCharges: "",
    subTotal: "",
    total: "",
    customerId: "",
  });
  const getCurrentUser = async () => {
    const currentUser = await localStorage.getItem("uid");
    // const currentUser = await JSON.parse(currentUserString);
    setBookingData({
      ...bookingData,
      customerId: currentUser,
    });
  };
  React.useEffect(() => {
    getCurrentUser();
  }, []);
  console.log("ggg", bookingData);

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSelectDateAndTime = (selectedDate, selectedTime, endTime) => {
    console.log("bookingTIme", selectedDate, selectedTime, endTime);

    setBookingData({
      ...bookingData,
      apptDate: selectedDate,
      startTime: selectedTime,
      endTime: endTime,
    });
  };

  const handleAddressChange = (event) => {
    setBookingData({
      ...bookingData,
      address: event.target.value,
    });
  };

  const handleContactNumberChange = (event) => {
    setBookingData({
      ...bookingData,
      contactNumber: event.target.value,
    });
  };
  const handleSubmit = () => {
    console.log("bookingdata", bookingData);
    bookingData?.customerId
      ? router.push({
          pathname: "/Checkout",
          query: { bookingData: JSON.stringify(bookingData) },
        })
      : router.push({
          pathname: "/Login",
          query: { readyForcheckout: JSON.stringify(bookingData) },
        });
    // firebase.firestore().collection("Bookings").add(bookingData)
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <>
        {activeStep == 0 ? (
          <div className={Styles.pricingContainer}>
            <div className="is-flex is-align-items-center	is-justify-content-center">
              <div className="p-5 border is-flex is-align-items-center box-shadow">
                <h2 className="mr-3">Select No. of Hours</h2>
                <QuantityUpdateButtons
                  InputValue={count}
                  isWhite={true}
                  updateCount={setCount}
                />{" "}
              </div>
            </div>
          </div>
        ) : activeStep == 1 ? (
          <TimeAndDateContainer
            noOfHours={count}
            providerId={providerId}
            onSelectDateAndTime={handleSelectDateAndTime}
          />
        ) : (
          <div className={Styles.pricingContainer}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="bg-white w-lg-65 p-4 is-rounded mx-auto has-text-centered br-lg">
                <div className="pl-2 mb-3">
                  <SubTitle title="Complete Your Booking" />
                </div>
                <TextField
                  required
                  id="outlined-required"
                  label="Enter Your Address"
                  value={bookingData.address}
                  onChange={handleAddressChange}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Enter Contact Number"
                  value={bookingData.contactNumber}
                  onChange={handleContactNumberChange}
                />
              </div>
            </Box>
          </div>
        )}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep == 2 ? (
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          ) : (
            <Button onClick={handleNext} variant="contained">
              Next
            </Button>
          )}
        </Box>
      </>
    </Box>
  );
}
