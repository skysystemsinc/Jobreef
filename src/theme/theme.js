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
    200:"#111"
  },
  gray: {
    100: "#BBBBC7",
    200: "#F7F9FB",
    light: "#797979",
    text: "#4A4A4A",
  },
  blue: {
    500: "#2CA5C3",
    100: "#F4F9FF",
  },
};
const fonts = {
  openSans: `'Open Sans'`,
  Nunito: `${nunito.variable}`,
};
const components = {
  Steps,
  Button: {
    variants: {
      "blue-btn": {
        bg: "blue.500",
        height: { md: "50px", base: "44px" },
        width: { md: "200px", base: "180px" },

        boxShadow: "0px 4px 11px 0px rgba(70, 146, 254, 0.15)",
        color: "white.100",
        fontWeight: 500,
        fontSize: { md: "18px", base: "15px" },
      },
      "outline-blue": {
        bg: "transparent",
        // height: "50px",
        // width: '200px',
        height: { md: "50px", base: "44px" },
        width: { md: "200px", base: "180px" },

        border: "2px solid",
        fontSize: { md: "18px", base: "15px" },

        borderColor: "blue.500",
        boxShadow: "0px 4px 11px 0px rgba(70, 146, 254, 0.15)",
        color: "blue.500",
        fontWeight: 600,
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
          md: "20px",
          base: "17px",
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
        padding: "0px 20px",
        fontSize: "16px",
        fontWeight: 400,
        fontSize: "16px",
        color: "gray.100",

        height: "50px",
      },
      label: {
        color: "gray.text",
        fontSize: {
          md: "20px",
          base: "17px",
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
          height: { sm: "58px", base: "53PX" },
          borderRadius: "8px",

          // bg: "text.gray !important",
          border: "none ",
          // borderColor: "red",
          boxShadow: " 0px 4px 20px 0px #0000000D !important",
          _placeholder: {
            color: "gray.light",
            fontWeight: 400,
            fontSize: { md: "18px", base: "16px" },
          },
        },

        color: "brand.100",
        "::placeholder": {},
      },
      "bg-input": {
        field: {
          height: { sm: "58px", base: "53PX" },
          borderRadius: "8px",

          bg: "gray.200 !important",
          border: "none ",
          // borderColor: "red",
          // boxShadow: " 0px 4px 20px 0px #0000000D !important",
          _placeholder: {
            color: "gray.100",
            fontWeight: 400,
            fontSize: { md: "18px", base: "16px" },
          },
        },

        color: "brand.100",
      },
    },
  },
  Select: {
    variants: {
      "bg-dropdown": {
        option:{
          color:"red !important",
        },
        field: {

          height: { sm: "58px", base: "53px" },
          borderRadius: "8px",
          color: "gray.light !important",
          fontWeight: 400,
          fontSize: { md: "18px", base: "16px" },
          _placeholder: {
            color: "red !important",
            fontWeight: 400,
            fontSize: { md: "18px", base: "16px" },
          },

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

          fontWeight: 400,
          fontSize: { md: "25px", base: "16px" },
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
          // borderColor: "red",
          // boxShadow: " 0px 4px 20px 0px #0000000D !important",
          _placeholder: {
            color: "gray.100",
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
        fontSize: "40px",
        color: "white.100",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontWeight: 600,
      },
      // Variant for h2

      h2: {
        fontSize: "xl",
        color: "brand.900",
      },
      p1: {
        fontWeight: 400,
        color: "gray.light",
        lineHeight: "28px",
        fontFamily: "var(--chakra-\fonts-openSans)",
        fontSize: "16px",
        margin: "0px",
      },
      p3: {
        fontWeight: 400,
        color: "gray.text ",
        // lineHeight: { md:"51px", sm:"20px"},
        // fontFamily: "var(--chakra-\fonts-Nunito)",
        fontFamily: "var(--chakra-\fonts-openSans)",

        fontSize: {md:"30px", sm:"20px" , base:"1px"},
        // margin: "0px",
      },
      p2: {
        fontWeight: 500,

        color: "gray.text",
        // color:{md:"red", sm:"yellow"},
        lineHeight: { md: "28px", base: "20px" },
        fontFamily: "var(--chakra-\fonts-openSans)",
        // fontSize: {  base:'2px !important'},
        // fontSize:"12px",
        margin: "0px",
      },
      // Add more variants for other heading levels as needed
    },
  },

  PinInput: {
    variants: {
      otp: {
        // border:"1px solid red",
        borderRadius: "8px",
        width: "58px",
        height: "58px",
        bg: "gray.200",
        _placeholder: { color: "gray.100", fontWeight: 400, fontSize: " 20px" },
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
export const theme = extendTheme({ colors, components, fonts });
