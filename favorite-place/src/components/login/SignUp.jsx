import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../butons/Button';
import AuthButtons from '../butons/AuthButtons';



function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    if (username.length < 3 || /\s/.test(username)) {
      setError('Username must be at least 3 characters long and contain no spaces.');
      return;
    }
  
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
  
    try {
      const result = await UseApi(username, email, password);
      if (result.success) {
        setMessage('Account created successfully!');
        setError('');
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/Inspireme');  // Redirige a la página de inspiración u otra página después del registro
      } else {
        setError(result.error || 'An error occurred during registration.');
      }
    } catch (error) {
      setError('An unexpected error occurred.');
      console.error(error);
    }
  };
  return (
    <>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/image/style.png')] ">
        <div className="relative flex flex-col justify-start pb-40 ">
          <img
            src="/image/logo-white.png"
            alt="Favorite place logo"
            className="mb-4 w-24 h-24 flex items-center justify-center"

          />
          <AuthButtons />
          <br></br>
          <div className="relative mb-1">
            {error && <p className="mb-4 text-center text-red-500">{error}</p>}

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="relative mb-8">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                </button>
              </div>
              <Button
                type="submit"
                className="font-semibold text-white transition-colors rounded-full  bg-purple-600 " bg-purple-600 text-white
              >
                Sign up
              </Button>

              <div className="w-[334px] mb-4 text-center mt-6 text-sm text-gray-600">
                Already have an account? {" "}
                <Link to="/Login" className="text-blue-600 hover:underline">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default SignUp;

