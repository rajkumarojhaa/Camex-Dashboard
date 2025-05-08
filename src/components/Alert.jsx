import React from "react";
import { AlertTriangle, Info } from "lucide-react";

export default function Alert() {
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

  return (
    <div className="bg-zinc-100 min-h-screen p-6 pt-30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="flex items-center text-gray-700">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="font-medium">Alert</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-lg font-medium">Total</h2>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium mb-4">Token Track List</h3>
          <div className="bg-white rounded-md shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="p-3 w-12">
                      <input
                        type="checkbox"
                        id="select-all"
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
                          id={`select-${item.id}`}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </td>
                      <td className="p-3 flex items-center">
                              <img src="/icons/nest_cam_iq.svg" alt="lens" className="h-4 w-4 mr-2" />
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
    </div>
  );
}
