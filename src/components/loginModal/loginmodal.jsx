import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginModal = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  // Check if the user is already logged in on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // or check for token in localStorage/sessionStorage
    if (isLoggedIn) {
      navigate("/home"); // Redirect to home if already logged in
    }
  }, [navigate]);

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const { email, password } = formData;
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/users/login/`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.tokens?.access;
      if (!token) {
        setErrors({ general: "No token received. Please try again." });
        return;
      }

      // Store token based on "Keep me logged in"
      if (keepLoggedIn) {
        localStorage.setItem("token", token);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        sessionStorage.setItem("token", token);
      }

      // Set the login state to true and navigate
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true); // Update the parent component state
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      const message =
        error.response?.data?.message || "Invalid email or password";
      setErrors({ general: message });
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 w-[calc(100%-1rem)] h-[calc(60%-1rem)] bg-cover bg-center rounded-md m-2"
        style={{ backgroundImage: "url('/login/Image.png')" }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm mx-4 space-y-4">
          <div className="flex justify-center mb-3">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>

          <h2 className="text-2xl font-bold text-center mb-1">Welcome Back</h2>
          <p className="text-xs text-gray-400 text-center mb-6 font-bold">
            Enter your email and password to sign in
          </p>

          <form onSubmit={handleSignIn} className="space-y-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={updateField}
                className={`mt-1 block w-full rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-blue-500 focus:ring-blue-500 h-10 pl-4`}
                placeholder="Your email"
                required
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={updateField}
                className={`mt-1 block w-full rounded-md border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-blue-500 focus:ring-blue-500 h-10 pl-4`}
                placeholder="Your password"
                required
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            {errors.general && (
              <p className="text-center text-red-500 text-sm">
                {errors.general}
              </p>
            )}

            <div className="flex items-center justify-start gap-2 mt-2">
              <Switch
                checked={keepLoggedIn}
                onChange={setKeepLoggedIn}
                className={`${
                  keepLoggedIn ? "bg-[#4FD1C5]" : "bg-gray-200"
                } relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2`}
              >
                <span className="sr-only">Keep me logged in</span>
                <span
                  className={`${
                    keepLoggedIn ? "translate-x-4" : "translate-x-1"
                  } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <span className="text-sm text-gray-600">Remember me</span>
            </div>

            <button
              type="submit"
              className="mt-4 w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2"
              style={{
                background:
                  "linear-gradient(to right, #4FD1C5 0%, #2FA7FF 100%)",
              }}
            >
              Sign In
            </button>
          </form>
          {/* Register link */}
          <p className="mt-3 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="font-medium text-[#4FD1C5] hover:text-[#2FA7FF] transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
