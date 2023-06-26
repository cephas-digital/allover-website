import Logoimg from "../assets/logo.svg";
import Arrow from "../assets/down.svg";

const Header = () => {
  return (
    <div>
      <div className="tw-flex container tw-justify-between tw-py-6 tw-items-center">
        <div className="tw-flex tw-gap-6 tw-items-center">
          <Logo />
          <p className="tw-text-white tw-hidden lg:tw-hidden tw-text-lg tw-font-semibold">
            AllOver ICT <br /> Institute
          </p>
        </div>
        <div className="lg:tw-flex tw-hidden tw-gap-2 tw-items-center">
          <p className="tw-text-lg tw-text-white tw-font-normal segoe">
            Programs
          </p>
          <img src={Arrow} alt="" className="" />
        </div>
        <div className="tw-hidden lg:tw-block">
          <Button text="Log In" />
        </div>
      </div>
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
