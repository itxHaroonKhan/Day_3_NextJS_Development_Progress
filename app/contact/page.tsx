import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa"; // Font Awesome icons
import { GrTrophy } from "react-icons/gr";
import { BsPatchCheck } from "react-icons/bs";
import { FaFaceGrinBeam } from "react-icons/fa6";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-center items-center py-16 px-4 w-full ">
        <div className="max-w-full w-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch With Us</h2>
            <p className="mt-2 text-gray-600">
              For more information about our product & services, please feel free to drop us an email. <br />
              Our staff always be there to help you out. Do not hesitate!
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sidebar */}
            <div className="rounded-lg p-6 space-y-6">
              {/* Address */}
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="w-8 h-8 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p>
                    236 5th SE Avenue, New York NY10000, United <br /> States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mb-4">
                <FaPhoneAlt className="w-8 h-8 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p>Mobile: (+84) 546-6789</p>
                  <p>Hotline: (+84) 456-6789</p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex items-start mb-4">
                <FaClock className="w-8 h-8 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold">Working Time</h4>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <form>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="This is optional"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Hi! I'd like to ask about"
                    className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-[237px] bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600"
                >
                  <Link href="/" className="mr-5 hover:text-gray-900">Submit</Link>
                </button>
              </form>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 bg-slate-100 p-28">
            <div className="flex items-center space-x-4">
              <GrTrophy className="w-10 h-10" />
              <div>
                <h4 className="text-lg font-semibold">High Quality</h4>
                <p className="text-gray-600">Crafted from top materials</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <BsPatchCheck className="w-10 h-10" />
              <div>
                <h4 className="text-lg font-semibold">Warranty Protection</h4>
                <p className="text-gray-600">Over 2 years</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaFaceGrinBeam className="w-10 h-10" />
              <div>
                <h4 className="text-lg font-semibold">24 / 7 Support</h4>
                <p className="text-gray-600">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
