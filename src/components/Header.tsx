const Header = () => {
  return (
    <div className="flex justify-between py-4 items-center">
      <div className="text-4xl font-black tracking-widest">PerfectFit.ai</div>
      <div>
        <ul className="flex gap-8 text-lg">
          <li className="pl-10 cursor-pointer font-medium hover:text-[#F2544B]">
            Home
          </li>
          <li className="pl-10 cursor-pointer font-medium hover:text-[#F2544B]">
            About
          </li>
          <li className="pl-10 cursor-pointer font-medium hover:text-[#F2544B]">
            How it works?
          </li>
          <li className="pl-10 cursor-pointer font-medium hover:text-[#F2544B]">
            Contact
          </li>
          <li className="pl-10 cursor-pointer font-medium hover:text-[#F2544B]">
            FAQ
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
