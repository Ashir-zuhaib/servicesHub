import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
export const BookingCard = ({ ...props }) => {
  return (
    <Card
      key={props.item.id}
      sx={{
        maxWidth: 345,
        margin: "8px 4px",
        boxShadow: "none",
        padding: "4px 0px",
        border: "1px solid #e8e8e8",
      }}>
      {props.item?.status !== "active" ? (
        <p className="px-4 py-3 is-uppercase has-font-bold is-size-6 has-background-grey-lighter has-text-weight-semibold has-text-centered">
          {" "}
          {props.item?.status}
        </p>
      ) : (
        ""
      )}
      <CardContent className="py-2">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="has-text-weight-semibold	is-capitalized mb-0">
          {props.item?.customerData?.full_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Service: {props.item?.serviceData?.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Address: {props.item?.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact: {props.item?.contactNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Appointment Date: {props.item?.apptDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Appointment Time: {props.item?.startTime + "-" + props.item?.endTime}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Charges: {props.item?.total}
        </Typography>
      </CardContent>
      {props.item?.status == "active" ? (
        <CardActions className="px-4">
          <Button
            size="small"
            color="primary"
            className="primary-color has-text-white px-2"
            onClick={props.onComplete}>
            Complete
          </Button>
          <Button size="small" color="error" onClick={props.onCancel}>
            Cancel
          </Button>
        </CardActions>
      ) : (
        ""
      )}
    </Card>
  );
};
