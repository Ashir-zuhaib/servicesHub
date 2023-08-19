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
      sx={{ backgroundColor: "#f9f9fc" }}>
      <Grid container item xs={12} md={8} className="px-5 py-5">
        <Grid item xs={12} md={3}>
          <Link href={"/"} className="flex-center">
            <Image src={websiteLogo} alt="Logo" width={180} height={60} />
          </Link>
          <p>200-A, SMCHS, Karachi Sindh Pakistan</p>
        </Grid>
        <Grid item xs={1}>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ width: "1px", margin: "auto" }}
          />
        </Grid>
        <Grid container item xs={12} md={8}>
          <Grid item xs={12} md={8}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            totam optio voluptates architecto. Saepe voluptatibus nisi deserunt
            nobis nam. Explicabo ullam mollitia corporis eius cupiditate
            laboriosam repellat minima a quia!
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
