import React from 'react'

const AlertItem = ({thumbnail, date, duration, description, title}) => {
  return (
    
          <div className="w-full bg-white rounded-lg sm:p-3.5 p-2 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {/* Image Section */}
              <div className="flex justify-center sm:justify-start">
                <div className="rounded-md overflow-hidden relative">
                  <img
                    src={thumbnail}
                    alt="Camera footage thumbnail"
                    className="w-full sm:w-52 h-28 rounded-2xl object-cover"
                  />
                </div>
              </div>
      
              {/* Date & Time Section */}
              <div className="space-y-2 flex flex-col items-center sm:items-start">
                <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                  {date},
                </div>
                <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                  {duration}
                </div>
              </div>
      
              {/* Description Section */}
              <div className="lg:col-span-2 space-y-2 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-gray-700 text-base font-medium font-['Poppins'] capitalize leading-snug sm:w-auto w-full">
                  {title}
                  ({duration}).
                </div>
                <div className="text-gray-700 text-sm font-normal font-['Poppins'] capitalize leading-tight">
                  Count people
                </div>
              </div>
            </div>
          </div>
        );
      }
  

export default AlertItem
