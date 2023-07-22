import Title from "../../shared/Headings/Title";
import Styles from "../ProductDescription/productDescription.module.css";
import Divider from "@mui/material/Divider";
const productDetails = () => {
  return (
    <div className={Styles.productDescription}>
      <p className="has-text-weight-semibold is-size-6">Carpenter</p>
      <Title title={"Ali Raza"} />
      <p className="mb-3">Pack Size 4 </p>
      <Divider />
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
