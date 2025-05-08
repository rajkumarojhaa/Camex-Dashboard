
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EditCameraPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex justify-center items-center z-50 px-5">
      <div className="bg-neutral-200 rounded-lg p-6 w-full max-w-3xl shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-3">
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold mb-1">Edit Camera</h2>
        <p className="text-sm text-gray-500 mb-4">
          You can assign metadata to your cameras so they are easier to find.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Description", "Badge Color (HEX)", "Camera Brand", "Installation Date", "Camera Model", "Last Maintenance"].map((label) => (
            <div key={label} className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700">{label}</label>
              <input type="text" className="bg-white rounded-md px-3 py-2 text-sm" placeholder="Name" />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3 md:gap-6">
  <Button
    onClick={onClose}
    className="bg-white text-black w-full md:w-auto flex items-center justify-center gap-2"
  >
    <img src="/events/cancel.svg" alt="cancel" />
    Cancel & Close
  </Button>

  <Button
    className="bg-gradient-to-r from-teal-300 to-sky-400 text-white w-full md:w-auto flex items-center justify-center gap-2"
  >
    <img src="/events/event8.svg" alt="edit" />
    Edit Camera
  </Button>
</div>

      </div>
    </div>
  );
}
