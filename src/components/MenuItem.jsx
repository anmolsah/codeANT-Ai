import { assets } from "../assets/assests";

const MenuItem = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full border-b-2 border-gray-800 bg-white z-50 p-6 overflow-y-auto"
      style={{ top: "64px" }}
    >
      <nav className="space-y-2">
        <button className="flex items-center w-full p-2 text-lg font-small text-gray-800 bg-white border-2 rounded-lg">
          <span>UtkarshDhairyaPanwar</span>
          <i className="fas fa-chevron-down ml-auto"></i>
        </button>
        <a
          href="#"
          className="flex items-center p-2 text-md font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <img
            className="mr-3 w-[24px] h-[24px]"
            src={assets.home2}
            alt="home logo"
          />
          Repositories
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-md font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <img
            className="mr-3 w-[24px] h-[24px]"
            src={assets.codeLogo}
            alt="Code logo"
          />
          AI Code Review
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-md font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <img
            className="mr-3 w-[24px] h-[24px]"
            src={assets.cloudLogo}
            alt="cloud logo"
          />
          Cloud Security
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-md font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <img
            className="mr-3 w-[24px] h-[24px]"
            src={assets.bookLogo}
            alt="book logo"
          />
          How to Use
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-md font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <img
            className="mr-3 w-[24px] h-[24px]"
            src={assets.settingLogo}
            alt="setting logo"
          />
          Settings
        </a>
      </nav>
    </div>
  );
};

export default MenuItem;
