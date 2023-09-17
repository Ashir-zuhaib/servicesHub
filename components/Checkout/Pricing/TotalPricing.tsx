import React from "react";
import SubHeading from "../../shared/Headings/SubHeading";
import TextInColumnForPricing from "../../shared/TextInTwoColumns/TextInColumnForPricing";

interface totalPricing {
  isBackgroundColor: boolean;
  pricing:any;
}
const TotalPricing = ({ isBackgroundColor, pricing }: totalPricing) => {
  return (
    <div
      className={isBackgroundColor ? "bg-gray br-lg px-3 py-2" : "px-3 py-2"}>
      <SubHeading title="Order Summary" />
      <TextInColumnForPricing
        leftText={"Charges For  1 Hours"}
        rightText={pricing?.chargesPerHour}
        isBold={false}
      />
      <TextInColumnForPricing
        leftText={"SubTotal:"}
        rightText={pricing?.subTotal}
        isBold={false}
      />

      <TextInColumnForPricing
        leftText={"Service Charges:"}
        rightText={pricing?.serviceCharges}
        isBold={false}
      />
      <div className="has-text-weight-bold">
        <TextInColumnForPricing
          leftText={"Total:"}
          rightText={pricing?.total}
          isBold={false}
        />
      </div>
    </div>
  );
};

export default TotalPricing;
