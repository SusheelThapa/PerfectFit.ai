import React from "react";

interface SizeProps {
  size: string;
  onFindAnotherFit: () => void;
}

const Size: React.FC<SizeProps> = ({ size, onFindAnotherFit }) => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center p-16  rounded-full  bg-gray-100 gap-10">
        <div className="text-5xl font-semibold tracking-wide text-gray-600">
          Your perfect fit
        </div>
        <div className="text-9xl tracking-widest  mt-5 font-black text-[#F2544B]">
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
