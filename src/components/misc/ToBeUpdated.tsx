import ComingSoonImg from "../../assets/misc/coming-soon.png";

const ToBeUpdated = () => {
  return (
    <div className="w-full min-h-[45vh] flex items-center justify-center flex-col">
      <img src={ComingSoonImg} alt="" className="w-96"/>
      <h3 className="text-2xl font-semibold bg-[#112363] mb-3 text-white p-2">
        To be Updated Soon...
      </h3>
    </div>
  );
};

export default ToBeUpdated;
