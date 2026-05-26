import { useState } from "react";
import { X } from "lucide-react";

const EnquiryPopup = () => {
  const [showPopup, setShowPopup] =
    useState(true);

  const [showCircle, setShowCircle] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });

  const handleIgnore = () => {
    setShowPopup(false);
    setShowCircle(true);
  };

  const handleOpenAgain = () => {
    setShowPopup(true);
    setShowCircle(false);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
  const response =
  await fetch(
    "/.netlify/functions/send-mail",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(
        formData
      ),
    }
  );
      if (response.ok) {

        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });

      } else {
        alert(
          "Failed to send enquiry"
        );
      }

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">

          <div className="relative bg-white w-full max-w-[400px] rounded-[26px] shadow-2xl border border-[#E5E7EB] p-6 animate-fadeIn max-h-[92vh] overflow-y-auto">

            {/* Close */}
            <button
              onClick={handleIgnore}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
            >
              <X size={24} />
            </button>

            {!submitted ? (
              <>
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-[#2F5D34] mb-1">
                  Enquire Now
                </h2>

                <p className="text-center text-[#64748B] text-sm mb-5">
                  Start your learning journey with us
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >

                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 rounded-xl border border-[#DDE7D8] outline-none focus:border-[#C9DB37] text-sm"
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 rounded-xl border border-[#DDE7D8] outline-none focus:border-[#C9DB37] text-sm"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Gmail Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 rounded-xl border border-[#DDE7D8] outline-none focus:border-[#C9DB37] text-sm"
                  />

                  {/* Course Dropdown */}
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 rounded-xl border border-[#DDE7D8] outline-none focus:border-[#C9DB37] bg-white text-gray-700 text-sm"
                  >
                    <option value="">
                      Select Course
                    </option>

                    <option value="Workday Finance">
                      Workday Finance
                    </option>

                    <option value="Workday SCM">
                      Workday HCM
                    </option>
                  </select>

                  {/* Message */}
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-3 px-4 rounded-xl border border-[#DDE7D8] outline-none focus:border-[#C9DB37] resize-none text-sm"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-xl font-semibold text-base shadow-md transition duration-300
                    ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#2F5D34] text-white hover:scale-[1.02]"
                    }`}
                  >
                    {loading
                      ? "Submitting..."
                      : "Submit Enquiry"}
                  </button>

                  {/* Phone */}
                  {/* <div className="flex items-center justify-center text-[#2F5D34] font-medium text-sm pt-1">
                    📞 +91 8884243678
                  </div> */}

                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-3">
                  🎉
                </div>

                <h2 className="text-2xl font-bold text-[#2F5D34]">
                  Enquiry Submitted
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                  Our team will contact you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      {showCircle && (
        <button
          onClick={handleOpenAgain}
          className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#C9DB37] shadow-lg flex items-center justify-center text-[#2F5D34] text-xl hover:scale-105 transition-all"
        >
          💬
        </button>
      )}
    </>
  );
};

export default EnquiryPopup;