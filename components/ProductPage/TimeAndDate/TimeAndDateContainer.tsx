import Styles from "./productPricing.module.css";
import { Stack, Button } from "@mui/material";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
import { getAvailableTime } from "../../../utils/getData";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  noOfHours: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
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

function TimeSlotButton({
  time,
  selectedTime,
  handleTimeSelect
}: {
  time: string;
  selectedTime: string;
  handleTimeSelect: (time: string) => void;
}) {
  const isSelected = time === selectedTime;

  return (
    <Button
      variant="outlined"
      size="small"
      className={`${Styles.packBtn} ${isSelected ? Styles.selectedTimeSlot : ''}`}
      onClick={() => handleTimeSelect(time)}
    >
      <AccessTimeIcon fontSize="small" className="mr-1" />
      {time}
    </Button>
  );
}

interface TimeAndDateContainerProps {
  noOfHours: number;
  providerId: string;
  onSelectDateAndTime: (selectedDate: string, selectedTime: string, endTime:string) => void;
}

export default function TimeAndDateContainer({ noOfHours, providerId, onSelectDateAndTime }: TimeAndDateContainerProps) {
  const [value, setValue] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState(moment().format("DD-MMM-YYYY"));
  const [availableTime, setAvailableTime] = React.useState([]);
  const [selectedTime, setSelectedTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("")
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setSelectedDate(moment().add(newValue, 'day').format("DD-MMM-YYYY"));
  };

  const getTime = async () => {
    const time = await getAvailableTime(selectedDate, noOfHours, providerId);
    setAvailableTime(time);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    let end = moment(selectedDate+ " " + time).add(noOfHours, 'hours').format("HH:mm") 
    setEndTime(end)
    onSelectDateAndTime(selectedDate, time, end);
  };

  React.useEffect(() => {
    getTime();
  }, [selectedDate]);

  const renderTimeSlots = () => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        className="mb-2 mt-4"
        flexWrap={"wrap"}
        justifyContent="start">
        {availableTime?.map((avTime) => (
          <TimeSlotButton time={avTime} key={avTime} selectedTime={selectedTime} handleTimeSelect={handleTimeSelect} />
        ))}
      </Stack>
    );
  };

  return (
    <div className={Styles.pricingContainer}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab label={moment().format("DD-MMM-YYYY")} {...a11yProps(0)} />
            <Tab label={moment().add(1, 'day').format("DD-MMM-YYYY")} {...a11yProps(1)} />
            <Tab label={moment().add(2, 'day').format("DD-MMM-YYYY")} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} noOfHours={noOfHours}>
          {renderTimeSlots()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} noOfHours={noOfHours}>
          {renderTimeSlots()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} noOfHours={noOfHours}>
          {renderTimeSlots()}
        </CustomTabPanel>
      </Box>
    </div>
  );
}
