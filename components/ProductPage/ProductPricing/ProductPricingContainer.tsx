import Styles from "./productPricing.module.css";
import StockBadge from "../../shared/Badges/StockBadge";
import { Stack, Button } from "@mui/material";
import QuantityUpdateButtons from "../../shared/Buttons/QuantityButton/QuantityUpdateButtons";

import AddToCart from "../../shared/Buttons/AddToCart";
const ProductPricingContainer = () => {
  return (
    <div className={Styles.pricingContainer}>
      <Stack
        direction={{ xs: "row-reverse", md: "column" }}
        alignItems="space-between"
      >
        <StockBadge />
        <p className={Styles.discountedPrice}>Rs. 200</p>
      </Stack>

      <Stack direction="row" alignItems="center">
        <p className={Styles.actualPrice}>Rs.221</p>
        <p className={Styles.discount}>Get 10% Off</p>
      </Stack>
      <p className="is-size-7 has-text-weight-semibold mt-4">
        Pack Size: <span className={"text-dawaai-blue"}>10 Strips</span>
      </p>
      <Stack
        direction={{ xs: "row", md: "column" }}
        alignItems="space-between"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" className="my-2">
          <Button variant="outlined" size="small" className={Styles.packBtn}>
            Strip
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={`${Styles.packBtn} mx-3 active`}
          >
            Pack
          </Button>
        </Stack>
        <QuantityUpdateButtons InputValue={4} isWhite={true} />{" "}
      </Stack>
      <AddToCart />
    </div>
  );
};

export default ProductPricingContainer;
