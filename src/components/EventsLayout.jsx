// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { useNavigate, Outlet, useLocation } from "react-router-dom";
// import EditCameraPopup from "@/components/EditCameraPopup";
// import { useState } from "react";

// export default function EventsLayout() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   return (
//     <div className="flex w-screen max-w-full overflow-x-hidden bg-zinc-100 pt-30">
//       {/* Left sidebar */}
//       <div className="sm:w-16 w-10 flex flex-col items-center pt-4">
//         <img src="/events/event2.svg" alt="Group" className="w-8 h-8" />
//         <div className="flex flex-col items-center my-2">
//           <img src="/events/event3.png" alt="Live" />
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col w-full">
//         {/* Tabs + Buttons */}
//         <div className="px-4 py-2 flex flex-col gap-4 md:flex-row md:items-center w-full">
//           <Tabs value={location.pathname} className="w-full md:mr-auto">
//             <TabsList className="grid grid-cols-2 gap-2 md:flex md:gap-x-2">
//               <TabsTrigger
//                 value="/events"
//                 onClick={() => navigate("/events")}
//                 className={`rounded-3xl px-5 py-1 flex items-center gap-2 w-full md:w-auto ${
//                   location.pathname === "/events"
//                     ? "bg-gradient-to-r from-teal-300 to-sky-400 text-white"
//                     : "bg-white"
//                 }`}
//               >
//                 <img
//                   src="/events/event4.svg"
//                   alt="Details"
//                   className="w-4 h-4"
//                 />
//                 Details
//               </TabsTrigger>

//               <TabsTrigger
//                 value="/events/eventsPermissions"
//                 onClick={() => navigate("/events/eventsPermissions")}
//                 className={`rounded-3xl px-5 py-1 flex items-center gap-2 w-full md:w-auto ${
//                   location.pathname === "/events/eventsPermissions"
//                     ? "bg-gradient-to-r from-teal-300 to-sky-400 text-white"
//                     : "bg-white"
//                 }`}
//               >
//                 <img
//                   src="/events/event5.png"
//                   alt="Permissions"
//                   className="w-4 h-4"
//                 />
//                 Permissions
//               </TabsTrigger>

//               <TabsTrigger
//                 value="/events/events-remoteconf"
//                 onClick={() => navigate("/events/events-remoteconf")}
//                 className={`rounded-3xl px-5 py-1 flex items-center gap-2 w-full md:w-auto ${
//                   location.pathname === "/events/events-remoteconf"
//                     ? "bg-gradient-to-r from-teal-300 to-sky-400 text-white"
//                     : "bg-white"
//                 }`}
//               >
//                 <img
//                   src="/events/event6.png"
//                   alt="Remote Config"
//                   className="w-4 h-4"
//                 />
//                 <span className="block md:hidden">Remote Conf..</span>
//                 <span className="hidden md:block">Remote Configuration</span>
//               </TabsTrigger>

//               <TabsTrigger
//                 value="/events/events-ptz"
//                 onClick={() => navigate("/events/events-ptz")}
//                 className={`rounded-3xl px-5 py-1 flex items-center gap-2 w-full md:w-auto ${
//                   location.pathname === "/events/events-ptz"
//                     ? "bg-gradient-to-r from-teal-300 to-sky-400 text-white"
//                     : "bg-white"
//                 }`}
//               >
//                 <img src="/events/event7.svg" alt="PTZ" className="w-4 h-4" />
//                 PTZ
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>

//           {/* Buttons */}
//           <div className="flex flex-col gap-2 w-full md:flex-col lg:flex-row md:w-auto lg:mr-10 mr-0 md:mr-0 sm:mr-0 mt-10 sm:mt-0">
//             <Button
//               variant="outline"
//               onClick={() => setIsPopupOpen(true)}
//               className="bg-gradient-to-r from-teal-300 to-sky-400 text-white border-none w-full md:w-auto"
//             >
//               <img src="/events/event8.svg" alt="edit" />
//               Edit Camera
//             </Button>
//             <Button className="bg-zinc-300 w-full md:w-auto">
//               <img src="/events/event9.svg" alt="edit" />
//               Mute Device
//             </Button>
//           </div>
//         </div>

//         {/* Dynamic content rendered below */}
//         <div className="p-4">
//           <Outlet />
//         </div>
//       </div>

//       <EditCameraPopup
//         isOpen={isPopupOpen}
//         onClose={() => setIsPopupOpen(false)}
//       />
//     </div>
//   );
// }
