import React from 'react';
import { FaAngleDown } from "react-icons/fa";

function NotificationBar() {
    return (
        <div>
            <div className="bg-blue-100 py-1 px-4 text-center text-sm ">
                <span>Navigate your ideal career path with tailored expert advice. </span>
                <a href="#" className="text-blue-600 hover:underline">Contact Expert</a>
            </div>

            {/* Header Navigation */}
            <header className="py-4 px-6 flex justify-between items-center ">
                <div className="flex items-center">
                    <div>
                    <a href="#" className="text-blue-600 font-bold text-xl">accredian</a>
                    <p className='text-[8.5px] text-gray-600'>Credentials that Matter</p>
                    </div>
                    <div className="ml-6">
                        <button className="text-sm flex items-center bg-blue-600 hover:bg-gray-100 text-white font-semibold py-2 px-5 border border-gray-300 rounded-lg shadow">
                            Courses <span className="ml-1"><FaAngleDown /></span>
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-sm text-black hover:text-blue-600">Refer & Earn</a>
                    <a href="#" className="text-sm text-black hover:text-blue-600">Resources</a>
                    <a href="#" className="text-sm text-black hover:text-blue-600">About Us</a>
                    <a href="#" className="border bg-gray-100 text-sm border-gray-100 px-5 rounded-md py-2">Login</a>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded">
                        Try for free
                    </button>
                </div>
            </header>
        </div>
    )
}

export default NotificationBar