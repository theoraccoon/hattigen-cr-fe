
import React from "react";
import LogoImage from "../assets/logo.png"; 
import RaccoonImage from "../assets/raccoon-image.png"; 
import GoogleImage from "../assets/google-icon.png"; 

const LoginScreen: React.FC = () => {
  return (
    <div className="font-poppins flex flex-col md:flex-row h-screen w-full bg-gray-100">
      {/* Left Section  */}
      <div className="w-full md:w-1/3 bg-[#F5F5F0] flex flex-col justify-between p-6 md:p-8 relative">
        {/* Logo & Text */}
        <div className="text-center">
          <img
            src={LogoImage}
            alt="Code Raccoon Logo"
            className="w-16 md:w-24 mx-auto  mt-8 mb-4 md:mb-8"
          />
          <p className="mt-2 text-gray-700 text-sm md:text-lg max-w-xs mx-auto">
            A comprehensive collection of resumes from our talent pool
          </p>
        </div>

        <div className="relative md:absolute bottom-0 left-0 w-full h-56 md:h-2/3 mt-4 md:mt-0">
          <img
            src={RaccoonImage}
            alt="Raccoon holding resume"
            className="w-full h-full object-contain md:object-cover"
          />
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-full md:w-2/3 bg-white flex flex-col justify-center items-center p-8 md:p-16">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900 text-center">
          Login to Raccoon Hub
        </h2>
        <button className="mt-4 md:mt-6 flex items-center bg-black text-white px-5 md:px-8 py-3 md:py-4 rounded-lg shadow-md hover:bg-gray-800">
          <img
            src={GoogleImage}
            alt="Google Icon"
            className="w-5 md:w-7 h-5 md:h-7 mr-2"
          />
          Sign in with Google
        </button>
        <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500 text-center max-w-xs md:max-w-md">
          By accessing this platform, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms
          </a>{" "}
          and have read our{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          . Don't share sensitive info from this platform.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;


