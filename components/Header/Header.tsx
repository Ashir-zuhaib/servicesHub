import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import WebsiteLogo from "./Logo/Logo";
import MainSearch from "./MainSearch/MainSearch";
import Styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Cartsheet from "../Cartsheet/Cartsheet";
import ProfileModal from "./ProfileModal/ProfileModal";
import Link from "next/link";
interface header {
  isMobile: boolean;
}
function Header({ isMobile }: header) {
  return (
    <header>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 2, md: 2 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            className={Styles.headerTop}>
            <Grid item lg="auto">
              {isMobile ? <MenuIcon fontSize="large" className="mr-2" /> : ""}
              <Link href={"/"} legacyBehavior>
                <a>
                  <WebsiteLogo />
                </a>
              </Link>
            </Grid>
            {!isMobile ? (
              <Grid
                item
                lg={6}
                sx={{ display: "flex" }}
                style={{ width: 500, marginRight: "11%" }}>
                <MainSearch />
              </Grid>
            ) : (
              ""
            )}
            {!isMobile ? (
              <Grid item>
                <Link href={"/ProductPage"}> Login / signup</Link>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          {isMobile ? (
            <Grid item lg={6} sx={{ display: "flex" }}>
              <MainSearch />
            </Grid>
          ) : (
            ""
          )}
        </Box>
      </Container>
    </header>
  );
}

export default Header;
