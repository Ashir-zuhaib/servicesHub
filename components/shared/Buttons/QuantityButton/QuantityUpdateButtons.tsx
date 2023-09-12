import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Styles from "./QtyButtons.module.css";

interface QuantityUpdateProps {
  InputValue: number;
  isWhite: boolean;
  updateCount: (newCount: number) => void;
  updateBookingData: (newNoOfHours: number) => void;
}

function QuantityUpdateButtons({ InputValue, isWhite, updateCount,updateBookingData }: QuantityUpdateProps) {
  const [count, setCount] = useState(InputValue);

  const handleIncrement = () => {
    setCount(count + 1);
    updateCount(count + 1);
    updateBookingData(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      updateCount(count - 1);
      updateBookingData(count - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setCount(isNaN(newValue) ? 0 : newValue);
    updateCount(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div>
      <ButtonGroup
        size="small"
        aria-label="small button group"
        className={isWhite ? Styles.updateQtyButtons : Styles.updateQtyButtonsGray}
      >
        <Button onClick={handleDecrement}>
          <RemoveIcon />
        </Button>
        <Button>
          <input
            type="number"
            placeholder=""
            value={count}
            onChange={handleInputChange}
          />
        </Button>
        <Button onClick={handleIncrement}>
          <AddIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default QuantityUpdateButtons;
