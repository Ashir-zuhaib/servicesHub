import Layout from "../components/layout";
import { Grid } from "@mui/material";
import ThankyouMessage from "../components/Thankyou/ThankyouMessage";
import DeliveryDetails from "../components/Thankyou/DeliveryDetails";
import OrderSummaryContainer from "../components/shared/OrderSummary/OrderSummaryContainer";

const Thankyou = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={10} lg={8} spacing={3}>
          <Grid item xs={12} md={10} lg={8}>
            <ThankyouMessage />

            <div className="mt-5 pt-2">
              <DeliveryDetails />
            </div>
          </Grid>
          <Grid item xs={12} md={10} lg={4}>
            <OrderSummaryContainer />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Thankyou;
