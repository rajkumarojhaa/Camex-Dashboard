import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";



const Navbar = ({ setIsLoggedIn }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-camera');
  };

  const navItems = [
    { label: "Home", icon: "/icons/home.svg", path: "/home" },
    { label: "Live Wall", icon: "/icons/video_call.svg", path: "/livewall" },
    { label: "Events", icon: "/icons/event_upcoming.svg", path: "/events" },
    { label: "Watchlist", icon: "/icons/format_list_bulleted.svg", path: "/watchlist" },
    { label: "App Stack", icon: "/icons/ar_stickers.svg", path: "/appstack" },
    { label: "Alert", icon: "/icons/warning.svg", path: "/alert" },
    { label: "Licence", icon: "/icons/id_card.svg", path: "/license" },
  ];

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken") || sessionStorage.getItem("refreshToken");
  
      if (!refreshToken) {
        throw new Error("Refresh token not found.");
      }
  
      await axios.post(`${BASE_URL}/users/logout/`, 
        { refresh: refreshToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      // Clear all stored tokens
      localStorage.clear();
      sessionStorage.clear();
  
      // Redirect to login
      navigate("/login");
  
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login");
    }
  };
  
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full  max-w-full absolute h-16 md:h-20 lg:h-24 bg-zinc-100 shadow-md flex items-center px-4 justify-between">
      <div className="flex items-center gap-2 md:gap-3 lg:gap-2">
        <img
          className="w-18 h-9 md:w-24 md:h-12 lg:w-28 lg:h-14 xl:w-36 xl:h-14"
          src="/logo.png"
          alt="Logo"
        />

        <div className="hidden lg:flex items-center gap-1 lg:gap-1 xl:gap-2">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              
              className={({ isActive }) =>
                `px-2 sm:px-2 md:px-2 lg:px-1 xl:px-2 py-2  rounded-3xl flex items-center gap-0.5 border-b-3 ${
                  isActive ? "border-teal-500" : "border-transparent"
                } hover:border-teal-300 cursor-pointer transition-all`
              }
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-4 h-4 md:w-5 md:h-6 lg:w-5 lg:h-4 xl:w-6 xl:h-5"
              />
              <span className="text-xs md:text-sm font-medium capitalize leading-none text-slate-400">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex justify-start items-center gap-1 md:gap-1">
        <button 
          onClick={handleClick}
          className=" hidden sm:flex px-3 py-1 md:px-4 md:py-1 lg:px-3 xl:px-5 lg:py-1 bg-gradient-to-r from-teal-300 to-sky-400 rounded-3xl shadow-md  items-center gap-2 "
        >
          <img
            className="w-2 h-3 md:w-5 md:h-5"
            src="/icons/add_circle.svg"
            alt="Add"
          />
          <span className="text-white text-xs md:text-sm font-medium capitalize">
            ADD
          </span>
        </button>

        <div className="inline-flex items-center gap-1 md:gap-2 lg:gap-1 xl:gap-2">
          <div className="px-2 py-1 md:px-6 lg:px-4 xl:px-6 md:py-1.5 bg-zinc-100 rounded-3xl outline-1 outline-offset-[-4px] outline-slate-400 flex items-center gap-0">
            <img
              className="w-4 h-4 md:w-5 md:h-5"
              src="/icons/material-symbols-light_model-training.svg"
              alt="AI Model"
            />
            <div className="text-center text-xs md:text-sm lg:text-xs xl:text-sm font-bold text-slate-400">
              AI Model and Training
            </div>
          </div>

          <button>
            <img
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              src="/icons/solar.svg"
              alt="Solar"
            />
          </button>

          {/* Profile Image with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <img
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 rounded-2xl cursor-pointer"
              src="/icons/Elipse 5.png"
              alt="Profile"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-5 lg:hidden z-50">
          <button className="px-3 py-2 bg-gradient-to-r from-teal-300 to-sky-400 rounded-3xl shadow-md flex items-center gap-2 md:hidden">
            <img className="w-5 h-5" src="/icons/add_circle.svg" alt="Add" />
            <span className="text-white text-sm font-medium capitalize">ADD</span>
          </button>

          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `px-2 py-2 rounded-3xl flex items-center gap-0.5 border-b-4 ${
                  isActive ? "border-teal-500" : "border-transparent"
                }`
              }
            >
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
              <span className="text-sm font-medium capitalize">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
