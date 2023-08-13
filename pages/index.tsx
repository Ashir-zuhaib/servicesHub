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
          <div className={'carousel-height'}>
            <HomeCarousel />
          </div>
          <div className="py-5">
            <CardCarousel isMobile={isMobileValue} />
          </div>
          <div className="py-5">
            <ProductsContainerWithButton
              title={"All Services"}
              showAll={false}
            />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
