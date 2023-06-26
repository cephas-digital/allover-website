import Logoimg from "../assets/logo.svg";
import Arrow from "../assets/down.svg";

const Header = () => {
  return (
    <div>
   
    </div>
  );
};
export const Logo = () => {
  return (
    <div>
      <img src={Logoimg} alt="" className="tw-h-10 lg:tw-h-fit" />
    </div>
  );
};
export const Button = ({ text }) => {
  return (
    <div>
      <button className="tw-bg-[#fcdf0f] segoe tw-h-10 tw-px-6 tw-text-[#1b1b1b] tw-text-lg tw-font-normal tw-rounded-full">
        {text}
      </button>
    </div>
  );
};

export default Header;
