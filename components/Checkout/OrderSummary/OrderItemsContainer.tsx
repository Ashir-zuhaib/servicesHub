import OrderItems from "./OrderItems";
import ProductImage from "../../../public/carpenter.png";

const OrderItemsContainer = () => {
  return (
    <>
      <OrderItems imgUrl={ProductImage} />
    </>
  );
};

export default OrderItemsContainer;
