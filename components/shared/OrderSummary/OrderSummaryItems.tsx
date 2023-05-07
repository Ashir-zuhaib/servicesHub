import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import PrescriptionRequiredIcon from "../PrescriptionRequired/PrescriptionRequiredIcon";
import Styles from "../../Checkout/OrderSummary/OrderSummary.module.css";
import ProductImage from "/public/product-images/product-img-1.jpg";
import { Divider } from "@mui/material";

const OrderSummaryItems = () => {
  return (
    <>
      <Grid container className={"py-2  mt-1"}>
        <Grid item xs={2}>
          <Image src={ProductImage} width={70} height={70} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={9}>
            <Stack className="px-3" direction="column">
              <Stack direction="row" alignItems="center">
                <p className="has-text-weight-semibold is-size-14 mr-2 ">
                  Medicine Name
                </p>
              </Stack>
              <p className="text-blury is-size-7 ">Pack Size fro Medicine</p>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack
              className="px-3 is-size-7"
              direction="column"
              justifyContent="center"
              alignItems="end"
            >
              <PrescriptionRequiredIcon />
              <span className="text-blury">x5</span>
              <p>Rs.3000</p>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default OrderSummaryItems;
