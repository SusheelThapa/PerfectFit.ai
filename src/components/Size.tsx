import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface SizeProps {
  size: string;
  onFindAnotherFit: () => void;
}

const Size: React.FC<SizeProps> = ({ size, onFindAnotherFit }) => {
  const fitSizeDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fitSizeDisplayRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tl.fromTo(
        fitSizeDisplayRef.current,
        {
          scaleX: 0,
          scaleY: 0,
          color: "white",
        },
        {
          duration: 2,
          scaleX: 1,
          scaleY: 1,
          backgroundColor: "rgba(242, 84, 75,0.05)",
          color: "rgba(242, 84, 75)",
          ease: "power3.out",
        }
      );

      tl.to(fitSizeDisplayRef.current.querySelector(".text-5xl"), {
        duration: 1,
        opacity: 1,
        y: 0,
      });

      tl.play();

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <div
        ref={fitSizeDisplayRef}
        className="flex flex-col justify-center items-center p-16 rounded-full bg-gray-100 gap-10"
      >
        <div className="text-5xl font-semibold tracking-wide text-gray-600">
          Your perfect fit
        </div>
        <div className="text-9xl tracking-widest mt-5 font-black text-[#F2544B]">
          {size}
        </div>
        <button
          onClick={onFindAnotherFit}
          className="px-8 py-3 text-lg tracking-wide font-bold text-white rounded-md bg-[#F2544B] hover:bg-[#e0463e] transition duration-200 mt-6"
        >
          Find Another Fit
        </button>
      </div>
    </div>
  );
};

export default Size;
