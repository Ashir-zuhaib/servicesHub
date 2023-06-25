import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import websiteLogo from "../../../public/logo.png";

function WebsiteLogo() {
  return (
    <>
      <Image src={websiteLogo} alt="Logo" width={180} height={60} />
    </>
  );
}
export default WebsiteLogo;
