import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';



function Welcome() {
  const handleClick = () => {
    navigate('/Login');
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-100" onClick={handleClick}>
      <img
        src="/image/logo-white.png" 
        alt="Favorite place logo"
        className="mb-6 w-24 h-24"

      />
      <h1 className="text-4xl font-bold text-purple-600 mb-2">Favorite place</h1>
      <p className="text-gray-600 text-center mb-8">
        Welcome to <span className="text-purple-500 font-bold">Favorite place</span><br />
        Connecting people who like to know new places
      </p>
      <img
        src="/path-to-illustration.png" // Cambia esta ruta según tu imagen de ilustración
        alt="People connecting"
        className="mb-6 w-3/4"
      />
      
      <div className="flex flex-col items-center w-full">
      <Button className="w-[334px] mb-4 font-roboto bg-purple-600 " onClick={() => navigate('/login')}>Log in</Button>
        <Button textColor="black" className="w-[334px] h-[50px] rounded-full text-16 bg-secondaryWhite shadow-lg font-roboto" onClick={() => navigate('/SignUp')}>
          Create Account
        </Button>
        
      </div>
      
      </div>
      );
}

      export default Welcome;