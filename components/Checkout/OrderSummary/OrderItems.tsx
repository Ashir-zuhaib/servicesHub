import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import PrescriptionRequiredIcon from "../../shared/PrescriptionRequired/PrescriptionRequiredIcon";
import Styles from "./OrderSummary.module.css";
interface orderItems {
  imgUrl: string;
}
const OrderItems = ({ imgUrl }: orderItems) => {
  return (
    <Grid container className={"py-2 px-2 has-background-white br-lg mb-4"}>
      <Grid item xs={1}>
        <Image src={imgUrl} width={70} height={70} />
      </Grid>
      <Grid container item xs={11} justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <Stack className="px-3" direction="column">
            <p className="text-dawaai-blue is-size-7">Brand Name</p>
            <Stack direction="row" alignItems="center">
              <p className="has-text-weight-semibold is-size-14 mr-2 ">
                Medicine Name
              </p>
              <PrescriptionRequiredIcon />
            </Stack>
            <p className="text-light is-size-7 ">Pack Size fro Medicine</p>
          </Stack>
        </Grid>
        <Grid item xs={1} className="has-text-centered">
          <span>x5</span>
        </Grid>
        <Grid item xs={3}>
          <Stack
            className="px-3"
            direction="column"
            justifyContent="center"
            alignItems="end"
          >
            <p className={Styles.actualPrice}>Rs.2000</p>
            <p className={Styles.discountedPrice}>Rs.1500</p>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderItems;
