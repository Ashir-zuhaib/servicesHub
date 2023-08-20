import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Styles from "./AddressModal.module.css";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddressLabel from "./AddressLabel";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PrimaryButton from "../../../shared/Buttons/PrimaryButton";
import * as React from "react";

const Provinces = [
  {
    value: "KPK",
    label: "KPK",
  },
  {
    value: "Sindh",
    label: "Sindh",
  },
];
const Cities = [
  {
    value: "karachi",
    label: "karachi",
  },
  {
    value: "Hyderabad",
    label: "Hyderabad",
  },
];
const Areas = [
  {
    value: "area 1",
    label: "area 1",
  },
  {
    value: "area 2",
    label: "area 2",
  },
];
const AddressModal = () => {
  const [Province, setProvince] = React.useState("");
  const [City, setCity] = React.useState("");
  const [Area, setArea] = React.useState("");
  const handleProvinceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProvince(event.target.value);
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArea(event.target.value);
  };
  return (
    <div>
      <Stack className={Styles.modalDescription}>
        <TextField
          label="Complete Address"
          id="Complete Address"
          margin="normal"
        />
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 1, md: 2 }}
        >
          <TextField
            fullWidth
            id="outlined-select-Province"
            select
            label="Province"
            value={Province}
            onChange={handleProvinceChange}
            margin="normal"
          >
            {Provinces.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            id="outlined-select-Cities"
            select
            label="Cities"
            value={City}
            onChange={handleCityChange}
            margin="normal"
          >
            {Cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 1, md: 2 }}
        >
          <TextField
            fullWidth
            id="outlined-select-Area"
            select
            label="Area"
            value={Area}
            onChange={handleAreaChange}
            margin="normal"
          >
            {Areas.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="Contact" id="Contact" margin="normal" fullWidth />
        </Stack>
        <FormControl component="fieldset">
          <FormLabel component="legend" className={Styles.LabelHeading}>
            Add a Label
          </FormLabel>
          <RadioGroup
            aria-label="add a label"
            defaultValue="Home"
            name="radio-buttons-group"
            row
            className={Styles.AddressLabelGroup}
          >
            <FormControlLabel
              value="Home"
              control={<Radio />}
              label={<AddressLabel icon={<HomeIcon />} labelName="Home" />}
            />
            <FormControlLabel
              value="Office"
              control={<Radio />}
              label={
                <AddressLabel
                  icon={<BusinessCenterIcon />}
                  labelName="Office"
                />
              }
            />
            <FormControlLabel
              value="Others"
              control={<Radio />}
              label={
                <AddressLabel
                  icon={<AddCircleOutlineRoundedIcon />}
                  labelName="Others"
                />
              }
            />
          </RadioGroup>
        </FormControl>
        <div className="mx-2 mt-2">
          <PrimaryButton buttonText="Add Address" customStyleClasses="" />
        </div>
      </Stack>
    </div>
  );
};

export default AddressModal;
