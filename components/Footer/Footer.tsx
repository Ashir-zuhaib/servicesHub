import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";
import websiteLogo from "../../public/logo.png";

function Footer() {
  return (
    <Grid
      container
      justifyContent="center"
      className="mt-5"
      sx={{ backgroundColor: "#1976d2" }}>
      <Grid container item xs={12} md={9} className="px-5 py-5 has-text-centered">
        <p className="mx-auto has-text-white">
          © 2023 Services Hub. All Rights Reserved. Your trusted partner in
          service excellence.
        </p>
      </Grid>
    </Grid>
  );
}

export default Footer;
