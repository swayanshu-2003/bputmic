
import TopBanner from "../../components/banner/TopBanner";
import ToBeUpdated from "../../components/misc/ToBeUpdated";

const Registration = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Registration"} />
      <div className="max-w-full w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        <ToBeUpdated />
      </div>
    </div>
  );
};

export default Registration;
