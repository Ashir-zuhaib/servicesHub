import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/Card";
import React, { useEffect, useState } from "react";
import { getAllService } from "../../../utils/getData";

interface productContainer {
  showAll: boolean;
}

const ProductsContainer = ({ showAll }: productContainer) => {
  const [productsData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllService();
      setProductData(data);
    };
    fetchData();
  }, []);

  const displayedItems = productsData
    .slice(0, 3) // Extract first 5 items
    .map((productsData) => (
      <Grid item xs={6} md={3} key={productsData?.id}>
        <ProductCard
          productImg={productsData?.img}
          ProductName={productsData?.name}
        />
      </Grid>
    ));
  return (
    <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
      {showAll
        ? productsData?.map((productsData, i) => (
            <Grid item xs={6} md={3} key={productsData?.id}>
              <ProductCard
                productImg={productsData?.img}
                ProductName={productsData?.name}
              />
            </Grid>
          ))
        : displayedItems}
    </Grid>
  );
};

export default ProductsContainer;
