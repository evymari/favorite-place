import React from 'react'

// CreatePost.jsx
const CreatePost = () => {
  return (
    <div className="bg-purple-100 min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button className="text-gray-600 mr-4">←</button>
        <h1 className="text-2xl font-bold">Create new post</h1>
      </div>

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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex justify-between">
        {/* <button className="text-purple-600">🏠</button>
        <button className="text-gray-400">🔍</button>
        <button className="text-gray-400">📊</button>
        <button className="text-gray-400">⚙️</button> */}
      </div>
    </div>
  );
};

export default CreatePost;


