export default function EventsPermissions() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Camera Permissions */}
      <div className=" flex-1">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Camera Permissions
        </h2>
        <div className=" bg-neutral-200 rounded-lg p-4 space-y-4">
          <div>
            <label className="text-sm text-gray-700 block mb-1">
              Live view
            </label>
            <select className="w-full p-2 border border-gray-300 rounded text-sm bg-white">
              <option>Name</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700 block mb-1">
              Pan/tilt-zoom
            </label>
            <select className="w-full p-2 border border-gray-300 rounded text-sm bg-white">
              <option>ID</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700 block mb-1">
              Remote configuration
            </label>
            <select className="w-full p-2 border border-gray-300 rounded text-sm bg-white">
              <option>Description</option>
            </select>
          </div>
          <div className="text-right mt-4">
            <button className="text-sm font-medium text-blue-700 hover:underline">
              Update Permissions
            </button>
          </div>
        </div>
      </div>

      {/* Permissions Overview */}
      <div className=" flex-1">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Permissions overview
        </h2>
        <div className="bg-neutral-200 rounded-lg p-10 flex-1">
          <p className="text-xs text-gray-600 mb-4">
            This Device Will Have Following Permissions:
          </p>

          <div className="space-y-2 space-x-2">
            <span className="inline-block bg-white text-xs text-gray-700 px-3 py-1 rounded-full border">
              PTZ: Can PTZ And Use Presets
            </span>
            <span className="inline-block bg-white text-xs text-gray-700 px-3 py-1 rounded-full border">
              Liveview: Can Watch SD And HD
            </span>
            <span className="inline-block bg-white text-xs text-gray-700 px-3 py-1 rounded-full border">
              Remote Configuration: Can Remotely Configure Agent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
