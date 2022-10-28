import "../styles/globals.css";
import type { AppProps } from "next/app";
import Website from "../layouts/Website";

function App({ Component, pageProps }: AppProps) {
  return (
    <Website>
      <Component {...pageProps} />
    </Website>
  );
}

export default App;
