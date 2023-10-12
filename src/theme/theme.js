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
    light: "#797979",
    text: "#4A4A4A",
  },
  blue: {
    500: "#2CA5C3",
    400: "#DFF1F6",
    100: "#F4F9FF",
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
        bg: "blue.500",
        height: { "2xl": "50px", sm: "38px", base: "36px" },
        // width: { md: "200px", sm: "180px", base: "168px" },
        width: {
          "2xl": "200px",
          xl: "150px",
          md: "150px",
          lg: "140px",
          sm: "130px",
          base: "110px",
        },

        boxShadow: "0px 4px 11px 0px rgba(70, 146, 254, 0.15)",
        color: "white.100",
        fontWeight: 400,
        fontSize: { "2xl": "18px", sm: "13px", base: "12px" },
      },
      "outline-blue": {
        bg: "transparent",
        // height: "50px",
        // width: '200px',
        // height: { md: "50px", base: "36px" },
        height: { "2xl": "50px", sm: "38px", base: "36px" },

        // width: { md: "200px", base: "160px" },
        width: {
          "2xl": "200px",
          xl: "150px",
          md: "150px",
          lg: "140px",
          sm: "130px",
          base: "110px",
        },
        fontSize: { "2xl": "18px", base: "12px" },

        border: "2px solid",
        // fontSize: { "2xl": "18px", base: "14px" },

        borderColor: "blue.500",
        boxShadow: "0px 4px 11px 0px rgba(70, 146, 254, 0.15)",
        color: "blue.500",
        fontWeight: 500,
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
        fontSize: {
          "2xl": "20px",
          xl: "18px",
          lg: "18px",
          md: "17px",

          base: "14px",
        },
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
        padding: { md: "0px 20px", base: "0px 15px" },
        fontSize: ["14px", "14px", "16px", "16px", "16px", "16px"],
        fontWeight: 400,
        // fontSize: "16px",
        color: "gray.100",

        height: { md: "48px", base: "40px" },
      },
      label: {
        color: "gray.text",
        fontSize: {
          "2xl": "20px",
          xl: "16px",
          // md: "20px",
          // sm: "15px",
          base: "14px",
        },
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 400,
      },
    },
  },
  Input: {
    variants: {
      "shadow-input": {
        field: {
          height: { "2xl": "58px", base: "50px" },
          borderRadius: "8px",

          // bg: "text.gray !important",
          border: "none ",
          // borderColor: "red",
          boxShadow: " 0px 4px 20px 0px #0000000D !important",
          _placeholder: {
            color: "gray.light",
            fontWeight: 400,
            textTransform: " capitalize",
            fontSize: { "2xl": "18px", base: "14px" },
          },
        },

        color: "brand.100",
        "::placeholder": {},
      },
      "bg-input": {
        field: {
          height: { "2xl": "58px", base: "40px" },
          borderRadius: "8px",

          bg: "gray.200 !important",
          border: "none ",
          // borderColor: "red",
          // boxShadow: " 0px 4px 20px 0px #0000000D !important",
          _placeholder: {
            textTransform: " capitalize",

            color: "gray.100",
            fontWeight: 400,
            fontSize: { "2xl": "18px", base: "14px" },
          },
        },

        color: "brand.100",
      },
    },
  },
  Select: {
    variants: {
      "bg-dropdown": {
        field: {
          height: { "2xl": "58px", base: "40px" },

          borderRadius: "8px",
          color: "gray.light !important",
          fontWeight: 400,
          fontSize: { "2xl": "18px", base: "14px" },
          textTransform: " capitalize",

          // _placeholder: {
          //   color: "red !important",
          //   fontWeight: 400,
          //   fontSize: { md: "18px", base: "16px" },
          // },

          bg: "gray.200 !important",
        },
      },
    },
  },
  Textarea: {
    variants: {
      "bg-teaxtarea": {
        //   border: "1px solid red ",
        // field: {
        minHeight: { sm: " 174px", base: "174px" },
        borderRadius: "8px",
        bg: "gray.200 !important",
        fontFamily: "var(--chakra-\fonts-openSans)",
        color: "black.100 !important",
        // bg: "text.gray !important",
        // borderColor: "red",
        borderRadius: "8px",
        p: "20px 20px 20px 20px",
        boxShadow: " 0px 4px 20px 0px #0000000D !important",
        _placeholder: {
          color: "gray.100    ",
          fontFamily: "var(--chakra-\fonts-openSans)",
          // p: "20px 20px 20px 20px",
          textTransform: " capitalize",

          fontWeight: 400,
          fontSize: { sm: "15px", base: "14px" },
          //   },
        },

        "::placeholder": {},
      },
      "bg-input": {
        field: {
          height: { sm: "58px", base: "53PX" },
          borderRadius: "8px",

          bg: "gray.200 !important",
          border: "none ",

          _placeholder: {
            color: "gray.100",
            textTransform: " capitalize",

            fontWeight: 400,
            fontSize: { md: "18px", base: "16px" },
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
        fontSize: ["28px", "28px", "28px", "28px", "28px", "28px", "48px"],
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
        lineHeight: "28px",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontSize: "14px",
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
        fontSize: ["13px", "14px", "16px"],

        // fontSize: "20px",
      },
      p5: {
        fontWeight: 400,
        color: "black.200 ",
        fontFamily: "var(--chakra-\fonts-openSans)",
        lineHeight: ["24px"],
        fontSize: ["14px", "15px", "17px"],
      },
      p6: {
        fontWeight: 400,
        color: "gray.text ",
        fontFamily: "var(--chakra-\fonts-openSans)",

        fontSize: ["20px", "22px", "25px", "25px"],
      },
      p7: {
        color: "blue.500",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 600,
        fontSize: ["14px", "14px", "17px", "17px", "17px", "20px"],
      },
      p8: {
        color: "gray.text",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 400,
        lineHeight: ["26px", "33px", "40px", "40px", "40px", "54px"],
        fontSize: ["18px", "23px", "27px", "27px", "30px", "36px"],
      },
      p9: {
        color: "black.100",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 400,
        fontSize: "10px",
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
        _placeholder: {
          color: "gray.100",
          fontWeight: 400,
          fontSize: { md: " 20px", base: "16px" },
        },
      },
    },
  },
  ListItem: {
    fontWeight: 600,
    color: "gray.light",
    lineHeight: "28px",
    fontFamily: "var(--chakra-\fonts-Nunito)",
    fontSize: "18px",
  },
};
export const theme = extendTheme({ colors, components, fonts, breakpoints });
