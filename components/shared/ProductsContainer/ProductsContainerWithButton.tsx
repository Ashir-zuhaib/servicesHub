import ProductsContainer from "./ProductsContainer";
import OutlinedRoundedButton from "../Buttons/OutlinedRoundedButton";
import SubTitle from "../Headings/SubTitle";
import PrimaryButtonLink from "../Buttons/PrimaryButtonLink";

interface productsContainerWithButton {
  title: string;
}

const ProductsContainerWithButton = ({
  title,
}: productsContainerWithButton) => {
  return (
    <>
      <SubTitle title={title} />
      <ProductsContainer />
      <div className="w-25 has-text-centered">
        <PrimaryButtonLink buttonLink="Services" buttonText="View All" />
      </div>
    </>
  );
};

export default ProductsContainerWithButton;
