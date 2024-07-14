import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // GSAP animation for header
    tl.fromTo(
      headerRef.current,
      { autoAlpha: 0, y: -100 },
      { duration: .5, autoAlpha: 1, y: 0, ease: "power2.out" }
    );

    // GSAP animation for navigation items
    navItemsRef.current.forEach((item) => {
      tl.fromTo(
        item,
        { autoAlpha: 0, y: -20 },
        { duration: 0.5, autoAlpha: 1, y: 0, ease: "power2.out" },
        "-=0.3" // Start this animation 0.3 seconds before the previous one ends
      );
    });
  }, []);

  return (
    <div
      ref={headerRef}
      className="flex justify-between my-2 items-center h-[10vh] border-b-2"
    >
      <Link
        to="/"
        className="text-4xl font-black tracking-widest text-[#f2534bed]"
      >
        PerfectFit.ai
      </Link>
      <div>
        <ul className="flex gap-8 text-lg">
          {["Home", "About", "How it works?", "Contact", "FAQ"].map(
            (item, index) => (
              <li
                key={index}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="pl-10 cursor-pointer font-medium hover:text-[#F2544B]"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
