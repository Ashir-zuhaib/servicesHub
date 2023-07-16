import Layout from "../components/layout";
import Container from "@mui/material/Container";
import CardCarousel from "../components/shared/CardsCarousel/CardCarousel";
import ProductsContainerWithButton from "../components/shared/ProductsContainer/ProductsContainerWithButton";
import { HomeCarousel } from "../components/HomeCarousel/HomeCarousel";

const Home: any = () => {
  let isMobileValue = false;
  return (
    <>
      <Layout isMobile={isMobileValue}>
        <Container maxWidth="lg">
          <HomeCarousel />
          <CardCarousel isMobile={isMobileValue} />
          <ProductsContainerWithButton
            title={"All Services"}
          />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
