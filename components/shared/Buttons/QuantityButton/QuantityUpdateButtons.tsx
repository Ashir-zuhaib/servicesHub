import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Styles from "./QtyButtons.module.css";

interface quantityUpdate {
  InputValue: number;
  isWhite: boolean;
}
function QuantityUpdateButtons({ InputValue, isWhite }: quantityUpdate) {
  return (
    <div>
      {" "}
      <ButtonGroup
        size="small"
        aria-label="small button group"
        className={
          isWhite ? Styles.updateQtyButtons : Styles.updateQtyButtonsGray
        }
      >
        <Button>
          <RemoveIcon fontSize="small" />
        </Button>
        <Button>
          <input type="text" placeholder="" value={InputValue} />
        </Button>
        <Button>
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default QuantityUpdateButtons;
