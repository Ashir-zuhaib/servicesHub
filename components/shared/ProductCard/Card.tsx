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

const ProductCard = ({ productImg, ProductName }: CardProperties) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        className={Styles.productCard}>
        <Grid item direction="row" justifyContent="center" alignItems="center">
          <ProductImg imgWidth={350} imgHeight={158} productImg={productImg} />
          <div className="px-2 pb-2">
            <ProductTitle ProductName={ProductName} TagName={"p"} />
            <p className="mb-0">
              Lorem ipsum dolor sit,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              incidunt maxime fugiat...
            </p>
            <Button className={Styles.ctaAtcart} variant="text">
              Book Now
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductCard;
