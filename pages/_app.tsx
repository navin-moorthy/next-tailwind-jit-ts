import type { AppProps } from "next/app";
import React from "react";
import { RenderlesskitProvider } from "@renderlesskit/react-tailwind";

import "../styles/index.css";
import theme from "../renderlesskit.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RenderlesskitProvider extend={theme}>
      <Component {...pageProps} />
    </RenderlesskitProvider>
  );
}

export default MyApp;
