import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Bird,
  ArrowUpDown,
  AlertTriangle,
  User,
  Train,
  CloudFog,
  Users,
  ShieldAlert,
  Search,
  ArrowLeft,
  BellRing,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from 'react-router-dom';

export default function EventsLayout() {
  const pieData = [
    { name: "Category 1", value: 70 },
    { name: "Category 2", value: 20 },
    { name: "Category 3", value: 10 },
  ];

  const COLORS = ["#c1f5d3", "#f5e28f", "#4dabf7"];

  const lineData = [
    { year: "2012", value1: 3, value2: 4 },
    { year: "2014", value1: 6, value2: 4 },
    { year: "2016", value1: 4, value2: 6 },
    { year: "2017", value1: 8, value2: 6 },
    { year: "2019", value1: 9, value2: 8 },
    { year: "2020", value1: 10, value2: 9 },
    { year: "2021", value1: 12, value2: 11 },
    { year: "2022", value1: 15, value2: 13 },
    { year: "2023", value1: 25, value2: 15 },
  ];

  const appList = [
    {
      name: "Animal Detection",
      count: 272,
      icon: <Bird className="h-5 w-5 text-white" />,
    },
    {
      name: "Fence Jumping",
      count: 272,
      icon: <ArrowUpDown className="h-5 w-5 text-white" />,
    },
    {
      name: "Intrusion",
      count: 705,
      icon: <AlertTriangle className="h-5 w-5 text-white" />,
    },
    {
      name: "Face Recognition System (FRS)",
      count: 174,
      icon: <User className="h-5 w-5 text-white" />,
    },
    {
      name: "Train Detection",
      count: 272,
      icon: <Train className="h-5 w-5 text-white" />,
    },
    {
      name: "Poor Visibility",
      count: 20,
      icon: <CloudFog className="h-5 w-5 text-white" />,
    },
    {
      name: "Crowd Estimations",
      count: 200,
      icon: <Users className="h-5 w-5 text-white" />,
    },
    {
      name: "No Helmet Violation",
      count: 200,
      icon: <ShieldAlert className="h-5 w-5 text-white" />,
    },
    {
      name: "Crowd Count",
      count: 200,
      icon: <Search className="h-5 w-5 text-white" />,
    },
    {
      name: "No Seatbelt",
      count: 200,
      icon: <ArrowLeft className="h-5 w-5 text-white" />,
    },
    {
      name: "No Seatbelt",
      count: 200,
      icon: <ArrowLeft className="h-5 w-5 text-white" />,
    },
  ];

  const generateHeatMapData = () => {
    const rows = 10;
    const cols = 30;
    const data = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push({ value: Math.floor(Math.random() * 5) });
      }
      data.push(row);
    }
    return data;
  };

  const heatMapData = generateHeatMapData();

  return (
    <div className="flex w-screen min-h-screen overflow-y-auto bg-zinc-100 pt-30">
      {/* Left sidebar */}
      <div className="sm:w-16 w-10 flex flex-col items-center">
        {/* Background wrapper with custom shape */}
        <div
          className="w-[60px] h-[30px] flex items-center justify-center bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/events/rectangle.png')" }}
        >
          <img src="/events/event2.svg" alt="Group" className="w-7 h-7" />
        </div>

        <div className="flex flex-col items-center my-2">
      <Link to="/events-live">
        <img
          src="/events/display.png"
          alt="Live"
          className="w-6 h-5 cursor-pointer"
        />
      </Link>
    </div>
      </div>
      {/* Main content area */}
      <div className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Pie Chart */}
          <Card className="overflow-hidden border-[0.50px] border-slate-400 hover:shadow-md transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">
                Total events
              </CardTitle>
              <Button
                variant="submit"
                size="sm"
                className="h-8 px-6 py-1.5 text-xs bg-zinc-100 rounded-3xl shadow-lg hover:shadow-xl border border-teal-300 inline-flex justify-center items-center gap-2.5 overflow-hidden"
              >
                Filter
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="w-full aspect-square max-w-[220px] mx-auto">
                <PieChart width={220} height={220}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </CardContent>
          </Card>

          {/* App List */}
          <Card className="overflow-hidden border-[0.50px] border-slate-400 hover:shadow-md transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">App list</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs text-blue-500"
              >
                See All
              </Button>
            </CardHeader>
            <CardContent className="pl-4">
              <ScrollArea className="h-[400px]">
                <div className="space-y-2 pr-4">
                  {appList.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">
                          {app.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {app.count}
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#4cc9d9]">
                        {app.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Heat Map */}
          <Card className="overflow-hidden border-[0.5px] border-slate-400 hover:shadow-md transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">Heat map</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-6 py-1.5 text-xs bg-zinc-100 rounded-3xl shadow-lg hover:shadow-xl border border-teal-300 inline-flex justify-center items-center gap-2.5 overflow-hidden"
              >
                Verify Heat
              </Button>
            </CardHeader>
            <CardContent className="p-2">
              {/* Month Labels */}
              <div className="grid grid-cols-[repeat(33,minmax(0,1fr))] gap-1 mb-2 text-[10px] text-center text-gray-600">
                <div></div> {/* empty space for left-most cell */}
                {Array.from({ length: 32 }).map((_, i) => {
                  const monthLabels = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ];
                  const label =
                    i % 3 === 0 ? monthLabels[Math.floor(i / 3)] ?? "" : "";
                  return <div key={`label-${i}`}>{label}</div>;
                })}
              </div>

              {/* Heatmap Grid */}
              <div className="space-y-1">
                {Array.from({ length: 7 }).map((_, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className="grid grid-cols-[repeat(22,minmax(0,1fr))] gap-1"
                  >
                    {Array.from({ length: 22 }).map((_, cellIndex) => {
                      // Only highlight specific cells in the second row (rowIndex === 1)
                      const isHighlighted =
                        rowIndex === 1 && [2, 3, 4, 5, 6].includes(cellIndex);

                      return (
                        <div
                          key={`cell-${rowIndex}-${cellIndex}`}
                          className={`w-3 h-3 ${
                            isHighlighted
                              ? "bg-gradient-to-r from-teal-300 to-sky-400"
                              : "bg-gray-300"
                          }`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Events */}
          <Card className="overflow-hidden border-[0.50px] border-slate-400 hover:shadow-md transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">Live events</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-6 py-1.5 text-xs bg-zinc-100 rounded-3xl shadow-lg hover:shadow-xl border border-teal-300 inline-flex justify-center items-center gap-2.5 overflow-hidden"
              >
                Filter
              </Button>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center p-2 border-b">
                  <BellRing className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">Events</span>
                  <span className="ml-2 text-sm font-medium">01</span>
                </div>
                <div className="flex items-center p-2 border-b">
                  <BellRing className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">Events</span>
                  <span className="ml-2 text-sm font-medium">02</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Analysis */}
          <Card className="overflow-hidden md:col-span-2 border-[0.50px] border-slate-400 hover:shadow-md transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">
                Data Analysis
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-6 py-1.5 text-xs bg-zinc-100 rounded-3xl shadow-lg hover:shadow-xl border border-teal-300 inline-flex justify-center items-center gap-2.5 overflow-hidden"
              >
                Filter
              </Button>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={lineData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value1"
                      stroke="#f5d76e"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value2"
                      stroke="#4dabf7"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
