import React from "react";
import { IoSettingsOutline } from 'react-icons/io5';
import { FcDataProtection, FcSupport } from "react-icons/fc";

const Support = () => {
  return (
    <div className="bg-[#FEF6F3] py-20  grid md:grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="flex flex-col sm:flex-row items-center border rounded-xl bg-green-100 p-4">
      
        <div className="p-4 m-4 sm:border-r-2 border-red-200 ">
          <IoSettingsOutline className="h-10 w-10" />
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-3   sm:text-left text-center">Immediate Deployment</h1>
          <p>we ensure swift and efficient deployment of solutions to meet your business needs.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  items-center border rounded-xl bg-green-100 p-4">
        <div className="p-4 m-4 sm:border-r-2 border-red-200 ">
          <FcDataProtection className="h-10 w-10" />
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-3   sm:text-left text-center">DOS Protection</h1>
          <p>we clarify DOS (Denial-of-Service) protection. We safeguard systems from malicious attempts to disrupt services, ensuring continuous availability and reliability.</p>
        </div>
      </div>
      <div className="flex flex-col   sm:flex-row    items-center sm:border rounded-xl bg-green-100 p-4">
        <div className="p-4 m-4 sm:border-r-2 border-red-200 ">
          <FcSupport className="h-10 w-10" />
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-3   sm:text-left text-center">Premium Support</h1>
          <p>we deliver premium support without righteous indignation.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
