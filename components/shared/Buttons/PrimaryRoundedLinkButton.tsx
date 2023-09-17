import Button from "@mui/material/Button";
import Styles from "./customButtons.module.css";

interface primaryRoundedLinkButton {
  buttonText: string;
  onclick:any;
}
const PrimaryRoundedLinkButton = ({
  buttonText,
  onclick
}: primaryRoundedLinkButton) => {
  return (
    <Button className={Styles.roundedButton} variant="text" onClick={onclick}>
      {buttonText}
    </Button>
  );
};

export default PrimaryRoundedLinkButton;
