import Grid from "@mui/material/Grid";
import Styles from "../ProductCard/card.module.css";
import ProductImg from "../../services/productImg/productImg";
import ProductTitle from "../../services/productTitle/productTitle";
import ProductPrice from "../../services/productPrice/productPrice";
import Button from "@mui/material/Button";

interface CardProperties {
  productImg: string;
  ProductName: string;
  VendorName: string;
  PackSize: string;
  ProductType: string;
  DiscountedPrice: string | number;
  ActualPrice: string | number;
  CurrencyIdentifier: string;
  isMobile: boolean;
}

const ProductCard = ({
  productImg,
  ProductName
}: CardProperties) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        className={Styles.productCard}
      >
        <Grid item direction="row" justifyContent="center" alignItems="center">
          <ProductImg imgWidth={212} imgHeight={198} productImg={productImg} />
          <ProductTitle ProductName={ProductName} TagName={"p"} />
          <ProductPrice
            Price={45}
          />
          <Button className={Styles.ctaAtcart} variant="text">
             Book Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductCard;
