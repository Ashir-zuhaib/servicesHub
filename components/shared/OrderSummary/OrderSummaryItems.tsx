import Grid from "@mui/material/Grid";
import Image from "next/image";
import ProductImage from "../../../public/carpenter.png";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllService } from "../../../utils/getData";

const OrderSummaryItems = ({ confirmData, providerData }) => {
  const [serviceName,setServiceName]=useState("")
  console.log("profileImgprofileImg",providerData);
  
  const gettingService = async () => {
    const getService = await getAllService();
      const filter = getService?.filter((service) =>
        service?.id == providerData?.role
          ? setServiceName(service?.name)
          : ""
      );
    }
    useEffect(()=>{
      gettingService()
    },[])
  return (
    <>
      <Grid container className={"py-2 px-2 mt-1 is-size-6"}>
        <Grid
          container
          item
          xs={12}
          justifyContent="space-between"
          alignItems="center">
          <Grid item xs={12} className="text-center">
            <Image
              src={providerData?.profileImg}
              width={120}
              height={120}
              alt="service provider"
            />
          </Grid>
          <Grid item xs={9}>
            <p className="has-text-weight-semibold mr-2 ">{providerData?.full_name}</p>
            <p className="text-blury ">{serviceName}</p>
          </Grid>
          <Grid item xs={3} className="text-right">
            <span className="text-blury">x{confirmData?.noOfHours} hrs</span>
            <p>Rs. {confirmData?.chargesPerHour}</p>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default OrderSummaryItems;
