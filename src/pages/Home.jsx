import { Link } from "react-router-dom";
import EnquiryPopup from "../components/EnquiryPopup";
import { useState } from "react";

const Home = () => {

const [showBrochure, setShowBrochure] = useState(false);
  return (
    <main className="bg-[#F8FBF6] min-h-screen text-[#1F2937]">
      <EnquiryPopup />

     {/* ───── HERO SECTION ───── */}
<section className="px-8 py-24 max-w-6xl mx-auto text-center">
  <span className="inline-block bg-[#355E3B]/10 text-[#355E3B] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#355E3B]/20 mb-6">
    Campus Entry Training Services
  </span>

  <h1 className="text-5xl font-bold text-[#1F2937] leading-tight mb-6">
    Transform Your Business with <br />
    <span className="text-[#355E3B]">Workday Solutions</span>
  </h1>

  <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
    Empower your organization with intelligent, cloud-based Human Capital Management
    and Financial Management solutions. We help businesses streamline HR, payroll,
    talent management, finance, planning, and reporting through modern Workday technologies.
  </p>

<div className="flex items-center justify-center gap-4 flex-wrap">

  <Link
    to="/workday-hcm"
    className="bg-[#355E3B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2F5D34] transition-all duration-200 shadow-sm"
  >
    Explore Workday HCM
  </Link>

  <Link
    to="/workday-finance"
    className="border border-[#355E3B] text-[#355E3B] font-semibold px-6 py-3 rounded-lg hover:bg-[#355E3B]/10 transition-all duration-200"
  >
    Explore Workday Finance
  </Link>

  {/* Download Brochure */}
{/* Download Brochure Button */}
<button
  onClick={() => setShowBrochure(true)}
  className="bg-[#C9DB37] text-[#2F5D34]
  font-semibold px-6 py-3 rounded-lg
  hover:scale-105 transition-all duration-200
  shadow-sm flex items-center gap-2"
>
  📥 Download Brochure
</button>

{/* Brochure Popup */}
{showBrochure && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-hidden">

      {/* Close Button */}
      <button
        onClick={() => setShowBrochure(false)}
        className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
      >
        ✕
      </button>

      {/* Heading */}
      <div className="p-5 border-b">
        <h2 className="text-2xl font-bold text-[#2F5D34] text-center">
          Campus Entry Brochure
        </h2>
      </div>

      {/* Brochure Preview */}
      <div className="p-4 flex justify-center bg-gray-50">
        <img
          src="/brochure.png"
          alt="Brochure"
          className="max-h-[70vh] object-contain rounded-lg shadow-md"
        />
      </div>

      {/* Download Button */}
      <div className="p-5 flex justify-center">
        <a
          href="/brochure.png"
          download="Campus-Entry-Brochure"
          className="bg-[#C9DB37] text-[#2F5D34]
          px-6 py-3 rounded-lg font-semibold
          hover:scale-105 transition-all duration-200"
        >
          📥 Download Brochure
        </a>
      </div>
    </div>
  </div>
)}

</div>

</section>

    {/* ───── EXPERTISE STRIP ───── */}
<section className="border-y border-[#DDE7D8] bg-[#EEF5EA] py-6 px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {[
      "Workday HCM Implementation",
      "Workday Financial Management",
      "Payroll & Benefits Integration",
      "Reporting & Analytics",
    ].map((item) => (
      <div
        key={item}
        className="text-[#355E3B] text-sm font-medium"
      >
        <span className="text-[#C7D92F] mr-2">✦</span>
        {item}
      </div>
    ))}
  </div>
  
</section>

