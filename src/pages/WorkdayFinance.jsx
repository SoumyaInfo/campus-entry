import { Link } from "react-router-dom";

const WorkdayFinance = () => {
  return (
   <main className="bg-[#F8FBF6] min-h-screen text-[#1F2937]">

     {/* HERO */}
<section className="px-8 py-24 max-w-6xl mx-auto text-center">
  <span className="inline-block bg-[#355E3B]/10 text-[#355E3B] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#355E3B]/20 mb-6">
    Campus Entry Training Services
  </span>

  <h1 className="text-5xl font-bold text-[#1F2937] leading-tight mb-6">
    Workday <span className="text-[#355E3B]">Finance</span>
  </h1>

  <p className="text-[#64748B] text-lg max-w-3xl mx-auto leading-relaxed mb-10">
    Empower your organization with intelligent financial management solutions
    designed to improve visibility, automate processes, and drive smarter business
    decisions. Our Workday Finance models help businesses manage accounting,
    budgeting, planning, procurement, and reporting through a secure cloud-based platform.
  </p>

  {/* <div className="flex items-center justify-center gap-4 flex-wrap">
    <a
      href="mailto:campusentry2022@gmail.com"
      className="bg-[#355E3B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2F5D34] transition-all duration-200 shadow-sm"
    >
      Get Started
    </a>

    <a
      href="mailto:campusentry2022@gmail.com"
      className="border border-[#355E3B] text-[#355E3B] font-semibold px-6 py-3 rounded-lg hover:bg-[#355E3B]/10 transition-all duration-200"
    >
      Schedule Consultation
    </a>
  </div> */}
</section>

   {/* ABOUT */}
<section className="bg-[#EEF5EA] border-y border-[#DDE7D8] px-8 py-16">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
        About Workday Finance
      </span>

      <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-5">
        A Modern Cloud-Based Financial Platform
      </h2>

      <p className="text-[#64748B] leading-relaxed mb-4">
        Workday Finance is a modern cloud-based financial management solution that
        helps organizations streamline accounting, planning, reporting, and
        operational finance processes from a single unified platform.
      </p>

      <p className="text-[#64748B] leading-relaxed mb-4">
        We provide end-to-end Workday Finance implementation and support services
        tailored to your business needs — helping you modernize finance operations
        with efficient digital transformation strategies.
      </p>

      <p className="text-[#64748B] leading-relaxed">
        Our experienced consultants deliver scalable, secure, and business-focused
        solutions that improve financial performance and operational efficiency
        across your entire organization.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Finance Services", value: "8+" },
        { label: "Key Features", value: "12+" },
        { label: "Course Modules", value: "14+" },
        { label: "Industries Served", value: "10+" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-[#DDE7D8] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div className="text-3xl font-bold text-[#355E3B] mb-1">
            {stat.value}
          </div>

          <div className="text-[#64748B] text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FINANCE SERVICES */}
<section className="px-8 py-20 max-w-6xl mx-auto">
  <div className="text-center mb-14">
    <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
      What We Offer
    </span>

    <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-4">
      Our Workday Finance Services
    </h2>

    <p className="text-[#64748B] max-w-2xl mx-auto">
      End-to-end Workday Finance implementation and support services tailored
      to your business needs.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        label: "01",
        title: "Financial Management",
        desc: "Manage general ledger, accounts payable, accounts receivable, cash flow, and financial transactions efficiently.",
      },
      {
        label: "02",
        title: "Budgeting & Planning",
        desc: "Create accurate budgets, forecasts, and business plans using real-time financial data.",
      },
      {
        label: "03",
        title: "Expense Management",
        desc: "Simplify employee expense tracking, approvals, reimbursements, and policy compliance.",
      },
      {
        label: "04",
        title: "Revenue Management",
        desc: "Improve revenue tracking, billing, invoicing, and financial accuracy across your organization.",
      },
      {
        label: "05",
        title: "Procurement Management",
        desc: "Automate purchasing processes, supplier management, and procurement approvals.",
      },
      {
        label: "06",
        title: "Financial Reporting & Analytics",
        desc: "Generate dynamic dashboards and real-time reports for better business decisions.",
      },
      {
        label: "07",
        title: "Audit & Compliance",
        desc: "Maintain financial transparency and ensure compliance with industry regulations.",
      },
      {
        label: "08",
        title: "Workday Finance Support",
        desc: "Provide continuous monitoring, optimization, troubleshooting, and technical support.",
      },
    ].map((service) => (
      <div
        key={service.label}
        className="bg-white border border-[#DDE7D8] rounded-xl p-6 hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200"
      >
        <div className="w-10 h-10 rounded-lg bg-[#C7D92F]/10 flex items-center justify-center mb-4">
          <span className="text-[#355E3B] text-sm font-bold">
            {service.label}
          </span>
        </div>

        <h3 className="text-[#1F2937] font-semibold text-sm mb-2">
          {service.title}
        </h3>

        <p className="text-[#64748B] text-xs leading-relaxed">
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</section>

     {/* KEY FEATURES */}
<section className="bg-[#EEF5EA] border-y border-[#DDE7D8] px-8 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
        Platform Capabilities
      </span>

      <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-4">
        Key Features
      </h2>

      <p className="text-[#64748B] max-w-2xl mx-auto">
        Everything you need to manage your finances in one unified cloud platform.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {[
        "Financial Management",
        "Budgeting & Forecasting",
        "Revenue Management",
        "Expense Management",
        "Procurement Solutions",
        "Financial Reporting & Analytics",
        "Audit & Compliance",
        "Real-Time Financial Insights",
      ].map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-4 bg-white border border-[#DDE7D8] rounded-xl px-5 py-4 hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200"
        >
          <span className="w-6 h-6 rounded-full bg-[#C7D92F]/10 border border-[#C7D92F]/30 flex items-center justify-center text-[#355E3B] text-xs flex-shrink-0 font-bold">
            +
          </span>

          <span className="text-[#374151] text-sm">
            {feature}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* COURSE CONTENT */}
<section className="px-8 py-20 max-w-6xl mx-auto">
  <div className="text-center mb-14">
    <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
      Training Program
    </span>

    <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-4">
      Workday Financials — Course Content
    </h2>

    <p className="text-[#64748B] max-w-2xl mx-auto">
      Our certified instructors have designed a comprehensive curriculum covering
      all core Workday Finance modules.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
    {[
      { num: "01", title: "Introduction to Workday" },
      { num: "02", title: "Organizations and Worktags" },
      { num: "03", title: "Financial Accounting Configuration" },
      { num: "04", title: "General Ledger (Journals)" },
      { num: "05", title: "Enterprise Interface Builder (EIB)" },
      { num: "06", title: "Security and Business Process Framework" },
      { num: "07", title: "Supplier Management" },
      { num: "08", title: "Supplier Invoicing and Payments" },
      { num: "09", title: "Customer Management" },
      { num: "10", title: "Banking and Settlement" },
      { num: "11", title: "Expense Management" },
      { num: "12", title: "Business Assets" },
      { num: "13", title: "Financial Reporting" },
      { num: "14", title: "Workday Reporting" },
    ].map((module) => (
      <div
        key={module.num}
        className="flex items-center gap-4 bg-white border border-[#DDE7D8] rounded-xl px-5 py-4 hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200"
      >
        <span className="text-[#355E3B]/70 font-bold text-lg flex-shrink-0">
          {module.num}
        </span>

        <span className="text-[#374151] text-sm font-medium">
          {module.title}
        </span>
      </div>
    ))}
  </div>
</section>

     {/* CTA BANNER */}
<section className="px-8 py-16 bg-[#355E3B]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-4">
      Ready to Get Started with Workday Finance?
    </h2>

    <p className="text-[#E5EFE4] mb-8 text-lg">
      Contact our team today to schedule a consultation and start transforming
      your financial operations with Workday.
    </p>

    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/* <a
        href="mailto:campusentry2022@gmail.com"
        className="bg-[#C7D92F] text-[#355E3B] font-semibold px-6 py-3 rounded-lg hover:bg-[#D7E75A] transition-all duration-200 shadow-sm"
      >
        Get Started
      </a> */}

      <a
        href="tel:8884243678"
        className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
      >
        Call: 88842 43678
      </a>

      <Link
        to="/workday-hcm"
        className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
      >
        View Workday HCM
      </Link>
    </div>
  </div>
</section>

    </main>
  );
};

export default WorkdayFinance;