import Grid from "@mui/material/Grid";
import Styles from "../ProductCard/card.module.css";
import FastService from "../FastService/FastService";
import ProductDiscount from "../../pharmacy/productDiscount/productDiscount";
import ProductImg from "../../pharmacy/productImg/productImg";
import ProductVendor from "../../pharmacy/productVendor/productVendor";
import ProductTitle from "../../pharmacy/productTitle/productTitle";
import ProductDetails from "../../pharmacy/productDetails/productDetails";
import ProductPrice from "../../pharmacy/productPrice/productPrice";
import Button from "@mui/material/Button";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

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
  ProductName,
  VendorName,
  PackSize,
  ProductType,
  DiscountedPrice,
  ActualPrice,
  CurrencyIdentifier,
  isMobile,
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
        <FastService fastWidth={77} fastHeight={20} isMobile={isMobile} />
        <ProductDiscount productDiscount={"15% Off"} />
        <Grid item direction="row" justifyContent="center" alignItems="center">
          <ProductImg imgWidth={212} imgHeight={198} productImg={productImg} />
          <ProductVendor VendorName={VendorName} />
          <ProductTitle ProductName={ProductName} TagName={"p"} />
          <ProductDetails PackSize={PackSize} ProductType={ProductType} />
          <ProductPrice
            DiscountedPrice={DiscountedPrice}
            ActualPrice={ActualPrice}
            CurrencyIdentifier={CurrencyIdentifier}
          />
          <Button className={Styles.ctaAtcart} variant="text">
            <LocalMallOutlinedIcon sx={{ marginRight: "12px" }} /> Add to Cart
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductCard;
