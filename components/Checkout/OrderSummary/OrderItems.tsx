import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import PrescriptionRequiredIcon from "../../shared/PrescriptionRequired/PrescriptionRequiredIcon";
import Styles from "./OrderSummary.module.css";
interface orderItems {
  imgUrl: any;
}
const OrderItems = ({ imgUrl }: orderItems) => {
  return (
    <Grid container className={"py-2 px-2 has-background-white br-lg mb-4"}>
      <Grid item xs={2}>
        <Image src={imgUrl} width={200} height={200} alt="service provider" />
      </Grid>
      <Grid container item xs={10} justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <p className="text-primary-color is-size-6">Carpenter</p>
          <p className="has-text-weight-semibold mr-2 is-size-5">Zia Farooqi</p>
          <p className="text-light is-size-6 ">
            Address Selected: 2/3 Nazimabad no 5
          </p>
        </Grid>
        <Grid item xs={4}>
          <Stack
            className="px-3"
            direction="column"
            justifyContent="center"
            alignItems="end">
            <p className={Styles.actualPrice}>23-July-2023</p>
            <p className={Styles.discountedPrice}>4:00 pm - 6:00 pm</p>
            <p className="text-light is-size-6 ">2 hrs</p>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderItems;
