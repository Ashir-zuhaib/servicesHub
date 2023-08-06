import React from "react";
import SubHeading from "../../shared/Headings/SubHeading";
import TextInColumnForPricing from "../../shared/TextInTwoColumns/TextInColumnForPricing";

interface totalPricing {
  isBackgroundColor: boolean;
}
const TotalPricing = ({ isBackgroundColor }: totalPricing) => {
  return (
    <div
      className={isBackgroundColor ? "bg-gray br-lg px-3 py-2" : "px-3 py-2"}>
      <SubHeading title="Order Summary" />
      <TextInColumnForPricing
        leftText={"Charges For  1 Hours"}
        rightText={"500"}
        isBold={false}
      />
      <TextInColumnForPricing
        leftText={"SubTotal:"}
        rightText={"1000"}
        isBold={false}
      />

      <TextInColumnForPricing
        leftText={"Service Charges:"}
        rightText={"200"}
        isBold={false}
      />
      <div className="has-text-weight-bold">
        <TextInColumnForPricing
          leftText={"Total:"}
          rightText={"1800"}
          isBold={false}
        />
      </div>
    </div>
  );
};

export default TotalPricing;
