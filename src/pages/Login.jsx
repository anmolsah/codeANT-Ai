import React, { useState } from "react";
import { assets } from "../assets/assests";

const Login = () => {
  const [isSaas, setIsSaas] = useState(false);

  const handleSaasClick = () => {
    setIsSaas(true);
  };

  const handleSelfHostedClick = () => {
    setIsSaas(false);
  };

  return (
    <div className="w-screen h-screen max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center p-8 relative border-r">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
          <img
            alt="Abstract logo"
            className="w-[294px] h-[230px] absolute top-44 object-contain opacity-40"
            height="100"
            src={assets.subtract}
            width="100"
          />
        </div>
        <div className="relative z-10 mb-32">
          <div className="bg-white p-6 relative rounded-lg shadow-lg border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <img
                src={assets.miniomage}
                alt="minilogo"
                className="w-[24px] h-[28px]"
              />
              AI to Detect & Autofix Bad Code
            </h2>
            <ul className="flex space-x-8 mb-4 mt-8">
              <li className="flex flex-col items-center">
                <span className="text-xl font-bold">30+</span>
                <span>Language Support</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="text-xl font-bold">10K+</span>
                <span>Developers</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="text-xl font-bold">100K+</span>
                <span>Hours Saved</span>
              </li>
            </ul>
            <div className="absolute bottom-[-135px] right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <img
                  src={assets.image1}
                  alt="Dummy image"
                  className="relative -left-12 -top-2 w-12 h-12 object-contain mx-12"
                />
                <div className=" text-sm">
                  <span className="text-blue-500">
                    <i className="fas fa-arrow-up px-2"></i>14%
                  </span>{" "}
                  <br></br>
                  <spna className="text-gray-700 text-md">This Week</spna>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Issues Fixed</p>
                <p className="text-2xl font-bold">500K+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4"></div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 border-l">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <img
              src={assets.logo}
              alt="CodeAnt AI logo"
              className="w-36  mx-auto mb-10"
            />
            <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
          </div>
          <div className="flex justify-center mb-6">
            <button
              className={`sm:px-24 px-12 py-3  font-semibold whitespace-nowrap ${
                isSaas
                  ? "bg-[#1570EF] text-white"
                  : "bg-white border-2  text-gray-700"
              } rounded-lg`}
              onClick={handleSaasClick}
            >
              SAAS
            </button>
            <button
              className={`sm:px-24 px-8 py-3 font-semibold whitespace-nowrap ${
                !isSaas
                  ? "bg-[#1570EF] text-white"
                  : "bg-white border-2 text-gray-700"
              } rounded-lg`}
              onClick={handleSelfHostedClick}
            >
              Self Hosted
            </button>
          </div>
          <div className="space-y-4">
            {isSaas ? (
              <>
                <button className="w-full px-4 py-3 bg-white text-black border-2 rounded-lg flex items-center justify-center">
                <img className="mr-3 w-[24px] h-[24px]" src={assets.github} /> Sign in with GitHub
                </button>
                <button className="w-full px-4 py-3 bg-white text-black border-2 rounded-lg flex items-center justify-center">
                <img className="mr-3 w-[24px] h-[24px]" src={assets.bitbucket} /> Sign in with
                  Bitbucket
                </button>
                <button className="w-full px-4 py-3 bg-white text-black border-2 rounded-lg flex items-center justify-center">
                <img className="mr-3 w-[24px] h-[24px]" src={assets.azure} /> Sign in with Azure
                  DevOps
                </button>
                <button className="w-full px-4 py-3 bg-white text-black border-2 rounded-lg flex items-center justify-center">
                <img className="mr-3 w-[24px] h-[24px]" src={assets.gitlab} /> Sign in with GitLab
                </button>
              </>
            ) : (
              <>
                <button className="w-full px-4 py-3 bg-white text-black border-2 rounded-lg flex items-center justify-center">
                  <img className="mr-3 w-[24px] h-[24px]" src={assets.gitlab} />
                  Self Hosted GitLab
                </button>
                <button className="w-full px-4 py-3 bg-white text-black border-2 rounded-lg flex items-center justify-center">
                  <i className="fas fa-key mr-3 text-xl"></i> Sign in with SSO
                </button>
              </>
            )}
          </div>
          <p className="text-center text-sm text-gray-600 mt-36 ">
            By signing up you agree to the{" "}
            <a href="#" className="text-md text-gray-800 font-bold">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
