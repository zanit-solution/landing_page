"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { usePathname } from "next/navigation";
const navList = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "service",
    href: "/service",
  },
  {
    name: "support",
    href: "/support",
  },
];
const Navbar = () => {
  // hambergar menu use for click state 
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  // shadow for functionality
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // route for active page navigation
  const pathName = usePathname();
  // them and setheme mode code here 
 
  const [theme, setTheme] = useState(
   ""
  );
  useEffect(()=>{
    const vla =  localStorage.getItem("theme")?localStorage.getItem("theme"):""
    setTheme(vla);
  },[])
  
  function onMatchWindow() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&  window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  
  useEffect(() => {
    onMatchWindow();
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case 'light':
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        break;
      default:
        break;
    }

  }, [theme])
  // ${shadow ? "shadow-md backdrop-blur-lg" : " bg-[#FEF6F3]"
  // }
  return (
    <div className={`top-0 fixed   z-50  w-full `}>
      <nav
        className={`flex items-center mx-auto bg-red-900 dark:bg-black  container justify-between px-4 py-4 md:p-0`}
      >
        <div>
          <Image width={70} height={70} src={"/image/logo.png"} />
          <div>
            <button onClick={() => { setTheme("dark") }} className="text-white bg-red-900 p-3">dark</button>
            <button onClick={() => { setTheme("light") }} className="bg-white dark:bg-black dark:text-white p-3 text-black">light</button>
          </div>
        </div>
        <div className="hidden   md:flex gap-4">
          {navList.map((item, index) => (
            <Link
              href={item?.href}
              className={`text-base text-[#2b2b2e] leading-7 font-bold   different border-none relative hover:border-none after:absolute after:w-0 after:h-[5px]  after:bottom-0 after:bg-[#2b2b2e] after:transition-all after:duration-200 after:ease-in-out after:rounded-full hover:after:w-full hover:after:left-0 ${pathName == item?.href
                ? "after:w-full after:left-0"
                : "after:left-1/2"
                } `}
              key={index}
              aria-labelledby="labeldiv"
            >
              <button className="nav_link p-4 leading-10 capitalize">
                {" "}
                {item?.name}
              </button>
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            href={"/contact"}
            aria-labelledby="labeldiv"
            className="relative inline-block py-4 px-8 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-300 to-green-300 transition-all duration-300 ease-in-out group-hover:from-green-300 group-hover:to-red-300"></span>
            <span className="relative text-black text-base font-bold">
              Contact
            </span>
          </Link>
        </div>
        <button
          onClick={() => toggleDrawer()}
          className=" cursor-pointer md:hidden"
          aria-labelledby="labeldiv"
        >
          <GiHamburgerMenu />
        </button>
      </nav>
      {/* drawer code here  */}
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <DrawerSidebar pathName={pathName} />
      </Drawer>
    </div>
  );
};
export default Navbar;
const DrawerSidebar = ({ pathName }) => {
  return (
    <div className=" text-black h-full">
      <div className="flex flex-col items-center justify-center">
        {navList.map((item, index) => (
          <Link
            href={item?.href}
            className={`text-base text-[#2b2b2e] leading-7 font-bold   different border-none relative hover:border-none after:absolute after:w-0 after:h-[5px] after:left-1/2 after:bottom-0 after:bg-[#2b2b2e] after:transition-all after:duration-200 after:ease-in-out after:rounded-full hover:after:w-full hover:after:left-0 ${pathName == item?.href ? "after:w-full after:left-0" : ""
              } `}
            key={index}
            aria-labelledby="labeldiv"
          >
            <button className="nav_link p-4 leading-10 capitalize">
              {" "}
              {item?.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
