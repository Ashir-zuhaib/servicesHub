import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DawaaiLogo from "./Logo/Logo";
import MainSearch from "./MainSearch/MainSearch";
import Styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Cartsheet from "../Cartsheet/Cartsheet";
import ProfileModal from "./ProfileModal/ProfileModal";
import Link from "next/link";
import DropdownComponent from "../DropDownLogin/dropdown";
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
            className={Styles.headerTop}
          >
            <Grid item lg="auto">
              {isMobile ? <MenuIcon fontSize="large" className="mr-2" /> : ""}
              <Link href={"/"} legacyBehavior>
                <a>
                  <DawaaiLogo logoSkeleton={false} width={156} height={43} />
                </a>
              </Link>
            </Grid>
            {!isMobile ? (
              <Grid item lg={6} sx={{ display: "flex" }} style={{width:50}}>
                <MainSearch />
              </Grid>
            ) : (
              ""
            )}

            <Grid item lg="auto">
              <Cartsheet />
            </Grid>
            {!isMobile ? (
              <Grid item>
                {/* <ProfileModal /> */}
                <DropdownComponent />
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