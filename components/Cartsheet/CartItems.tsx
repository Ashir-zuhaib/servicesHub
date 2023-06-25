import Styles from "./Cartsheet.module.css";
import Divider from "@mui/material/Divider";
import PrimaryButtonLink from "../shared/Buttons/PrimaryButtonLink";
import ProductsListing from "./ProductsListing";
import TextInColumnForPricing from "../shared/TextInTwoColumns/TextInColumnForPricing";
import ProductImage from "/public/product-images/product.png";
function CartItems() {
  return (
    <div className={Styles.sideCart}>

      <ProductsListing
        id={"4"}
        imgUrl={ProductImage}
        title={"Carpenter"}
        packSize={"100 ml bottle"}
        price={200}
        qtyValue={3}
      />
      <ProductsListing
        id={"5"}
        imgUrl={ProductImage}
        title={"Carpenter"}
        packSize={"100 ml bottle"}
        price={200}
        qtyValue={3}
      />
      <ProductsListing
        id={"7"}
        imgUrl={ProductImage}
        title={"Carpenter"}
        packSize={"100 ml bottle"}
        price={200}
        qtyValue={3}
      />

      {/* Total Section */}

      <div className={"px-4"}>
        <TextInColumnForPricing
          leftText={"SubTotal:"}
          rightText={"320"}
          isBold={true}
        />
        <TextInColumnForPricing
          leftText={"ShippingFee:"}
          rightText={"320"}
          isBold={true}
        />
      </div>
      <Divider className={Styles.totalDivider} />
      <div className={"is-size-5 px-4"}>
        <TextInColumnForPricing
          leftText={"Total"}
          rightText={"200"}
          isBold={true}
        />
      </div>

      {/* Checkout Butt'on */}

      <div className="px-4">
        <PrimaryButtonLink buttonLink={"/Checkout"} buttonText={"Checkout"} />
      </div>
    </div>
  );
}

export default CartItems;
