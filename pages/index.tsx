import Layout from "../components/layout";
import Container from "@mui/material/Container";
import BrandCarousel from "../components/shared/BrandsCarousel/BrandCarousel";
import ProductsContainerWithButton from "../components/shared/ProductsContainer/ProductsContainerWithButton";
import { HomeCarousel } from "../components/HomeCarousel/HomeCarousel";

const Home: any = () => {
  let isMobileValue = false;
  return (
    <>
      <Layout isMobile={isMobileValue}>
        <Container maxWidth="lg">
          <HomeCarousel />
          <BrandCarousel isMobile={isMobileValue} />
          <ProductsContainerWithButton
            title={"All Services"}
          />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
