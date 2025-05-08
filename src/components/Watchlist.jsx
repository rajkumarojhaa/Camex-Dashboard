import React, { useState, useEffect } from "react";
import axios from "axios";
import AlertItem from "./AlertItem";

const Watchlist = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false)
  const API_URL = import.meta.env.VITE_API_URL;

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "recording.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setVideos(response.data);
      setError(null); // clear previous errors
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError("Failed to fetch videos. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [API_URL]);

  {loading && <p className="text-center text-sm text-gray-500">Refreshing...</p>}
{error && <p className="text-center text-sm text-red-500">{error}</p>}

  return (
    <main className="p-4 sm:p-6 md:p-10 lg:p-10 w-full min-h-screen overflow-hidden bg-zinc-100 pb-20 sm:pb-10">
      <div className="flex justify-between items-center mb-4 sm:mt-20 mt-15">
        {/* Left Side: Watchlist and Description */}
        <div className="flex flex-col">
          <div className="text-gray-700 text-lg font-bold font-['Helvetica'] leading-relaxed">
            Watchlist
          </div>
          <div className="text-gray-700 text-opacity-50 text-xs sm:text-sm md:text-base font-medium font-['Poppins'] capitalize leading-tight sm:leading-snug">
            Review all your notifications and alerts, leverage insights and
            analytics.
          </div>
        </div>

        {/* Right Side: Buttons in a row */}
        <div className="flex items-center space-x-2">
          <button 
          className="px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2 overflow-hidden"
          onClick={fetchVideos}
          >
            <img className="w-4 h-4" src="/icons/replay.svg" />
            <span className="text-right justify-start text-white sm:text-base text-xs font-medium font-['Poppins'] leading-snug">
              Refresh
            </span>
          </button>

          <button className="px-4 py-2 bg-zinc-300 inline-flex justify-center items-center gap-2 overflow-hidden whitespace-nowrap">
            <img className="w-4 h-4 bg-zinc-300" src="/icons/visibility.svg" />
            <span className="text-right justify-start text-stone-900 sm:text-base text-xs font-medium font-['Poppins'] leading-snug">
              Read all
            </span>
          </button>
        </div>
      </div>

      {/* Second section start here */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-3 justify-start lg:w-fit ">
        {/* Search Alerts */}
        <div className="lg:w-44 lg:h-10 w-28 md:w-40 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4 gap-1">
          <img
            className="sm:w-5 sm:h-5 w-4 h-4 relative"
            src="/icons/search.svg"
          />
          <input
            type="text"
            placeholder="Search Alerts..."
            className="bg-transparent outline-none text-gray-700 sm:text-sm text-xs font-medium font-['Poppins'] capitalize leading-tight w-full truncate placeholder:text-gray-500"
          />
        </div>

        {/* Site Button */}
        <div className="lg:w-40 lg:h-10 w-28 md:w-40 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4 gap-x-2 relative">
          {/* Location Icon */}
          <img className="sm:w-6 sm:h-6 w-4 h-4" src="/icons/location_on.svg" />

          {/* Dropdown Container */}
          <div className="relative flex-1 ">
            <select
              className="w-full p-1 text-gray-700 text-xs sm:text-sm font-medium bg-transparent appearance-none focus:outline-none cursor-pointer font-['Poppins'] capitalize"
              defaultValue="Site"
            >
              <option value="site">Site</option>
              <option value="site2">Site 2</option>
              <option value="site3">Site 3</option>
            </select>

            {/* Dropdown Icon */}
            <img
              className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>

        {/* Camera Button */}
        <div className="lg:w-40 lg:h-10 w-28 md:w-40 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4 gap-x-2 relative">
          {/* Camera Icon */}
          <img
            className="sm:w-5 sm:h-5 w-4 h-4"
            src="/icons/camera_video.svg"
          />

          {/* Dropdown */}
          <div className="relative flex-1">
            <select
              className="w-full p-1 text-gray-700 text-xs sm:text-sm font-medium bg-transparent appearance-none focus:outline-none cursor-pointer  font-['Poppins'] capitalize"
              defaultValue="camera"
            >
              <option value="camera">Camera</option>
              <option value="camera2">Camera 2</option>
              <option value="camera3">Camera 3</option>
            </select>

            {/* Dropdown Icon */}
            <img
              className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>

        {/* Office Button */}
        <div className="lg:w-40 lg:h-10 w-28 md:w-40 h-9 bg-zinc-300 rounded-3xl flex items-center px-2 sm:px-4 gap-x-2 relative">
          {/* Office Icon */}
          <img className="sm:w-5 sm:h-5 w-4 h-4" src="/icons/event_list.svg" />

          {/* Dropdown */}
          <div className="relative flex-1">
            <select
              className="w-full p-1 text-gray-700 text-xs sm:text-sm font-medium bg-transparent appearance-none focus:outline-none cursor-pointer font-['Poppins'] capitalize"
              defaultValue="office"
            >
              <option value="office">Office</option>
              <option value="office2">Office 2</option>
              <option value="office3">Office 3</option>
            </select>

            {/* Dropdown Icon */}
            <img
              className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
              src="/icons/arrow_drop_down.svg"
            />
          </div>
        </div>
      </div>

      {/* Alerts Section start hete*/}
      <div className="mt-4">
        <div className="w-48 h-6 justify-start">
          <span className="text-gray-700 sm:text-lg text-sm font-bold font-['Poppins'] leading-relaxed">
            March 16th
          </span>
          <span className="text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            {" "}
            Monday
          </span>
        </div>

        <div className="grid grid-cols-4  pb-2 ">
          <div className="w-20 h-6 justify-start text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            Preview
          </div>
          <div className="w-16 h-6 justify-start text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            Date
          </div>
          <div className="w-32 h-6 justify-start text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            Title/Alert
          </div>
          <div className="sm:w-32 sm:h-6 w-16 h-4 justify-start text-gray-700 sm:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
            Site/Camera
          </div>
        </div>
      </div>

      {/* Big card Start here*/}

      <div className=" sm:p-5 p-3 w-full space-y-4 mx-auto  bg-neutral-200 rounded-[30px]">
        {/* Clickable Card */}

        {videos.map((video, index) => (
          <div key={video.id}>
            {expandedIndex !== index && (
            <div
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="cursor-pointer"
            >
              {/* AlertItem map here */}

              <AlertItem
                thumbnail={video.thumbnailUrl}
                date={video.uploadTime}
                duration={video.duration}
                description={video.description}
                title={video.title}
              />
            </div>
            )}
            {/* Expanded Section */}
            {expandedIndex === index && (
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                  {/* video Section */}

                  <div className="relative rounded-md overflow-hidden aspect-video">
                    <video
                      src={video.videoUrl}
                      controls
                      autoPlay
                      className="w-full sm:w-[500px] md:w-[600px] lg:w-[698px] h-auto object-cover"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="text-center sm:text-left">
                    <div className="text-gray-700 text-base font-medium font-['Poppins'] capitalize leading-snug">
                      {video.title} ({video.duration}).
                    </div>

                    <div>
                      {/* Alert & Count Section */}
                      <div className="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize">
                          Alert
                        </div>
                        <div className="text-gray-700 text-base font-medium font-['Poppins'] capitalize">
                          Count people
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-b border-gray-300 my-3" />

                      {/* Camera Section */}
                      <div className="grid grid-cols-2 gap-2 mt-5">
                        <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize">
                          Camera
                        </div>
                        <div className="text-gray-700 text-base font-medium font-['Poppins'] capitalize">
                          Office-camera101
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col md:flex-row justify-between  space-y-3 md:space-y-0">
                  {/* Left Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 ">
                    <button
                      className="px-4 py-2 w-full sm:w-36 h-12 flex items-center justify-center bg-white border border-black border-opacity-50"
                      onClick={() => handleDownload(video.videoUrl)}
                    >
                      <img
                        className="w-4 h-4"
                        src="/icons/download.svg"
                        alt="Download"
                      />
                      <span className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize ml-2">
                        Download
                      </span>
                    </button>

                    <button 
                    className="px-4 py-2 w-full sm:w-52 md:w-44 h-12 flex items-center justify-center bg-white border border-black border-opacity-50"
                    onClick={() => setExpandedIndex(null)}
                    >
                      <img
                        className="w-4 h-4"
                        src="/icons/theaters.svg"
                        alt="Theaters"
                      />
                      <span className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize ml-2">
                        Open Sequence
                      </span>
                    </button>
                  </div>

                  {/* Right Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button
                      className="h-12 px-4 w-full  md:w-52 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex  gap-2.5  overflow-hidden  items-center justify-center "
                      onClick={() => setIsShareModalOpen(true)}
                    >
                      <img
                        className="w-6 h-6"
                        src="/icons/share.svg"
                        alt="Share"
                      />
                      <span className="text-right justify-start text-white text-base font-medium font-['Poppins'] leading-snug">
                        Share Recording
                      </span>
                    </button>

                    <button
                      className="h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex  gap-2.5 overflow-hidden  items-center justify-center "
                      onClick={() => setIsAddTaskModalOpen(true)}
                    >
                      <img className="w-6 h-6" src="/icons/add.svg" alt="Add" />
                      <span className="text-white text-base font-medium font-['Poppins'] ml-2">
                        Add Task
                      </span>
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full border-b border-gray-300 my-3" />
              </div>
            )}
          </div>
        ))}

        {/* Share task code start here */}
        {isShareModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50  sm:p-6">
            <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-[844px] max-h-[90vh] bg-neutral-200 rounded-[20px] p-4 sm:p-6 relative shadow-lg border border-gray-200 overflow-y-auto">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                onClick={() => setIsShareModalOpen(false)}
              >
                <img className="w-4 h-4" src="/icons/close.svg" alt="Close" />
              </button>

              {/* Title */}
              <div className="text-gray-700 text-lg sm:text-xl font-bold leading-7">
                Share recording
              </div>

              {/* Description */}
              <div className="text-gray-700 text-opacity-50 text-sm sm:text-base font-medium leading-tight mt-2 sm:mt-4">
                By sharing this recording, a public link is generated,
                accessible by any external parties who receive this link. You
                can specify the sharing duration until the public link is
                disabled.
              </div>

              {/* Grid layout for content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {/* Left Column: Share Details */}
                <div>
                  <div className="text-gray-700 text-opacity-50 text-lg sm:text-xl font-medium leading-7">
                    Share details
                  </div>

                  {/* Title Input */}
                  <div className="mt-2">
                    <label className="text-gray-700 text-base font-medium">
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 bg-white rounded-lg p-2 text-gray-700 text-sm"
                      placeholder="Name"
                    />
                  </div>

                  {/* Notes Input */}
                  <div className="mt-4">
                    <label className="text-gray-700 text-base font-medium">
                      Notes
                    </label>
                    <textarea
                      className="w-full h-16 bg-white rounded-lg p-2 text-gray-700 text-sm"
                      placeholder="Provide a short description..."
                    ></textarea>
                  </div>

                  {/* Details Box */}
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Camera</span>
                      <span className="text-black text-opacity-50">
                        office-camera101
                      </span>
                    </div>
                    <div className="w-full h-px bg-zinc-300 my-2" />
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Sites</span>
                      <span className="text-black text-opacity-50">
                        office-camera101
                      </span>
                    </div>
                    <div className="w-full h-px bg-zinc-300 my-2" />
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Date/Time</span>
                      <span className="text-black text-opacity-50">
                        April 16, Tuesday 20:04:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Recipients */}
                <div>
                  <div className="text-gray-700 text-opacity-50 text-lg sm:text-xl font-medium leading-7">
                    Recipients
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-700 text-sm">
                      Following persons will receive a notification and access
                      to the shared recording.
                    </p>

                    <div className="w-full h-12 bg-white rounded-lg flex items-center p-2 mt-3">
                      <input
                        type="email"
                        className="w-full bg-transparent text-gray-700 text-sm outline-none"
                        placeholder="Write email and press enter..."
                      />
                    </div>

                    <div className="mt-4 p-4 w-full bg-white rounded-lg flex flex-col items-center">
                      <div className="text-gray-700 text-sm font-semibold">
                        No recipients
                      </div>
                      <p className="text-gray-700 text-opacity-50 text-sm text-center">
                        To add a recipient, submit an email address in the above
                        input field.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 px-2 sm:px-4">
                <button
                  className="w-full sm:w-52 h-12 px-4 py-2 rounded-md flex items-center justify-center bg-white border border-black border-opacity-50"
                  onClick={() => setIsShareModalOpen(false)}
                >
                  <img
                    className="w-5 h-5 mr-2"
                    src="/icons/cancel.svg"
                    alt="Cancel"
                  />
                  <span className="text-gray-700 text-sm">Cancel & Close</span>
                </button>

                <button className="w-full sm:w-52 h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 flex items-center justify-center text-white rounded-md">
                  <img
                    className="w-6 h-6 mr-2"
                    src="/icons/share.svg"
                    alt="Share"
                  />
                  <span className="text-base font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Task Modal code start here*/}

        {isAddTaskModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 sm:p-6">
            <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-neutral-200 rounded-2xl p-4 sm:p-6 relative shadow-lg border border-gray-200 overflow-y-auto max-h-[90vh] ">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                onClick={() => setIsAddTaskModalOpen(false)}
              >
                <img className="w-4 h-4" src="/icons/close.svg" alt="Close" />
              </button>

              {/* Title */}
              <h2 className="w-40 h-6 justify-start text-gray-700 text-xl font-bold font-['Helvetica'] leading-7">
                Add Task
              </h2>

              {/* Description */}
              <p className=" justify-start text-gray-700 text-opacity-50 text-sm font-medium font-['Poppins'] capitalize leading-tight mt-2">
                Tasks are a great way to save specific media for further
                analysis and share it with others by email or publicly. They can
                be used to review various incidents (theft, injuries, etc.) and
                other significant moments.
              </p>

              {/* Task Details & Recipients (Grid Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Left Column: Task Details */}
                <div>
                  <h3 className="text-gray-700 text-opacity-50 text-lg font-medium">
                    Task Details
                  </h3>

                  <div className="mt-4">
                    <label className="text-gray-700 text-sm font-medium">
                      Task Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 bg-white rounded-lg p-2 mt-1 text-gray-700 text-sm"
                      placeholder="Enter task name"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="text-gray-700 text-sm font-medium">
                      Notes
                    </label>
                    <textarea
                      className="w-full h-20 bg-white rounded-lg p-2 mt-1 text-gray-700 text-sm"
                      placeholder="Provide a short description..."
                    ></textarea>
                  </div>

                  {/* Camera, Sites, Date/Time Section */}
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700 text-sm">Camera</span>
                      <span className="text-gray-400 text-sm">
                        Office-Camera101
                      </span>
                    </div>
                    <div className="w-full h-px bg-gray-300 my-2"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 text-sm">Sites</span>
                      <span className="text-gray-400 text-sm">
                        Office-Camera101
                      </span>
                    </div>
                    <div className="w-full h-px bg-gray-300 my-2"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 text-sm">Date/Time</span>
                      <span className="text-gray-400 text-sm">
                        April 16, Tuesday 20:04:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Recipients */}
                <div>
                  <h3 className="text-gray-700 text-opacity-50 text-lg font-medium">
                    Recipients
                  </h3>

                  <div className="mt-4 p-4 bg-white rounded-lg">
                    {/* Search Bar */}
                    <div className="flex items-center space-x-2">
                      <img
                        className="w-6 h-6"
                        src="/icons/search.svg"
                        alt="Search"
                      />
                      <input
                        type="text"
                        className="w-full bg-transparent text-gray-700 text-sm outline-none"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="w-full h-px bg-gray-300 mt-2"></div>

                    {/* Recipient List */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-x-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-gray-400"
                        />
                        <img
                          className="w-6 h-6"
                          src="/icons/account_circle.svg"
                          alt="User Icon"
                        />
                        <span className="text-gray-700 text-sm">Glenn</span>
                      </div>
                      <span className="text-gray-400 text-sm">Editor</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <button
                  className="w-full h-12 md:w-auto px-6 py-2 bg-white border border-gray-400  flex items-center justify-center space-x-2"
                  onClick={() => setIsAddTaskModalOpen(false)}
                >
                  <img
                    className="w-5 h-5"
                    src="/icons/cancel.svg"
                    alt="Cancel"
                  />
                  <span className="text-gray-700 text-sm">Cancel & Close</span>
                </button>

                <button className="w-full md:w-auto h-12 px-4 py-2 bg-gradient-to-r from-teal-300 to-sky-400 inline-flex justify-center items-center gap-2.5 overflow-hidden  space-x-2">
                  <img className="w-6 h-6" src="/icons/add.svg" alt="Add" />
                  <span className="text-right justify-start text-white text-base font-medium font-['Poppins'] leading-snug">
                    Share
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Watchlist;
