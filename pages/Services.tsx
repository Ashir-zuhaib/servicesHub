import Layout from "../components/layout";
import Title from "../components/shared/Headings/Title";
import { Grid } from "@mui/material";
const Medicines = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8}>
          <Title title={"All Services"} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Medicines;
