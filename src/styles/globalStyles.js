const globalStyles = {
  //TAB STYLING
  selectTab: {
    position: "relative",
    fontWeight: 600,
    color: "blue.500",
    "&::after": {
      content: `""`,
      position: "absolute",
      top: { md: "44px", base: "44px" },
      bg: "blue.500",
      borderRadius: "12px 12px 0px 0px",
      left: { md: "10%", base: "0%" },
      width: { md: "80%", base: "100%" },
      height: "6px",
    },
  },
  tabelinkStyle: {
    fontWeight: 400,
    color: "gray.text",
    lineHeight: "28px",
    fontFamily: "var(--chakra-\fonts-openSans)",
    margin: "0px",

    fontSize: "14px",
  },
  fullTab: {
    border: "1px solid ",
    borderColor: "blue.500",
    backgroundColor: "gray.200",
    mx: "auto",
    borderRadius: "5px",
    py: "4px",
    "&::-webkit-scrollbar": {
      borderRadius: "8px",
      display: "none",
      width: "1px !important",

      backgroundColor: `transparent`,
    },

    width: { xl: "60%", md: "70%", sm: "80%", base: "100%" },
  },
  outlineTab: {
    borderBottom: "1px solid ",
    borderColor: "gray.700",
    backgroundColor: "transparent",
    // mx: "auto",
    alignItems: "flex-end",
    paddingLeft: { md: "56px", base: "10px" },

    selectTab: {
      position: "relative",
      fontWeight: 600,
      height: "34px",
      padding: "0px !important",
      margin: " 0px  20px ",

      color: "blue.500",
      "&::after": {
        content: `""`,
        position: "absolute",
        top: "31px",
        bg: "blue.500",
        // borderRadius: "12px 12px 0px 0px",
        left: "0%",
        width: "100%",
        height: "3px",
      },
    },
    tabelinkStyle: {
      fontWeight: 400,
      color: "gray.text",
      height: "34px",
      // border: "1px solid red",
      width: "max-content !important",
      // lineHeight: "28px",
      // border:"1px solid red",
      padding: "0px !important",
      margin: " 0px  20px ",
      fontFamily: "var(--chakra-\fonts-openSans)",
      // margin: "0px",
    },
  },
  scrollBar: {
    // width: "1px !important",
    "&::-webkit-scrollbar": {
      borderRadius: "8px",
      display: "none",
      width: "1px !important",

      backgroundColor: `transparent`,
    },

    "&::-webkit-scrollbar-tack": {
      width: "1px !important",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",

      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },
  },

  //STEPPER STYLE

  stepperContainter: {
    // width: {
    //   md: "90%",
    //   base: "100%",
    // },
    width: { md: "440px", base: "96%" },

    // flexDir: "row !important",

    "& .cui-steps__horizontal-step-container ": {
      span: {
        fontFamily: "open Sans !important",
        fontSize: { "2xl": "16px", base: "13px" },
        fontFamily: "open Sans !important",
        fontWeight: " 500 !important",
        // marginTop:'4px'
      },
    },

    "& .cui-steps__step-icon-container": {
      bg: "transparent",
      marginBottom: { md: "11px", sm: "10px", base: "2px" },
      border: "3px solid ",
      borderColor: "gray.light ",
      width: { sm: "30px", base: "28px" },
      height: { sm: "30px", base: "28px" },
      span: {
        color: "gray.light",
        _active: {
          color: "blue.500",
        },

        fontFamily: "open Sans !important",
        fontWeight: " 700 !important",
        fontSize: { "2xl": "16px", base: "13px" },
      },

      _active: {
        border: "3px solid blue.500 !important",
        borderColor: "blue.500 !important",
        bg: "blue.500",
        color: "blue.500 !important",
        "& .cui-steps__horizontal-step": {
          "&::after": {
            bg: "blue.500 !important",
          },
        },
      },
    },

    "& .cui-steps__horizontal-step": {
      _active: {
        "&::after": {
          bg: "blue.500 !important",
        },
      },

      "&::after": {
        bg: "gray.light !important",
        height: "3px !important",
        width: {
          md: "81% !important",
          sm: "85% !important",
          base: "78% !important",
        },
        top: { sm: "17px !important", base: "15px !important" },
        marginInlineEnd: "0px !important",
        marginInlineStart: "0px !important",
      },
    },

    "& .cui-steps__horizontal-step:first-of-type": {
      // border: '1px solid ',
      "& .cui-steps__step-icon-container": {
        borderColor: "blue.500 !important",
      },
      span: {
        color: "blue.500",
        // fontSize:"100px"
      },
    },
    "& .cui-steps__horizontal-step:last-of-type": {
      marginTop:'3px !important'
    },
    "& .css-iorgig:not(:last-child):after": {
      width:'calc(100% - 14px - calc(8px * 2)) !important'
    },
  },
  stepperContainter2: {
    width: {
      xl: "90%",
      lg: "80%",
      md: "73%",
      
      base: "99%",
    },
    // width: { md: "440px", base: "96%" },

    // flexDir: "row !important",

    "& .cui-steps__horizontal-step-container ": {
      span: {
        fontFamily: "open Sans !important",
        fontSize: { "2xl": "16px", base: "13px" },
        fontFamily: "open Sans !important",
        fontWeight: " 500 !important",
        // marginTop:'4px'
      },
    },

    "& .cui-steps__step-icon-container": {
      bg: "transparent",
      marginBottom: { md: "11px", sm: "10px", base: "2px" },
      border: "3px solid ",
      borderColor: "gray.light ",
      width: { sm: "30px", base: "28px" },
      height: { sm: "30px", base: "28px" },
      span: {
        color: "gray.light",
        _active: {
          color: "blue.500",
        },

        fontFamily: "open Sans !important",
        fontWeight: " 700 !important",
        fontSize: { "2xl": "16px", base: "13px" },
      },

      _active: {
        border: "3px solid blue.500 !important",
        borderColor: "blue.500 !important",
        bg: "blue.500",
        color: "blue.500 !important",
        "& .cui-steps__horizontal-step": {
          "&::after": {
            bg: "blue.500 !important",
          },
        },
      },
    },

    "& .cui-steps__horizontal-step": {
      _active: {
        "&::after": {
          bg: "blue.500 !important",
        },
      },

      "&::after": {
        bg: "gray.light !important",
        height: "3px !important",
        width: {
          md: "82% !important",
          sm: "80% !important",
          base: "61% !important",
        },
        top: { sm: "17px   !important", base: "15px   !important" },
        marginInlineEnd: "0px !important",
        marginInlineStart: "0px !important",
      },
    },

    "& .cui-steps__horizontal-step:first-of-type": {
      // border: '1px solid ',
      "& .cui-steps__step-icon-container": {
        borderColor: "blue.500 !important",
      },
      span: {
        color: "blue.500",
        // fontSize:"100px"
      },
    },
  },
  checkBoxStyle: {
    "& .chakra-checkbox__control": {
      // Add your custom styles here
      borderRadius: "5px",
      boxShadow: "none",
      // Make the checkbox round
    },
  },
};
export default globalStyles;
