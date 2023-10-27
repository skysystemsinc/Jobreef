import React, { useState } from "react";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import canlenderIcon from "@/assets/Images/calendar.svg";
import moment from "moment/moment";
const DatePicker = ({
  readOnly,
  setState,
  defaultValue,
  state,
  selectRange,
}) => {
  // const [date, setdate] = useState(new Date());
  const currentDate = moment();
  const defaultDate = currentDate.add(30, "days");
  const [isOpen, setisopen] = useState(false);
  const calenderStle = {
    // "& .react-daterange-picker__calendar-button": {
    //   border: "1px solid red !important",
    // },
    position: "relative",
    // border: "1px solid red",
    "& .react-calendar": {
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      border: "none",
      padding: "20px 10px",
      position: "relative",
      top: "0px",
      zIndex: 9999,
      left: "0px",

      borderRadius: "15px",
      backgroundColor: "#fff",
    },
    "& .react-calendar_month-viewdays_day--weekend": {
      color: "black.100",
    },
    "& .react-daterange-picker__wrapper": {
      padding: "0px  !important",
      borderRadius: "4px",
      border: selectRange ? `1px solid red` : "none",
    },
    "& .react-calendar__tile--active": {
      border: "1px solid red !important",
    },
    "& .react-daterange-picker__inputGroup": {
      display: selectRange ? "block" : "none",
    },
    "& .react-daterange-picker__range-divider": {
      display: selectRange ? "block" : "none",
    },
    "& .react-daterange-picker__clear-button": {
      display: "none",
    },
    "& .react-calendar__navigation__label__labelText": {
      color: "black.100",
      fontFamily: "var(--chakra-\fonts-openSans)",
    },
    "& .react-calendar_month-viewweekdays_weekday": {
      color: "black.100",
      //   fontFamily: theme.palette.fontFamily.fontFamily2,

      fontFamily: "var(--chakra-\fonts-openSans)",

      textDecoration: "none",
      border: "none",
      border: "none",
      outline: "none",
    },
    "& .react-calendar_tile react-calendarmonth-viewdays_day": {
      color: "black",
    },
    "& .react-calendar__tile--now": {
      backgroundColor: "blue.500",
      color: "#fff",

      borderRadius: "6px",

      hover: {
        backgroundColor: "blue.400",
        color: "black.100",
        borderRadius: "6px",
      },
    },

    "& .react-calendar_tile react-calendar_tile--active": {
      border: "1px solid red !important",
      backgroundColor: "gray.200",
      color: "black.100",
      borderRadius: "6px",
    },
    "& .react-calendar__navigation": {
      gap: "10px",
    },
    "& .react-calendar__month-view__weekdays__weekday": {
      color: "black.100",
      border: "none",
      abbr: {
        textDecoration: "none !important",
      },
    },
    "& .react-calendar__navigation__prev-button , .react-calendar__navigation__next-button ,.react-calendar__navigation__prev2-button,.react-calendar__navigation__next2-button":
      {
        //   border: "1px solid red !important",
        width: "40px",
        height: "40px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        borderRadius: "6px",
        backgroundColor: "gray.200",
        color: "gray.600",
        paddingBottom: "4px",
        fontSize: "20px",
      },
    "& .react-calendar_navigation button": {
      border: "1px solid red !important",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      backgroundColor: "gray.100",
      margin: "2px 4px",
      width: "37px",
      color: "black.100 !important",

      height: "37px",
    },
    " & .react-calendar_navigationlabel_labelText": {
      //   fontFamily: theme.palette.fontFamily.fontFamily2,
      fontFamily: "var(--chakra-\fonts-openSans)",

      color: "black.100",
      fontSize: "17px",
    },
    "& .react-calendar__tile": {
      //   fontFamily: theme.palette.fontFamily.fontFamily2,
      fontFamily: "var(--chakra-\fonts-openSans)",

      //   color: theme.palette.background.black,
      color: "black.100",

      fontSize: "13px",
    },
    ".react-calendar__tile:hover": {
      //   backgroundColor: theme.palette.background.secondary,
    },
    ".react-calendar__tile--hover": {
      backgroundColor: "gray.200",
    },
    "& .react-calendar_tile--active:enabled:hover, .react-calendar_tile--active:enabled:focus":
      {
        backgroundColor: "gray.200",
        borderRadius: "14px",
      },
    "& .react-calendar__tile--active": {
      backgroundColor: "gray.200",
    },
  };

  return (
    <>
      <Box sx={calenderStle} position={"relative"}>
        {readOnly ? null : (
          <Box position={"absolute"} right={"0px"} zIndex={4}>
            <DateRangePicker
              calendarIcon={
                <Image
                  src={canlenderIcon.src}
                  width={{ base: "18px" }}
                  mt={{ base: "7px" }}
                  marginRight={"6px"}
                />
              }
              selectRange={false}
              defaultValue={defaultValue ? defaultDate.toDate() : false}
              onChange={setState}
              minDate={defaultValue ? defaultDate.toDate() : false}
              value={state}
            />
          </Box>
        )}
        <InputGroup>
          <Input
            value={moment(state).format("MM/DD/YYYY")}
            placeContent={"MM/DD/YYYY"}
            variant={"bg-input"}
            placeholder="MM/DD/YYYY"
            readOnly={true}
          />
          {/* <InputRightElement >
            <DateRangePicker
              calendarIcon={
                <Image
                  src={canlenderIcon.src}
                  width={{ md: "25px", base: "20px" }}
                  mt={{ md: "0px", base: "6px" }}
                />
              }
              selectRange={false}
              // isOpen={false}
              onChange={setState}
              // shou
              value={state}
            />
          </InputRightElement> */}
        </InputGroup>
      </Box>
    </>
  );
};

export default DatePicker;
