import React from 'react'
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";



function Faq() {

    const [expandedFAQ, setExpandedFAQ] = useState('');

    const faqs = [
        {
            id: 'faq1',
            question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
            answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
        },
        {
            id: 'faq2',
            question: 'What is the minimum system configuration required?',
            answer: 'The minimum system requirements include a computer with internet connection, a modern web browser, and basic specifications to support video streaming.'
        }
    ];

    const toggleFAQ = (id) => {
        setExpandedFAQ(expandedFAQ === id ? '' : id);
    };

    const [selected, setSelected] = useState(null);

    const items = [
        { id: 1, label: "Eligibility" },
        { id: 2, label: "How To Use?" },
        { id: 3, label: "Terms & Conditions" },
    ];

    return (
        <>
            {/* FAQ Section */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked <span className="text-blue-600">Questions</span></h2>

                    <div className="flex mb-8">
                        <div className="w-1/4 mr-6">
                            {/* FAQ sidebar options */}
                            <div>
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => setSelected(item.id)}
                                        className={`p-4 mb-4 rounded-lg cursor-pointer border-2 text-center 
            flex justify-center items-center transition-all
            ${selected === item.id
                                                ? "shadow-xl border border-gray-500 bg-white border-none text-blue-800"
                                                : "border-black bg-white"
                                            }`}
                                    >
                                        <div className="font-medium">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-3/4">
                            {/* FAQ accordion */}
                            {faqs.map(faq => (
                                <div key={faq.id} className="mb-4 rounded">
                                    <div
                                        className="p-4 flex justify-between items-center cursor-pointer"
                                        onClick={() => toggleFAQ(faq.id)}
                                    >
                                        <div className="font-medium text-blue-600">{faq.question}</div>
                                        <div className="text-gray-500">
                                            {expandedFAQ === faq.id ? <FaAngleDown /> : <FaAngleUp />}
                                        </div>
                                    </div>
                                    {expandedFAQ === faq.id && (
                                        <div className="px-4 pb-4 text-sm text-gray-700">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq