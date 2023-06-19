import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";

function CartSheetHeader() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      className={"px-4"}
    >
      <p className={"has-text-weight-semibold"}>Cart Item</p>
      <CloseIcon />
    </Stack>
  );
}

export default CartSheetHeader;
