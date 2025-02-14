import React from "react";

const LoginScreen: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-[#F5F5F0] flex flex-col justify-center items-center p-6 md:p-10">
        <div className="text-center">
          <img src="src/assets/logo.png" alt="Code Raccoon Logo" className="w-20 md:w-32 mx-auto mb-4 md:mb-16" />
          {/* <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            CODE <span className="text-green-600">RACCOON</span>
          </h1> */}
          <p className="mt-4 text-gray-700 text-sm md:text-lg">
            A comprehensive collection of resumes from our talent pool
          </p>
        </div>
        <div className=" flex justify-center items-center w-full mt-10">
          <img src="src/assets/raccoon-image.png" alt="Raccoon holding resume" className="w-80 max-w-full" />
        </div>

        {/* <div className="absolute bottom-0 left-0 w-full">
          <img src="src/assets/raccoon-image.png" alt="Raccoon holding resume" className="w-full object-cover" />
        </div> */}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-6 md:p-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Login to Raccoon Hub</h2>
        <button className="mt-4 md:mt-6 flex items-center bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-gray-800">
          <img src="src/assets/google-icon.png" alt="Google Icon" className="w-6 md:w-8 h-6 md:h-8 mr-2" />
          Sign in with Google
        </button>
        <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500 text-center max-w-sm">
          By accessing this platform, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">Terms</a> and have read our{" "}
          <a href="#" className="text-blue-600 underline">Privacy Policy</a>. Don't share sensitive info from this platform.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;

