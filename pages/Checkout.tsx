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

const Checkout: any = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [checkoutData, setCheckoutData] = useState<any>({});
  const [currentUser, setcurrentUser] = useState<any>({});
  const { bookingData } = router.query;
  const [providerData, setProviderData] = useState<any>({});

  const setCalculation = async () => {
    const currentUser = await localStorage.getItem("uid");
    // console.log("currentUserString", currentUserString);
    // const currentUser = await JSON.parse(currentUserString);
    console.log("Parsed user:", currentUser);

    const subTotal = checkoutData?.noOfHours * providerData?.hourlyRate;
    console.log("sub", subTotal);
    const serviceCharges = subTotal * 0.1;
    console.log("serv", serviceCharges);
    const total = Number(subTotal) + Number(serviceCharges);
    console.log("total", total);
    currentUser?
    setCheckoutData({
      ...checkoutData,
      subTotal: subTotal,
      chargesPerHour: providerData?.hourlyRate,
      serviceCharges: serviceCharges,
      total: total,
      customerId: currentUser,
    }):router.push("/Login")
  };

  useEffect(() => {
    const fetchData = async () => {
      if (bookingData) {
        const data = Array.isArray(bookingData)
          ? await JSON.parse(bookingData[0])
          : await JSON.parse(bookingData);
        setCheckoutData(data);
        console.log("data", data);
        const user = await getUser(data?.serviceProvider);
        console.log("use", user);
        setProviderData(user);
      }
    };

    fetchData();
  }, [bookingData]);
  useEffect(() => {
    setCalculation(); // Perform calculations after setting checkoutData
    setLoading(false);
  }, [providerData]);
  const handleConfirm = async () => {
    await firebase
      .firestore()
      .collection("Bookings")
      .add(checkoutData)
      .then((doc) => {
        console.log("added", doc.id);
        swal("Success");
        router.push({
          pathname: "/Thankyou",
          query: {
            checkoutData: JSON.stringify(checkoutData),
            bookingID: doc?.id,
          },
        });
      })
      .catch((e) => {
        console.log(e);
        swal("Failed", e);
      });
  };
  console.log("ss", checkoutData);
  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  return (
    <Layout>
      <Grid container justifyContent="center" className="px-2">
        <Grid container item xs={12} md={10} lg={8}>
          <Heading title={"Checkout"} />
          <Grid container spacing={2} flexDirection="row-reverse">
            <Grid item xs={12} md={4}>
              {/* <AvailableBalance /> */}

              <TotalPricing isBackgroundColor={true} pricing={checkoutData} />

              <PrimaryRoundedLinkButton
                onclick={handleConfirm}
                // buttonLink="/Thankyou"
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
