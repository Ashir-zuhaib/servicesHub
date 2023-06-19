import Layout from "../components/layout";
import Breadcrumb from "../components/shared/Breadcrumb/Breadcrumb";
import Title from "../components/shared/Headings/Title";
import ProductsContainer from "../components/shared/ProductsContainer/ProductsContainer";
import Tabs from "../components/MedicinesPage/Tabs/Tabs";
import { Grid } from "@mui/material";
const Medicines = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8}>
          <Breadcrumb />
          <Title title={"Medicines A-Z"} />
          <Tabs />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Medicines;
