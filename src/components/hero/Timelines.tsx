import { CalendarDays } from "lucide-react";

import {events} from "../../constants/dates"

const Timelines = () => {
  return (
    <div className="m-6 w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        IMPORTANT DATES
      </h2>
      <p className="text-center text-gray-600">of BMIC-ETET 2025</p>
      <div className="w-16 h-1 bg-red-500 mx-auto mt-0.5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {events.map((item, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-start gap-4 p-4 shadow-md hover:shadow-xl rounded-lg bg-slate-100 h-full transition-shadow duration-300">
              <div className={`p-2 rounded-full ${item.color} bg-opacity-75`}>
                <CalendarDays className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <h4 className="text-sm md:text-base font-semibold text-gray-800 leading-snug break-words">
                  {item.date}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 font-medium break-words">
                  {item.event}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timelines;
