import { useState } from "react";
import Header from "../components/Header";
import TailorYourFit from "../components/TailorYourFit";
import Size from "../components/Size";

const TailorYourFitPage = () => {
  const [size, setSize] = useState<string | null>(null);

  const handleSizeReceived = (receivedSize: string) => {
    setSize(receivedSize);
  };

  const handleFindAnotherFit = () => {
    setSize(null);
  };

  return (
    <div className="px-24 py-6 border-2 h-[100vh] bg-white">
      <Header />
      {size ? (
        <Size size={size} onFindAnotherFit={handleFindAnotherFit} />
      ) : (
        <TailorYourFit onSizeReceived={handleSizeReceived} />
      )}
    </div>
  );
};

export default TailorYourFitPage;
