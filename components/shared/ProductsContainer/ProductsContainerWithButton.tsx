import ProductsContainer from "./ProductsContainer";
import OutlinedRoundedButton from "../Buttons/OutlinedRoundedButton";
import SubTitle from "../Headings/SubTitle";

interface productsContainerWithButton {
  title: string;
  showAll: boolean;
}

const ProductsContainerWithButton = ({
  title,
  showAll,
}: productsContainerWithButton) => {
  return (
    <>
      <SubTitle title={title} />
      <ProductsContainer showAll={false} />
      <div className="has-text-centered">
        <OutlinedRoundedButton buttonLink="Services" buttonText="View All" />
      </div>
    </>
  );
};

export default ProductsContainerWithButton;
