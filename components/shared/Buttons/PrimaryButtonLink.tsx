import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Styles from "./customButtons.module.css";
interface PrimaryButtonLink {
  buttonLink: string;
  buttonText: string;
}

function PrimaryButtonLink({ buttonLink, buttonText }: PrimaryButtonLink) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12}>
        <Button
          variant="contained"
          href={buttonLink}
          className={Styles.primaryButton}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PrimaryButtonLink;
