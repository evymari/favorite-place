

const ViewPost = () => {
   
    return (
      <div className="bg-purple-100 min-h-screen p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Home</h1>
          <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center">
            <img src="/profile-pic.jpg" alt="Profile" className="rounded-full" />
          </div>
        </div>
  
        {/* Input Box */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
          <input
            type="text"
            placeholder="What's on your head?"
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-600"
          />
          <div className="flex justify-between mt-2">
            <button className="text-purple-600">Image</button>
            <button className="text-purple-600">Video</button>
            <button className="text-purple-600">Attach</button>
          </div>
        </div>
  
        {/* Posts */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
          <div className="flex items-center mb-2">
            <img
              src="/user-pic.jpg"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-2">
              <h2 className="font-bold">Karim Saif</h2>
              <p className="text-sm text-gray-500">10:00 AM</p>
            </div>
          </div>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src="/post-image.jpg"
            alt="Post"
            className="w-full rounded-lg mb-2"
          />
          <div className="flex justify-between">
            <span>❤️ 1,994</span>
            <span>💬 135</span>
          </div>
        </div>
        
        
      </div>
    );
  };
  
  export default ViewPost;