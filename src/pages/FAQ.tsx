import React, { useState } from "react";
import Header from "../components/Header";
import { faq_data } from "../assets/json/FAQ.json";

const FAQ: React.FC = () => {
  const [faq] = useState<{ question: string; answer: string }[]>(faq_data);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-24 py-6 border-2 h-screen">
      <Header />
      <div className="mt-[1rem]">
        <div className="bg-white p-8">
          <h1 className="text-5xl font-bold text-center mb-8 my-10 text-[#F2544B] tracking-wider">
            Frequently Asked Questions
          </h1>
          <div className="max-w-4xl mx-auto mt-10 text-black" id="faq-section">
            {faq.map((item, index) => (
              <div key={index} className="mb-6">
                <div
                  className={`cursor-pointer p-3 rounded-md bg-[#F2544B11] my-8`}
                  onClick={() => toggleAnswer(index)}
                >
                  <h2 className="text-xl font-semibold">{item.question}</h2>
                </div>
                {activeIndex === index && (
                  <div className="mt-2 p-3 bg-[#F2544B11] rounded-md">
                    <p className="text-lg tracking-wider">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
