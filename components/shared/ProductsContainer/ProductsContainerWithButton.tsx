import ProductsContainer from "./ProductsContainer";
import OutlinedRoundedButton from "../Buttons/OutlinedRoundedButton";
import SubTitle from "../Headings/SubTitle";

interface productsContainerWithButton {
  title: string;
  buttonText: string;
  buttonLink: string;
  isMobile: boolean;
}

const ProductsContainerWithButton = ({
  title,
  buttonLink,
  buttonText,
  isMobile,
}: productsContainerWithButton) => {
  return (
    <>
      <SubTitle title={title} />
      <ProductsContainer isMobile={isMobile} isLoading={false}/>
      <OutlinedRoundedButton buttonLink={buttonLink} buttonText={buttonText} />
    </>
  );
};

export default ProductsContainerWithButton;
