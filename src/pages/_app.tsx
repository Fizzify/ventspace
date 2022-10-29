import "../styles/globals.css";
import type { AppProps } from "next/app";
import Website from "../layouts/Website";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <Website>
      <NextNProgress
        color="#000"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </Website>
  );
}

export default App;
