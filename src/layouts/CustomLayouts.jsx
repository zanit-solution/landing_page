"use client"
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { motion, useScroll } from "framer-motion";
import NextNProgress from 'nextjs-progressbar';
const CustomLayouts = ({children}) => {
    const { scrollYProgress } = useScroll();

    return (
        <div>
           
             <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
            <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      
          {children}
          {/* <NextNProgress  height="4px"
          color="red"
          options={{ showSpinner: false }}
          shallowRouting /> */}
        <Footer />
        </div>
    );
};

export default CustomLayouts;