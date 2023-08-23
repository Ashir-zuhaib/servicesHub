import { Stack } from "@mui/material";
import Heading from "../shared/Headings/Heading";
import thankyou from "/public/Static/thankyou.gif";
import Image from "next/image";
const ThankyouMessage = ({currentUser}) => {
  const isMobile = true;
  return (
    <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
      <div>
        <Image src={thankyou} width={150} height={150} alt="test" />
      </div>
      <div className="has-text-centered-mobile">
        <Heading title="Thankyou for Booking a Service" />
        <p className="is-size-14">
          Your order has been placed. A confirmation email will be sent to you
          at <strong>{currentUser?.email}</strong> with you complete order details.
        </p>
      </div>
    </Stack>
  );
};

export default ThankyouMessage;
