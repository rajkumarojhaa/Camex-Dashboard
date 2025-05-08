import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  MoreVertical,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EventsLive() {
  // Sample data for the grid
  const gridItems = Array(12).fill({
    id: "12232222",
    location: "South Kl vll",
    timestamp: "01/19/24 15:34:26",
    image: "/events/event1.png",
  });

  return (
    <div className="flex w-screen min-h-screen overflow-y-auto bg-zinc-100 pt-28">
      {/* Left sidebar */}
      <div className="sm:w-16 w-12 flex flex-col items-center">
        <div className="w-[60px] h-[30px] ml-12">
          <Link to= "/events">
            <img src="/events/group.png" alt="Group" className="w-8 h-8" />
          </Link>
        </div>

        <div className="flex flex-col items-center my-2">
          <img
            src="/events/live.png"
            alt="Live"
            className="w-20 h-8 cursor-pointer"
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-md">
              <Play className="h-5 w-5 text-blue-500" />
            </div>
            <h1 className="text-lg font-medium">Event / ANPR</h1>
          </div>
          <div className="w-48 ">
            <Select>
              <SelectTrigger className="bg-zinc-100 rounded-2xl border-slate-400">
                <SelectValue placeholder="Possible event" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-100 ">
                <SelectItem value="all">All events</SelectItem>
                <SelectItem value="speed">Speed violation</SelectItem>
                <SelectItem value="redlight">Red light violation</SelectItem>
                <SelectItem value="parking">Illegal parking</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className=" border border-gray-200 rounded-md overflow-hidden bg-neutral-200"
            >
              <div className="relative ">
                <img
                  src="/events/event1.png"
                  width={300}
                  height={180}
                  alt="Traffic camera footage"
                  className="w-full h-auto"
                />

                {/* <div className="absolute bottom-2 left-2 text-white font-bold">
                  {item.id}
                </div> */}
              </div>
              <div className="flex justify-between items-center p-2 border-t border-gray-200">
                {item.id}
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Download className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreVertical className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-600 w-full">
                {/* Left side: location with icon */}
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs">📍</span>
                  </div>
                  <span>{item.location}</span>
                </div>

                {/* Right side: timestamp */}
                <span>{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-6 gap-1">
          <span className="text-xs text-gray-500 mr-2">Page</span>
          <Button variant="outline" size="icon" className="h-7 w-7 rounded-md">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="default"
            size="sm"
            className="h-7 w-7 rounded-md bg-blue-500"
          >
            1
          </Button>
          <Button variant="outline" size="sm" className="h-7 w-7 rounded-md">
            2
          </Button>
          <Button variant="outline" size="sm" className="h-7 w-7 rounded-md">
            3
          </Button>
          <Button variant="outline" size="sm" className="h-7 w-7 rounded-md">
            ...
          </Button>
          <Button variant="outline" size="sm" className="h-7 w-7 rounded-md">
            10
          </Button>
          <Button variant="outline" size="icon" className="h-7 w-7 rounded-md">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
