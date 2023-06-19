import React from "react";
import SubHeading from "../../shared/Headings/SubHeading";
import TextInColumnForPricing from "../../shared/TextInTwoColumns/TextInColumnForPricing";

interface totalPricing {
  isBackgroundColor: boolean;
}
const TotalPricing = ({ isBackgroundColor }: totalPricing) => {
  return (
    <div
      className={isBackgroundColor ? "bg-gray br-lg px-3 py-2" : "px-3 py-2"}
    >
      <SubHeading title="Order Summary" />
      <div className="is-size-7">
        <TextInColumnForPricing
          leftText={"SubTotal:"}
          rightText={"320"}
          isBold={false}
        />
      </div>
      <div className="is-size-7">
        <TextInColumnForPricing
          leftText={"ShippingFee:"}
          rightText={"320"}
          isBold={false}
        />
      </div>
      <div className="has-text-weight-bold">
        <TextInColumnForPricing
          leftText={"Total:"}
          rightText={"600"}
          isBold={false}
        />
      </div>
    </div>
  );
};

export default TotalPricing;
