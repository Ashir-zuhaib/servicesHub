import Layout from "../components/layout";
import Container from "@mui/material/Container";
import BrandCarousel from "../components/shared/BrandsCarousel/BrandCarousel";
import ProductsContainerWithButton from "../components/shared/ProductsContainer/ProductsContainerWithButton";
interface home{
  isMobile: boolean;
}
const Home: any = ({isMobile}:home) => {
  let isMobileValue = false
  return (
    <>
      <Layout isMobile={isMobileValue}>
        <Container maxWidth="lg">
          <BrandCarousel isMobile={isMobileValue}/>
         <ProductsContainerWithButton
            title={"All Services"}
            buttonText={"View All"}
            buttonLink={"/Medicines"}
            isMobile={isMobileValue}
          />
          
        </Container>
      </Layout>
    </>
  );
};

export default Home;
