import ProductCarousel from ".././ItemsCarousel/carouselItems";
import Grid from "@mui/material/Grid";
import BrandsCard from "./BrandCard";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
interface BrandCarousel {
  isMobile: boolean;
}
function BrandsCarousel({ isMobile }: BrandCarousel) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = () => {
    let brandsdata = [
      {
        id: "1",
        title: "Carpenter",
        img: "/carpenter.png",
      },
      {
        id: "2",
        title: "electrician",
        img: "/electrician.png",
      },
      {
        id: "3",
        title: "Plumber",
        img: "/plumber.png",
      },
      {
        id: "4",
        title: "House Help",
        img: "/carpenter.png",
      },
    ];
    // fetch("https://fakestoreapi.com/products", {
    //   headers: {
    //     "Content-Type": "popular brands/json",
    //     Accept: "popular brands/json",
    //   },
    // })
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (brandsdata) {
    //     console.log(brandsdata)
    //     setLoading(false);
    //     setData(brandsdata);
    //   });
    setLoading(false);
    setData(brandsdata);
  };
  useEffect(() => {
    getData();
  }, []);
  {
    data.map((item) => console.log(item.id));
  }
  return isLoading ? (
    <>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 0, md: 2 }}
        columns={{ xs: 12, sm: 0, md: 12, lg: 12 }}
        className={"py-5"}>
        {isMobile ? (
          <>
            <Grid item xs={12} md={12}>
              <Stack spacing={1}>
                <Skeleton variant="text" height={50} />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width="100%" height={200} />
              </Stack>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={12}>
              <Stack spacing={1}>
                <Skeleton variant="text" height={50} />
              </Stack>
            </Grid>
            <Grid item xs={8} md={4}>
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={320} height={220} />
              </Stack>
            </Grid>
            <Grid item xs={8} md={4}>
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={320} height={220} />
              </Stack>
            </Grid>
            <Grid item xs={8} md={4}>
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={320} height={220} />
              </Stack>
            </Grid>
          </>
        )}
      </Grid>
    </>
  ) : (
    <Grid
      container
      columnSpacing={{ xs: 2, sm: 2, md: 2 }}
      columns={{ xs: 12, sm: 2, md: 12, lg: 12 }}>
      <ProductCarousel
        show={3}
        infiniteLoop={true}
        carouselTitle={"Popular Categories"}
        isMobile={isMobile}>
        {data.map((item) => (
          <Grid container item xs={8} md={4}>
            <BrandsCard
              id={item["id"]}
              imgUrl={item["img"]}
              imgWidth={"190"}
              imgHeight={"130"}
              title={item["title"]}
            />
          </Grid>
        ))}
      </ProductCarousel>
    </Grid>
  );
}
export default BrandsCarousel;
