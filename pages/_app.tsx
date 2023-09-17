import "bulma/css/bulma.min.css";
import "../styles/theme.min.css";
import "../styles/customStyling.min.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <Provider store={store}>
      <AnyComponent />
    </Provider>
  );
}

export default MyApp;
