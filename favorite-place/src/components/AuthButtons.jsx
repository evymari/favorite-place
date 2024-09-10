import React from 'react';

function AuthButtons() {
  return (
    <div className="flex flex-col items-center space-y-4">
     
      <button className="w-64 py-3 bg-purple-500 text-white rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
        Login
      </button>

      <button className="w-64 py-3 bg-transparent border border-purple-500 text-purple-500 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition duration-300">
        Sign Up
      </button>
    </div>
  );
}

export default AuthButtons;