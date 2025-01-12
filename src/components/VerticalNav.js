
import React from "react";

const VerticalNav = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-white absolute xl:right-[115px] xl:top-[94px] 
    lg:right-[80px] lg:bottom-[16%] md:right-[70px] md:bottom-[5%] right-[13px] bottom-[2%]">
      {/* Vertical Rectangle */}
      <div className="absolute h-[701px] w-[25px] bg-white rounded-full border border-[2px] border-grayCustom">
        {/* Center Ellipse with Tooltip */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="group relative">
            {/* Ellipse */}
            <div className="h-[8px] w-[8px] bg-custom-blue rounded-full"></div>
            {/* Tooltip */}
            <div className="absolute w-[118.08px] right-6 top-1/2 transform -translate-y-1/2  group-hover:flex items-center bg-custom-blue text-white text-sm rounded-lg px-3 py-1 shadow-lg">
              {/* Arrow */}
              <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#003366]"></div>
              Projects
            </div>
          </div>
        </div>

        {/* Top Dot */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[8px] h-[8px] bg-gray-400 rounded-full"></div>
        {/* Bottom Dot */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[8px] h-[8px] bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default VerticalNav;