import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', textColor = 'white', className = '' }) => {
    const textColorClass = textColor === 'black' ? 'text-accentBlack' : 'text-secondaryWhite';

    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-[334px] h-[50px] rounded-full text-16 font-bold bg-primaryPurple ${textColorClass} hover:bg-primaryPurple/90 focus:outline-none focus:ring-2 focus:ring-primaryPurple focus:ring-opacity-50 max-w-[334px] mx-auto ${className}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    textColor: PropTypes.oneOf(['white', 'black']),
    className: PropTypes.string,
};
export default Button;

// import React from 'react'

// const Button = () => {
//   return (
    
//         <>
//         <div className="flex flex-col items-center space-y-4">
        
//           <button className="w-64 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300">
//             Log in
//           </button>
    
         
//           <p className="text-gray-600">
          
//             <a href="/SignUp" className="text-blue-600 hover:underline">
              
//             </a>
//           </p>
//         </div></>
      
//   );
// }

// export default Button