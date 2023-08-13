import Layout from "../components/layout";
import Container from "@mui/material/Container";
import CardCarousel from "../components/shared/CardsCarousel/CardCarousel";
import ProductsContainerWithButton from "../components/shared/ProductsContainer/ProductsContainerWithButton";
import { HomeCarousel } from "../components/HomeCarousel/HomeCarousel";
import { getAllService } from "../utils/getData";
import { useEffect, useState } from "react";

const Home: any = () => {
  let isMobileValue = false;
  const [data, setData] = useState([]);

  // FETCH SERVICES DATA
  useEffect(() => {
    const fetchData = async () => {
      const serviceData = await getAllService();
      setData(serviceData);
    };
    fetchData();
  }, []);
  return (
    <>
      <Layout isMobile={isMobileValue}>
        <Container maxWidth="lg">
          <div className={"carousel-height"}>
            <HomeCarousel />
          </div>
          <div className="py-5">
            <CardCarousel data={data} />
          </div>
          <div className="py-5">
            <ProductsContainerWithButton
              title={"All Services"}
              showAll={false}
              data={data}
            />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
