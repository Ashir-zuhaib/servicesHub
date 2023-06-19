import { Grid } from "@mui/material";
import Styles from "./BottomSheet.module.css";
const FixedBottomSheet = ({bottomSheetBody}: any) => {
  return (
    <Grid container className={Styles.fixedBottom} alignItems="center">
      {bottomSheetBody}
    </Grid>
  );
};

export default FixedBottomSheet;
