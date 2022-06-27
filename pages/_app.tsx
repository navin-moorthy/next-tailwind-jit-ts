import type { AppProps } from "next/app";
import React from "react";
import { AdaptUIProvider } from "@adaptui/react-tailwind";

import "../styles/index.css";
import theme from "../adaptui.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdaptUIProvider extend={theme}>
      <Component {...pageProps} />
    </AdaptUIProvider>
  );
}

export default MyApp;
