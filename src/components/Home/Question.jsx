"use client"
import React, { useState, useRef, useEffect  } from 'react';
 
const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      <div className="py-10">
        <div className="grid justify-center">
          {" "}
          <p className="text-center border w-24 rounded-lg border-red-400 bg-green-200">
            Our FAQ
          </p>
        </div>
        <h1 className="text-center text-3xl font-bold py-5 ">
          Commonly Asked Questions
        </h1>
      </div> 
      {/* accordian code  */}
      <div className="App">
      <Accordion
        title="Accordion Item 1"
        content="Content for item 1"
        isOpen={openIndex === 0}
        onClick={() => handleAccordionClick(0)}
      />
      <Accordion
        title="Accordion Item 2"
        content="Content for item 2"
        isOpen={openIndex === 1}
        onClick={() => handleAccordionClick(1)}
      />
      <Accordion
        title="Accordion Item 3"
        content="Content for item 3"
        isOpen={openIndex === 2}
        onClick={() => handleAccordionClick(2)}
      />
    </div>
    </div>
  );
};

export default Question;
 
// src/Accordion.js
 // src/Accordion.js
 

const Accordion = ({ title, content, isOpen, onClick }) => {
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={onClick}
        aria-label='area-lavel'
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <div className="p-4 bg-white">{content}</div>
      </div>
    </div>
  );
};
 
 