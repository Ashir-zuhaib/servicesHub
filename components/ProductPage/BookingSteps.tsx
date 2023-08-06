import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuantityUpdateButtons from "../shared/Buttons/QuantityButton/QuantityUpdateButtons";
import Styles from "./bookingSteps.module.css";
import TimeAndDateContainer from "./TimeAndDate/TimeAndDateContainer";
import TextField from "@mui/material/TextField";
import SubTitle from "../shared/Headings/SubTitle";

const steps = [
  "Select the service hours",
  "Select Desired Time Frame",
  "Enter Your Details",
];

export default function BookingSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

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
                <QuantityUpdateButtons InputValue={1} isWhite={true} />{" "}
              </div>
            </div>
          </div>
        ) : activeStep == 1 ? (
          <TimeAndDateContainer />
        ) : (
          <div className={Styles.pricingContainer}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off">
              <div className="bg-white w-lg-65 p-4 is-rounded mx-auto has-text-centered br-lg">
                <div className="pl-2 mb-3">
                  <SubTitle title="Complete Your Booking" />
                </div>
                <TextField
                  required
                  id="outlined-required"
                  label="Enter Your Address"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Enter Contact Number"
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
            sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}
          <Button onClick={handleNext} variant="contained">
            Next
          </Button>
        </Box>
      </>
    </Box>
  );
}
