import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Styles from "./Accordion.module.css";
interface simpleAccordion {
  Title: any;
  AccordionBody: any;
  CustomStylingClasses: string;
}
export default function SimpleAccordion({
  Title,
  AccordionBody,
  CustomStylingClasses,
}: simpleAccordion) {
  return (
    <div>
      <Accordion className={CustomStylingClasses}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={Styles.simpleAccordion}
        >
          {Title}
        </AccordionSummary>
        <AccordionDetails>{AccordionBody}</AccordionDetails>
      </Accordion>
    </div>
  );
}
