import Layout from "../components/layout";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
// DUMMY IMAGES
import bannerImage1 from "../public/images/banner-img.png";
import bannerImage2 from "../public/images/banner-img2.png";
import BookingTabs from "../components/BookingDetails/BookingDetails"
import { useRouter } from "next/router";

const Dashboard: any = () => {
  const router = useRouter();

  let isMobileValue = false;
  const [userId, setID] = useState("");
  const getData = async()=>{
    let currentUserId = await localStorage?.getItem("uid");
    if(!currentUserId){
      router.push("/")
    }
    setID(currentUserId)
  }
  // FETCH SERVICES DATA
 useEffect(()=>{
  getData()
 },[])

  // CAROUSEL IMAGES
  
  return (
    <>
      <Layout isMobile={isMobileValue}>
        <Container maxWidth="lg">
         <BookingTabs currentUser={userId}/> 
        </Container>
      </Layout>
    </>
  );
};

export default Dashboard;
