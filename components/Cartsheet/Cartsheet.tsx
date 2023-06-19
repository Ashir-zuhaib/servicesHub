import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CartBag from "../Cart/CartBag/CartBag";
import CartItems from "./CartItems";
import {Stack} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";

type Anchor = "bottom" | "right";
let isMobile = false;

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
    bottom: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (event.type === "keydown") {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box role="presentation" onKeyDown={toggleDrawer(anchor, false)}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        className={"px-4 mt-5"}
      >
        <p className={"has-text-weight-semibold is-size-5"}>Cart Item</p>
        <CloseIcon  onClick={toggleDrawer(anchor, false)} />
      </Stack>
      <CartItems />
    </Box>
  );
  return isMobile ? (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)}>
            <CartBag />
          </span>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  ) : (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)}>
            <CartBag />
          </span>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
