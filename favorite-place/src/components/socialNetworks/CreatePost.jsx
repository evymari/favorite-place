import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../NavigationPages';

// CreatePost.jsx
const CreatePost = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Home');
  };
  
  return (
    <div className="bg-purple-100 min-h-screen p-4 ">
      {/* Header */}
      
            <div className="w-full max-w-xs p-8 mt-12 bg-white rounded-lg shadow-md ">
                <button
                    className="text-blue-500"
                    onClick={() => navigate('/ViewPost')}
                >
                    &larr; Back
                </button>
                

      {/* Post Input */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center mb-4">
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-2">
            <h2 className="font-bold">Ardito Saputra</h2>
            <p className="text-sm text-gray-500">Location</p>
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-4">
          Add Picture / Video
        </div>

        <textarea
          placeholder="Type something here..."
          className="w-full p-3 rounded-lg bg-gray-100 text-gray-600 mb-4"
        ></textarea>

        <button className="w-full p-3 rounded-lg bg-purple-600 text-white font-bold">
          Posting Now
        </button>
      </div>
      <Navigation/>

    
    </div>
    </div>
  );
};

export default CreatePost;


