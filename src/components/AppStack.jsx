import React from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

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

const AppStack = () => {
  // const [appStackData, setAppStackData] = useState([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);
  // const API_URL = "https://your-api.com/api/appstack";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(API_URL);
  //       setAppStackData(response.data); // adjust based on actual response structure
  //       setLoading(false);
  //     } catch (err) {
  //       setError("Failed to fetch App Stack data.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <div className="p-6">Loading...</div>;
  // if (error) return <div className="p-6 text-red-500">{error}</div>;


  return (
    <div className="px-6 sm:px-8 py-10 sm:mt-20 mt-10 bg-zinc-100 min-h-screen w-full">
      {/* Header */}
      <div className="w-52 h-6 text-gray-700 text-xl font-bold font-['Helvetica'] leading-7">
        App stack
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 w-full pb-20 sm:pb-10">
        {appStackData.map((app, index) => (
          <div
            key={index}
            className="relative bg-zinc-100 rounded-lg border border-slate-400 w-full    h-32  p-4 flex items-center hover:shadow-lg transition"
          >
            {/* Subscribed Tag */}
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-gradient-to-r from-teal-300 to-sky-400 rounded-[50px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5">
              <div className="text-center text-zinc-100 text-[10px] font-normal font-['Poppins'] capitalize leading-none">
                Subscribed
              </div>
            </div>

            {/* Icon */}
            <img src={app.icon} alt={app.title} className="w-12 h-12 mr-4" />

            {/* Details */}
            <div className="flex-1">
              {/* App Title */}
              <div className="text-gray-700 text-sm font-medium font-['Poppins'] capitalize leading-tight">
                {app.title}
              </div>

              {/* Version */}
              <div className="text-gray-700 text-xs font-light font-['Poppins'] capitalize leading-none">
                Version: {app.version}
              </div>

              {/* Status */}
              <div className="flex items-center text-xs font-light font-['Poppins'] capitalize leading-none mt-1.5">
                {/* Status Icon */}
                <img
                  src={
                    app.status === "Active"
                      ? "/icons/Ellipse green.svg"
                      : "/icons/Ellipse 74.svg"
                  }
                  alt={app.status}
                  className="w-1.5 h-1.5 rounded-full mr-1"
                />
                {/* Status Text */}
                <span
                  className={
                    app.status === "Active" ? "text-green-600" : "text-red-600"
                  }
                >
                  {app.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppStack;



