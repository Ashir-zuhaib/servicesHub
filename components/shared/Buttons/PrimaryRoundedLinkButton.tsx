import Button from "@mui/material/Button";
import Styles from "./customButtons.module.css";

interface primaryRoundedLinkButton {
  buttonLink: string;
  buttonText: string;
}
const PrimaryRoundedLinkButton = ({
  buttonLink,
  buttonText,
}: primaryRoundedLinkButton) => {
  return (
    <Button className={Styles.roundedButton} variant="text" href={buttonLink}>
      {buttonText}
    </Button>
  );
};

export default PrimaryRoundedLinkButton;
