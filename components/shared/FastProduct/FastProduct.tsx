import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Stack from "@mui/material/Stack";
function FastProduct() {
  return (
    <Stack direction="row" alignItems="center">
      <CheckCircleRoundedIcon fontSize="small" sx={{color:'#32AA9E'}} />
      <p className="is-size-7 px-2">
        <span className="is-italic">FAST </span>
        delivery
      </p>
    </Stack>
  );
}

export default FastProduct;
