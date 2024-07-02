
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';  //se pega de la pagina de react bootstrap css
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
