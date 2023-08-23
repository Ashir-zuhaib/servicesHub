import Layout from "../components/layout";
import { Grid } from "@mui/material";
import ThankyouMessage from "../components/Thankyou/ThankyouMessage";
import DeliveryDetails from "../components/Thankyou/DeliveryDetails";
import OrderSummaryContainer from "../components/shared/OrderSummary/OrderSummaryContainer";
import { useRouter } from 'next/router';
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
      const fetchData = async () => {
        if (checkoutData) {
          const data = Array.isArray(checkoutData)
            ? await JSON.parse(checkoutData[0])
            : await JSON.parse(checkoutData);
          setConfirmData(data);
          setBookingId(bookingID);
  
          const currentUserString = await localStorage.getItem("user");
          const currentUserget = JSON.parse(currentUserString);
          const user = await getUser(data?.serviceProvider);
          const currentUserData = await getUser(currentUserget?.id);
  
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
            <ThankyouMessage currentUser = {currentUser} />

            <div className="mt-5 pt-2">
              <DeliveryDetails confirmData = {confirmData} bookingId ={bookingid} />
            </div>
          </Grid>
          <Grid item xs={12} md={10} lg={4}>
          <OrderSummaryContainer confirmData={confirmData} providerData={providerData} />

          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Thankyou;
