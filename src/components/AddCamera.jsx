import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const appStackData = [
  {
    title: "camera Tampering",
    icon: "/icons/nest_cam_iq.svg",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "ANPR",
    icon: "/icons/car1.svg",
    version: "3.2",
    status: "Active",
  },
  {
    title: "Wrong Lane",
    icon: "/icons/dangerous.svg",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "Wrong Parking",
    icon: "/icons/Group.svg",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "Vehicle Trajectory & Heatmap",
    icon: "/icons/car (6).png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "Wrong Way",
    icon: "/icons/road (1) 1.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "Traffic Volume Estimation",
    icon: "/icons/traffic-lights.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "People Count",
    icon: "/icons/people count.svg",
    version: "3.2",
    status: "Active",
  },
  {
    title: "People IN/OUT",
    icon: "/icons/people in.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "Intrusion",
    icon: "/icons/intrusion.svg",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "No Helmet Violation",
    icon: "/icons/no-helmet.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "no seatbelt",
    icon: "/icons/seatbelt.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "crowd estimation",
    icon: "/icons/Group.svg",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "stopped vehicle",
    icon: "/icons/drive.png",
    version: "3.2",
    status: "Active",
  },
  {
    title: "axie count",
    icon: "/icons/3d-cube.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "face recognition System",
    icon: "/icons/electronics.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "poor visibilty",
    icon: "/icons/visible.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "train detection",
    icon: "/icons/train.svg",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "fence jumping",
    icon: "/icons/fence.svg",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "incident detection",
    icon: "/icons/incident.png",
    version: "3.2",
    status: "Active",
  },
  {
    title: "loitering",
    icon: "/icons/hacker.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "smoke & fire",
    icon: "/icons/fire.svg",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "PPE Detection",
    icon: "/icons/ppe.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "unattended object",
    icon: "/icons/detection.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "slow moving vehicle",
    icon: "/icons/car (6).png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "animal detection",
    icon: "/icons/animal.svg",
    version: "3.2",
    status: "Active",
  },
  {
    title: "mobile detection",
    icon: "/icons/phone.png",
    version: "3.2",
    status: "Inactive",
  },
  {
    title: "crowd count",
    icon: "/icons/people.png",
    version: "3.2",
    status: "Inactive",
  },
];

