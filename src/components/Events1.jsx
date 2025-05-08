import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Maximize2, RotateCw } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import EditCameraPopup from "@/components/EditCameraPopup";

// Reusable DetailItem component
function DetailItem({ label, value, editable = false }) {
    
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded p-2 text-sm">
      <span className="font-medium text-gray-600">{label}</span>
      <span className="text-gray-800">
        {value || (editable ? "Editable" : "—")}
      </span>
    </div>
  );
}

export default function Events1() {
  return (
        <div>
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* Left column - Camera feed */}
            <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
                Live
              </h2>
              <div className="relative mb-4 rounded-lg overflow-hidden bg-neutral-200 p-2">
                <div className="absolute top-0 left-0 right-0 z-10 flex justify-between p-2">
                  <div className="flex gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 bg-white rounded-full p-1"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 bg-white rounded-full p-1"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 bg-white rounded-full p-1"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6 bg-white rounded-full p-1"
                    >
                      <RotateCw className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-white text-red-500 px-2 py-0.5 rounded text-xs font-bold">
                    LIVE: 0s
                  </div>
                </div>
                <img
                  src="/events/event1.png"
                  alt="Traffic camera feed"
                  className=" h-auto w-full"
                />
              </div>

              {/* Latest activity */}
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Latest activity</h3>
                <div className="border border-black border-dashed rounded-lg p-4 bg-zinc-300">
                  <div className="text-center text-gray-500 text-sm">
                    <p className="font-medium mb-1">No Media</p>
                    <p className="text-xs">
                      The Camera Hasn't Uploaded Any Video Or Image So Far.
                      <br />
                      Make Sure It Is Properly Configured.
                    </p>
                  </div>
                </div>
              </div>

              {/* ONVIF details */}
              <div className="mt-4 ">
                <h3 className="text-xl font-bold text-gray-700 mb-2">ONVIF details</h3>
                <div className=" bg-neutral-200 rounded-lg p-4 ">
                  <div className="bg-white rounded-lg ">
                    <DetailItem label="Version" value="2.0.3" />
                  </div>
                  <div className="bg-white rounded-lg my-1">
                    <DetailItem
                      label="Functions"
                      value={
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-zinc-300 rounded-lg px-2 py-1">
                            Zoom
                          </span>
                          <span className="bg-zinc-300 rounded-lg px-2 py-1">
                            Pan/Tilt
                          </span>
                          <span className="bg-zinc-300 rounded-lg px-2 py-1">
                            Presets
                          </span>
                          <span className="bg-zinc-300 rounded-lg px-2 py-1">
                            Input/Output
                          </span>
                        </div>
                      }
                    />
                  </div>
                  <div className="bg-white rounded-lg my-1">
                    <DetailItem
                      label="Functions"
                      value={
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-zinc-300 rounded-lg px-2 py-1">
                            Alarmin_1
                          </span>
                          <span className="bg-zinc-300 rounded-lg px-2 py-1">
                            Alarmout_0
                          </span>
                        </div>
                      }
                    />
                  </div>
                  <div className=" rounded-lg my-1 p-3 flex justify-between items-start">
                    <span className="text-sm font-medium mt-1">Preset</span>
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div
                          key={i}
                          className="bg-white text-sm text-center py-1 px-2 rounded-lg shadow-sm"
                        >
                          Preset {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Camera details */}
            <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
                Camera Details
              </h2>
              <div className="space-y-2 p-4 bg-neutral-200 rounded-lg">
                <div className="bg-white rounded-lg ">
                  <DetailItem label="Name" value="Camera Traffic" />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem label="ID" value="Camera Traffic" />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem label="Description" value="" editable />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem label="Camera Color" value="" editable />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem label="Up Time" value="2 Days" />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem label="Boot Time" value="2 Weeks" />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem label="Last Heartbeat" value="10s Ago" />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem
                    label="Last Upload"
                    value="Didn't Upload For Some Time"
                  />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem label="Host Name" value="BRBroadSRB" />
                </div>
                <div className="bg-white rounded-lg ">
                  <DetailItem label="Architecture" value="x86_64" />
                </div>

                <div className="border border-gray-200 rounded-lg p-3 bg-white">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Process Memory</span>
                    <span className="text-sm">85233.5u 0001s 32</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-3 bg-white">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Host Memory</span>
                    <span className="text-sm">85233.5u 0001s 32</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white rounded-lg ">
                  <DetailItem label="IPs" value="192.122.1u 0001s 22" />
                </div>
                <div className="bg-white rounded-lg">
                  <DetailItem label="MACs" value="00:1:22:5u 0001s 22" />
                </div>
                <div className="bg-white rounded-lg">
                  <DetailItem
                    label="Current Version"
                    value={
                      <span>
                        21.0 <span className="ml-4">Agent</span>
                      </span>
                    }
                  />
                </div>
                <div className="bg-white rounded-lg">
                  <DetailItem label="Release" value="b5222sa22" />
                </div>
              </div>

              <div className="mt-4 space-y-2  rounded-lg">
                <h3 className="text-xl font-bold text-gray-700">Camera specs</h3>
                <div className=" bg-neutral-200 p-4 rounded-lg ">
                  <div className="bg-white rounded-lg my-2">
                    <DetailItem label="Type" value="IPCamera" />
                  </div>

                  <div className="bg-white rounded-lg ">
                    <DetailItem label="ID" value="Edit" />
                  </div>

                  <div className="bg-white rounded-lg my-2">
                    <DetailItem label="Model(Version)" value="Edit" />
                  </div>

                  <div className="bg-white rounded-lg ">
                    <DetailItem label="Installation data" value="Edit" />
                  </div>

                  <div className="bg-white rounded-lg my-2">
                    <DetailItem label="Last maintenance" value="Edit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
}
