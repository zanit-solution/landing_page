"use client"
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { motion, useScroll } from "framer-motion";
const CustomLayouts = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className=''>

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
 
      <Footer />


    </div>
  );
};

export default CustomLayouts;