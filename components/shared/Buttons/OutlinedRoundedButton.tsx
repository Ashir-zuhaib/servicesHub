import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Styles from "./customButtons.module.css";
interface outlinedRoundedButton {
  buttonLink: string;
  buttonText: string;
}

function OutlinedRoundedButton({
  buttonLink,
  buttonText,
}: outlinedRoundedButton) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} md={3}>
        <Button
          variant="outlined"
          href={buttonLink}
          className={Styles.paddedRoundCenterBtn}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
}

export default OutlinedRoundedButton;
