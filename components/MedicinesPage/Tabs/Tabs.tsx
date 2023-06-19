import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductsContainer from "../../shared/ProductsContainer/ProductsContainer";
import Styles from "./tabs.module.css";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className={"my-4 MedicinesTabContainer"}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className={Styles.MedicinesTab}
        variant="scrollable"
        scrollButtons={false}
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="A" {...a11yProps(1)} />
        <Tab label="B" {...a11yProps(2)} />
        <Tab label="C" {...a11yProps(2)} />
        <Tab label="D" {...a11yProps(2)} />
        <Tab label="E" {...a11yProps(2)} />
        <Tab label="F" {...a11yProps(2)} />
        <Tab label="G" {...a11yProps(2)} />
        <Tab label="H" {...a11yProps(2)} />
        <Tab label="I" {...a11yProps(2)} />
        <Tab label="J" {...a11yProps(2)} />
        <Tab label="K" {...a11yProps(2)} />
        <Tab label="L" {...a11yProps(2)} />
        <Tab label="M" {...a11yProps(2)} />
        <Tab label="N" {...a11yProps(2)} />
        <Tab label="O" {...a11yProps(2)} />
        <Tab label="P" {...a11yProps(2)} />
        <Tab label="Q" {...a11yProps(2)} />
        <Tab label="R" {...a11yProps(2)} />
        <Tab label="S" {...a11yProps(2)} />
        <Tab label="T" {...a11yProps(2)} />
        <Tab label="U" {...a11yProps(2)} />
        <Tab label="V" {...a11yProps(2)} />
        <Tab label="W" {...a11yProps(2)} />
        <Tab label="X" {...a11yProps(2)} />
        <Tab label="Y" {...a11yProps(2)} />
        <Tab label="Z" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProductsContainer isMobile={false} isLoading={false} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two k
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three u
      </TabPanel>
    </Box>
  );
}
