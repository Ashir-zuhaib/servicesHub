import Layout from "../components/layout";
import Container from "@mui/material/Container";
import CardCarousel from "../components/shared/CardsCarousel/CardCarousel";
import ProductsContainerWithButton from "../components/shared/ProductsContainer/ProductsContainerWithButton";
import { HomeCarousel } from "../components/HomeCarousel/HomeCarousel";
import { getAllService } from "../utils/getData";
import { useEffect, useState } from "react";
// DUMMY IMAGES
import bannerImage1 from "../public/images/banner-img.png";
import bannerImage2 from "../public/images/banner-img2.png";

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

  // CAROUSEL IMAGES
  var items = [
    {
      name: "Random Name #1",
      imageSrc: bannerImage1,
    },
    {
      name: "Random Name #1",
      imageSrc: bannerImage2,
    },
  ];
  return (
    <>
      <Layout isMobile={isMobileValue}>
        <Container maxWidth="lg">
          <HomeCarousel items={items} />
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
