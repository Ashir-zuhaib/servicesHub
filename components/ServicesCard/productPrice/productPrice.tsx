import Styles from "../productPrice/productPrice.module.css";
interface ProductPrice {
  Price: string | number;
}

function ProductPrice({ Price }: ProductPrice) {
  return (
    <div className={Styles.productPricing}>
      <p>
        Rs. {Price} <span>/ hour</span>{" "}
      </p>
    </div>
  );
}

export default ProductPrice;
