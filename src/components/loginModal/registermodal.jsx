import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Switch } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const RegisterModal = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const { name, email, password } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!email.trim()) newErrors.email = 'Please enter your email';
    if (email && !EMAIL_REGEX.test(email)) newErrors.email = 'Please enter a valid email address';
    if (!password.trim()) newErrors.password = 'Please enter a password';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
  
    try {
      const { data } = await axios.post(`${BASE_URL}/users/register/`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      console.log('User registered successfully', data);
      navigate('/home'); // 👈 Redirect to Home page after successful registration
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      setErrors({ server: error.response?.data?.message || 'Registration failed, please try again later.' });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="fixed inset-0 overflow-hidden font-poppins">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 right-0 w-[calc(100%-1rem)] h-[calc(60%-1rem)] bg-cover bg-center rounded-md m-2"
        style={{ backgroundImage: "url('/login/Image.png')" }}
      />

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm mx-4 space-y-4">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-10 mx-auto mb-3" />

          <h2 className="text-lg font-semibold text-center mb-4">Register with</h2>

          {/* Google sign-up button */}
          {/* <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 mb-4">
            <FcGoogle className="text-xl" />
          </button> */}

          {/* Divider */}
          {/* <div className="relative flex justify-center mb-4">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div> */}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {['name', 'email', 'password'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                  {field}
                </label>
                <input
                  type={field === 'password' ? 'password' : field}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={`Your ${field}`}
                  className={`mt-1 block w-full h-10 pl-4 rounded-lg border ${
                    errors[field] ? 'border-red-500' : 'border-gray-300'
                  } focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors[field] && <p className="mt-1 text-xs text-red-500">{errors[field]}</p>}
              </div>
            ))}

            {/* Remember me toggle */}
            <div className="flex items-center gap-2">
              <Switch
                checked={rememberMe}
                onChange={setRememberMe}
                className={`${
                  rememberMe ? 'bg-[#4FD1C5]' : 'bg-gray-200'
                } relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2`}
              >
                <span className="sr-only">Remember me</span>
                <span
                  className={`${
                    rememberMe ? 'translate-x-4' : 'translate-x-1'
                  } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <span className="text-sm text-gray-600">Remember me</span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 mt-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2 uppercase transition duration-300 ${
                loading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              style={{ background: 'linear-gradient(to right, #4FD1C5 0%, #2FA7FF 100%)' }}
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
          </form>

          {/* Server-side error */}
          {errors.server && (
            <p className="mt-3 text-xs text-red-500 text-center">{errors.server}</p>
          )}

          {/* Login link */}
          <p className="mt-3 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-medium text-[#4FD1C5] hover:text-[#2FA7FF] transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
