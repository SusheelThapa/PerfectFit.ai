import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"; // Import MotionPathPlugin

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin);

const InfiniteScrollLoader = () => {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const circles = circlesRef.current.filter((el) => el !== null);

    // GSAP animation timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: false });

    // Initial state
    gsap.set(circles, { autoAlpha: 1, scale: 0 });

    // Animation timeline with motion path
    tl.to(circles, {
      duration: 0.5,
      autoAlpha: 1,
      stagger: 0.1,
      scale: 1,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill(); // Clean up GSAP animation on unmount
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-5">
      <div className="flex justify-start items-center gap-2">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (circlesRef.current[index] = el)}
            className="circle w-5 h-5 rounded-full bg-white shadow-md flex justify-start items-center"
            style={{ backgroundColor: "#F2544Bcc" }}
          ></div>
        ))}
      </div>
      <div className="text-5xl font-black  text-[#F2544B] py-3 px-10 rounded-sm z-10">
        Loading...
      </div>
    </div>
  );
};

export default InfiniteScrollLoader;