const AddCamera = () => {
  const [modelStatus, setModelStatus] = useState({});
  const [selectedModels, setSelectedModels] = useState([]);

  const [isModelAdded, setIsModelAdded] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    rtsp_url: "",
    location: "",
    cameraType: "active",
  });

  const toggleModel = (app) => {
    setSelectedModels((prev) => {
      const exists = prev.find((model) => model.title === app.title);
      if (exists) {
        return prev.filter((model) => model.title !== app.title);
      } else {
        return [...prev, app];
      }
    });
  };

  const [modelData, setModelData] = useState({
    modelName: "",
    modelVersion: "",
    modelDescription: "",
  });

  const [activePage, setActivePage] = useState("cameraDetail");

  const handleCameraInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleModelInputChange = (e) => {
    const { name, value } = e.target;
    setModelData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCameraSubmit = async () => {
    try {
      // Check for the token in localStorage (for "Keep me logged in" users)
      let accessToken = localStorage.getItem('token');
      
      // If no token in localStorage, try sessionStorage (for non-"Keep me logged in" users)
      if (!accessToken) {
        accessToken = sessionStorage.getItem('token');
      }
  
      // If no token found, alert user that they need to log in
      if (!accessToken) {
        alert("You are not logged in. Please log in first.");
        return;
      }
  
      // Prepare the camera payload
      const payload = {
        username: formData.username,
        password: formData.password,
        name: formData.name,
        rtsp_url: formData.rtsp_url,
        location: formData.location,
        cameraType: formData.cameraType,
      };
  
      // Send the POST request with the Authorization header
      const response = await axios.post(
        `${BASE_URL}/camera/`, 
        payload, 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Include the access token here
          },
        }
      );
      
      console.log("Camera added successfully:", response.data);
  
      // Clear the form after successful submission
      setFormData({
        username: "",
        password: "",
        name: "",
        rtsp_url: "",
        location: "",
        cameraType: "active",
      });
  
      alert("Camera added successfully!");
    } catch (error) {
      console.error("Error adding camera:", error);
      alert("Failed to add camera. Please try again.");
    }
  };
  

  const handleModelSubmit = async () => {
    try {
      const payload = {
        modelName: modelData.modelName,
        modelVersion: modelData.modelVersion,
        modelDescription: modelData.modelDescription,
      };

      const response = await axios.post(`${BASE_URL}/model/`, payload);
      console.log("Model added successfully:", response.data);

      setModelData({
        modelName: "",
        modelVersion: "",
        modelDescription: "",
      });

      alert("Model added successfully!");
    } catch (error) {
      console.error("Error adding model:", error);
      alert("Failed to add model. Please try again.");
    }
  };

  const switchToCameraDetail = () => {
    setActivePage("cameraDetail");
  };

  const switchToAddModel = () => {
    setActivePage("addModel");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-30">
      <div className="mx-auto ">
        {/* Tabs */}
        <div className="mb-4 flex space-x-2">
          <div
            onClick={switchToCameraDetail}
            className={`cursor-pointer px-5 py-1 rounded-3xl shadow-md  outline-offset-[-1px] inline-flex justify-center items-center gap-2.5
              ${
                activePage === "cameraDetail"
                  ? "bg-gradient-to-r from-teal-400 to-sky-500 text-white outline-white"
                  : "bg-white text-gray-800"
              }`}
          >
            <img
              src="/icons/cam.svg"
              alt="Camera Icon"
              className="h-4 w-4 mr-2"
            />
            Camera Detail
          </div>

          <div
            onClick={switchToAddModel}
            className={`cursor-pointer px-5 py-1 rounded-3xl shadow-md inline-flex justify-center items-center gap-2.5
              ${
                activePage === "addModel"
                  ? "bg-gradient-to-r from-teal-400 to-sky-500 text-white"
                  : "bg-white text-gray-800"
              }`}
          >
            <img
              src="/icons/appstack.svg"
              alt="Appstack Icon"
              className="h-4 w-4 mr-2"
            />
            Add Model
          </div>
        </div>

        {/* Section Heading */}
        <h1 className="mb-4 text-xl font-medium text-gray-800">
          {activePage === "cameraDetail" ? "Camera Detail" : ""}
        </h1>

        {/* Content */}
        {activePage === "cameraDetail" ? (
          // Camera Detail Form
          <div className="rounded-lg bg-neutral-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Username */}
              <div className="space-y-2">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  placeholder="e.g. super admin"
                  value={formData.username}
                  onChange={handleCameraInputChange}
                  className="px-4 py-2 border rounded-md w-full"
                />
              </div>

              {/* Camera ID/ Name */}
              <div className="space-y-2">
                <label htmlFor="name">Camera ID/ Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="e.g. f033f9ab-dd30-27b7-78bd-f6378cbd3f81"
                  value={formData.name}
                  onChange={handleCameraInputChange}
                  className="px-4 py-2 border rounded-md w-full"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="e.g. password123"
                  value={formData.password}
                  onChange={handleCameraInputChange}
                  className="px-4 py-2 border rounded-md w-full"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label htmlFor="location">
                  Camera Location (Address / Zone / GPS coordinates)
                </label>
                <input
                  id="location"
                  name="location"
                  placeholder="e.g. Building A - Main Gate"
                  value={formData.location}
                  onChange={handleCameraInputChange}
                  className="px-4 py-2 border rounded-md w-full"
                />
              </div>

              {/* RTSP URL (mapped to 'rtsp_url') */}
              <div className="space-y-2">
                <label htmlFor="rtsp_url">
                  Camera IP Address / RTSP Stream URL
                </label>
                <input
                  id="rtsp_url"
                  name="rtsp_url"
                  placeholder="e.g. rtsp://192.168.1.100:554/stream1"
                  value={formData.rtsp_url}
                  onChange={handleCameraInputChange}
                  className="px-4 py-2 border rounded-md w-full"
                />
              </div>

              {/* Camera Type*/}
              <div className="space-y-2">
                <label>Camera Type</label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="active"
                      name="cameraType"
                      value="active"
                      checked={formData.cameraType === "active"}
                      onChange={handleCameraInputChange}
                    />
                    <label htmlFor="active">Active</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="inactive"
                      name="cameraType"
                      value="inactive"
                      checked={formData.cameraType === "inactive"}
                      onChange={handleCameraInputChange}
                    />
                    <label htmlFor="inactive">Inactive</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="maintenance"
                      name="cameraType"
                      value="maintenance"
                      checked={formData.cameraType === "maintenance"}
                      onChange={handleCameraInputChange}
                    />
                    <label htmlFor="maintenance">Maintenance</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Camera Button */}
            <div className="mt-6">
              <button
                className="px-5 h-12 py-4 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2.5 text-white rounded-md"
                onClick={handleCameraSubmit}
              >
                <img
                  src="/icons/whitecam.svg"
                  alt="Camera Icon"
                  className="h-6 w-6 mr-2"
                />
                Add Camera
              </button>
            </div>
          </div>
        ) : (
          // Add Model Form
          <div className="bg-zinc-100 min-h-screen w-full">
            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 w-full pb-20 sm:pb-10">
              {appStackData.map((app, index) => {
                const isSelected = selectedModels.some(
                  (model) => model.title === app.title
                );

                return (
                  <div
                    key={index}
                    className="relative bg-zinc-100 rounded-lg border border-slate-400 w-full h-32 p-4 flex items-center hover:shadow-lg transition"
                  >
                    {/* Icon */}
                    <img
                      src={app.icon}
                      alt={app.title}
                      className="w-12 h-12 mr-4"
                    />

                    {/* Details */}
                    <div className="flex-1">
                      <div className="text-gray-700 text-sm font-medium font-['Poppins'] capitalize leading-tight">
                        {app.title}
                      </div>

                      <div className="text-gray-700 text-xs font-light font-['Poppins'] capitalize leading-none">
                        Version: {app.version}
                      </div>

                      <div className="flex items-center text-xs font-light font-['Poppins'] capitalize leading-none mt-1.5">
                        <img
                          src={
                            app.status === "Active"
                              ? "/icons/Ellipse green.svg"
                              : "/icons/Ellipse 74.svg"
                          }
                          alt={app.status}
                          className="w-1.5 h-1.5 rounded-full mr-1"
                        />
                        <span
                          className={
                            app.status === "Active"
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {app.status}
                        </span>
                      </div>
                    </div>

                    {app.status === "Active" && (
                      <div
                        onClick={() => toggleModel(app)}
                        className={`absolute bottom-2 left-2 px-2 py-0.5 rounded-[50px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5 cursor-pointer transition-all duration-300
                        ${
                          isSelected
                            ? "bg-neutral-200"
                            : "bg-gradient-to-r from-teal-300 to-sky-400"
                        }
                      `}
                      >
                        <div
                          className={`text-center ${
                            isSelected ? "text-gray-800" : "text-zinc-100"
                          } text-[10px] font-normal font-['Poppins'] capitalize leading-none`}
                        >
                          {isSelected ? "Remove Model" : "Add Model"}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {selectedModels.length > 0 && (
              <div className="mt-10  sm:w-1/2 w-full">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 font-['Poppins']">
                  Model Selected
                </h2>
                <div className="space-y-3">
                  {selectedModels.map((model) => (
                    <div
                      key={model.title}
                      className="bg-white shadow border border-slate-300 rounded p-4 flex justify-between items-center"
                    >
                      <div>
                        <div className="text-sm font-medium text-gray-800">
                          {model.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          Version: {model.version}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleModel(model)}
                        className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200 transition"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Button to Switch */}
        <div className="mt-6 flex justify-end items-center gap-4 px-4">
          {activePage === "cameraDetail" ? (
            <button
              onClick={switchToAddModel}
              className="px-5 h-12 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2.5 text-white rounded-md"
            >
              <img
                src="/icons/appstackwhite.svg"
                alt="Appstack Icon"
                className="h-6 w-6 mr-2"
              />
              Next
            </button>
          ) : (
            <>
              <button
                onClick={switchToCameraDetail}
                className="px-5 h-12 py-2  bg-gray-200 text-gray-700 hover:bg-gray-300 transition rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={() => navigate("/connect-page")}
                className="px-5 h-12 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2.5 text-white rounded-md"
              >
                <img
                  src="/icons/cast.svg"
                  alt="Camera Icon"
                  className="h-4 w-4 mr-2"
                />
                Connect
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCamera;
