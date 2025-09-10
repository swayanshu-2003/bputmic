import { CalendarDays, ChevronsRight } from "lucide-react";
import TopBanner from "../../components/banner/TopBanner";
import { events } from "../../constants/dates";
const Schedule = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Schedule"} />
      <div className="max-w-full w-full flex px-3 md:px-24 gap-2 flex-col items-center my-16 min-h-screen ">
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-6">
          Important Dates & Deadlines
        </h3>
        <div className="w-fit">
          {/* Desktop view */}
          <div className="hidden md:flex gap-4">
            {/* labels */}
            <div className="flex flex-col gap-2 items-start text-primary-blue font-medium">
              {events.map((item, index) => (
                <p key={index} className="ml-6 flex gap-3 items-center">
                  <span className="font-semibold text-[#112363]">
                    <ChevronsRight />
                  </span>
                  <span>{item.event}</span>
                </p>
              ))}
            </div>

            {/* dates */}
            <div className="flex flex-col gap-2 items-start text-primary-red">
              {events.map((item, index) => (
                <p key={index} className="ml-6 flex gap-2 items-center">
                  <span className="font-semibold text-[#112363]">
                    <CalendarDays size={16} />
                  </span>
                  <div className="flex gap-2">
                    {item?.old && <span className="line-through">{item.old}</span>}
                    <span>{item.date}</span>
                  </div>
                </p>
              ))}
            </div>
          </div>

          {/* Mobile view */}
          <div className="flex flex-col gap-4 text-primary-blue font-medium md:hidden">
            {events.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 ml-6">
                {/* label */}
                <p className="flex gap-3 items-center">
                  <span className="font-semibold text-[#112363]">
                    <ChevronsRight />
                  </span>
                  <span>{item.event}</span>
                </p>

                {/* date */}
                <p className="flex gap-2 items-center text-primary-red ml-7">
                  <span className="font-semibold text-[#112363]">
                    <CalendarDays size={16} />
                  </span>
                  <span> {item?.old && <span className="line-through block">{item.old}</span>}
                    {item.date}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

