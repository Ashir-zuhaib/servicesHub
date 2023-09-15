import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { getBookings, getService, getUser } from "../../utils/getData";
import { BookingCard } from "./BookingCard";
import swal from "sweetalert";
import firebase from "../../config";
import { CircularProgress } from "@mui/material";
import { Grid } from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BookingTabs({ currentUser }) {
  const [userId, setUSerId] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [bookingItem, setBookingItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // Added loading state

  const getBookingData = async (value) => {
    setUSerId(currentUser);
    let status = "active";
    status = value == 1 ? "completed" : value == 2 ? "cancelled" : "active";

    let bookingData = await getBookings(status, currentUser);

    const updatedBookingData = await Promise.all(
      bookingData.map(async (item) => {
        console.log("I wie", item);
        const customerData = await getUser(item?.customerId);
        const serviceProviderData = await getUser(item?.serviceProvider);
        const serviceData = await getService(serviceProviderData?.role);
        // Add customerData and serviceProviderData to the item
        return {
          ...item,
          customerData: customerData,
          serviceProviderData: serviceProviderData,
          serviceData: serviceData,
        };
      })
    );
    setBookingItems(updatedBookingData);
    setIsLoading(false); // Data is loaded, set isLoading to false
  };

  React.useEffect(() => {
    getBookingData(value);
  }, [value]);

  const handleCompleteBooking = (bookingId) => {
    setBookingItems((prevBookingItems) =>
      prevBookingItems.filter((item) => item.id !== bookingId)
    );
    firebase
      .firestore()
      .collection("Bookings")
      .doc(bookingId)
      .update({
        status: "completed",
      })
      .then(() => {
        swal("Completed");
      });
  };

  const handleCancelBooking = (bookingId) => {
    setBookingItems((prevBookingItems) =>
      prevBookingItems.filter((item) => item.id !== bookingId)
    );
    firebase
      .firestore()
      .collection("Bookings")
      .doc(bookingId)
      .update({
        status: "cancelled",
      })
      .then(() => {
        swal("Cancelled");
      });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setIsLoading(true); // Set isLoading to true when changing tabs to show loading indicator
  };

  return (
    <Box sx={{ width: "100%" }} className="px-0 pt-3">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
          <Tab label="Cancelled" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {isLoading ? ( // Display loading indicator while data is loading
          <Box
            sx={{
              height: "80vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <CircularProgress />
          </Box>
        ) : bookingItem.length ? (
          <Grid container spacing={2}>
            {" "}
            {/* Added Grid container */}
            {bookingItem?.map((item) =>
              item?.status == "active" ? (
                <Grid item xs={12}  md={4} key={item.id}>
                  {" "}
                  {/* Added Grid item */}
                  <BookingCard
                    key={item.id}
                    item={item}
                    onComplete={() => handleCompleteBooking(item.id)}
                    onCancel={() => handleCancelBooking(item.id)}
                  />
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        ) : (
          <p>No Active Booking</p>
        )}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {isLoading ? ( // Display loading indicator while data is loading
          <Box
            sx={{
              height: "80vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <CircularProgress />
          </Box>
        ) : bookingItem.length ? (
          <Grid container>
            {" "}
            {/* Render the Grid outside the map */}
            {bookingItem.map((item) =>
              item?.status == "completed" ? (
                <Grid item xs={12}  md={4} key={item.id}>
                  <BookingCard
                    key={item.id}
                    item={item}
                    onComplete={() => handleCompleteBooking(item.id)}
                    onCancel={() => handleCancelBooking(item.id)}
                  />
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        ) : (
          <p>No Complete Booking</p>
        )}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        {isLoading ? (
          <Box
            sx={{
              height: "80vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <CircularProgress />
          </Box>
        ) : bookingItem.length ? (
          <Grid container spacing={2}>
            {" "}
            {/* Added Grid container */}
            {bookingItem?.map((item) =>
              item?.status == "cancelled" ? (
                <Grid item xs={12}  md={4} key={item.id}>
                  {" "}
                  {/* Added Grid item */}
                  <BookingCard
                    key={item.id}
                    item={item}
                    onComplete={() => handleCompleteBooking(item.id)}
                    onCancel={() => handleCancelBooking(item.id)}
                  />
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        ) : (
          <p>No Cancelled Booking </p>
        )}
      </CustomTabPanel>
    </Box>
  );
}
