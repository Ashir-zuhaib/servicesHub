import { Chip } from "@mui/material";
import Styles from "./badges.module.css";

const StockBadge = () => {
    return (
          <Chip
            label="In Stock"
            size="small"
            className={Styles.Instock}
          />
      );
}

export default StockBadge

