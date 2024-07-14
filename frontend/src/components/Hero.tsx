import gsap from "gsap";
import { useRef } from "react";
import hero from "../assets/images/hero.png";
import { TbClothesRack } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // GSAP animations
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { autoAlpha: 0, x: -100 },
      { duration: 1, autoAlpha: 1, x: 0, ease: "power2.out" }
    )
      .fromTo(
        buttonRef.current,
        { autoAlpha: 0, x: -100 },
        { duration: 1, autoAlpha: 1, x: 0, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { autoAlpha: 0, x: 100 },
        { duration: 1, autoAlpha: 1, x: 0, ease: "power2.out" },
        "-=0.5"
      );
  }, []);

  return (
    <div className="flex justify-between items-center h-[80vh]">
      <div
        ref={textRef}
        className="flex flex-col justify-center items-start gap-6"
      >
        <div className="text-5xl font-semibold tracking-wide text-gray-600">
          Instantly Know Your
          <div className="text-8xl tracking-wider mt-5 font-black text-[#F2544B]">
            Perfect Size
          </div>
        </div>
        <p className="text-gray-500 text-base w-4/5 tracking-wide pl-2">
          Discover your ideal clothing fit with just a few clicks. Enter your
          height and weight, and let our smart sizing tool provide you with
          accurate, personalized recommendations. Say goodbye to guesswork and
          hello to perfect fit every time.
        </p>

        <Link ref={buttonRef} to="/tailor-your-fit">
          <button className="text-white text-xl mt-16 flex justify-center items-center gap-3 py-2 px-10 rounded-lg font-bold bg-[#F2544B] tracking-wider hover:bg-[#f8463d]">
            Tailor your fit
            <TbClothesRack size={35} />
          </button>
        </Link>
      </div>
      <div>
        <img
          ref={imageRef}
          src={hero}
          alt="A man in black clothes"
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
