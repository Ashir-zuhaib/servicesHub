import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import ProductImage from "../../../public/carpenter.png";
import { Divider } from "@mui/material";

const OrderSummaryItems = () => {
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
              src={ProductImage}
              width={120}
              height={120}
              alt="service provider"
            />
          </Grid>
          <Grid item xs={9}>
            <p className="has-text-weight-semibold mr-2 ">Zia Farooqi</p>
            <p className="text-blury ">Carpenter</p>
          </Grid>
          <Grid item xs={3} className="text-right">
            <span className="text-blury">x2 hrs</span>
            <p>Rs.1000</p>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default OrderSummaryItems;
