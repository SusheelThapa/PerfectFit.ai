import { TbClothesRack } from "react-icons/tb";

import hero from "../assets/images/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-between items-center h-[80vh]">
      <div className="flex flex-col justify-center items-start gap-6">
        <div className="text-5xl font-semibold tracking-wide text-gray-600">
          Instantly Know Your
          <div className="text-8xl tracking-wider  mt-5 font-black text-[#F2544B]">
            Perfect Size
          </div>
        </div>
        <p className="text-gray-500 text-base w-4/5 tracking-wide pl-2">
          Discover your ideal clothing fit with just a few clicks. Enter your
          height and weight, and let our smart sizing tool provide you with
          accurate, personalized recommendations. Say goodbye to guesswork and
          hello to perfect fit every time.
        </p>

        <Link to="/tailor-your-fit">
          <button className="text-white text-xl mt-16 flex justify-center items-center gap-3 py-2 px-10 rounded-lg font-bold bg-[#F2544B] tracking-wider hover:bg-[#f8463d]">
            Tailor your fit
            <TbClothesRack size={35} />
          </button>
        </Link>
      </div>
      <div>
        <img src={hero} alt="A man in black clothes" className="" />
      </div>
    </div>
  );
};

export default Hero;