{/* ───── WORKDAY HCM SUMMARY ───── */}
<section className="px-8 py-20 max-w-6xl mx-auto">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
        Workday HCM
      </span>

      <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-5 leading-snug">
        Smart Workforce Management with Workday HCM
      </h2>

      <p className="text-[#64748B] leading-relaxed mb-6">
        Workday HCM is a rapidly growing platform trusted by over 600 Fortune
        enterprises. Manage your entire workforce lifecycle — from recruitment and
        onboarding to payroll, performance, and analytics — from a single unified
        cloud-based system.
      </p>

      <ul className="space-y-3 mb-8">
        {[
          "Core Human Resource Management",
          "Recruitment & Onboarding",
          "Payroll & Benefits Administration",
          "Talent & Performance Management",
          "Workforce Planning & Analytics",
          "Employee Self-Service Portal",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-[#374151] text-sm"
          >
            <span className="w-5 h-5 rounded-full bg-[#C7D92F]/10 border border-[#C7D92F]/30 flex items-center justify-center text-[#355E3B] text-xs flex-shrink-0">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <Link
        to="/workday-hcm"
        className="inline-flex items-center gap-2 bg-[#355E3B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2F5D34] transition-all duration-200 shadow-sm"
      >
        Learn More About HCM
        <span>→</span>
      </Link>
    </div>

    {/* HCM Card Grid */}
    <div className="grid grid-cols-2 gap-4">
      {[
        {
          title: "Human Capital Management",
          desc: "Manage your full workforce lifecycle",
        },
        {
          title: "Talent Management",
          desc: "Hiring, onboarding & performance",
        },
        {
          title: "Payroll & Benefits",
          desc: "Simplified compensation & benefits",
        },
        {
          title: "Time & Absence",
          desc: "Automated attendance & scheduling",
        },
      ].map((card) => (
        <div
          key={card.title}
          className="bg-white border border-[#DDE7D8] rounded-xl p-5 hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200"
        >
          <div className="w-8 h-8 rounded-lg bg-[#C7D92F]/10 flex items-center justify-center mb-3">
            <span className="text-[#355E3B] text-sm">⬡</span>
          </div>

          <h3 className="text-[#1F2937] text-sm font-semibold mb-1">
            {card.title}
          </h3>

          <p className="text-[#64748B] text-xs leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ───── DIVIDER ───── */}
<div className="max-w-6xl mx-auto px-8">
  <div className="border-t border-[#DDE7D8]" />
</div>

{/* ───── WORKDAY FINANCE SUMMARY ───── */}
<section className="px-8 py-20 max-w-6xl mx-auto">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    
    {/* Finance Card Grid */}
    <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
      {[
        { title: "Financial Management", desc: "Accounting, GL & cash flow" },
        { title: "Budgeting & Planning", desc: "Forecasts & strategic plans" },
        { title: "Expense Management", desc: "Track, approve & reimburse" },
        { title: "Audit & Compliance", desc: "Transparency & regulatory fit" },
      ].map((card) => (
        <div
          key={card.title}
          className="bg-white border border-[#DDE7D8] rounded-xl p-5 hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200"
        >
          <div className="w-8 h-8 rounded-lg bg-[#C7D92F]/10 flex items-center justify-center mb-3">
            <span className="text-[#355E3B] text-sm">◈</span>
          </div>

          <h3 className="text-[#1F2937] text-sm font-semibold mb-1">
            {card.title}
          </h3>

          <p className="text-[#64748B] text-xs leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>

    <div className="order-1 md:order-2">
      <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
        Workday Finance
      </span>

      <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-5 leading-snug">
        Simplify Financial Management with Workday Finance
      </h2>

      <p className="text-[#64748B] leading-relaxed mb-6">
        Empower your organization with intelligent financial management solutions
        designed to improve visibility, automate processes, and drive smarter
        business decisions through a secure cloud-based platform.
      </p>

      <ul className="space-y-3 mb-8">
        {[
          "Financial Management",
          "Budgeting & Forecasting",
          "Revenue Management",
          "Procurement Solutions",
          "Financial Reporting & Analytics",
          "Real-Time Financial Insights",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-[#374151] text-sm"
          >
            <span className="w-5 h-5 rounded-full bg-[#C7D92F]/10 border border-[#C7D92F]/30 flex items-center justify-center text-[#355E3B] text-xs flex-shrink-0">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <Link
        to="/workday-finance"
        className="inline-flex items-center gap-2 bg-[#355E3B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2F5D34] transition-all duration-200 shadow-sm"
      >
        Learn More About Finance
        <span>→</span>
      </Link>
    </div>
  </div>
</section>
{/* ───── CONTACT SECTION ───── */}
<section
  id="contact"
  className="bg-[#EEF5EA] border-t border-[#DDE7D8] px-8 py-20"
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
        Get In Touch
      </span>

      <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-4">
        Contact Us
      </h2>

      <p className="text-[#64748B] max-w-xl mx-auto">
        Have questions about our Workday solutions? Reach out and our team will
        get back to you promptly.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Email */}
      <div className="bg-white border border-[#DDE7D8] rounded-xl p-6 text-center hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200">
        <div className="w-12 h-12 rounded-xl bg-[#C7D92F]/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-[#355E3B] text-xl">✉</span>
        </div>

        <h3 className="text-[#1F2937] font-semibold mb-2">
          Email Us
        </h3>

        <a
          href="mailto:campusentry2022@gmail.com"
          className="text-[#355E3B] text-sm hover:text-[#2F5D34] transition-colors"
        >
          campusentry2022@gmail.com
        </a>
      </div>

      {/* Phone */}
      <div className="bg-white border border-[#DDE7D8] rounded-xl p-6 text-center hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200">
        <div className="w-12 h-12 rounded-xl bg-[#C7D92F]/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-[#355E3B] text-xl">☎</span>
        </div>

        <h3 className="text-[#1F2937] font-semibold mb-2">
          Call Us
        </h3>

        <a
          href="tel:8884243678"
          className="text-[#355E3B] text-sm hover:text-[#2F5D34] transition-colors"
        >
          88842 43678
        </a>
       < br/>
          <a
          href="tel:8884243678"
          className="text-[#355E3B] text-sm hover:text-[#2F5D34] transition-colors"
        >
          81213 74205
        </a>

        <p className="text-[#64748B] text-xs mt-1">
          Website: campusentry.in
        </p>
      </div>

      {/* Address */}
      <div className="bg-white border border-[#DDE7D8] rounded-xl p-6 text-center hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200">
        <div className="w-12 h-12 rounded-xl bg-[#C7D92F]/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-[#355E3B] text-xl">📍</span>
        </div>

        <h3 className="text-[#1F2937] font-semibold mb-2">
          Visit Us
        </h3>

        <p className="text-[#64748B] text-sm leading-relaxed">
          No:85, First Floor, Konappna Agarahara,
          <br />
          Electronic City Phase II,
          <br />
          Krishna Reddy Layout,
          <br />
          Near Ganesh Temple, Bangalore - 560100
        </p>
      </div>
    </div>
  </div>
</section>

{/* ───── FOOTER ───── */}
<footer className="bg-white border-t border-[#DDE7D8] px-8 py-6 text-center">
  <p className="text-[#64748B] text-sm">
    © {new Date().getFullYear()} Campus Entry Training Services. All rights
    reserved.
  </p>
</footer>

    </main>
  );
};

export default Home;