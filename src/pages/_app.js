import "bootswatch/dist/journal/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css'
import { ShopProvider } from "../context/shopContext"


function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Component {...pageProps} />
    </ShopProvider>
)}

export default MyApp
