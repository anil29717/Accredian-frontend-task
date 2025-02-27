import React, { useState } from 'react';

import NotificationBar from '../components/NotificationBar';
import { FaAngleDown, FaAngleRight, FaAngleUp, FaGraduationCap } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Faq from '../components/Faq';

const AccredianReferralPage = () => {
  const [activeTab, setActiveTab] = useState('Refer');
  const [activeProgram, setActiveProgram] = useState('ALL PROGRAMS');

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit referral data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://accredian-backend-task-gih5.onrender.com/api/referrals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("running");

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        setShowModal(false); // Close modal on success
        setFormData({ referrerName: "", referrerEmail: "", refereeName: "", refereeEmail: "", course: "" });
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("Failed to submit referral. Please try again.");
    }
  };

  const tabs = ['Refer', 'Benefits', 'FAQs', 'Support'];

  const programs = [
    'ALL PROGRAMS',
    'PRODUCT MANAGEMENT',
    'STRATEGY & LEADERSHIP',
    'BUSINESS MANAGEMENT',
    'FINTECH',
    'SENIOR MANAGEMENT',
    'DATA SCIENCE',
    'DIGITAL TRANSFORMATION',
    'BUSINESS ANALYTICS'
  ];

  const programsData = [
    {
      name: 'Professional Certificate Program in Product Management',
      referrerBonus: 7000,
      refereeBonus: 3000
    },
    {
      name: 'PG Certificate Program in Strategic Product Management',
      referrerBonus: 9000,
      refereeBonus: 11000
    },
    {
      name: 'Professional Certificate in Data Driven Product Management',
      referrerBonus: 10000,
      refereeBonus: 10000
    },
    {
      name: 'Executive Program in Product Management and Digital Transformation',
      referrerBonus: 10000,
      refereeBonus: 10000
    },
    {
      name: 'Executive Program in Product Management',
      referrerBonus: 10000,
      refereeBonus: 10000
    },
    {
      name: 'Advanced Certification in Product Management',
      referrerBonus: 10000,
      refereeBonus: 10000
    },
    {
      name: 'Executive Program in Product Management and Project Management',
      referrerBonus: 10000,
      refereeBonus: 10000
    }
  ];



  return (
    <div className="flex flex-col min-h-screen">
      {/* Top notification bar */}
      <NotificationBar />

      {/* Sub Navigation */}
      <div className="bg-white py-3 pt-8 px-6 flex justify-center">
        <div className="max-w-3xl w-full flex justify-between rounded-full bg-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 rounded-full text-center text-lg ${activeTab === tab ? ' text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white p-8 flex justify-center relative overflow-hidden">
        <div className="max-w-5xl w-full bg-gray-100 rounded-lg shadow-2xl p-8 flex items-center relative ">
          {/* Money icons as decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-8 left-8">
              <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center rotate-12">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center text-white font-bold">$</div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8">
              <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center rotate-45">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center text-white font-bold">$</div>
              </div>
            </div>
            <div className="absolute top-1/4 right-8">
              <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center -rotate-12">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center text-white font-bold">$</div>
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="w-1/2 z-10">
            <h1 className="text-4xl font-bold mb-4">Let's Learn <br />& Earn</h1>
            <p className="text-lg mb-2">Get a chance to win</p>
            <p className="text-2xl font-bold mb-6 text-blue-600">up-to Rs. 15,000</p>
            {/* Refer Now Button */}
            <div className="flex justify-left mt-8">
              <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700  text-white text-sm font-inter py-3 px-9 rounded">
                Refer Now
              </button>
            </div>

            {/* Popup Modal */}
            {showModal && (
              <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                  <h2 className="text-xl font-bold mb-4 text-center">Refer a Friend</h2>

                  {/* Referral Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="referrerName" value={formData.referrerName} onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border rounded" />
                    <input type="email" name="referrerEmail" value={formData.referrerEmail} onChange={handleChange} placeholder="Your Email" required className="w-full p-2 border rounded" />
                    <input type="text" name="refereeName" value={formData.refereeName} onChange={handleChange} placeholder="Friend's Name" required className="w-full p-2 border rounded" />
                    <input type="email" name="refereeEmail" value={formData.refereeEmail} onChange={handleChange} placeholder="Friend's Email" required className="w-full p-2 border rounded" />
                    <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Course Name" required className="w-full p-2 border rounded" />

                    {/* Submit & Close Buttons */}
                    <div className="flex justify-between">
                      <button type="button" onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="w-full h-full flex justify-center items-center ">
            <div className="relative w-96 h-full flex justify-center items-center">
              <img
                src="/herosection.png"
                alt="Smartphone showing referral program"
                className=" object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>


      {/* How to Refer Section */}
      <section className="py-12 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10">How Do I <span className="text-blue-600">Refer ?</span></h2>

          <div className="flex justify-between items-center relative">
            {/* Step 1 */}
            <img src="/refer.svg" alt="SVG Example" className="" />


            {/* Connecting lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-500 -z-10" />

            
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex justify-center mt-8">
              <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700  text-white text-sm font-inter py-3 px-9 rounded">
                Refer Now
              </button>
            </div>

            {/* Popup Modal */}
            {showModal && (
              <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                  <h2 className="text-xl font-bold mb-4 text-center">Refer a Friend</h2>

                  {/* Referral Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="referrerName" value={formData.referrerName} onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border rounded" />
                    <input type="email" name="referrerEmail" value={formData.referrerEmail} onChange={handleChange} placeholder="Your Email" required className="w-full p-2 border rounded" />
                    <input type="text" name="refereeName" value={formData.refereeName} onChange={handleChange} placeholder="Friend's Name" required className="w-full p-2 border rounded" />
                    <input type="email" name="refereeEmail" value={formData.refereeEmail} onChange={handleChange} placeholder="Friend's Email" required className="w-full p-2 border rounded" />
                    <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Course Name" required className="w-full p-2 border rounded" />

                    {/* Submit & Close Buttons */}
                    <div className="flex justify-between">
                      <button type="button" onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">What Are The <span className="text-blue-600">Referral Benefits ?</span></h2>

          <div className="flex justify-end mb-4">
            <div className="flex items-center">
              <span className="mr-2 text-sm">Enrolled</span>
              <div className="w-10 h-6 bg-gray-200 rounded-full flex items-center p-1">
                <div className="w-4 h-4 bg-blue-600 rounded-full ml-auto"></div>
              </div>
            </div>
          </div>

          <div className="flex mb-6">
            {/* Programs sidebar */}
            <div className="w-64 mr-6">
              {programs.map(program => (
                <div
                  key={program}
                  className={`py-2 px-3 mb-1 border-b-1 flex justify-between items-center cursor-pointer ${activeProgram === program ? 'bg-blue-600 text-white rounded' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveProgram(program)}
                >
                  <span className="text-sm font-medium ">{program}</span>
                  {program !== 'ALL PROGRAMS' && (
                    <span>›</span>
                  )}
                </div>
              ))}
            </div>

            {/* Programs table */}
            <div className="flex-1">
              {/* Table Wrapper */}
              <div className="overflow-x-auto shadow-xl rounded-lg">
                <table className="w-full border-collapse">
                  {/* Table Head */}
                  <thead className="bg-blue-100 text-sm font-medium divide-x divide-gray-300">
                    <tr>
                      <th className="px-4 py-4 text-blue-800 text-left border-r border-gray-300">Programs</th>
                      <th className="px-4 py-4 text-blue-800 text-center border-r w-40 border-gray-300">Referrer Bonus</th>
                      <th className="px-4 py-4 text-blue-800 text-center w-40">Referee Bonus</th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="bg-white divide-y divide-gray-300 max-h-full">
                    {programsData.map((program, index) => (
                      <tr key={index} className="text-sm divide-x divide-gray-300">
                        <td className="px-4 py-2 flex items-center space-x-2 border-r border-gray-300">
                          <FaGraduationCap className="text-blue-700 w-5 h-5" />
                          <span>{program.name}</span>
                        </td>
                        <td className="px-4 py-2 text-center font-medium border-r border-gray-300">₹ {program.referrerBonus}</td>
                        <td className="px-4 py-2 text-center font-medium">₹ {program.refereeBonus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Show More Button (Bottom Right) */}
              <div className="mt-4 flex justify-end">
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm px-4 py-2 rounded-md">
                  Show More
                </button>
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-inter py-3 px-9 rounded">
              Refer Now
            </button>
          </div>
        </div>
      </section>

      {/* FAQ section  */}
      <Faq />


      {/* Contact Section */}
      <section
        className="pb-20 px-6 text-white flex justify-center relative"
      >
        <div className="w-full max-w-4xl">
          <div className=" p-8 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-2xl bg-blue-900 bg-opacity-90 relative" style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            {/* Left Side Content */}
            <div className="flex items-center space-x-4">
              <div className="bg-white p-4 rounded-lg flex items-center justify-center shadow-md">
                <img src="/music.png" className="w-12 h-12" alt="Music Icon" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Want to delve deeper into the program?</h3>
                <p className="text-sm text-blue-200">Share your details to receive expert insights from our program team.</p>
              </div>
            </div>

            {/* Right Side Button */}
            <button className="bg-white text-blue-700 hover:bg-gray-100 py-2 px-6 rounded-md font-medium mt-4 md:mt-0 flex items-center gap-4">
              Get in touch <FaAngleRight />
            </button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#282828] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className='flex justify-around mb-10 border-b-1 border-white pb-4'>
            <div className='items-start'>
              <div className="text-xl font-bold ">accredian</div>
              <p className='text-sm text-gray-400'>Credentials that Matter</p>
            </div>
            <div className='items-center text-center'>
              <button className='bg-blue-800 border-1 px-6 py-2 text-sm rounded-md border-white'>Schedule 1-on-1 Call Now</button>
              <p className='text-sm '> Speak with Learning Advisor</p>
            </div>
          </div>
          <div className="flex justify-center mb-8">


            <div className="flex space-x-12 text-sm">
              <div>
                <h4 className="font-medium mb-4">Programs</h4>
                <ul className="space-y-2 text-white">
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Data Science & AI</a></li>
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Product Management</a></li>
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Business Analytics</a></li>
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Digital Transformation</a></li>
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Business Management</a></li>
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Project Management</a></li>
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Strategy & Leadership</a></li>
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Senior Management</a></li>
                  <li><a href="#" className="hover:text-white flex items-center"><span className="mr-6 ">+</span> Fintech</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4">Contact Us</h4>
                <ul className="space-y-2 text-white">
                  <li className="mb-4">Email us (For Sales Related Queries): <a href="mailto:admissions@accredian.com" className="text-blue-400 hover:underline">admissions@accredian.com</a></li>
                  <li className="mb-4">Email us (For Product Management related queries): <a href="mailto:pm@accredian.com" className="text-blue-400 hover:underline">pm@accredian.com</a></li>
                  <li className="mb-4">Product Management Admission Helpline: +91-3843-3223-23</li>
                  <li className="mb-4">Office Address: 4th Floor, 204, Phase XI, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
                </ul>
                <h4 className="font-medium mt-6 mb-2">Follow Us</h4>
                <div className="flex space-x-4 text-gray-400">
                  <a href="#" className="hover:text-white">f</a>
                  <a href="#" className="hover:text-white">in</a>
                  <a href="#" className="hover:text-white">t</a>
                  <a href="#" className="hover:text-white">yt</a>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Accredian</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">FAQs</a></li>
                  <li><a href="#" className="hover:text-white">Admissions Policy</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white">Refund Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-3 border-gray-700 text-gray-500 text-sm flex justify-center">
            © 2024 Accredian A Brand of K&S Diksuchi Private Ltd. All Rights Reserved
          </div>
        </div>
      </footer>

      {/* "Schedule Call" sticky button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-3xl font-medium w-12 h-12  rounded-full shadow-lg flex items-center justify-center">
          <span><FiPhoneCall /></span>
        </button>
      </div>


    </div>
  );
};

export default AccredianReferralPage;