import Layout from "../components/layout";
import Breadcrumb from "../components/shared/Breadcrumb/Breadcrumb";
import ProductImage from "/public/product-images/product-img-1.jpg";
import Image from "next/image";
import ProductDescription from "../components/ProductPage/ProductDescription/ProductDescription";
import ProductPricingContainer from "../components/ProductPage/ProductPricing/ProductPricingContainer";
import { Skeleton, Grid } from "@mui/material";
interface productDetail {
  isMobile: boolean;
  isLoading: boolean;
}

const ProductDetail = ({ isMobile, isLoading }: productDetail) => {
  isLoading = false;
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8} spacing={2}>
          {isLoading ? (
            <>
              <Grid item xs={12}>
                <Skeleton variant="text" animation="wave" />
              </Grid>
              <Grid item xs={12} md={3}>
                <Skeleton
                  variant="circular"
                  height={200}
                  width={200}
                  className="mx-auto"
                  animation="wave"
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Skeleton variant="rectangular" height={200} animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <Breadcrumb />
              </Grid>
              <Grid item xs={12} md={3}>
                <Image src={ProductImage} />
              </Grid>
              <Grid item xs={12} md={5}>
                <ProductDescription />
              </Grid>
              <Grid item xs={12} md={4}>
                <ProductPricingContainer />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductDetail;
