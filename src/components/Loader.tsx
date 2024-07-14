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
    gsap.set(circles, { autoAlpha: 1, scale: 1 });

    // Define the path for the infinity symbol
    const infinityPath = [
      { x: 0, y: 0 },
      { x: 0, y: 80 },
      { x: 0, y: 0 },
      { x: 0, y: -80 },
      { x: 0, y: 0 },
      { x: 0, y: 80 },
      { x: 0, y: 0 },
      { x: 0, y: -80 },
      { x: 0, y: 0 },
      { x: 0, y: 80 },
      { x: 0, y: 0 },
      { x: 0, y: -80 },
      { x: 0, y: 0 },
    ];

    // Animation timeline with motion path
    tl.to(circles, {
      duration: 2,
      autoAlpha: 1,
      scale: 1,
      stagger: 0.2,
      ease: "linear",
      motionPath: {
        path: infinityPath,
        curviness: 1,
        autoRotate: false,
      },
      repeat: -1,
      yolo: true,
    });

    return () => {
      tl.kill(); // Clean up GSAP animation on unmount
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div className="flex justify-center items-center gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (circlesRef.current[index] = el)}
            className="circle w-8 h-8 rounded-full bg-white shadow-md flex justify-center items-center"
            style={{ backgroundColor: "#F2544Bcc" }} // Set background color
          ></div>
        ))}
      </div>
      <div className="mt-6 text-6xl font-black text-[#f36760] z-10">
        Loading...
      </div>
    </div>
  );
};

export default InfiniteScrollLoader;
