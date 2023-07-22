import Layout from "../components/layout";
import Title from "../components/shared/Headings/Title";
import { Grid } from "@mui/material";
import ProductsContainer from "../components/shared/ProductsContainer/ProductsContainer";
const AllCategories = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8}>
          <Title title={"Services We are Offering:"} />
          <ProductsContainer showAll={true} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AllCategories;
