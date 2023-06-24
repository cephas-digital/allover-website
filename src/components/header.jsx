import Logoimg from "../assets/logo.svg";
import Arrow from "../assets/down.svg";

const Header = () => {
  return (
    <div>
      <div className="tw-flex container tw-justify-between tw-py-6 tw-items-center">
        <div className="tw-flex tw-gap-6 tw-items-center">
          <Logo />
          <p className="tw-text-white tw-text-lg tw-font-semibold">
            AllOver ICT <br /> Institute
          </p>
        </div>
        <div className="tw-flex tw-gap-2 tw-items-center">
          <p className="tw-text-lg tw-text-white tw-font-normal segoe">
            Programs
          </p>
          <img src={Arrow} alt="" className="" />
        </div>
        <Button text="Log In" />
      </div>
    </div>
  );
};
export const Logo = () => {
  return (
    <div>
      <img src={Logoimg} alt="" className="" />
    </div>
  );
};
export const Button = ({ text }) => {
  return (
    <div>
      <button className="tw-bg-[#fcdf0f] segoe tw-h-10 tw-w-32 tw-text-[#1b1b1b] tw-text-lg tw-font-normal tw-rounded-full">
        {text}
      </button>
    </div>
  );
};

export default Header;
