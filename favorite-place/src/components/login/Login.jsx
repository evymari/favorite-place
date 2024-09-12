import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from "../butons/Button"
import UseApi from "../../hook/UseApi";
import { API_BASE_URL } from "../../config/Urls";
import AuthButtons from "../butons/AuthButtons";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  // Regex sin caracteres especiales
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Please enter a password.');
      return;
    }

    // Validación de contraseña sin caracteres especiales
    if (!passwordRegex.test(password)) {
      if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
      } else if (!/[a-z]/.test(password)) {
        setError('Password must contain at least one lowercase letter.');
      } else if (!/[A-Z]/.test(password)) {
        setError('Password must contain at least one uppercase letter.');
      } else if (!/\d/.test(password)) {
        setError('Password must contain at least one number.');
      } else {
        setError('Password does not meet the security requirements.');
      }
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    try {
      const apiEndpoint = `${API_BASE_URL}auth/`;
      const result = await UseApi({
        apiEndpoint,
        method: 'POST',
        body: { username: email, password },
      });

      if (result.error) {
        setError(result.error);
        return;
      }

      const { token, user } = result.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(user));

      setMessage('User logged in successfully');
      navigate('/Inspireme');
    } catch (error) {
      setError('An error occurred during login. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/image/style.png')] ">
      <div className="relative flex flex-col justify-start pb-40">
        
          <img
            src="/image/logo-white.png"
            alt="Favorite place logo"
            className="mb-12 w-32 h-24 left-12"
          />
        <AuthButtons />
        <br></br>
        <div className="relative mb-1">
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          {message && <p className="mb-4 text-center text-green-500">{message}</p>}
          <form onSubmit={handleLogin}>
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
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Forgot your password?
              </a>
            </div>
            <Button
              type="submit"
              className="font-semibold text-white transition-colors rounded-full hover:bg-blue-700 bg-purple-600 "
            >
              Log in
            </Button>
            <div className="w-[334px] mb-4 text-center mt-6 text-sm text-gray-600">
              Don&apos;t have an account yet?{" "}
              <Link to="/SignUp" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;