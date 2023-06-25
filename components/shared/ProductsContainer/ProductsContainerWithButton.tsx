import ProductsContainer from "./ProductsContainer";
import OutlinedRoundedButton from "../Buttons/OutlinedRoundedButton";
import SubTitle from "../Headings/SubTitle";

interface productsContainerWithButton {
  title: string;
  isMobile: boolean;
}

const ProductsContainerWithButton = ({
  title,
  isMobile,
}: productsContainerWithButton) => {
  return (
    <>
      <SubTitle title={title} />
      <ProductsContainer isMobile={isMobile} isLoading={false} />
    </>
  );
};

export default ProductsContainerWithButton;
