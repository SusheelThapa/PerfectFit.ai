import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { faq_data } from "../assets/json/FAQ.json";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ: React.FC = () => {
  const [faq] = useState<{ question: string; answer: string }[]>(faq_data);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answersRef = useRef<Array<HTMLDivElement | null>>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    // Animate elements when component mounts
    gsap.from(".faq-item", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.5,
      ease: "power3.out",
    });

    // Animate the title
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      // Close the answer
      gsap.to(answersRef.current[index], {
        height: 0,
        opacity: 0,
        display: "none",
        duration: 0.3,
        ease: "power3.out",
      });
      setActiveIndex(null);
    } else {
      // Open the answer
      setActiveIndex(index);
      gsap.fromTo(
        answersRef.current[index],
        { height: 0, opacity: 0, display: "none" },
        {
          height: "auto",
          opacity: 1,
          display: "block",
          duration: 0.3,
          ease: "power3.out",
        }
      );
    }
  };

  return (
    <div className="px-24 py-6 h-screen">
      <Header />
      <div className="mt-[1rem]">
        <div className="bg-white p-8">
          <h1
            ref={titleRef}
            className="text-5xl font-bold text-center mb-8 my-10 text-[#F2544B] tracking-wider"
          >
            Frequently Asked Questions
          </h1>
          <div
            className="max-w-4xl mx-auto mt-10 text-gray-700"
            id="faq-section"
          >
            {faq.map((item, index) => (
              <div key={index} className="faq-item mb-6">
                <div
                  className={`cursor-pointer p-3 rounded-md my-8 flex justify-between`}
                  onClick={() => toggleAnswer(index)}
                >
                  <h2 className="text-xl font-semibold">{item.question}</h2>
                  <div className="ml-2">
                    {activeIndex === index ? (
                      <FiMinus className="w-6 h-6" />
                    ) : (
                      <FiPlus className="w-6 h-6" />
                    )}
                  </div>
                </div>
                <div
                  ref={(el) => (answersRef.current[index] = el)}
                  className="mt-2 p-3 rounded-md"
                  style={{
                    display: activeIndex === index ? "block" : "none",
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                >
                  <p className="text-lg tracking-wider">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
