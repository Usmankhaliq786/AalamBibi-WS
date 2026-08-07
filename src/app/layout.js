import Header from "@/components/Header/Header";
import "bootstrap/dist/css/bootstrap.css"
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import BootstrapJS from "./BootstrapJS";


const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Aalam Bibi Foundation",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.className}`}>
        <BootstrapJS/>
        <Header/>

        {/* <Banner/> */}
        {children}
        <Footer/> 
      </body>
    </html>
  );
}
