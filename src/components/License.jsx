import React from "react";

const licenseData = [
  {
    name: "Camera Tampering",
    version: "3.2",
    licenseCount: 200,
    icon: "/icons/nest_cam_iq.svg",
  },
  {
    name: "ANPR",
    version: "3.2",
    licenseCount: 200,
    icon: "/icons/car1.svg",
  },
  {
    name: "Wrong Lane",
    version: "3.2",
    licenseCount: 200,
    icon: "/icons/dangerous.svg",
  },
  {
    name: "Wrong Parking",
    version: "3.2",
    licenseCount: 200,
    icon: "/icons/Group.svg",
  },
  {
    name: "People Count",
    version: "3.2",
    licenseCount: 200,
    icon: "/icons/people in.png",
  },
];

const trackData = [
  {
    id: 1,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "+12 Tokens",
  },
  {
    id: 2,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "+12 Tokens",
  },
  {
    id: 3,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "-12 Tokens",
  },
  {
    id: 4,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "+12 Tokens",
  },
  {
    id: 5,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "-12 Tokens",
  },
  {
    id: 6,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "-12 Tokens",
  },
  {
    id: 7,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "+12 Tokens",
  },
  {
    id: 8,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "-12 Tokens",
  },
  {
    id: 9,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "-12 Tokens",
  },
  {
    id: 10,
    model: "Camera Tampering",
    version: "Version 3.2",
    description: "Model Detects Unauthorized Interference",
    date: "12-04-2025",
    tokens: "-12 Tokens",
  },
];

export default function License() {
  return (
    <div className="bg-zinc-100 p-6 min-h-screen pt-30">
  {/* Header */}
  <div className="flex items-center gap-2 mb-6">
    <div className="bg-gray-200 p-1 rounded">
      <img
        src="/icons/id_card.png?height=20&width=20"
        width={20}
        height={20}
        alt="License icon"
        className="opacity-70"
      />
    </div>
    <h1 className="text-gray-800 font-medium">License Purchased</h1>
  </div>

  {/* License Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {licenseData.map((item, index) => (
      <div
        key={index}
        className="bg-zinc-100 rounded-lg p-4 shadow-sm border border-gray-300"
      >
        <div className="flex justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{item.name}</p>
              <p className="text-xs text-gray-500">Version {item.version}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white p-1 gap-1 text-xs ml-2 text-blue-400">
          <img src="/icons/database.png" alt="data" />
          <span>License</span>
          <span className="ml-auto text-blue-400">{item.licenseCount}</span>
        </div>
      </div>
    ))}
  </div>

  {/* Token Track List */}
  <div className="pt-10 px-4">
    <h3 className="text-lg font-medium mb-4">Token Track List</h3>

    <div className="bg-white rounded-md shadow border border-gray-200 w-full overflow-hidden">
      {/* ✅ Only this container scrolls */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-[800px] w-full text-sm">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700">
              <th className="p-3 w-12">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </th>
              <th className="p-3 font-medium">Model</th>
              <th className="p-3 font-medium">Version</th>
              <th className="p-3 font-medium">Description</th>
              <th className="p-3 font-medium">Date</th>
              <th className="p-3 font-medium">Tokens</th>
            </tr>
          </thead>
          <tbody>
            {trackData.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="p-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="p-3 flex items-center">
                  <img
                    src="/icons/nest_cam_iq.svg"
                    alt="lens"
                    className="h-4 w-4 mr-2"
                  />
                  {item.model}
                </td>
                <td className="p-3">{item.version}</td>
                <td className="p-3">{item.description}</td>
                <td className="p-3">{item.date}</td>
                <td
                  className={`p-3 ${
                    item.tokens.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.tokens}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


  );
}
