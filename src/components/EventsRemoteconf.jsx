

export default function EventsRemoteconf() {

  return (
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* General Settings - Left */}
            <div className="bg-zinc-100  p-2">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                General settings
              </h2>
              <div className="bg-neutral-200 rounded-lg p-4 ">
                <p className="text-sm text-gray-500 mb-4">
                  General Settings Allow You To Configure Your Camera On A
                  Higher Level.
                </p>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                    KEY
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2  bg-white rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                    CAMERA NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2  bg-white rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                    FRIENDLY NAME
                  </label>
                  <input
                    type="text"
                    placeholder="ID"
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

            {/* General Settings - Right */}
            <div className="bg-zinc-100 p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                General settings
              </h2>
              <div className="bg-neutral-200 rounded-lg p-10  ">
                <p className="text-sm text-gray-500 mb-4">
                  Camera Settings Are Required To Make A Connection To Your
                  Camera Of Choice.
                </p>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                    RTSP
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2  bg-white rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                    SUB RTSP
                  </label>
                  <input
                    type="text"
                    placeholder="ID"
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

            {/* Region Of Interest */}
            <div className="bg-zinc-100 p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Region Of Interest
              </h2>
              <div className="bg-neutral-200 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-4">
                  By Defining One Or More Regions, Motion Will Be Tracked Only
                  In The Regions You Have Defined.
                </p>

                <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-md border border-gray-300">
                  <img
                    src="/events/event1.png"
                    alt="Region of interest with vehicle detection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ONVIF Settings */}
            <div className="bg-zinc-100 p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                ONVIF settings
              </h2>
              <div className="bg-neutral-200 rounded-lg p-12">
                <p className="text-sm text-gray-500 mb-4">
                  Credentials To Communicate With ONVIF Capabilities. These Are
                  Used For PTZ Or Other Capabilities Provided By The Camera.
                </p>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                    XADOR
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-white rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                    USERNAME
                  </label>
                  <input
                    type="text"
                    placeholder="ID"
                    className="w-full p-2 bg-white rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 uppercase mb-1">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    placeholder="ID"
                    className="w-full p-2 bg-white rounded-md"
                  />
                </div>

                <div className="flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Update config
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
