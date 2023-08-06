import Layout from "../components/layout";
import Heading from "../components/shared/Headings/Heading";
import { Grid, Stack } from "@mui/material";
import SimpleAccordion from "../components/shared/Accordion/SimpleAccordion";
import SubHeading from "../components/shared/Headings/SubHeading";
import OrderItemsContainer from "../components/Checkout/OrderSummary/OrderItemsContainer";
import AvailableBalance from "../components/Checkout/AvailableBalance/AvailableBalance";
import TotalPricing from "../components/Checkout/Pricing/TotalPricing";
import PrimaryRoundedLinkButton from "../components/shared/Buttons/PrimaryRoundedLinkButton";


const Checkout: any = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" className="px-2">
        <Grid container item xs={12} md={10} lg={8}>
          <Heading title={"Checkout"} />
          <Grid container spacing={2} flexDirection="row-reverse">
            <Grid item xs={12} md={4}>
              {/* <AvailableBalance /> */}

              <TotalPricing isBackgroundColor={true} />

              <PrimaryRoundedLinkButton
                buttonLink="/Thankyou"
                buttonText="Confirm Order"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <SimpleAccordion
                CustomStylingClasses="bg-gray br-lg w-100"
                Title={<SubHeading title="Order Summary" />}
                AccordionBody={<OrderItemsContainer />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Checkout;
