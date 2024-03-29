import Layout from "../components/layout";
import { Grid } from "@mui/material";
import ThankyouMessage from "../components/Thankyou/ThankyouMessage";
import DeliveryDetails from "../components/Thankyou/DeliveryDetails";
import OrderSummaryContainer from "../components/shared/OrderSummary/OrderSummaryContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUser } from "../utils/getData";

const Thankyou = () => {
  const router = useRouter();
  const { checkoutData, bookingID } = router.query;

  const [confirmData, setConfirmData] = useState<any>({});
  const [bookingid, setBookingId] = useState<any>("");
  const [currentUser, setcurrentUser] = useState<any>({});
  const [providerData, setProviderData] = useState<any>({});
  useEffect(() => {
    // Disable the back button
    window.history.pushState(null, null, window.location.pathname);
    
    // Listen for the browser's back button click
    const handleBackButton = (event) => {
      event.preventDefault();
      // Navigate to the home page
      router.push('/');
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      if (checkoutData) {
        const data = Array.isArray(checkoutData)
          ? await JSON.parse(checkoutData[0])
          : await JSON.parse(checkoutData);
        setConfirmData(data);
        setBookingId(bookingID);

        const currentUserString = await localStorage.getItem("uid");
        const user = await getUser(data?.serviceProvider);
        const currentUserData = await getUser(currentUserString);
        setcurrentUser(currentUserData);
        setProviderData(user);
      }
    };

    fetchData();
  }, [checkoutData, bookingID]); // Include bookingID in the dependency array

  // Wait for data to be fetched before rendering
  if (!confirmData || !currentUser || !providerData) {
    return <p>Loading...</p>;
  }
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={10} lg={8} spacing={3}>
          <Grid item xs={12} md={10} lg={8}>
            <ThankyouMessage bookingId={bookingid} />

            <div className="mt-5 pt-2">
              <DeliveryDetails
                confirmData={confirmData}
                bookingId={bookingid}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={10} lg={4}>
            <OrderSummaryContainer
              confirmData={confirmData}
              providerData={providerData}
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Thankyou;
