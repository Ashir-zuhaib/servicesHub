import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Styles from "./Cartsheet.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import QuantityUpdateButtons from "../shared/Buttons/QuantityButton/QuantityUpdateButtons";
import Divider from "@mui/material/Divider";
import Image from "next/image";

interface productListing {
  id: string;
  imgUrl: any;
  title: string;
  packSize: string;
  price: number;
  qtyValue: number;
}

const ProductsListing = ({
  id,
  imgUrl,
  title,
  packSize,
  price,
  qtyValue,
}: productListing) => {
  return (
    <>
      <Grid container className={"py-4 px-4"}>
        <Grid item xs={3}>
          <Image src={imgUrl} alt="cart" width={100} height={100} />
        </Grid>
        <Grid item xs={9}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <div>
              <p>{title}</p>
              <span>{packSize}</span>
            </div>
            <p className={"has-text-weight-semibold"}>Rs. {price}</p>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            {/* <QuantityUpdateButtons InputValue={qtyValue} updateCount={qtyValue}  isWhite={false} /> */}
            <DeleteOutlineIcon
              color="action"
              fontSize="large"
              className={Styles.removeIcon}
            />
          </Stack>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default ProductsListing;
