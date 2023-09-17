import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MainSearch from "./MainSearch/MainSearch";
import Styles from "./header.module.css";
import ProfileModal from "./ProfileModal/ProfileModal";
import Link from "next/link";
import DropdownComponent from "../DropDownLogin/dropdown";
import firebase from "../../config";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import websiteLogo from "../../public/logo.png";

function Header() {
  const [userData, setUserData] = useState<any | null>(null);
  const checkLogin = async () => {
    let currentUserId = await localStorage?.getItem("uid");
    if (currentUserId) {
      await firebase
        .firestore()
        .collection("Users")
        .doc(currentUserId)
        .get()
        .then((doc) => {
          const firebaseUserData = doc.data() as any; // Type casting to any
          setUserData(firebaseUserData);
        });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <header>
      <Container maxWidth="lg">
        <Grid container className={Styles.headerTop}>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              display: "block",
              "@media (min-width: 768px)": {
                display: "flex",
              },
            }}>
            <Link href={"/"} className="flex-center-lg mr-5">
              <Image
                src={websiteLogo}
                alt="Logo"
                width={260}
                height={100}
              />
            </Link>
            <MainSearch />
          </Grid>
          <Grid item xs={12} md={'auto'} className={Styles.profile}>
            {userData ? (
              <ProfileModal currentUserId={userData?.userId} userData={userData} setUserData={setUserData} />
            ) : (
              <DropdownComponent />
            )}
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
