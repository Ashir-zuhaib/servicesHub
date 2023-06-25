import ProductsContainer from "./ProductsContainer";
import OutlinedRoundedButton from "../Buttons/OutlinedRoundedButton";
import SubTitle from "../Headings/SubTitle";

interface productsContainerWithButton {
  title: string;
}

const ProductsContainerWithButton = ({
  title
}: productsContainerWithButton) => {
  return (
    <>
      <SubTitle title={title} />
      <ProductsContainer/>
    </>
  );
};

export default ProductsContainerWithButton;
