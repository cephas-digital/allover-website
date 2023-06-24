import Logoimg from "../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="tw-flex container tw-justify-between tw-py-6 tw-items-center">
        <Logo />
        <div>
          <p className="tw-text-lg tw-text-white tw-font-normal">Programs</p>
        </div>
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
export const Button = () => {
  return (
    <div>
      <button className="tw-bg-[#fcdf0f] tw-h-12 tw-w-32"></button>
    </div>
  );
};

export default Header;
