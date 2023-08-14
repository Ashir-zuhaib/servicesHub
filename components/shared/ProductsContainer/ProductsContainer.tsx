import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/Card";
import React from "react";
import { Skeleton } from "@mui/material";

interface productContainer {
  showAll: boolean;
  productsData: any;
}

const ProductsContainer = ({ showAll, productsData }: productContainer) => {
  const skeletonItems = Array.from({ length: showAll ? 9 : 6 }, (_, i) => (
    <Grid container item xs={8} md={4} key={i}>
      <Skeleton
        variant="rectangular"
        width={359}
        height={160}
        className="mb-2"
      />
      <Skeleton variant="rectangular" width={359} height={40} />
    </Grid>
  ));
  const displayedItems = productsData
    .slice(0, 6) // Extract first
    .map((productsData) => (
      <Grid item xs={12} sm={6} md={4} key={productsData?.id}>
        <ProductCard
          productImg={productsData?.img}
          ProductName={productsData?.name}
          productId={productsData?.id}
          productDescription={productsData?.description}
        />
      </Grid>
    ));

  return (
    <>
      {productsData.length ? (
        <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
          {showAll
            ? productsData.map((productData) => (
                <Grid item xs={12} sm={6} md={4} key={productData?.id}>
                  <ProductCard
                    productImg={productData?.img}
                    ProductName={productData?.name}
                    productId={productData?.id}
                    productDescription={productData?.description}
                  />
                </Grid>
              ))
            : displayedItems}
        </Grid>
      ) : (
        <Grid container rowSpacing={2} columnSpacing={2}>
          {skeletonItems}
        </Grid>
      )}
    </>
  );
};

export default ProductsContainer;
