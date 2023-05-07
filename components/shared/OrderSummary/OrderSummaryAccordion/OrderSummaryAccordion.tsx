import SimpleAccordion from "../../Accordion/SimpleAccordion";
import OrderSummaryAccordionBody from "./OrderSummaryAccordionBody";

const OrderSummaryAccordion = ({ Title }: any) => {
  return (
    <>
      <SimpleAccordion
        Title={Title}
        AccordionBody={<OrderSummaryAccordionBody />}
        CustomStylingClasses="bg-gray br-lg my-4"
      />
    </>
  );
};

export default OrderSummaryAccordion;
