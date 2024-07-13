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
        className="progress-bar fixed top-0 left-0 right-0 h-2 bg-red-900"
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