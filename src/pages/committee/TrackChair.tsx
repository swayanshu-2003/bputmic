import TopBanner from "@/components/banner/TopBanner";
import { trackChairMembers } from "@/constants/committe";

const TrackChair = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Track Chair Committee"} />
      <div className="max-w-full w-full flex gap-6 flex-col items-center my-16">
        {trackChairMembers?.map((mem, index) => (
          <div
            key={index}
            className="mb-14 flex gap-4 flex-col items-center"
            id={trackChairMembers[index + 2]?.committe_id}
          >
            <div className="leading-tight mb-4">
              <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 uppercase">
                {mem.committee}
              </h2>
              {/* <p className="text-center text-gray-600 mt-2 ">of BMIC - 2025</p> */}
              <div className="w-16 h-1 bg-red-500 mx-auto mt-2" />
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {mem?.members?.map((person, id) => (
                <div
                  key={id}
                  className="group  transition-[filter] relative w-[250px] h-[90px] bg-[#FAEDE4] font-['Roboto_Flex'] border-b-2 border-b-[#F04E29] flex flex-col items-center  overflow-visible "
                >
                  <div className="p-3 text-center overflow-hidden">
                    <p className="text-[#262626] text-lg font-medium">
                      {person?.name}
                    </p>
                    <p className="text-[#777674] text-sm">
                      {person?.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackChair;
