import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";
import Styles from "./breadcrumb.module.css";
import { Grid } from "@mui/material";
function Breadcrumb() {
  return (
    <Grid container item xs={12}>
      <Stack direction="row" alignItems="center" className={Styles.breadcrumb}>
        <Link href="/About">
          <a>About Us</a>
        </Link>
        <NavigateNextIcon fontSize="small" />
        <Link href="/About" legacyBehavior>
          <a>About Us</a>
        </Link>
        <NavigateNextIcon fontSize="small" />
        <Link href="/About" legacyBehavior>
          <a>About Us</a>
        </Link>
        <NavigateNextIcon fontSize="small" />
      </Stack>
    </Grid>
  );
}

export default Breadcrumb;
