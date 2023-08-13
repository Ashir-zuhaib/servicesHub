import ProductCarousel from "../ItemsCarousel/carouselItems";
import Grid from "@mui/material/Grid";
import Card from "./Card";

interface CardCarousel {
  data: any;
}
function CardCarousel({ data }: CardCarousel) {
  return (
    <Grid
      container
      columnSpacing={{ xs: 2, sm: 2, md: 2 }}
      columns={{ xs: 12, sm: 2, md: 12, lg: 12 }}>
      <ProductCarousel
        show={3}
        infiniteLoop={true}
        carouselTitle={"Popular Categories"}>
        {data.map((item) => (
          <Grid container item xs={8} md={4}>
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
    </Grid>
  );
}
export default CardCarousel;
