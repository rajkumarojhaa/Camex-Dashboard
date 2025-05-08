

export default function EventsPTZ() {
  return (
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Live Feed - Left */}
            <div className="bg-zinc-100 p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Live Feed
              </h2>
              <div className="bg-neutral-200 rounded-lg p-4">
                <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-md border border-gray-300">
                  <img
                    src="/events/event1.png"
                    alt="Region of interest with vehicle detection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Permissions overview - Right */}
            <div className="bg-zinc-100 p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Permissions overview
              </h2>
              <div className="bg-neutral-200 rounded-lg p-10  ">
                <p className="text-sm text-red-600 mb-4">
                    This device doesn't support PTZ, cannot create a preset.
                </p>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                  PRESET NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2  bg-white rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                  RETRIEVE COORDINATES
                  </label>
                  <input
                    type="text"
                    placeholder="ID"
                    className="w-full p-2  bg-white rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Retrieve coordinates"
                    className="w-full p-2  bg-white rounded-md"
                  />
                </div>

                <div className="flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Update config
                  </button>
                </div>
              </div>
            </div>

            {/* Device Preset List */}
            <div className="bg-zinc-100 p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Permissions overview
              </h2>
              <div className="bg-neutral-200 rounded-lg p-4  ">
                <p className="text-sm text-gray-700 mb-4">
                    No presets added
                </p>

                
              </div>
            </div>

            {/* Custom Preset List */}
            <div className="bg-zinc-100 p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
              Custom Preset List
              </h2>
              <div className="bg-neutral-200 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-4">
                    No presets added
                </p>

                
              </div>
            </div>
          </div>
        </div>
  );
}
