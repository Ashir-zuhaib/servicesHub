import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Styles from "../SectionOffers/offersCard.module.css";

interface offersCard {
  id: number;
  imgUrl: string;
  altTxt: string;
  imgWidth: string;
  imgHeight: string;
  discount: string;
  description: string;
  promoCode: string;
}

function OffersCard({
  id,
  imgUrl,
  altTxt,
  imgWidth,
  imgHeight,
  discount,
  description,
  promoCode,
}: offersCard) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        className={Styles.offersCard}
      >
        <Image
          src={imgUrl}
          alt={altTxt}
          width={imgWidth}
          height={imgHeight}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <p className={Styles.actionText}>{discount}</p>
        <Grid direction="row" justifyContent="center" alignItems="center">
          <p className={Styles.offersDescription}>{description}</p>
        </Grid>
        <div className="divider-unique"></div>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button className={Styles.actionText} variant="text">
            {promoCode}
          </Button>
          <Link href="/" legacyBehavior>
            <a className={Styles.conditionApplied}>*Terms & Condition apply</a>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
export default OffersCard;
