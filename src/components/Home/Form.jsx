"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { VscArrowSmallRight } from 'react-icons/vsc';
import { toast } from 'react-toastify';

const Form = () => {
  const [formData, setFormData] = useState({
    message_text: '',
    email: '',
    subject: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };
const toastObj = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    const toastId = toast.loading("Sending email...");
    async function sendEmail() {
      try {
        const response = await axios.post('/api/contact', formData);
      
        if(response?.data){
            toast.update(toastId, {
                ...toastObj,
                render:response?.data?.message,
                isLoading:false
                 }); 
             setFormData({ message_text: '', email: '', subject: '' });
        }
      } catch (error) {
      
         toast.update(toastId, {
            ...toastObj,
            render:error.message,
            isLoading:false
             }); 
      } finally {
        setLoading(false);
      }
    }
    sendEmail();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-20 items-center bg-slate-100">
      <div className="py-10 ps-10">
        <h1 className="text-3xl font-semibold">Assisting you in securing a competitive advantage</h1>
        <p className="py-4">Placerat nunc amet sapien neque, purus cras. Elementum viverra egestas fames ornare sed arcu. Consectetur cras vitae orci</p>
        <button  onClick={handleSubmit} className="bg-green-400 px-4 rounded-xl flex items-center" aria-label='area-lavel'>
          <span>Send Email</span>
          <VscArrowSmallRight className="h-10 w-10" />
        </button>
      </div>
      <form className="max-w-md mx-auto py-10 bg-white rounded-lg p-4 m-2" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold">Feel free to get in touch with us!</h1>
        <p className="py-5">Placerat nunc amet sapien neque, purus cras. Elementum viverra egestas fames ornare sed arcu.</p>
       

        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-900 dark:text-white" htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Email" required />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-900 dark:text-white" htmlFor="subject">Subject</label>
          <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your  Subject" required />
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-900 dark:text-white" htmlFor="message_text">Message</label>
          <textarea  id="message_text" value={formData.message_text} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Message" required />
        </div>
        <button type="submit" className="text-white bg-black rounded-md px-4 py-2 flex items-center" disabled={loading} aria-label='area-lavel'>
          {loading ? <div  >
    <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full border-t-4 border-gray-200 border-t-blue-500"></div>
</div>
 : 'Send'}
        </button>
      
      </form>
    </div>
  );
};

export default Form;
