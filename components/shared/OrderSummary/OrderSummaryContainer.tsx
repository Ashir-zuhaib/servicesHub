import React from "react";
import SubHeading from "../Headings/SubHeading";
import TextInColumnForPricing from "../TextInTwoColumns/TextInColumnForPricing";
import OrderSummaryItems from "./OrderSummaryItems";
import { useEffect, useState } from "react";

const OrderSummaryContainer = ({confirmData,providerData} ) => {
  console.log("providerData..",providerData);
  
  return (
    <div className="bg-gray br-lg py-3 px-3">
      <div className="px-3">
        <SubHeading title="Booking Details" />
      </div>
      <OrderSummaryItems confirmData={confirmData} providerData = {providerData} />
      <div className="is-size-5 has-text-weight-semibold my-4 px-3">
        <TextInColumnForPricing
          leftText="Total"
          rightText={confirmData.total}
          isBold={true}
        />
      </div>
    </div>
  );
};

export default OrderSummaryContainer;
