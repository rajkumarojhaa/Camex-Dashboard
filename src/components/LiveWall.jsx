import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronsRight, X, Plus } from "lucide-react";
import CameraStream from "./CameraStream";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function FileExplorer({ userId = 42 }) {
  const [cameras, setCameras] = useState([]);
  const [expandedCamera, setExpandedCamera] = useState(null); // For popup
  const [cameraGroups, setCameraGroups] = useState([]);

  useEffect(() => {
    let accessToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!accessToken) {
      alert("You are not logged in. Please log in first.");
      return;
    }

    const url = `${BASE_URL}/camera/api/live_wall/?user_id=${userId}&mode=normal`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log("Fetched camera data:", res.data);
        setCameras(res.data.cameras);
        setCameraGroups(res.data.data);
      })

      .catch((err) => console.error("Error fetching cameras:", err));
  }, []);

  const closeCamera = (id) => {
    setCameras((prev) => prev.filter((cam) => cam.id !== id));
    if (expandedCamera?.id === id) setExpandedCamera(null);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white pt-25">
      <div className="flex flex-1 flex-row overflow-hidden">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ease-in-out flex flex-col justify-between
            ${sidebarOpen ? "md:w-[20%] w-[200px]" : "w-[70px]"} 
            overflow-y-auto p-2 bg-white border-r`}
        >
          <div>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-black"
              >
                <div className="flex flex-row gap-[2px]">
                  <ChevronsRight
                    size={20}
                    className={`transform transition-transform duration-300 ${
                      sidebarOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="text-sm font-medium">
                    {sidebarOpen ? "Hide" : "Show"}
                  </span>
                </div>
              </button>
            </div>

            {/* Display the camera groups and cameras */}
            {cameraGroups.map((group) => (
              <div key={group.group_name}>
                <div className="flex items-center space-x-2">
                  {/* Folder Icon */}
                  <img
                    src="/icons/folder.svg"
                    alt="Folder Icon"
                    className="w-5 h-4"
                  />

                  {/* Group Name */}
                  <p className=" font-normal text-base text-gray-700">
                    {group.group_name}
                  </p>
                </div>
                <div className="grid grid-cols-1 pt-5  gap-4">
                  {group.cameras.map((cam) => (
                    <div
                      key={cam.id}
                      className="bg-white overflow-hidden cursor-pointer text-sm flex items-center gap-2"
                    >
                      {/* Image before the camera name */}
                      <img
                        src="/icons/darkcam.svg"
                        alt="Camera"
                        className="w-5 h-5"
                      />
                      {cam.camera_name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Add Folder */}
          <div className="mt-4">
            <button
              className={`rounded-full bg-gray-800 text-white flex items-center px-3 py-2 transition-all duration-300 ${
                sidebarOpen ? "w-auto" : "w-[40px] justify-center"
              }`}
            >
              <Plus size={16} className="mr-1" />
              {sidebarOpen && "Add Folder"}
            </button>
          </div>
        </div>

        {/* Camera Grid */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cameras.map((cam) => (
              <div
                key={cam.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border cursor-pointer hover:shadow-md transition-all"
                onClick={() => setExpandedCamera(cam)}
              >
                <div className="flex justify-between items-center p-2 bg-gray-100">
                  <span className="text-sm font-medium">
                    {cam.camera_name} — {cam.location}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeCamera(cam.id);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="h-48 bg-black">
                  <CameraStream wsUrl={cam.ws_stream_url} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Popup */}
      {expandedCamera && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[80%] bg-white rounded-xl shadow-xl overflow-hidden">
            <button
              onClick={() => setExpandedCamera(null)}
              className="absolute top-3 right-3 bg-gray-200 rounded-full p-1 hover:bg-gray-300 z-50"
            >
              <X size={20} />
            </button>
            <div className="bg-gray-100 p-3 font-medium text-center text-sm border-b">
              {expandedCamera.camera_name} — {expandedCamera.location}
            </div>
            <div className="h-full w-full bg-black">
              <CameraStream wsUrl={expandedCamera.ws_stream_url} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
