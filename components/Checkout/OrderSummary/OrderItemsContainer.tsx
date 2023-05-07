import OrderItems from "./OrderItems";
import ProductImage from "/public/product-images/product-img-1.jpg";

const OrderItemsContainer = () => {
  return (
    <>
      <OrderItems imgUrl={ProductImage} />
      <OrderItems imgUrl={ProductImage} />
      <OrderItems imgUrl={ProductImage} />
      <OrderItems imgUrl={ProductImage} />
    </>
  );
};

export default OrderItemsContainer;
