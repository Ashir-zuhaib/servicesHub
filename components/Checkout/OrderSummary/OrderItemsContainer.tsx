import ProductImage from "../../../public/carpenter.png";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Styles from "./OrderSummary.module.css";
import { useState } from "react";
import { getAllService } from "../../../utils/getData";
import imagePlaceholder from "../../../public/images/image-placeholder.jpeg";

interface OrderItemsContainer {
  bookingDetail: any;
  providerData: any;
}
const OrderItemsContainer = ({
  bookingDetail,
  providerData,
}: OrderItemsContainer) => {
  const [bookingData, setBookingData] = useState();
  const [serviceName, setServiceName] = useState();
  const gettingService = async () => {
    const getService = await getAllService();
    const filter = getService?.filter((service) =>
      service?.id == providerData?.role ? setServiceName(service?.name) : ""
    );
  };
  return (
    <Grid container className={"py-2 px-2 has-background-white br-lg mb-4"}>
      <Grid item xs={2}>
        <Image
          src={
            providerData?.profileImg
              ? providerData?.profileImg
              : imagePlaceholder
          }
          width={400}
          height={400}
          style={{ borderRadius: "60%" }}
          alt="service provider"
        />
      </Grid>
      <Grid container item xs={10} justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <p className="text-primary-color is-size-6">{serviceName}</p>
          <p className="has-text-weight-semibold mr-2 is-size-5">
            {providerData?.full_name}
          </p>
          <p className="text-light is-size-6 ">{bookingDetail?.address}</p>
        </Grid>
        <Grid item xs={4}>
          <Stack
            className="px-3"
            direction="column"
            justifyContent="center"
            alignItems="end">
            <p className={Styles.actualPrice}>{bookingDetail?.apptDate}</p>
            <p className={Styles.discountedPrice}>
              {bookingDetail?.startTime} - {bookingDetail?.endTime}
            </p>
            <p className="text-light is-size-6 ">
              {bookingDetail?.noOfHours} hrs
            </p>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderItemsContainer;
