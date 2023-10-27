import { extendTheme } from "@chakra-ui/react";

import { StepsTheme as Steps } from "chakra-ui-steps";
import { Nunito } from "next/font/google";
const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--Nunito-font",
});
const colors = {
  test: "#ff000",
  brand: {
    100: "#fff",
    900: "#FF0000",
  },
  white: {
    100: "#fff",
  },
  black: {
    100: "#000",
    200: "#111",
    300: "#1111114d",
  },
  gray: {
    100: "#BBBBC7",
    200: "#F7F9FB",
    300: "#D9D9D9",
    400: "#79797966",
    500: "#EBEBEB",
    600: "#494949",
    700: "#AFAFAF",
    800: "#FEFEFE",
    lightBorder: "#cdcdcd",
    light: "#797979",

    text: "#4A4A4A",
  },
  blue: {
    500: "#2CA5C3",
    400: "#DFF1F6",
    600: "#336CB0",

    100: "#F4F9FF",
  },
  orange: {
    100: "#FB784B",
  },
};
const fonts = {
  openSans: `'Open Sans'`,
  Nunito: `${nunito.variable}`,
};
const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "49em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};
const components = {
  Steps,
  Text: {
    variants: {},
  },
  Button: {
    variants: {
      "blue-btn": {
        textAlign: "center",
        bg: "blue.500",
        height: { sm: "38px", base: "36px" },
        // width: { md: "200px", sm: "180px", base: "168px" },
        width: {
          
          md: "139px",
          
          sm: "130px",
          base: "110px",
        },

        boxShadow: "0px 4px 11px 0px rgba(70, 146, 254, 0.15)",
        color: "white.100",
        fontWeight: 400,
        fontSize: { sm: "13px", base: "12px" },
        transition: ".5s",
        _hover: {
          bg: "blue.600",
        },
      },
      "outline-blue": {
        bg: "white.100",
        // height: "50px",
        // width: '200px',
        // height: { md: "50px", base: "36px" },
        height: { sm: "38px", base: "36px" },

        // width: { md: "200px", base: "160px" },
        width: {
          
          md: "139px",
          
          sm: "130px",
          base: "110px",
        },
        fontSize: { base: "12px" },

        border: "2px solid",
        // fontSize: { "2xl": "18px", base: "14px" },
        fontFamily: "var(--chakra-\fonts-openSans)",

        borderColor: "blue.500",
        color: "blue.500",
        fontWeight: 500,
        transition: ".5s",
        _hover: {
          boxShadow: "0px 4px 11px 0px rgba(70, 146, 254, 0.15)",
          bg: "blue.500",
          color: "white.100",
        },

        _disabled: {
          _hover: {
            color: "blue.500",
          },
        },
      },
      "square-btn": {
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 500,
        width: { md: "34px", base: "15px" },
        minWidth: "12px",
        height: { md: "34px", base: "30px" },
        fontSize: { md: "16px", base: "14px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
      },
      unstyled: {
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 400,
        color: "black.100",

        fontSize: { md: "16px", base: "14px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
      },
    },
  },
  Link: {
    variants: {
      "blue-link": {
        color: "blue.500",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 600,
        // fontSize: "20px",
        fontSize: "14px",
      },
    },
  },

  FormLabel: {
    variants: {
      lightblue: {
        // border: "1px dashed  gray.100 !important",
        borderColor: "gray.100",
        borderRadius: "8px",
        bg: "blue.100",
        width: "max-content",

        fontFamily: "var(--chakra-\fonts-Nunito)",
        padding: { md: "0px 29px", base: "0px 20px" },
        fontSize: { md: "14px", base: "13px" },
        fontWeight: 400,
        // fontSize: "16px",
        color: "gray.100",

        height: { md: "46px", base: "40px" },
      },
      label: {
        color: "gray.text",
        fontSize: "14px",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 400,
      },
    },
  },
  Input: {
    variants: {
      "shadow-input": {
        field: {
          height: "46px",
          borderRadius: "8px",
          color: "black.100",
          // bg: "text.gray !important",
          border: "none ",
          // borderColor: "red",
          boxShadow: " 0px 4px 20px 0px #0000000D !important",
          _placeholder: {
            color: "gray.light",
            fontWeight: 400,
            // textTransform: " capitalize",
            fontSize: { "2xl": "18px", base: "14px" },
          },
        },

        color: "brand.100",
        "::placeholder": {},
      },
      "bg-input": {
        field: {
          height: "40px",
          borderRadius: "8px",
          color: "black.200",
          bg: "gray.200 !important",
          border: "none ",
          // borderColor: "red",
          // boxShadow: " 0px 4px 20px 0px #0000000D !important",
          _placeholder: {
            // textTransform: " capitalize",

            color: "gray.100",
            fontWeight: 400,
            fontSize: "13px",
          },
        },

        // color: "brand.100",
      },
    },
  },
  Select: {
    variants: {
      "outline-dropdown": {
        field: {
          height: "40px",

          borderRadius: "8px",
          color: "gray.100 !important",
          fontWeight: 400,
          fontSize: "13px",
          // textTransform: " capitalize",

          // _placeholder: {
          //   color: "red !important",
          //   fontWeight: 400,
          //   fontSize: { md: "18px", base: "16px" },
          // },

          bg: "gray.200 !important",
        },
      },
      "bg-dropdown": {
        px: "30px",

        // color:"blue.500",
        field: {
          width: { md: "230px", base: "100%" },
          px: "30px",
          height: { base: "40px" },
          border: "2px solid ",
          borderColor: "blue.500",
          color: "blue.500",

          borderRadius: "8px",
          bg: "gray.200",

          fontWeight: 600,
          fontSize: { "2xl": "18px", base: "14px" },
          // textTransform: " capitalize",

          // _placeholder: {
          //   color: "red !important",
          //   fontWeight: 400,
          //   fontSize: { md: "18px", base: "16px" },
          // },
        },
      },
    },
  },
  Textarea: {
    variants: {
      "bg-teaxtarea": {
        //   border: "1px solid red ",
        // field: {
        minHeight: "140px",
        borderRadius: "8px",
        bg: "gray.200 !important",
        fontFamily: "var(--chakra-\fonts-openSans)",
        color: "black.100 !important",
        // bg: "text.gray !important",
        // borderColor: "red",
        borderRadius: "8px",
        p: "20px 20px 20px 20px",
        // boxShadow: " 0px 4px 20px 0px #0000000D !important",
        _placeholder: {
          color: "gray.100    ",
          fontFamily: "var(--chakra-\fonts-openSans)",
          // p: "20px 20px 20px 20px",
          // textTransform: " capitalize",
          lineHeight: "20px",
          fontWeight: 400,
          fontSize: "13px",
          //   },
        },

        "::placeholder": {},
      },
      "bg-input": {
        field: {
          height: { sm: "55px", base: "53PX" },
          borderRadius: "8px",

          bg: "gray.200 !important",
          border: "none ",

          _placeholder: {
            color: "gray.100",
            // textTransform: " capitalize",

            fontWeight: 400,
            fontSize: "13px",
          },
        },

        color: "brand.100",
      },
    },
  },
  Heading: {
    // Define variants for different heading levels (h1, h2, h3, etc.)
    baseStyle: {
      // Default style for all headings
      fontWeight: "bold",
      // mb: 4, // Margin bottom
    },
    variants: {
      // Variant for h1
      h1: {
        // fontSize: { "2xl": "40px" , base:"20px" },
        fontSize: "25px",
        color: "white.100",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 600,
      },
      // Variant for h2

      // h2: {
      //   fontSize: "xl",
      //   color: "brand.900",
      // },
      p1: {
        fontWeight: 400,
        color: "gray.light",
        lineHeight: ["17px", "17px", "18px", "18px", "18px", "18px"],
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontSize: ["12px", "13px", "13px", "13px", "13px", "13px"],
        margin: "0px",
      },

      p2: {
        fontWeight: 500,

        color: "gray.text",

        lineHeight: { md: "28px", base: "20px" },
        fontFamily: "var(--chakra-\fonts-openSans)",
        margin: "0px",
      },
      p3: {
        fontWeight: 400,
        color: "gray.text ",

        // fontFamily: "var(--chakra-\fonts-Nunito)",
        fontFamily: "var(--chakra-\fonts-openSans)",
      },
      p4: {
        fontWeight: 400,
        color: "black.200 ",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontSize: ["13px", "14px", "14px"],
        // lineHeight:{ md: '24px' , base:"20px"},
        lineHeight: "20px",
        // fontSize: "20px",
      },
      p5: {
        fontWeight: 400,
        color: "black.200 ",
        fontFamily: "var(--chakra-\fonts-openSans)",
        lineHeight: "23px",
        fontSize: ["14px", "15px", "15px"],
      },
      p6: {
        fontWeight: 400,
        color: "gray.text ",
        fontFamily: "var(--chakra-\fonts-openSans)",

        fontSize: ["18px", "20px", "22px", "22px"],
      },
      p7: {
        color: "blue.500",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 600,
        fontSize: ["13px", "13px", "15px", "15px", "15px", "15px"],
      },
      p8: {
        color: "gray.text",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 400,
        lineHeight: ["22px", "33px", "36px", "36px", "36px", "36px"],
        fontSize: ["17px", "23px", "27px", "27px", "27px", "30px"],
      },
      p9: {
        color: "black.100",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 400,
        fontSize: "10px",
      },
      p10: {
        color: "gray.text",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 600,

        fontSize: ["13px", "14px", "14px", "14px", "14px", "14px"],
      },
      p11: {
        // color: "gray.text",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 700,
        fontSize: ["13px", "16px", "16px", "16px", "16px", "16px"],
      },
      p12: {
        color: "gray.text",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "21px",
      },
      // Add more variants for other heading levels as needed
    },
  },

  PinInput: {
    variants: {
      otp: {
        // border:"1px solid red",
        borderRadius: "8px",
        width: { md: "58px", base: "50px" },
        height: { md: "58px", base: "50px" },
        bg: "gray.200",
        color: "black.100",

        _placeholder: {
          color: "gray.100",
          fontWeight: 400,
          fontSize: { md: " 20px", base: "16px" },
        },
      },
    },
  },
  // ListItem: {
  //   fontWeight: 600,
  //   color: "gray.light",
  //   lineHeight: "28px",
  //   fontFamily: "var(--chakra-\fonts-Nunito)",
  //   fontSize: "18px",
  // },
  Table: {
    variants: {
      "custome-table": {
        backgroundColor: "#fff",

        table: {
          borderCollapse: "separate",
          borderSpacing: "0px 20px",

          backgroundColor: "#fff",
          // padding: "10px 0px",
          tbody: {
            // borderCollapse: "separate",
            // borderSpacing: "0px 20px",

            tr: {
              position: "relative",
              top: "-21px",
              marginBottom: "10px !important",
              verticalAlign: "middle",
              boxShadow: " 0px 2px 15px 0px rgba(0, 0, 0, 0.06)",
              border: "1px solid ",
              borderColor: "gray.500",
              "& td:first-child": {
                color: "blue.500",
              },
              td: {
                margin: "10px 0px",
                padding: { md: "20px 20px", base: "17px 10px" },
                // fontSize: "15px",
                fontSize: { md: "14px", base: "13px" },

                fontWeight: 400,
                color: "black.200",
              },
            },
          },
          thead: {
            bg: "blue.500",
            tr: { position: "relative", top: "-21px" },
            th: {
              padding: { md: "23px 30px", base: "16px 20px" },
              fontSize: { md: "15px", base: "12px" },
              position: "relative",

              // border: "1px solid red",
              "& .vertical-divider": {
                position: "absolute",
                top: { md: "21px", base: "16px" },
                left: { md: "20px", base: "10px" },
                width: "1px",
                height: { md: "20px", base: "17px" },
                zIndex: 99,
                backgroundColor: "#fff",

                // border: "1px solid red",
              },
              textTransform: "capitalize",

              fontWeight: 400,
              color: "white.100",
            },
          },
          // border: "1px solid red",
          // bg: "blue.500",
          // borderRadius:"6px",
          // boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.06)",
        },

        // tr: {
        //   border: "1px solid red",
        // },
      },
    },
  },
};
export const theme = extendTheme({ colors, components, fonts, breakpoints });
