import Layout from "../components/layout";
import { Grid } from "@mui/material";
import ThankyouMessage from "../components/Thankyou/ThankyouMessage";
import PrescriptionReqContainer from "../components/Checkout/AddressSection/Prescription/PrescriptionReqContainer";
import DeliveryDetails from "../components/Thankyou/DeliveryDetails";
import OrderSummaryContainer from "../components/shared/OrderSummary/OrderSummaryContainer";
import OrderSummaryAccordion from "../components/shared/OrderSummary/OrderSummaryAccordion/OrderSummaryAccordion";
import SubHeadingBlue from "../components/shared/Headings/SubHeadingBlue";
interface checkout {
  isMobile: boolean;
  isLoading: boolean;
}
const Thankyou = ({ isMobile, isLoading }: checkout) => {
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={10} lg={8} spacing={3}>
          {isLoading ? (
            <>
              <h1>add skeleton</h1>
            </>
          ) : (
            <>
              <Grid item xs={12} md={10} lg={8}>
                <ThankyouMessage />
                <PrescriptionReqContainer
                  bgColor="bg-light-blue"
                  directionRow={true}
                />
                <div className="mt-4">
                  <DeliveryDetails />
                </div>
              </Grid>
              <Grid item xs={12} md={10} lg={4}>
                {isMobile ? (
                  <OrderSummaryAccordion
                    Title={<SubHeadingBlue title="Order Details" />}
                  />
                ) : (
                  <OrderSummaryContainer />
                )}
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Thankyou;
