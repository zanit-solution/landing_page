"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { motion, useScroll } from "framer-motion";
const CustomLayouts = ({ children }) => {
  const { scrollYProgress } = useScroll();
 const data = ['1/2']
  return (
    <div className="relative   ">
      {
        data.map((index,i)=><div className={` before:absolute before:w-1 before:h-screen before:bg-red-900 before:top-0 before:left-${index} before:z-50 `}>
       
        </div>)
      }

      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-2 bg-gradient-to-b from-blue-500 to-green-500"
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

      <Footer />
    </div>
  );
};

export default CustomLayouts;
