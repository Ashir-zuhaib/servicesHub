import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Styles from "./customButtons.module.css";
interface PrimaryButton {
  buttonText: string;
  customStyleClasses: any;
}

function PrimaryButton({ buttonText, customStyleClasses }: PrimaryButton) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12}>
        <Button
          variant="contained"
          className={`${Styles.primaryButton} ${customStyleClasses}`}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PrimaryButton;
