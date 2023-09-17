import Layout from "../components/layout";
import Container from "@mui/material/Container";
import CardCarousel from "../components/shared/CardsCarousel/CardCarousel";
import ProductsContainerWithButton from "../components/shared/ProductsContainer/ProductsContainerWithButton";
import { HomeCarousel } from "../components/HomeCarousel/HomeCarousel";
import { getAllService } from "../utils/getData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/dataSlice";
import bannerImage1 from "../public/images/banner-img.png";
import bannerImage2 from "../public/images/banner-img2.png";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);
  const [bannerImageSrc, setBannerImageSrc] = useState(bannerImage1);

  useEffect(() => {
    if (data.length == 0) {
      const fetchData = async () => {
        const serviceData = await getAllService();
        dispatch(setData(serviceData)); // Dispatch the data to the Redux store
      };
      fetchData();
    }
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBannerImageSrc(bannerImage2);
      } else {
        setBannerImageSrc(bannerImage1);
      }
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Initialize the image source based on the initial screen size
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var items = [
    {
      name: "Random Name #1",
      imageSrc: bannerImageSrc,
    },
  ];

  return (
    <>
      <Layout>
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
      <style jsx>{`
        .banner-image {
          max-height: 500px; /* Fixed height for screens wider than 768px */
          height: auto; /* Auto height for screens 768px and below */
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Home;
