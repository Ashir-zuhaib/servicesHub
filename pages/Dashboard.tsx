import Layout from "../components/layout";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import BookingTabs from "../components/BookingDetails/BookingDetails";
import { useRouter } from "next/router";
import Image from "next/image";
import websiteLogo from "../public/logo.png";

const Dashboard: any = () => {
  const router = useRouter();
  const [userId, setID] = useState("");
  const getData = async () => {
    let currentUserId = await localStorage?.getItem("uid");
    if (!currentUserId) {
      router.push("/");
    }
    setID(currentUserId);
  };
  // FETCH SERVICES DATA
  useEffect(() => {
    getData();
  }, []);

  // CAROUSEL IMAGES

  return (
    <>
      <div className="w-100 primary-color">
        <Container maxWidth="lg" className="py-3">
          <Image
            src={websiteLogo}
            alt="Logo"
            width={180}
            height={60}
          />
        </Container>
      </div>
      <Container maxWidth="lg">
        <BookingTabs currentUser={userId} />
      </Container>
    </>
  );
};

export default Dashboard;
