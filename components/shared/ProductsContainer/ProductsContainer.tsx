import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/Card";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const productsData = [
  {
    id: 1,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-1.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 2,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-2.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 3,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-3.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 4,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-4.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 5,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-1.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 6,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-2.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 7,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-3.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 8,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-4.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 9,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product-img-1.jpg",
    title: "Panadol",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
];

interface productsContainer {
  isMobile: boolean;
  isLoading: boolean;
}

const ProductsContainer = ({ isMobile, isLoading }: productsContainer) => {
  isLoading = false;
  const n = 8;
  return isLoading ? (
    <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
      {[...Array(n)].map((e, i) => (
        <Grid item xs={6} md={3} key={i}>
          <Stack spacing={1} justifyContent="center" alignItems="center">
            <Skeleton variant="rectangular" width={230} height={310} />
          </Stack>
        </Grid>
      ))}
    </Grid>
  ) : (
    <>
      <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
        {productsData.map((productsData, i) => (
          <Grid item xs={6} md={3} key={productsData.id}>
            <ProductCard
              productImg={productsData.productimg}
              ProductName={"Panadol"}
              VendorName={"Novartis"}
              PackSize={"10"}
              ProductType={"Tablets"}
              DiscountedPrice={"15% OFF"}
              ActualPrice={"230"}
              CurrencyIdentifier={"Rs"}
              isMobile={isMobile}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsContainer;
