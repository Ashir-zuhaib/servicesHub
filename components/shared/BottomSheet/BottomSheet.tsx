import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { jsx } from "@emotion/react";

type Anchor = "bottom";
interface bottomSheet {
  labelToPass: JSX.Element;
  BodyToPass: JSX.Element;
  BottomSheetTitle: string;
}

export default function BottomSheet({
  labelToPass,
  BodyToPass,
  BottomSheetTitle,
}: bottomSheet) {
  const [state, setState] = React.useState({
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
    <Box
      sx={{ width: anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack direction="row" alignItems="center" className="pt-4">
        <CloseIcon className="mr-3" onClick={toggleDrawer(anchor, false)} />
        <Typography variant="h6" component="h2">
          {BottomSheetTitle}
        </Typography>
      </Stack>
      {BodyToPass}
    </Box>
  );

  return (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)}>{labelToPass}</span>
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
