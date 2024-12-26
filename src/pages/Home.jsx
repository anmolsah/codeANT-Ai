import { assets } from "../assets/assests";
import HamburgerMenu from "../components/HamburgerMenu";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden md:flex-row flex-col">
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 overflow-y-auto  md:h-screen h-20">
        {" "}
        {/**/}
        <div className="p-4 md:h-screen h-20">
          <HamburgerMenu />
          <div className="mb-8 md:block relative z-10 mt-16">
            <button className="flex items-center w-full p-2 text-base text-gray-700 bg-white border-2 rounded-lg">
              <span>UtkarshDhairyaP...</span>
              <i className="fas fa-chevron-down ml-auto"></i>
            </button>
          </div>
          <nav className="space-y-2 md:block hidden">
            <a
              href="#"
              className="flex items-center p-2 text-sm font-medium text-white bg-[#1570EF] rounded-lg"
            >
              <img
                className="mr-3 w-[24px] h-[24px]"
                src={assets.homeLogo}
                alt="home logo"
              />
              Repositories
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
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
              className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <img
                className="mr-3 w-[22px] h-[18px]"
                src={assets.cloudLogo}
                alt="cloud logo"
              />
              Cloud Security
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
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
              className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
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
        <div className="mt-32 p-4 md:block hidden">
          <a
            href="#"
            className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <img
              className="mr-3 w-[24px] h-[24px]"
              src={assets.callLogo}
              alt="support logo"
            />
            Support
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <img
              className="mr-3 w-[24px] h-[24px]"
              src={assets.logoutLogo}
              alt="logout logo"
            />
            Logout
          </a>
        </div>
        <div className="flex items-center justify-between p-4 md:hidden">
          <button className="flex items-center w-full p-2 text-base text-gray-700 bg-white border-2 rounded-lg">
            <span>UtkarshDhairyaP...</span>
            <i className="fas fa-chevron-down ml-auto"></i>
          </button>
          <button className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between sm:mt-2 sm:mb-6 -mt-4">
          <div>
            <h1 className="text-2xl text-gray-700 font-semibold">
              Repositories
            </h1>
            <span className="text-sm text-gray-600">33 total repositories</span>
          </div>
          <div className="flex items-center space-x-2 py-3">
            <button className="px-4 py-2 text-sm  text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <i className="fas fa-sync-alt mr-2"></i>
              Refresh All
            </button>
            <button className="px-4 py-2 text-sm text-white bg-[#1570EF] rounded-lg hover:bg-blue-700">
              <i className="fas fa-plus mr-2"></i>
              Add Repository
            </button>
          </div>
        </div>
        <div className="mb-6 relative">
          <img
            src={assets.searchIcon}
            alt="search icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <div className="border border-gray-200 rounded-lg ">
          <ul>
            {[
              {
                name: "design-system",
                visibility: "Public",
                language: "React",
                size: "7320 KB",
                updated: "1 day ago",
              },
              {
                name: "codeant-ci-app",
                visibility: "Private",
                language: "Javascript",
                size: "5871 KB",
                updated: "2 days ago",
              },
              {
                name: "analytics-dashboard",
                visibility: "Private",
                language: "Python",
                size: "4521 KB",
                updated: "5 days ago",
              },
              {
                name: "mobile-app",
                visibility: "Public",
                language: "Swift",
                size: "3096 KB",
                updated: "3 days ago",
              },
              {
                name: "e-commerce-platform",
                visibility: "Private",
                language: "Java",
                size: "6210 KB",
                updated: "6 days ago",
              },
              {
                name: "blog-website",
                visibility: "Public",
                language: "HTML/CSS",
                size: "1876 KB",
                updated: "4 days ago",
              },
              {
                name: "social-network",
                visibility: "Private",
                language: "PHP",
                size: "5432 KB",
                updated: "7 days ago",
              },
            ].map((repo, index) => (
              <li
                key={index}
                className={`flex items-center p-4 hover:bg-gray-200 border-b-2`}
              >
                <div className="flex-1  cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-md text-gray-800 font-semibold">
                      {repo.name}
                    </h2>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full border border-[#b2ddff] ${
                        repo.visibility === "Public"
                          ? "bg-[#EFF8FF] text-[#1753cd]"
                          : "bg-[#EFF8FF] text-[#1753cd]"
                      }`}
                    >
                      {repo.visibility}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 py-2">
                    <span className="text-gray-700 text-sm">
                      {repo.language}
                    </span>
                    <span className="text-blue-600 text-lg font-bold">•</span>
                    <span className="text-gray-700 text-sm px-4 flex items-center gap-1 whitespace-nowrap">
                      <img
                        src={assets.dbLogo}
                        className="w-[10.5px] h-[12px] "
                      />
                      {repo.size}
                    </span>

                    <span className="text-gray-700 text-sm whitespace-nowrap">
                      Updated {repo.updated}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
