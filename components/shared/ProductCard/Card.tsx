import Grid from "@mui/material/Grid";
import Styles from "../ProductCard/card.module.css";
import ProductTitle from "../../ServicesCard/productTitle/productTitle";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Image from "next/image";

interface CardProperties {
  productImg: string;
  ProductName: string;
  productId: string;
  productDescription: string;
}

const ProductCard = ({
  productImg,
  ProductName,
  productId,
  productDescription
}: CardProperties) => {

  const router = useRouter();
  const handleNavigation = () => {
    router.push({
      pathname: "/Category",
      query: { service: productId, serviceName: ProductName },
    });
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        className={Styles.productCard}>
        <Grid container item direction="row" justifyContent="center" alignItems="center">
          <Image
            src={productImg}
            alt={ProductName}
            width={350}
            height={158}
            placeholder="blur" // Optional blur-up while loading
            blurDataURL="data:..."
          />
          <div className="px-2 pb-2">
            <ProductTitle ProductName={ProductName} TagName={"p"} />
            <p className="mb-0 elipsis">
            {productDescription}
            </p>
            <Button
              onClick={handleNavigation}
              className={Styles.ctaAtcart}
              variant="text">
              Book Now
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductCard;
