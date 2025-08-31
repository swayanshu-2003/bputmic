
import TopBanner from "../../components/banner/TopBanner";
// import ToBeUpdated from "../../components/misc/ToBeUpdated";

const Registration = () => {
  const registrationData = [
    {
      category:
        "Foreign Delegates (Research Scholar/ Student Academician/ Scientist as an Author)",
      fees: "USD 150",
    },
    { category: "Indian Author (Research Scholar/ Student)", fees: "INR 6000" },
    { category: "Indian Author (Academician/ Scientist)", fees: "INR 6500" },
    { category: "Industry Expert", fees: "INR 10000" },
    { category: "Listener (Including Pre-Conference Tutorial)", fees: "INR 500" },
    { category: "Poster Presentation", fees: "INR 2000" },
  ];
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Registration"} />
      <div className="max-w-7xl mx-auto w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Registration Fees
        </h3>
        <div className="overflow-x-auto shadow-md rounded-lg mx-auto">
          <table className="min-w-full border border-gray-200 bg-white text-gray-800 text-sm md:text-base">
            <thead>
              <tr className="bg-[#112363] text-white">
                <th className="py-3 px-4 text-left border border-gray-200">
                  Category
                </th>
                <th className="py-3 px-4 text-left border border-gray-200">
                  Registration Fees
                </th>
              </tr>
            </thead>
            <tbody>
              {registrationData.map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-red-50`}
                >
                  <td className="py-3 px-4 border border-gray-200">
                    {row.category}
                  </td>
                  <td className="py-3 px-4 border border-gray-200 text-[#e63946] font-semibold ">
                    {row.fees}
                  </td>
                </tr>
              ))}

              <tr>
                <td
                  colSpan={2}
                  className="py-3 px-4 text-center font-semibold bg-indigo-800 text-white"
                >
                  The number of pages is limited to 5 pages per paper. An additional ₹1000 is charged for each page beyond the initial 5 pages.
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className="py-3 px-4 text-center font-semibold bg-[#e63946] text-white"
                >
                  Best paper Award will be awarded in each track of the BMIC - 2025.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Registration;
