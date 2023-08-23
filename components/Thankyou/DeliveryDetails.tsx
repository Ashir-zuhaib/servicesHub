import { Grid } from "@mui/material";
import SubHeading from "../shared/Headings/SubHeading";

const DeliveryDetails:any = ({confirmData, bookingId}) => {
  return (
    <div className="bg-gray br-lg px-4 pb-4 pt-3 is-size-6">
      <SubHeading title="Delivery Details" />
      <Grid container className="is-size-14" spacing={1}>
        <Grid item xs={5}>
          <p> Order Reference</p>
        </Grid>
        <Grid item xs={7}>
          <p className="is-size-6 underline has-text-weight-semibold">
            {bookingId}
          </p>
        </Grid>
        <Grid item xs={5}>
          <p> Service Date</p>
        </Grid>
        <Grid item xs={7}>
          <p> {confirmData?.apptDate} | {confirmData?.startTime} to {confirmData?.endTime}</p>
        </Grid>
        <Grid item xs={5}>
          <p> Service Time</p>
        </Grid>
        <Grid item xs={7}>
          <p> {confirmData?.startTime} to {confirmData?.endTime}</p>
        </Grid>
        <Grid item xs={5}>
          <p> Service provided at Address</p>
        </Grid>
        <Grid item xs={7}>
          <p>{confirmData?.address}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryDetails;
