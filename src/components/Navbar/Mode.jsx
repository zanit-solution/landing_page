"use client";
import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";
// import "./styles.css";
import { motion } from "framer-motion";

const Mode = () => {
  return (
    <div>
      <div className="fixed bottom-2 right-3">    <App /></div>
  
    </div>
  );
};

export default Mode;

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("");

  const [openMode, setOpenMode] = useState(false);
  useEffect(() => {
    const vla = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "";
    setTheme(vla);
  }, []);
  // theme change function here
  function onMatchWindow() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    onMatchWindow();
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        break;
    }
  }, [theme]);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu flex flex-col-reverse justify-center"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="rounded-full"  >
          <span className="loader block ease-linear rounded-full  border border-gray-200  animate-spin p-2">
            <CiSettings className="text-2xl" />
          </span>
        </div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="flex flex-col rounded-md "
      >
        <motion.li variants={itemVariants} className=" ">
          {" "}
          <button
            onClick={() => {
              setTheme("light");
            }}
            className="hover:bg-gray-200 p-3 text-black"
          >
            <LuSunDim />
          </button>
        </motion.li>
        <motion.li variants={itemVariants}>
          <button
            onClick={() => {
              setTheme("dark");
            }}
            className="hover:bg-black  hover:dark:text-white p-3 text-black"
          >
            <FaRegMoon />
          </button> 
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
