import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { getBookings, getService, getUser } from "../../utils/getData";
import { BookingCard } from "./BookingCard";
import swal from "sweetalert";

import firebase from "../../config";
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
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BookingTabs({currentUser}) {
  const [userId, setUSerId]= React.useState("")
  const [value, setValue] = React.useState(0);
  const [bookingItem, setBookingItems] = React.useState([]);
  const getBookingData = async (value) => {
    setUSerId(currentUser)    
    let status = "active";
    status = value == 1 ? "completed" : value == 2 ? "cancelled" : "active";

    let bookingData = await getBookings(status,currentUser );
    // Fetch customerData and serviceProviderData for each booking item
    const updatedBookingData = await Promise.all(
      bookingData.map(async (item) => {
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
  };

  React.useEffect(() => {
    getBookingData(value);

  }, [value]);
  const handleCompleteBooking = (bookingId) => {
    // Update the bookingItem state to exclude the completed booking
    setBookingItems((prevBookingItems) =>
      prevBookingItems.filter((item) => item.id !== bookingId)
    );
    firebase.firestore().collection("Bookings").doc(bookingId).update({
      status:"completed"
    }).then(()=>{
      swal("Completed")
    })
    
  };

  const handleCancelBooking = (bookingId) => {
    // Update the bookingItem state to exclude the canceled booking
    setBookingItems((prevBookingItems) =>
      prevBookingItems.filter((item) => item.id !== bookingId)
    );
    firebase.firestore().collection("Bookings").doc(bookingId).update({
      status:"cancelled"
    }).then(()=>{
      swal("Cancelled")
    })
    // Make an API call or perform any other necessary actions for canceling the booking
    // ...
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
          <Tab label="Cancelled" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {bookingItem.length ? (
          bookingItem?.map((item) =>
            item?.status == "active" ? (
              <BookingCard
                key={item.id}
                item={item}
                onComplete={() => handleCompleteBooking(item.id)}
                onCancel={() => handleCancelBooking(item.id)}
              />
            ) : (
              ""
            )
          )
        ) : (
          <p>no active booking</p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {bookingItem.length ? (
          bookingItem?.map((item) =>
            item?.status == "completed" ? (
              <BookingCard key={item.id} item={item} onComplete={() => handleCompleteBooking(item.id)}
              onCancel={() => handleCancelBooking(item.id)}  />
            ) : (
              ""
            )
          )
        ) : (
          <p>no Complete Booking</p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {bookingItem.length ? (
          bookingItem?.map((item) =>
            item?.status == "cancelled" ? (
              <BookingCard key={item.id} item={item} onComplete={() => handleCompleteBooking(item.id)}
              onCancel={() => handleCancelBooking(item.id)}/>
            ) : (
              ""
            )
          )
        ) : (
          <p>no Cancelled Booking </p>
        )}
      </CustomTabPanel>
    </Box>
  );
}
