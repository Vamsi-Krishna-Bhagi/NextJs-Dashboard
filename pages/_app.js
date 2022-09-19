import "../styles/globals.css";
import { NavBar } from "../components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </ChakraProvider>
  );
}

export default MyApp;
