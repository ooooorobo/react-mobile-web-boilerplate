import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// styles
import GlobalStyle from "@src/styles/globals";
import theme from "@src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
