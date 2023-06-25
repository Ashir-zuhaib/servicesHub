import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/Card";

const productsData = [
  {
    id: 1,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product.png",
    title: "Carpenter",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 2,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product.png",
    title: "Carpenter",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 3,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product.png",
    title: "Carpenter",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 4,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product.png",
    title: "Carpenter",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 5,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product.png",
    title: "Carpenter",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
  {
    id: 6,
    isActive: true,
    vendor: "Novartis",
    productimg: "/product-images/product.png",
    title: "Carpenter",
    discount: "15% Off",
    packSize: "10",
    actualPrice: "230",
    types: "Tablets",
  },
];

const ProductsContainer = () => {
  const n = 8;
  return (
    <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
      {productsData.map((productsData, i) => (
        <Grid item xs={6} md={3} key={productsData.id}>
          <ProductCard
            productImg={productsData.productimg}
            ProductName={"Carpenter"}
            VendorName={"Novartis"}
            PackSize={"10"}
            ProductType={"Tablets"}
            DiscountedPrice={"15% OFF"}
            ActualPrice={"230"}
            CurrencyIdentifier={"Rs"}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsContainer;
