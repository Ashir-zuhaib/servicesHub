import { Chip } from "@mui/material";
import Styles from "./badges.module.css";

const StockBadge = () => {
    return (
          <Chip
            label="Book Your Service"
            size="small"
            className={Styles.Instock}
          />
      );
}

export default StockBadge

