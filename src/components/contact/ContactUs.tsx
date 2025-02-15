import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-[#f9f9ff] py-10 px-5 my-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold ">
          CONTACT US
        </h2>
        <p className="text-gray-600 mt-2">
          If you have any questions or need further information, please
          don&apos;t hesitate to reach out to us.
        </p>
        <div className="w-16 h-1 bg-[#f82249] mx-auto mt-2 "></div>

        {/* Contact Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 border-r border-l border-t rounded-t-lg overflow-hidden text-[#112363]">
          {/* Contact 1 */}
          <div className="border-r border-b p-6  ">
            <FaUser className="text-[#f82249] text-3xl mx-auto" />
            <h3 className="text-lg font-bold  mt-6">
              DR. D. CHANDRASEKHAR RAO
            </h3>
            <p className="mt-2">
              <strong>Affiliation:</strong> Associate Professor
            </p>
            <p className="mt-2">
              <strong>Postal Address:</strong> Dept. of CSE, CUPGS, BPUT
              Rourkela, Odisha, India-769015
            </p>
            <p className="mt-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919337724582" className="text-[#f82249]">
                +91 9337724582
              </a>
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:dcrao.bput.ac.in" className="text-[#f82249]">
                dcrao@bput.ac.in
              </a>
            </p>
          </div>

          {/* Contact 2 */}
          <div className="border-b  p-6  ">
            <FaUser className="text-[#f82249] text-3xl mx-auto" />
            <h3 className="text-lg font-bold  mt-4">
              DR. BIKRAMADITYA DAS
            </h3>
            <p className="mt-2">
              <strong>Affiliation:</strong> Associate Professor
            </p>
            <p className="mt-2">
              <strong>Postal Address:</strong> Dept. of ECE, CUPGS, BPUT
              Rourkela, Odisha, India-769015
            </p>
            <p className="mt-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+917008505959" className="text-[#f82249]">
                +91 7008505959
              </a>
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:bdas.bput.ac.in" className="text-[#f82249]">
                bdas@bput.ac.in
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-l border-r rounded-b-lg overflow-hidden text-[#112363]">
          {/* Address */}
          <div className="border-r  p-6   text-center">
            <FaMapMarkerAlt className="text-[#f82249] text-3xl mx-auto" />
            <h3 className="text-lg font-semibold  mt-4">ADDRESS</h3>
            <p className="mt-2 text-[#f82249]">BPUT, Rourkela, Odisha</p>
          </div>

          {/* Phone Number */}
          <div className="border-r  p-6   text-center">
            <FaPhone className="text-[#f82249] text-3xl mx-auto" />
            <h3 className="text-lg font-semibold  mt-4">
              PHONE NUMBER
            </h3>
            <p className="mt-2">
              <a href="tel:+9199337724582" className="text-[#f82249]">
                +91 99337724582
              </a>
            </p>
          </div>

          {/* Email */}
          <div className=" p-6   text-center">
            <FaEnvelope className="text-[#f82249] text-3xl mx-auto" />
            <h3 className="text-lg font-semibold  mt-4">EMAIL</h3>
            <p className="mt-2">
              <a href="mailto:dcrao.bput.ac.in" className="text-[#f82249]">
                dcrao@bput.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
