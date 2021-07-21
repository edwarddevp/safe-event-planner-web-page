import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "react-custom-scroll/dist/customScroll.css";

const colors = {
  primary: {
    100: "#FBF4D9",
    200: "#F8E8B3",
    300: "#EBD18A",
    400: "#D8B668",
    500: "#BE923B",
    600: "#A3762B",
    700: "#885D1D",
    800: "#6E4612",
    900: "#5B350B",
  },
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
