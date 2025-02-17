// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-router-dom";
import BannerImg from "../../assets/gallery/9.webp";

const TopBanner = ({
  bannerImage = BannerImg,
  text,
  position = "bottom",
}: //   parent = "Home",
//   child = "",
any) => {
  return (
    <>
      <div
        className={`relative h-44 md:h-96 bg-cover bg-${position}`}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-[rgba(6,12,34,0.8)]" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-white text-5xl max-sm:text-3xl tracking-wider font-bold mt-8 font-['Merriweather'] uppercase">
              {text}
            </h1>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-10 bg-gray-800 flex items-center italic px-6 sm:px:14 md:px-28 overflow-x-hidden">
        <ul className="flex flex-nowrap space-x-3 text-sm font-medium ">
          <li className="flex items-center space-x-3">
            <Link to={"../"} className="flex items-center space-x-1 text-white">
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center space-x-3">
            <div className="text-white inline-block m-auto text-lg mt-[2px]">
              <MdOutlineKeyboardArrowRight />
            </div>
            <span className="flex items-center space-x-1 text-slate-300">
              <span>{parent}</span>
            </span>
          </li>
          {child && (
            <li
              className="flex items-center space-x-3 truncate"
              aria-current="page"
            >
              <div className="text-slate-300 inline-block m-auto text-lg mt-[2px]">
                <MdOutlineKeyboardArrowRight />
              </div>
              <span className="flex items-center space-x-1">
                <span className="text-gray-400">{child}</span>
              </span>
            </li>
          )}
        </ul>
      </div> */}
    </>
  );
};

export default TopBanner;
