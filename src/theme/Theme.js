import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  colors: {
    button: {
      black: "#000",
      white: "#fff"
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "regular"
      },

    }
  }
})

export default theme