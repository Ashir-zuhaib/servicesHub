import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/Card";
import React,{useEffect,useState} from 'react'
import { getAllService } from "../../../utils/getData";



const ProductsContainer = () => {
  const [productsData, setProductData]=useState([])
  useEffect(()=>{
    const fetchData = async () => {
      const data = await getAllService();
      setProductData(data);
    };
  
    fetchData();
  },[])
  const n = 8;
  return (
    <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
      {productsData?.map((productsData, i) => (
        <Grid item xs={6} md={3} key={productsData?.id}>
          <ProductCard
            productImg={productsData?.img}
            ProductName={productsData?.name}
            VendorName={"Novartis"}
            PackSize={"10"}
            ProductType={"Tablets"}
            DiscountedPrice={"15% OFF"}
            ActualPrice={"230"}
            CurrencyIdentifier={"Rs"}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsContainer;
