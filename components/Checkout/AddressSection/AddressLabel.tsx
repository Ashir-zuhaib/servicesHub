import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Styles from "./AddressSection.module.css";
interface address {
  value: string;
  label: string;
}
const AddressLabel = ({ value, label }: address) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio size="small" />}
      label={label}
      className={Styles.AddressSelection}
    />
  );
};

export default AddressLabel;
