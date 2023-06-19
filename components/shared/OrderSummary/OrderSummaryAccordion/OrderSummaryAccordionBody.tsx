import SubHeading from "../../Headings/SubHeading";
import TextInColumnForPricing from "../../TextInTwoColumns/TextInColumnForPricing";
import OrderSummaryItems from "../OrderSummaryItems";

const OrderSummaryAccordionBody = () => {
  return (
    <div>
      <OrderSummaryItems />
      <SubHeading title="Order Summary" />
      <div className="is-size-7">
        <TextInColumnForPricing
          rightText="3998"
          leftText="SubTotal"
          isBold={false}
        />
        <TextInColumnForPricing
          rightText="59"
          leftText="Shipping Cost"
          isBold={false}
        />
      </div>
      <div className="has-text-weight-bold">
        <TextInColumnForPricing
          rightText="4300"
          leftText="Total"
          isBold={false}
        />
      </div>
    </div>
  );
};

export default OrderSummaryAccordionBody;
