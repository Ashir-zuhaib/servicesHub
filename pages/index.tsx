import Layout from "../components/layout";
import Container from "@mui/material/Container";
import CardCarousel from "../components/shared/CardsCarousel/CardCarousel";
import ProductsContainerWithButton from "../components/shared/ProductsContainer/ProductsContainerWithButton";
import { HomeCarousel } from "../components/HomeCarousel/HomeCarousel";
import { getAllService } from "../utils/getData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/dataSlice";
import bannerImage1 from "../public/images/banner-img.png";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);
  useEffect(() => {
    if (data.length == 0) {
      const fetchData = async () => {
        const serviceData = await getAllService();
        dispatch(setData(serviceData)); // Dispatch the data to the Redux store
      };
      fetchData();
    }
  }, [dispatch]);

  var items = [
    {
      name: "Random Name #1",
      imageSrc: bannerImage1,
    }
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
    </>
  );
};

export default Home;
