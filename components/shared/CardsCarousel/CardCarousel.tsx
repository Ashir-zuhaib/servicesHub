import ProductCarousel from "../ItemsCarousel/carouselItems";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import { Skeleton } from "@mui/material";

interface CardCarousel {
  data: any;
}
function CardCarousel({ data }: CardCarousel) {
  return (
    <Grid
      container
      columnSpacing={{ xs: 2, sm: 2, md: 2 }}
      columns={{ xs: 12, sm: 2, md: 12, lg: 12 }}>
      {data.length ? (
        <ProductCarousel
          show={3}
          infiniteLoop={true}
          carouselTitle={"Popular Categories"}>
          {data.map((item) => (
            <Grid container item xs={8} md={4} key={item?.id}>
              <Card
                id={item?.id}
                imgUrl={item?.img}
                imgWidth={350}
                imgHeight={160}
                title={item["name"]}
              />
            </Grid>
          ))}
        </ProductCarousel>
      ) : (
        <>
          <Grid container item xs={8} md={4} key={1}>
            <Skeleton
              variant="rectangular"
              width={359}
              height={160}
              className="mb-2"
            />
            <Skeleton variant="rectangular" width={359} height={40} />
          </Grid>{" "}
          <Grid container item xs={8} md={4} key={2}>
            <Skeleton
              variant="rectangular"
              width={359}
              height={160}
              className="mb-2"
            />
            <Skeleton variant="rectangular" width={359} height={40} />
          </Grid>{" "}
          <Grid container item xs={8} md={4} key={3}>
            <Skeleton
              variant="rectangular"
              width={359}
              height={160}
              className="mb-2"
            />
            <Skeleton variant="rectangular" width={359} height={40} />
          </Grid>
        </>
      )}
    </Grid>
  );
}
export default CardCarousel;
