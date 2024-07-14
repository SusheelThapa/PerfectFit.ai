import { useRef, FormEvent } from "react";
import {
  IoBodyOutline,
  IoCalendarOutline,
  IoPersonOutline,
} from "react-icons/io5";

const TailorYourFit: React.FC = () => {
  const weightRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const weight = weightRef.current?.value;
    const age = ageRef.current?.value;
    const height = heightRef.current?.value;

    if (weight && age && height) {
      try {
        // API Call
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("All fields are required");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] bg-white p-6">
      <h1 className="text-4xl font-bold text-[#F2544B] mb-8 text-center tracking-wide">
        Tailored to You, Every Time
      </h1>
      <form
        className="mt-6 space-y-6 w-2/5 bg-white p-6 rounded-lg"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="weight"
            className="text-lg font-semibold tracking-wider text-gray-700"
          >
            Weight (kg)
          </label>
          <div className="relative flex items-center">
            <IoBodyOutline className="absolute ml-3 text-lg text-gray-600" />
            <input
              id="weight"
              name="weight"
              type="number"
              required
              className="w-full pl-10 pr-3 py-3 text-base bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2544B]"
              placeholder="Enter your weight"
              ref={weightRef}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="age"
            className="text-lg font-semibold tracking-wider text-gray-700"
          >
            Age
          </label>
          <div className="relative flex items-center">
            <IoCalendarOutline className="absolute ml-3 text-lg text-gray-600" />
            <input
              id="age"
              name="age"
              type="number"
              required
              className="w-full pl-10 pr-3 py-3 text-base bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2544B]"
              placeholder="Enter your age"
              ref={ageRef}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="height"
            className="text-lg font-semibold tracking-wider text-gray-700"
          >
            Height (cm)
          </label>
          <div className="relative flex items-center">
            <IoPersonOutline className="absolute ml-3 text-lg text-gray-600" />
            <input
              id="height"
              name="height"
              type="number"
              required
              className="w-full pl-10 pr-3 py-3 text-base bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2544B]"
              placeholder="Enter your height"
              ref={heightRef}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-md tracking-wider font-bold text-white rounded-md bg-[#F2544B] hover:bg-[#e0463e] transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TailorYourFit;
