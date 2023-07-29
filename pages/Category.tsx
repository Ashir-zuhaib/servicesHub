import Layout from "../components/layout";
import CategoryCard from "../components/shared/CategoryCard/CategoryCard";
import Title from "../components/shared/Headings/Title";
import { Grid } from "@mui/material";
import test from '../public/carpenter.png'
const AllCategories = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8}>
          <Title title={"Carpenter"} />
          <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
            <CategoryCard/>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AllCategories;
