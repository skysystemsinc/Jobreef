import { extendTheme } from '@chakra-ui/react'
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
        light: '#797979',
        text: "#4A4A4A"
    },
    blue: {
        500: "#2CA5C3"

    }
}
const fonts = {
    openSans: `'Open Sans'`,
    Nunito:`'Nunito'`

}
const components = {
    Button: {
        variants: {
            "blue-btn": {
                bg: "blue.500",
                color: "white.100",
                fontWeight:500,
                width:'200px',
                fontSize:'18px',
            }
        }
    },
    Link: {
        variants: {
            "blue-link": {
                color: 'blue.500',
                fontFamily: 'var(--chakra-\fonts-openSans)',
                fontWeight: 600,
                fontSize: "20px"

            }
        }
    },

    FormLabel: {
        variants: {
            "label": {
                color: "gray.text",
                fontSize: "20px",
                fontFamily: 'var(--chakra-\fonts-openSans)',
                fontWeight: 400,


            }
        }

    },
    Input: {
        variants: {
            "shadow-input": {
                field: {

                    // bg: "text.gray !important",
                    border: "none ",
                    // borderColor: "red",
                    boxShadow: " 0px 4px 20px 0px #0000000D !important",
                    _placeholder: { color: 'gray.light', fontWeight: 400, fontSize: "18px" }
                },
                width: "100px !important",
                fontSize: "42px",
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
                fontSize: '2xl',
                color: 'brand.100',
            },
            // Variant for h2
            'h2': {
                fontSize: 'xl',
                color: 'brand.900',
            },
            // Add more variants for other heading levels as needed
        },
    },
}
export const theme = extendTheme({ colors, components, fonts })