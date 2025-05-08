import React from "react";
import { TramFront, Flame, CarFront, Users, ScanFace, HardHat, CarTaxiFront, Webcam, MapPin } from 'lucide-react';
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      <div className="px-4 py-6 md:px-14">
        {/* Top Stats Row */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6 w-full">
          {/* Overview Chart - 60% width on large screens */}
          <div className="w-full lg:w-[60%] bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <Line
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [
                  {
                    label: "Overview",
                    data: [65, 59, 80, 81, 56],
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "Overview 2",
                    data: [28, 48, 40, 19, 86],
                    backgroundColor: "rgba(153, 102, 255, 0.6)",
                    borderColor: "rgba(153, 102, 255, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "Overview 3",
                    data: [12, 33, 44, 55, 66],
                    backgroundColor: "rgba(255, 159, 64, 0.6)",
                    borderColor: "rgba(255, 159, 64, 1)",
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
              height={150}
            />
          </div>
            {/* Active Devices Card - 20% width on large screens */}
            <div className="w-full lg:w-[20%] p-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-xl shadow-md">
              <div className="flex mb-8">
                <div className="bg-white p-2 rounded-lg h-12">
                  <Webcam color="#000000" />
                </div>
                <div className="ml-auto text-center">
                  <p className="text-4xl font-semibold mb-1">67</p>
                  <p className="text-sm text-gray-700">Active Devices</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-gray-700 flex justify-between">
                  <span className="text-sm">Total Devices:</span>
                  <span className="text-sm">67</span>
                </p>
              </div>
            </div>

            {/* Subscribed Card - 20% width on large screens */}
            <div className="w-full lg:w-[20%] p-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-xl shadow-md">
              <div className="flex mb-8">
                <div className="bg-white p-2 rounded-lg h-12">
                  <MapPin color="#000000" />
                </div>
                <div className="ml-auto text-center">
                  <p className="text-4xl font-semibold mb-1">510</p>
                  <p className="text-sm text-gray-700">Subscribed</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3">
                <p className="text-gray-700 flex justify-between">
                  <span className="text-sm">Total Applications:</span>
                  <span className="text-sm">2000</span>
                </p>
              </div>
            </div>
        </div>


        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Content (30%) - Events Section */}
          <div className="w-full md:w-[35%] space-y-6">
            {/* Events Stats Chart */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <Bar
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                  datasets: [
                    {
                      label: "Events",
                      data: [65, 59, 80, 81, 56, 55, 40],
                      backgroundColor: "rgba(75, 192, 192, 0.6)",
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>

            {/* Live Events */}
            <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold mb-3">Live Events</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center">

                  <img src="/home/Feed1.png" alt="Chart" className="w-full h-full object-cover" />

                </div>
                <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <img src="/home/Feed2.png" alt="Chart" className="w-full h-full object-cover" />

                </div>
              </div>
            </div>
          </div>

          {/* Right Content (70%) - Map and App List */}
          <div className="w-full md:w-[65%] flex gap-6 flex-col md:flex-row">
            {/* Map Section (50% of parent) */}
            <div className="w-full md:w-[71.5%]">
              <div className="bg-white p-3 rounded-xl shadow-md h-full hover:shadow-xl transition-shadow duration-300">
                {/* <h3 className="font-semibold mb-3">Map</h3> */}
                <div className="h-[360px] bg-gray-200 rounded-md flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7225.923386132618!2d55.15796966615975!3d25.10315802993488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b4361dfe113%3A0xbdcf06d95be71f9b!2sLootah%20BC%20gas%20palm%20jumeirah%20operations%20office!5e0!3m2!1sen!2sin!4v1744111745941!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>

            {/* App List Section (20% of parent) */}
            <div className="w-full md:w-[28.5%]">
              <div className="bg-white p-2 px-4 rounded-xl shadow-md h-full hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold mb-3 flex justify-between">
                  <span>App List</span>
                  <span className="text-blue-500 cursor-pointer">See All</span>
                </h3>
                <ul className="text-sm">
                  <li className="flex justify-between py-0.5">
                    <span className="font-bold text-gray-400">Train Detection</span>
                    <TramFront />
                  </li>
                  <span> 0 </span>
                  <li className="flex justify-between py-0.5">
                    <span className="font-bold text-gray-400">Smoke & Fire</span>
                    <Flame />
                  </li>
                  <span> 272 </span>
                  <li className="flex justify-between py-0.5">
                    <span className="font-bold text-gray-400">ANPR</span>
                    <CarFront />
                  </li>
                  <span> 70.5 </span>
                  <li className="flex justify-between py-0.5">
                    <span className="font-bold text-gray-400">Crowd Estimation</span>
                    <Users />
                  </li>
                  <span> 10k </span>
                  <li className="flex justify-between py-0.5">
                    <span className="font-bold text-gray-400">Face Recognition</span>
                    <ScanFace />
                  </li>
                  <span> 0 </span>
                  <li className="flex justify-between py-0.5">
                    <span className="font-bold text-gray-400">No Helmet Violation</span>
                    <HardHat />
                  </li>
                  <span> 210 </span>
                  <li className="flex justify-between py-0.5">
                    <span className="font-bold text-gray-400">Stopped Vehicle</span>
                    <CarTaxiFront />
                  </li>
                  <span> 200 </span>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
