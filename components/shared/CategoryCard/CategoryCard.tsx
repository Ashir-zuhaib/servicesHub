import Grid from "@mui/material/Grid";
import Styles from "./CategoryCard.module.css";
import ProductTitle from "../../ServicesCard/productTitle/productTitle";
import ProductPrice from "../../ServicesCard/productPrice/productPrice";
import Button from "@mui/material/Button";
import test from "../../../public/test.png";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start">
        <Grid item xs={6} md={6} className={Styles.border}>
          <Grid
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={Styles.CategoryCard}>
            <Image
              src={test}
              alt="Picture of the author"
              width={100}
              placeholder="blur" // Optional blur-up while loading
              blurDataURL="data:..."
              className="p-2"
            />
            <div className="px-2 py-2">
              <ProductTitle ProductName={"Ali Raza"} TagName={"p"} />
              <ProductPrice Price={500} />
              <p className={Styles.rating}>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.34986 1.17603L7.98494 4.48861L11.6414 5.02307L8.99562 7.60011L9.62002 11.2408L6.34986 9.52098L3.07971 11.2408L3.70411 7.60011L1.05835 5.02307L4.71478 4.48861L6.34986 1.17603Z"
                    fill="#F29D43"
                    stroke="#F29D43"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </svg>
                4.5/5
              </p>

              <p className="mb-0">
                Areas Available: Nazimabad, North Nazimabad, Liaquatabad,
                Hyderi, Paposh, F.B Area
              </p>
            </div>
          </Grid>
          <Button className={Styles.ctaAtcart} variant="text">
            <svg
            className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="CurrentColor">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
            </svg>
            Book Your Service
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryCard;
