import React, { useState, useRef, useEffect } from 'react';

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const data = [
    { title: "What services do you offer?", content: "We specialize in web development, Android app development, iOS app development, and e-commerce solutions." },
    { title: "How can your services benefit my business?", content: "Our tailored solutions enhance efficiency, boost digital presence, and drive growth by meeting your specific business needs." },
    { title: "What are your payment terms?", content: "Payment terms are flexible and tailored to suit your project scope and budget. We ensure transparency and clarity in all financial matters." }
  ];

  return (
    <div>
      <div className="py-10">
        <div className="grid justify-center">
          <p className="text-center border w-24 rounded-lg border-red-400 bg-green-200">
            Our FAQ
          </p>
        </div>
        <h1 className="text-center text-3xl font-bold py-5">
          Commonly Asked Questions
        </h1>
      </div>
      {/* Render Accordions */}
      <div className="App">
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Accordion = ({ title, content, isOpen, onClick }) => {
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div>
      <div className="border-b border-gray-200">
        <button
          className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          onClick={onClick}
          aria-label="accordion-toggle"
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
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
    </div>
  );
};

export default Question;
