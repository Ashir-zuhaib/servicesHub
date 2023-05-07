import Layout from "../components/layout";
import Heading from "../components/shared/Headings/Heading";
import { Grid, Stack } from "@mui/material";
import AddressContainer from "../components/Checkout/AddressSection/AddressContainer";
import SimpleAccordion from "../components/shared/Accordion/SimpleAccordion";
import SubHeading from "../components/shared/Headings/SubHeading";
import OrderItemsContainer from "../components/Checkout/OrderSummary/OrderItemsContainer";
import AvailableBalance from "../components/Checkout/AvailableBalance/AvailableBalance";
import PrescriptionReqContainer from "../components/Checkout/AddressSection/Prescription/PrescriptionReqContainer";
import TotalPricing from "../components/Checkout/Pricing/TotalPricing";
import PrimaryRoundedLinkButton from "../components/shared/Buttons/PrimaryRoundedLinkButton";
import OrderSummaryAccordion from "../components/shared/OrderSummary/OrderSummaryAccordion/OrderSummaryAccordion";
import FixedBottomSheet from "../components/shared/BottomSheet/FixedBottomSheet";
interface checkout {
  isMobile: boolean;
  isLoading: boolean;
}
const BottomSheetCheckout = () => {
  return (
    <>
      <Grid item xs={5}>
        <Stack>
          <p>Total</p>
          <p className="has-text-weight-bold is-size-5">Rs.2838</p>
        </Stack>
      </Grid>
      <Grid item xs={7}>
        <PrimaryRoundedLinkButton
          buttonLink="/Thankyou"
          buttonText="Confirm Order"
        />
      </Grid>
    </>
  );
};
const Checkout: any = ({ isMobile, isLoading }: checkout) => {
  isLoading = false;
  isMobile = false
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={10} lg={8}>
          {isLoading ? (
            <>
              <h1>dj</h1>
            </>
          ) : (
            <>
              <Heading title={"Checkout"} />
              <Grid container spacing={2} flexDirection="row-reverse">
                <Grid item xs={12} md={4}>
                  <AvailableBalance />
                  <PrescriptionReqContainer
                    bgColor="bg-gray"
                    directionRow={false}
                  />
                  <TotalPricing isBackgroundColor={true} />
                  {!isMobile ? (
                    <PrimaryRoundedLinkButton
                      buttonLink="/Thankyou"
                      buttonText="Confirm Order"
                    />
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12} md={8}>
                  <AddressContainer />

                  {isMobile ? (
                    <OrderSummaryAccordion
                      Title={<SubHeading title="Order Summary" />}
                    />
                  ) : (
                    <SimpleAccordion
                      CustomStylingClasses="bg-gray br-lg w-100 my-5"
                      Title={<SubHeading title="Order Summary" />}
                      AccordionBody={<OrderItemsContainer />}
                    />
                  )}
                </Grid>
              </Grid>
              {isMobile ? (
                <FixedBottomSheet bottomSheetBody={<BottomSheetCheckout />} />
              ) : (
                ""
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Checkout;
