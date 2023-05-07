import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "./brand-cards.module.css";

interface brandsCard {
  id: number;
  imgUrl: string;
  imgWidth: string;
  imgHeight: string;
  title: string;
  logoWidth: string;
  logoUrl: string;
  logoHeight: string;
}

function BrandsCard({
  id,
  imgUrl,
  imgWidth,
  imgHeight,
  title,
  logoWidth,
  logoUrl,
  logoHeight,
}: brandsCard) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            flexDirection={"column"}
            justifyContent={"space-around"}
            className={Styles.boxStyles}
          >
            <Grid container justifyContent={"center"}>
              <Image
                src={logoUrl}
                alt={title}
                width={logoWidth}
                height={logoHeight}
              />
            </Grid>
            <Grid container justifyContent={"center"}>
              {" "}
              <Image
                src={imgUrl}
                alt={title}
                width={imgWidth}
                height={imgHeight}
              />
            </Grid>
            <Grid container justifyContent={"center"}>
              <Link href="https://dawaai.pk"><span className={Styles.brandName}>{title}</span>
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default BrandsCard;
