import Styles from "./productPricing.module.css";
import { Stack, Button } from "@mui/material";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TimeAndDateContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={Styles.pricingContainer}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab label="2-Aug-2023" {...a11yProps(0)} />
            <Tab label="3-Aug-2023" {...a11yProps(1)} />
            <Tab label="4-Aug-2023" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Stack
            direction="row"
            alignItems="center"
            className="mb-2 mt-4"
            flexWrap={"wrap"}
            justifyContent="start">
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>{" "}
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>{" "}
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>{" "}
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>{" "}
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>{" "}
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>{" "}
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>{" "}
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>{" "}
            <Button variant="outlined" size="small" className={Styles.packBtn}>
              <AccessTimeIcon fontSize="small" className="mr-1" />
              12:00 PM - 01:00 PM
            </Button>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </div>
  );
}
