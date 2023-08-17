import ProductsContainer from "./ProductsContainer";
import OutlinedRoundedButton from "../Buttons/OutlinedRoundedButton";
import SubTitle from "../Headings/SubTitle";

interface productsContainerWithButton {
  title: string;
  showAll: boolean;
  data: any;
}

const ProductsContainerWithButton = ({
  title,
  showAll,
  data
}: productsContainerWithButton) => {
  return (
    <>
      <SubTitle title={title} />
      <ProductsContainer showAll={showAll} productsData={data} />
      <div className="has-text-centered">
        <OutlinedRoundedButton
          buttonLink="AllCategories"
          buttonText="View All"
        />
      </div>
    </>
  );
};

export default ProductsContainerWithButton;
