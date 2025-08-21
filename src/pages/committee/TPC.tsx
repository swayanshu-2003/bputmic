import TopBanner from "@/components/banner/TopBanner";
import { TpcMembers } from "@/constants/committe";

const TPC = () => {


  return (
    <div className="min-h-screen ">
      <TopBanner text={"Technical Program Committee"} />
      <div className="max-w-full w-full flex flex-wrap gap-2 md:gap-6 flex- col items-center justify-center my-16">
        {TpcMembers?.map((mem, index) => (
          <div key={index} className="mb-4 md:mb-14 flex gap-4 flex-col items-center">
            <div className="flex flex-wrap gap-6 justify-center">
              {/* {mem?.members?.map((person, id) => ( */}
              <div
                key={index}
                className="group  transition-[filter] relative w-[250px] h-[90px] bg-[#FAEDE4] font-['Roboto_Flex'] border-b-2 border-b-[#F04E29] flex flex-col items-center  overflow-visible "
              >
              
                <div className="p-3 text-center overflow-hidden">
                  <p className="text-[#262626] text-lg font-medium capitalize">
                    {mem?.name}
                  </p>
                  <p className="text-[#777674] text-sm capitalize">
                    {mem?.organization}
                  </p>
                </div>
              </div>
              {/* )) }  */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TPC;
