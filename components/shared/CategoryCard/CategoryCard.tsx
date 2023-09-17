import Grid from "@mui/material/Grid";
import Styles from "./CategoryCard.module.css";
import ProductPrice from "../../ServicesCard/productPrice/productPrice";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllLocation } from "../../../utils/getData";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import imagePlaceholder from "../../../public/images/image-placeholder.jpeg";

const CategoryCard = ({ worker }) => {
  const [locations, setLocation] = useState([]);
  const gettingLocation = async () => {
    const getLocation = await getAllLocation();
    const filter = getLocation.filter((location) =>
      location?.id == worker?.location
        ? (worker.locationName = location.value)
        : ""
    );
    setLocation(filter);
  };

  const router = useRouter();
  const handleNavigation = (id) => {
    router.push({
      pathname: "/ServiceProvider",
      query: { providerId: id },
    });
  };

  useEffect(() => {
    gettingLocation();
  }, []);
  return worker.locationName ? (
    <>
      <Grid item xs={12} md={12} className={Styles.border}>
        <Grid
          item
          direction="row"
          alignItems="center"
          justifyContent={"space-around"}
          className={Styles.CategoryCard}>
          <div>
            <Image
              src={worker?.profileImg ? worker?.profileImg : imagePlaceholder}
              alt="image"
              width={100}
              height={100}
              placeholder="blur" // Optional blur-up while loading
              blurDataURL="data:..."
              className={`px-2 ${Styles.image}`}
            />
          </div>
          <div>
            <h2 className="is-size-5 mb-0 is-capitalized">
              {worker?.full_name}
            </h2>
            <ProductPrice Price={worker?.hourlyRate} />
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
              {worker?.rating ? worker?.rating : "N/A"}/5
            </p>
            <p
              className="mb-0 text-16 has-text-capitalize"
              style={{ height: "38px", lineHeight: "20px" }}>
              Areas Available: {worker.locationName}
            </p>
          </div>
        </Grid>
        <Button
          onClick={() => handleNavigation(worker?.id)}
          className={Styles.ctaAtcart}
          variant="text">
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
    </>
  ) : (
    <Grid container className="mb-4">
      <Grid item xs={12} md={4}>
        <Skeleton
          variant="circular"
          width={100}
          height={100}
          className="mb-3"
        />
        <Skeleton
          variant="rectangular"
          width={310}
          height={30}
          className="mb-3"
        />
        <Skeleton variant="rounded" width={310} height={70} />
      </Grid>
    </Grid>
  );
};

export default CategoryCard;
