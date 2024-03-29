import Layout from "../components/layout";
import Heading from "../components/shared/Headings/Heading";
import { Grid } from "@mui/material";
import SimpleAccordion from "../components/shared/Accordion/SimpleAccordion";
import SubHeading from "../components/shared/Headings/SubHeading";
import OrderItemsContainer from "../components/Checkout/OrderSummary/OrderItemsContainer";
import TotalPricing from "../components/Checkout/Pricing/TotalPricing";
import PrimaryRoundedLinkButton from "../components/shared/Buttons/PrimaryRoundedLinkButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUser } from "../utils/getData";
import firebase from "../config";
import swal from "sweetalert";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Checkout: any = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [checkoutData, setCheckoutData] = useState<any>({});
  const { bookingData } = router.query;
  const [providerData, setProviderData] = useState<any>({});

  const setCalculation = async () => {
    const currentUser = await localStorage.getItem("uid");
    const subTotal = checkoutData?.noOfHours * providerData?.hourlyRate;
    const serviceCharges = subTotal * 0.1;
    const total = Number(subTotal) + Number(serviceCharges);
    currentUser
      ? setCheckoutData({
          ...checkoutData,
          subTotal: subTotal,
          chargesPerHour: providerData?.hourlyRate,
          serviceProviderData: providerData,
          serviceCharges: serviceCharges,
          total: total,
          customerId: currentUser,
        })
      : router.push("/Login");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (bookingData) {
        const data = Array.isArray(bookingData)
          ? await JSON.parse(bookingData[0])
          : await JSON.parse(bookingData);
        setCheckoutData(data);
        const user = await getUser(data?.serviceProvider);
        setProviderData(user);
      }
      setLoading(false); // Set loading to false after attempting to fetch data
    };

    fetchData();
  }, [bookingData]);

  useEffect(() => {
    if (!loading) {
      setCalculation(); // Perform calculations after setting checkoutData
    }
  }, [loading, providerData]);

  const handleConfirm = async () => {
    await firebase
      .firestore()
      .collection("Bookings")
      .add(checkoutData)
      .then((doc) => {
        router.replace({
          pathname: "/Thankyou",
          query: {
            checkoutData: JSON.stringify(checkoutData),
            bookingID: doc?.id,
          },
        });
      })
      .catch((e) => {
        swal("Failed", e);
      });
  };

  if (loading) {
    return (
      <Layout>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Grid container justifyContent="center" className="px-2">
        <Grid container item xs={12} md={10} lg={8}>
          <Heading title={"Checkout"} />
          <Grid container spacing={2} flexDirection="row-reverse">
            <Grid item xs={12} md={4}>
              <TotalPricing isBackgroundColor={true} pricing={checkoutData} />
              <PrimaryRoundedLinkButton
                onclick={handleConfirm}
                buttonText="Confirm Order"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <SimpleAccordion
                CustomStylingClasses="bg-gray br-lg w-100"
                Title={<SubHeading title="Order Summary" />}
                AccordionBody={
                  <OrderItemsContainer
                    bookingDetail={checkoutData}
                    providerData={providerData}
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Checkout;
