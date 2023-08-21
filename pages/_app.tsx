import 'bulma/css/bulma.min.css';
import '../styles/theme.min.css';
import '../styles/customStyling.min.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
}

export default MyApp