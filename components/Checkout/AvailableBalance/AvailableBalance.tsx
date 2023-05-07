import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import Wallet from "/public//Static/Wallet.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const AvailableBalance = () => {
  return (
    <Grid container className="bg-gray br-lg py-4 px-3" alignItems="center">
      <Grid item xs={2}>
        <Image src={Wallet} width={43} height={43} />
      </Grid>
      <Grid item xs={10} className="pl-2">
        <p className="is-size-14">Available Balance</p>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <p className="is-size-4 has-text-weight-bold">Rs. 2578.00</p>
          <span className="text-dawaai-blue">
            <AccessTimeIcon />
          </span>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AvailableBalance;
