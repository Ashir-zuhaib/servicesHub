import { Stack } from "@mui/material";
import Heading from "../shared/Headings/Heading";
import thankyou from "/public/Static/thankyou.gif";
import Image from "next/image";
const ThankyouMessage = () => {
  const isMobile = true;
  return (
    <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
      <div>
        <Image src={thankyou} width={150} height={150} />
      </div>
      <div className="has-text-centered-mobile">
        <Heading
          title={
            isMobile
              ? "Thankyou for Your Order"
              : "Thank you for shopping with Dawaai!"
          }
        />
        <p className="is-size-14">
          Your order has been placed. A confirmation email will be sent to you
          at <strong>abc@gmail.com</strong> with you complete order details.
        </p>
      </div>
    </Stack>
  );
};

export default ThankyouMessage;
