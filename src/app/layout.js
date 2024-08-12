import { Inter } from "next/font/google";
import "./globals.css";
 
import "react-toastify/dist/ReactToastify.css"; 
import CustomLayouts from "@/layouts/CustomLayouts";
import NextNProgress from 'nextjs-progressbar';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "We provide best web solution|Zan ",
  description: "zan.com.bd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"   >
      <body className={inter.className}>
       
     
        <CustomLayouts>
        {children}
        </CustomLayouts>
       
       
      </body>
    </html>
  );
}
