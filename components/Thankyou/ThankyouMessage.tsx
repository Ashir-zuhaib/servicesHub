import { Stack } from "@mui/material";
import Heading from "../shared/Headings/Heading";
import thankyou from "/public/Static/thankyou.gif";
import Image from "next/image";
const ThankyouMessage = ({ bookingId }) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
      <div>
        <Image src={thankyou} width={150} height={150} alt="test" />
      </div>
      <div className="has-text-centered-mobile">
        <Heading title="Thankyou for Booking a Service" />
        <p className="is-size-14">
          Your order has been placed. For any queries regarding your booking
          feel free to contact us on
          <b> servicesHubHelp@gmail.com</b> with mentioning your order reference
          number <b>"{bookingId}"</b>
        </p>
      </div>
    </Stack>
  );
};

export default ThankyouMessage;
