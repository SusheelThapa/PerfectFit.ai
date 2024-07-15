// Import necessary modules
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import howItWork from "../assets/images/how-it-work.png";

interface PopupProps {
  isVisible: boolean;
  imageSrc: string;
  onClose: () => void;
}

// Pop-up component
const Popup = ({ isVisible, imageSrc, onClose }: PopupProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="relative">
        <img src={imageSrc} alt="Sequence Diagram Enlarged" className="w-4/5" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
        >
          X
        </button>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 2 }
    );
  }, []);

  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="px-24 py-6 h-screen">
      <Header />
      <div className="w-full flex justify-center items-center">
        <img
          ref={imageRef}
          src={howItWork}
          alt="Sequence Diagram"
          className="w-3/5 cursor-pointer"
          onClick={handleImageClick}
        />
      </div>
      <Popup
        isVisible={isPopupVisible}
        imageSrc={howItWork}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default HowItWorks;
