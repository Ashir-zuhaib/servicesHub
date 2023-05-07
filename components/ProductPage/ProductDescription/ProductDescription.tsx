import Title from "../../shared/Headings/Title";
import PrescriptionRequired from "../../shared/PrescriptionRequired/PrescriptionRequired";
import Styles from "../ProductDescription/productDescription.module.css";
import Divider from "@mui/material/Divider";
import FastProduct from "../../shared/FastProduct/FastProduct";
const productDetails = () => {
  return (
    <div className={Styles.productDescription}>
      <p className="has-text-weight-semibold is-size-6">Brand Name</p>
      <Title title={"Panadol Extra"} />
      <p className="mb-3">Pack Size 4 </p>
      <Divider />
      <PrescriptionRequired />
      <FastProduct />
      <p className="my-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero harum
        impedit laboriosam, eligendi laudantium doloremque natus odio architecto
        repudiandae debitis tempore! Facere beatae nisi reiciendis ducimus
        labore molestiae dolores atque.
      </p>
    </div>
  );
};

export default productDetails;
