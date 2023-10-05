import { extendTheme } from '@chakra-ui/react'
import { StepsTheme as Steps } from "chakra-ui-steps";
const colors = {
    test: "#ff000",
    brand: {
        100: "#fff",
        900: '#FF0000',

    },
    white: {
        100: "#fff"
    },
    black: {
        100: '#000'
    },
    gray: {
        100: '#BBBBC7',
        200: "#F7F9FB",
        light: '#797979',
        text: "#4A4A4A"
    },
    blue: {
        500: "#2CA5C3"

    }
}
const fonts = {
    openSans: `'Open Sans'`,
    Nunito: `'Nunito'`

}
const components = {
    Steps,
    Button: {

        variants: {

            "blue-btn": {
                bg: "blue.500",
                height: "50px",
                width: '200px',

                boxShadow: "0px 4px 11px 0px rgba(70, 146, 254, 0.15)",
                color: "white.100",
                fontWeight: 500,
                fontSize: '18px',

            },
            "outline-blue": {
                bg: "transparent",
                height: "50px",
                width: '200px',
                border: "2px solid",
                borderColor: "blue.500",
                boxShadow: "0px 4px 11px 0px rgba(70, 146, 254, 0.15)",
                color: "blue.500",
                fontWeight: 600,
                fontSize: '18px',

            },

        }
    },
    Link: {
        sizes: {

            sm: {

                fontSize: "1px"
            }

        }
        ,
        variants: {
            "blue-link": {
                color: 'blue.500',
                fontFamily: 'var(--chakra-\fonts-openSans)',
                fontWeight: 600,
                // fontSize: "20px",
                fontSize: {
                    sm: "20px",
                    base: "17px"
                },


            }
        }
    },

    FormLabel: {
        variants: {
            "label": {
                color: "gray.text",
                fontSize: {

                    sm: "20px",
                    base: "18px"
                },
                fontFamily: 'var(--chakra-\fonts-openSans)',
                fontWeight: 400,


            }
        }

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
                    _placeholder: { color: 'gray.light', fontWeight: 400, fontSize: "18px" }
                },
                width: "100px !important",

                color: "brand.100",
                "::placeholder": {
                }

            },
            "bg-input": {
                field: {
                    height: { sm: "58px", base: "53PX" },
                    borderRadius: "8px",

                    bg: "gray.200 !important",
                    border: "none ",
                    // borderColor: "red",
                    // boxShadow: " 0px 4px 20px 0px #0000000D !important",
                    _placeholder: { color: 'gray.100', fontWeight: 400, fontSize: "20px" }
                },
                width: "100px !important",

                color: "brand.100",
                "::placeholder": {
                }

            }
        }
    },
    Heading: {
        // Define variants for different heading levels (h1, h2, h3, etc.)
        baseStyle: {
            // Default style for all headings
            fontWeight: 'bold',
            mb: 4, // Margin bottom
        },
        variants: {
            // Variant for h1
            'h1': {
                fontSize: '40px',
                color: 'white.100',
                fontFamily: 'var(--chakra-\fonts-openSans)',
                fontWeight: 600

            },
            // Variant for h2

            'h2': {
                fontSize: 'xl',
                color: 'brand.900',
            },
            "p1": {
                fontWeight: 400,
                color: 'gray.light',
                lineHeight: '28px',
                fontFamily: 'var(--chakra-\fonts-openSans)',
                fontSize: "16px",
                margin:"0px"
            }
            // Add more variants for other heading levels as needed
        },
    },
}
export const theme = extendTheme({ colors, components, fonts })