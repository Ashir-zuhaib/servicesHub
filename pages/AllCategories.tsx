import Layout from "../components/layout";
import Title from "../components/shared/Headings/Title";
import { Grid } from "@mui/material";
import ProductsContainer from "../components/shared/ProductsContainer/ProductsContainer";
import { getAllService } from "../utils/getData";
import { useEffect, useState } from "react";

const AllCategories = () => {
  const [data, setData] = useState([]);

  // FETCH SERVICES DATA
  useEffect(() => {
    const fetchData = async () => {
      const serviceData = await getAllService();
      setData(serviceData);
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8}>
          <Title title={"Services We are Offering:"} />
          <ProductsContainer showAll={true}  productsData={data} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AllCategories;
