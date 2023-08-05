import Stack from "@mui/material/Stack";
interface textInColumnForPricing {
  leftText: string;
  rightText: string;
  isBold: boolean;
}
function TextInColumnForPricing({
  leftText,
  rightText,
  isBold,
}: textInColumnForPricing) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      className={"my-3"}
      alignItems="center">
      <p className="is-size-6">{leftText}</p>
      <p
        className={isBold ? "has-text-weight-semibold is-size-6" : "is-size-6"}>
        Rs.{rightText}
      </p>
    </Stack>
  );
}

export default TextInColumnForPricing;
