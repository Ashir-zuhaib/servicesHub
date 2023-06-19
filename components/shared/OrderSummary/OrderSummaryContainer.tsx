import React from "react";
import SubHeading from "../Headings/SubHeading";
import TextInColumnForPricing from "../TextInTwoColumns/TextInColumnForPricing";
import OrderSummaryItems from "./OrderSummaryItems";

const OrderSummaryContainer = () => {
  return (
    <div className="bg-gray br-lg py-2 pr-2 pl-3">
      <SubHeading title="Order Summary" />
      <OrderSummaryItems />
      <OrderSummaryItems />
      <OrderSummaryItems />
      <div className="is-size-5 has-text-weight-semibold my-4">
        <TextInColumnForPricing
          leftText="Total"
          rightText="574"
          isBold={true}
        />
      </div>
    </div>
  );
};

export default OrderSummaryContainer;
