import React from "react";

const LoginScreen: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Left Section */}
      <div className="w-1/2 bg-[#F5F5F0] flex flex-col justify-center items-center p-10">
        <div className="text-center">
          <img src="/logo.png" alt="Code Raccoon Logo" className="w-24 mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800">CODE <span className="text-green-600">RACCOON</span></h1>
          <p className="mt-4 text-gray-700 text-lg">A comprehensive collection of resumes from our talent pool</p>
        </div>
        <div className="mt-10">
          <img src="/raccoon-image.png" alt="Raccoon holding resume" className="w-80" />
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl font-semibold text-gray-900">Login to Raccoon Hub</h2>
        <button className="mt-6 flex items-center bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800">
          <img src="/google-icon.png" alt="Google Icon" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
        <p className="mt-4 text-sm text-gray-500 text-center max-w-sm">
          By accessing this platform, you agree to our <a href="#" className="text-blue-600 underline">Terms</a> and have read our <a href="#" className="text-blue-600 underline">Privacy Policy</a>. Don't share sensitive info from this platform.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;