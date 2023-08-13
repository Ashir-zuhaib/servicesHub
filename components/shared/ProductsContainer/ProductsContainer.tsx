import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/Card";
import React, { useEffect, useState } from "react";

interface productContainer {
  showAll: boolean;
  productsData: any;
}

const ProductsContainer = ({ showAll, productsData }: productContainer) => {
  const displayedItems = productsData
    .slice(0, 3) // Extract first
    .map((productsData) => (
      <Grid item xs={6} md={4} key={productsData?.id}>
        <ProductCard
          productImg={productsData?.img}
          ProductName={productsData?.name}
          productId={productsData?.id}
        />
      </Grid>
    ));
  return (
    <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
      {showAll
        ? productsData?.map((productsData, i) => (
            <Grid item xs={6} md={4} key={productsData?.id}>
              <ProductCard
                productImg={productsData?.img}
                ProductName={productsData?.name}
                productId={productsData?.id}
              />
            </Grid>
          ))
        : displayedItems}
    </Grid>
  );
};

export default ProductsContainer;
