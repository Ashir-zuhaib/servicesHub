import Button from "@mui/material/Button";
import Styles from "./customButtons.module.css";
const AddToCart = () => {
  return (
    
    <Button className={Styles.addToCart} variant="text">
      Add to Cart
    </Button>
  );
};

export default AddToCart;
