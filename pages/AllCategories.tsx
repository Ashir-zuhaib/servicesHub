import React, { useEffect } from "react";
import Layout from "../components/layout";
import Title from "../components/shared/Headings/Title";
import { Grid } from "@mui/material";
import ProductsContainer from "../components/shared/ProductsContainer/ProductsContainer";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";
import { getAllService } from "../utils/getData";

const AllCategories = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    if (data.length === 0) {
      const fetchData = async () => {
        const serviceData = await getAllService();
        dispatch(setData(serviceData)); // Dispatch the data to the Redux store
      };
      fetchData();
    }
  }, [dispatch, data]); // Include 'data' as a dependency to ensure it's updated

  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8}>
          <Title title={"Services We are Offering:"} />
          <ProductsContainer showAll={true} productsData={data} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AllCategories;
