import { useRef } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import logo from "../assets/images/logo.png"; // Make sure to adjust the path to where your logo is stored
import { useGSAP } from "@gsap/react";

const About = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Initial animation setup
    gsap.from(logoRef.current, { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(textRef.current, { y: 100, opacity: 0, duration: 1, delay: 1 });
  }, []);

  return (
    <div className="px-24 py-6 h-screen">
      <Header />
      <div className="flex justify-around items-center h-[80vh]">
        <div className="w-1/3">
          <img
            ref={logoRef}
            src={logo}
            alt="PerfectFit.ai Logo"
            className="h-auto cursor-pointer"
            onClick={() => {
              gsap.to(logoRef.current, {
                scale: 1.2,
                duration: 0.3,
                yoyo: true,
              });
            }}
          />
        </div>
        <div ref={textRef} className="flex flex-col w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-[#F2544B] text-left">
            About PerfectFit.ai
          </h1>
          <p className="text-left text-lg mb-4">
            PerfectFit.ai utilizes artificial intelligence to suggest clothing
            sizes based on your height and weight, ensuring accurate fits.
          </p>
          <p className="text-left text-lg mb-4">
            Our mission is to streamline online shopping by removing the
            guesswork involved in selecting the right size.
          </p>
          <p className="text-left text-lg mb-4">
            We aim to reduce the inconvenience of returns and exchanges by
            guaranteeing a perfect fit through advanced algorithms.
          </p>
          <p className="text-left text-lg">
            We envision a future where online shopping mirrors the ease of
            trying on clothes in-store, ensuring every purchase fits flawlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
