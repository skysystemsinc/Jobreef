const globalStyles = {
  //TAB STYLING
  selectTab: {
    position: "relative",
    fontWeight: 600,
    color: "blue.500",
    "&::after": {
      content: `""`,
      position: "absolute",
      top: { md: "50px", base: "46px" },
      bg: "blue.500",
      borderRadius: "12px 12px 0px 0px",
      left: "10%",
      width: "80%",
      height: "6px",
    },
  },
  tabelinkStyle: {
    fontWeight: 400,
    color: "gray.text",
    lineHeight: "28px",
    fontFamily: "var(--chakra-\fonts-openSans)",
    margin: "0px",
  },
  fullTab: {
    border: "1px solid ",
    borderColor: "blue.500",
    backgroundColor: "gray.200",
    mx: "auto",
    borderRadius: "5px",
    py: { md: "10px", base: "6px" },
    width: { xl: "60%", md: "70%", sm: "80%", base: "100%" },
  },
  outlineTab: {
    borderBottom: "1px solid ",
    borderColor: "gray.700",
    backgroundColor: "transparent",
    // mx: "auto",
    alignItems: "flex-end",
    paddingLeft:'56px',
    // border:"1px solid red",
    // width:'60% !important',
    
    selectTab: {
      position: "relative",
      fontWeight: 600,
      height: "34px",
      padding: "0px !important",

      color: "blue.500",
      "&::after": {
        content: `""`,
        position: "absolute",
        top: "31px",
        bg: "blue.500",
        // borderRadius: "12px 12px 0px 0px",
        left: "6%",
        width: "87%",
        height: "3px",
      },
    },
    tabelinkStyle: {
      fontWeight: 400,
      color: "gray.text",
      height: "34px",
      // border: "1px solid red",
      width: "100px !important",

      // lineHeight: "28px",
      // border:"1px solid red",
      padding: "0px !important",
      fontFamily: "var(--chakra-\fonts-openSans)",
      margin: "0px",
    },
  },
  scrollBar: {
    width: "1px !important",
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
    width: {
      md: "404px",
      base: "70%",
    },
    flexDir: "row !important",
    // border: "1px solid red",
    // width: "404px",

    "& .cui-steps__step-icon-container": {
      bg: "transparent",
      border: "4px solid ",
      borderColor: "gray.light ",
      width: { "2xl": "36px !important", base: "32px" },
      height: { "2xl": "36px !important", base: "32px" },
      span: {
        color: "gray.light",

        fontFamily: "open Sans !important",
        fontWeight: " 700 !important",
        fontSize: { "2xl": "16px", base: "13px" },
      },

      _active: {
        border: "4px solid blue.500 !important",
        borderColor: "blue.500 !important",
        bg: "blue.500",
        span: {
          color: "blue.500 !important",
        },
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
      },
    },
    // "& .cui-steps__horizontal-step:nth-child(1)": {
    //   _active: {
    //     border: "1px solid red",
    //     span: {
    //       color: "blue.500 !important",
    //     },

    //   },
    // },
  },
};
export default globalStyles;
