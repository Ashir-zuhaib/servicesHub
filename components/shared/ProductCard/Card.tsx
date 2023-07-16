import Grid from "@mui/material/Grid";
import Styles from "../ProductCard/card.module.css";
import ProductImg from "../../ServicesCard/productImg/productImg";
import ProductTitle from "../../ServicesCard/productTitle/productTitle";
import ProductPrice from "../../ServicesCard/productPrice/productPrice";
import Button from "@mui/material/Button";

interface CardProperties {
  productImg: string;
  ProductName: string;
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
          <Button className={Styles.ctaAtcart} variant="text">
             Book Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductCard;
