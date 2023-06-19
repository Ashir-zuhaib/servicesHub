import { Grid } from "@mui/material";
import SubHeading from "../shared/Headings/SubHeading";

const DeliveryDetails = () => {
  return (
    <div className="bg-gray br-lg px-4 pb-4 pt-3">
      <SubHeading title="Delivery Details" />
      <Grid container className="is-size-14" spacing={1}>
        <Grid item xs={5}>
          <p> Order Reference</p>
        </Grid>
        <Grid item xs={7}>
          <p className="is-size-6 underline has-text-weight-semibold">
            Cw-26378438 48
          </p>
        </Grid>
        <Grid item xs={5}>
          <p> Order Date</p>
        </Grid>
        <Grid item xs={7}>
          <p> 08-09-2022</p>
        </Grid>
        <Grid item xs={5}>
          <p> Delivery Address</p>
        </Grid>
        <Grid item xs={7}>
          <p>hsgten whjywuu wjkoiedi suuoisodsn</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryDetails;
