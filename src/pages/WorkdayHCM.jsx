// import { Link } from "react-router-dom";

// const WorkdayHCM = () => {
//   return (
// <main className="bg-[#F8FBF6] min-h-screen text-[#1F2937]">

      
//    {/* HERO */}
// <section className="px-8 py-24 max-w-6xl mx-auto text-center">
//   <span className="inline-block bg-[#355E3B]/10 text-[#355E3B] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#355E3B]/20 mb-6">
//     Campus Entry Training Services
//   </span>

//   <h1 className="text-5xl font-bold text-[#1F2937] leading-tight mb-6">
//     Workday <span className="text-[#355E3B]">HCM</span>
//   </h1>

//   <p className="text-[#64748B] text-lg max-w-3xl mx-auto leading-relaxed mb-10">
//     Workday HCM is a rapidly growing platform trusted by over 600 Fortune enterprises.
//     Transform your HR operations with a modern, cloud-based Human Capital Management
//     solution designed to improve employee experience, workforce planning, and business
//     productivity.
//   </p>

//   <div className="flex items-center justify-center gap-4 flex-wrap">
//     <a
//       href="mailto:campusentry2022@gmail.com"
//       className="bg-[#355E3B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2F5D34] transition-all duration-200 shadow-sm"
//     >
//       Get Started
//     </a>

//     <a
//       href="mailto:campusentry2022@gmail.com"
//       className="border border-[#355E3B] text-[#355E3B] font-semibold px-6 py-3 rounded-lg hover:bg-[#355E3B]/10 transition-all duration-200"
//     >
//       Schedule Consultation
//     </a>
//   </div>
// </section>

//     {/* ABOUT */}
// <section className="bg-[#EEF5EA] border-y border-[#DDE7D8] px-8 py-16">
//   <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//     <div>
//       <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
//         About Workday HCM
//       </span>

//       <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-5">
//         A Powerful Cloud-Based HR Platform
//       </h2>

//       <p className="text-[#64748B] leading-relaxed mb-4">
//         Workday HCM is a powerful cloud-based human resource management platform
//         that helps organizations manage employees, payroll, talent, and workforce
//         operations from a single unified system.
//       </p>

//       <p className="text-[#64748B] leading-relaxed mb-4">
//         Its grip and presenting the results in a healthy environment for large
//         enterprise companies in HCM and Financial world — giving them a great
//         preferred solution that grows and adapts to business needs.
//       </p>

//       <p className="text-[#64748B] leading-relaxed">
//         Our Workday HCM solutions help businesses simplify HR processes, improve
//         employee engagement, and make data-driven workforce decisions. Understanding
//         this scenario, our certified instructors have designed this course.
//       </p>
//     </div>

//     <div className="grid grid-cols-2 gap-4">
//       {[
//         { label: "Fortune Enterprises", value: "600+" },
//         { label: "HCM Services", value: "8+" },
//         { label: "Key Features", value: "12+" },
//         { label: "Course Modules", value: "11+" },
//       ].map((stat) => (
//         <div
//           key={stat.label}
//           className="bg-white border border-[#DDE7D8] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200"
//         >
//           <div className="text-3xl font-bold text-[#355E3B] mb-1">
//             {stat.value}
//           </div>

//           <div className="text-[#64748B] text-sm">
//             {stat.label}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//  {/* HCM SERVICES */}
// <section className="px-8 py-20 max-w-6xl mx-auto">
//   <div className="text-center mb-14">
//     <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
//       What We Offer
//     </span>

//     <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-4">
//       Our Workday HCM Services
//     </h2>

//     <p className="text-[#64748B] max-w-2xl mx-auto">
//       We are a trusted technology partner specializing in Workday HCM solutions
//       for enterprises across multiple industries.
//     </p>
//   </div>

//   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//     {[
//       {
//         label: "01",
//         title: "HCM Implementation",
//         desc: "Complete implementation services tailored to your business requirements with seamless deployment and configuration.",
//       },
//       {
//         label: "02",
//         title: "HR Process Automation",
//         desc: "Automate employee records, attendance, approvals, leave management, and HR workflows.",
//       },
//       {
//         label: "03",
//         title: "Recruitment & Talent Acquisition",
//         desc: "Simplify hiring processes with intelligent recruitment and candidate management solutions.",
//       },
//       {
//         label: "04",
//         title: "Employee Onboarding",
//         desc: "Deliver smooth onboarding experiences with automated workflows and digital documentation.",
//       },
//       {
//         label: "05",
//         title: "Payroll & Compensation",
//         desc: "Manage payroll processing, salary structures, bonuses, and benefits accurately and securely.",
//       },
//       {
//         label: "06",
//         title: "Performance Management",
//         desc: "Track employee goals, performance reviews, training, and career development.",
//       },
//       {
//         label: "07",
//         title: "Reporting & Workforce Analytics",
//         desc: "Generate real-time HR reports and dashboards for better decision-making.",
//       },
//       {
//         label: "08",
//         title: "Support & Maintenance",
//         desc: "Ongoing technical support, troubleshooting, updates, and optimization services.",
//       },
//     ].map((service) => (
//       <div
//         key={service.label}
//         className="bg-white border border-[#DDE7D8] rounded-xl p-6 hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200"
//       >
//         <div className="w-10 h-10 rounded-lg bg-[#C7D92F]/10 flex items-center justify-center mb-4">
//           <span className="text-[#355E3B] text-sm font-bold">
//             {service.label}
//           </span>
//         </div>

//         <h3 className="text-[#1F2937] font-semibold text-sm mb-2">
//           {service.title}
//         </h3>

//         <p className="text-[#64748B] text-xs leading-relaxed">
//           {service.desc}
//         </p>
//       </div>
//     ))}
//   </div>
// </section>
// {/* KEY FEATURES */}
// <section className="bg-[#EEF5EA] border-y border-[#DDE7D8] px-8 py-20">
//   <div className="max-w-6xl mx-auto">
//     <div className="text-center mb-14">
//       <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
//         Platform Capabilities
//       </span>

//       <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-4">
//         Key Features
//       </h2>

//       <p className="text-[#64748B] max-w-2xl mx-auto">
//         Everything you need to manage your workforce in one unified platform.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
//       {[
//         "Core Human Resource Management",
//         "Recruitment & Onboarding",
//         "Payroll & Benefits Administration",
//         "Talent & Performance Management",
//         "Time Tracking & Absence Management",
//         "Workforce Planning & Analytics",
//         "Employee Self-Service Portal",
//         "Mobile HR Access",
//       ].map((feature) => (
//         <div
//           key={feature}
//           className="flex items-center gap-4 bg-white border border-[#DDE7D8] rounded-xl px-5 py-4 hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200"
//         >
//           <span className="w-6 h-6 rounded-full bg-[#C7D92F]/10 border border-[#C7D92F]/30 flex items-center justify-center text-[#355E3B] text-xs flex-shrink-0 font-bold">
//             +
//           </span>

//           <span className="text-[#374151] text-sm">
//             {feature}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

// {/* COURSE CONTENT */}
// <section className="px-8 py-20 max-w-6xl mx-auto">
//   <div className="text-center mb-14">
//     <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
//       Training Program
//     </span>

//     <h2 className="text-3xl font-bold text-[#1F2937] mt-3 mb-4">
//       Workday HCM — Course Content
//     </h2>

//     <p className="text-[#64748B] max-w-2xl mx-auto">
//       Our certified instructors have designed a comprehensive curriculum covering
//       all core Workday HCM modules.
//     </p>
//   </div>

//   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
//     {[
//       { num: "01", title: "Introduction to Workday" },
//       { num: "02", title: "Workday Basics Navigation" },
//       { num: "03", title: "Organizations in Workday" },
//       { num: "04", title: "Staffing in Workday" },
//       { num: "05", title: "Compensation Configuration" },
//       { num: "06", title: "Security Configuration" },
//       { num: "07", title: "Business Process Configurations" },
//       { num: "08", title: "Reports Module" },
//       { num: "09", title: "Calculated Fields Module" },
//       { num: "10", title: "EIB Module" },
//       { num: "11", title: "Connectors in Workday" },
//     ].map((module) => (
//       <div
//         key={module.num}
//         className="flex items-center gap-4 bg-white border border-[#DDE7D8] rounded-xl px-5 py-4 hover:border-[#C7D92F]/40 hover:shadow-md transition-all duration-200"
//       >
//         <span className="text-[#355E3B]/70 font-bold text-lg flex-shrink-0">
//           {module.num}
//         </span>

//         <span className="text-[#374151] text-sm font-medium">
//           {module.title}
//         </span>
//       </div>
//     ))}
//   </div>
// </section>

//     {/* CTA BANNER */}
// <section className="px-8 py-16 bg-[#355E3B]">
//   <div className="max-w-4xl mx-auto text-center">
//     <h2 className="text-3xl font-bold text-white mb-4">
//       Ready to Get Started with Workday HCM?
//     </h2>

//     <p className="text-[#E5EFE4] mb-8 text-lg">
//       Contact our team today to schedule a consultation and take the first step
//       toward transforming your HR operations.
//     </p>

//     <div className="flex items-center justify-center gap-4 flex-wrap">
//       <a
//         href="mailto:campusentry2022@gmail.com"
//         className="bg-[#C7D92F] text-[#355E3B] font-semibold px-6 py-3 rounded-lg hover:bg-[#D7E75A] transition-all duration-200 shadow-sm"
//       >
//         Get Started
//       </a>

//       <a
//         href="tel:8884243678"
//         className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
//       >
//         Call: 88842 43678
//       </a>

//       <Link
//         to="/workday-finance"
//         className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
//       >
//         View Workday Finance
//       </Link>
//     </div>
//   </div>
// </section>

//     </main>
//   );
// };

// export default WorkdayHCM;

import { Link } from "react-router-dom";

const WorkdayHCM = () => {
  const expertise = [
    "Workday HCM Implementation",
    "Workday Financial Management",
    "Payroll & Benefits Integration",
    "Reporting & Analytics",
    "Workday Support & Maintenance",
    "Data Migration & Testing",
    "Security & Compliance",
    "Finance Model Optimization",
  ];

  const hcmServices = [
    {
      title: "Human Capital Management",
      desc: "Manage your entire workforce lifecycle with smart HR solutions designed for modern businesses.",
    },
    {
      title: "Talent Management",
      desc: "Improve hiring, onboarding, employee engagement, performance management, and succession planning.",
    },
    {
      title: "Payroll & Benefits",
      desc: "Simplify payroll processing, compensation, leave management, and employee benefits administration.",
    },
    {
      title: "Time Tracking & Absence",
      desc: "Automate attendance, leave tracking, and workforce scheduling processes.",
    },
    {
      title: "Workday Reporting & Analytics",
      desc: "Generate real-time reports and dashboards for better workforce decisions.",
    },
    {
      title: "Workday HCM Implementation",
      desc: "Complete implementation services tailored to your business requirements with seamless deployment and configuration.",
    },
    {
      title: "HR Process Automation",
      desc: "Automate employee records, attendance, approvals, leave management, and HR workflows.",
    },
    {
      title: "Recruitment & Talent Acquisition",
      desc: "Simplify hiring processes with intelligent recruitment and candidate management solutions.",
    },
    {
      title: "Employee Onboarding",
      desc: "Deliver smooth onboarding experiences with automated workflows and digital documentation.",
    },
    {
      title: "Payroll & Compensation",
      desc: "Manage payroll processing, salary structures, bonuses, and benefits accurately and securely.",
    },
    {
      title: "Performance Management",
      desc: "Track employee goals, performance reviews, training, and career development.",
    },
    {
      title: "Reporting & Workforce Analytics",
      desc: "Generate real-time HR reports and dashboards for better decision-making.",
    },
    {
      title: "Workday Support & Maintenance",
      desc: "Ongoing technical support, troubleshooting, updates, and optimization services.",
    },
  ];

  return (
    <main className="bg-[#F8FBF6] min-h-screen text-[#1F2937]">

      {/* HERO */}
      <section className="px-6 py-24 max-w-7xl mx-auto text-center">
        <span className="inline-block bg-[#355E3B]/10 text-[#355E3B] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-[#355E3B]/20 mb-6">
          Campus Entry Training Services
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Workday <span className="text-[#355E3B]">HCM</span>
        </h1>

        <p className="text-[#64748B] text-lg max-w-4xl mx-auto leading-relaxed mb-10">
          Workday HCM is rapidly growing Platform. Its grip and presenting
          the results in a healthy 600 fortune large enterprise companies in
          HCM and Financial world as giving them a great preferred solution,
          and this is a tool which is growing and adapting the things to the
          business needs for most notable customers in their management skills
          and to perform different strategies.
        </p>

        {/* <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:campusentry2022@gmail.com"
            className="bg-[#355E3B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2F5D34] transition"
          >
            Get Started
          </a>

          <a
            href="mailto:campusentry2022@gmail.com"
            className="border border-[#355E3B] text-[#355E3B] font-semibold px-6 py-3 rounded-lg hover:bg-[#355E3B]/10 transition"
          >
            Schedule Consultation
          </a>
        </div> */}
      </section>

      {/* ABOUT */}
      <section className="bg-[#EEF5EA] px-6 py-20 border-y border-[#DDE7D8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-[#355E3B] text-xs font-semibold uppercase tracking-widest">
              About Workday HCM
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              A Powerful Cloud-Based HR Platform
            </h2>

            <p className="text-[#64748B] leading-relaxed mb-5">
              Workday HCM is a powerful cloud-based human resource
              management platform that helps organizations manage employees,
              payroll, talent, and workforce operations from a single unified system.
            </p>

            <p className="text-[#64748B] leading-relaxed mb-5">
              Our Workday HCM solutions help businesses simplify HR processes,
              improve employee engagement, and make data-driven workforce decisions.
            </p>

            <p className="text-[#64748B] leading-relaxed">
              Understanding this scenario, our certified instructors have
              designed this course.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { label: "Fortune Companies", value: "600+" },
              { label: "HCM Solutions", value: "10+" },
              { label: "Services", value: "13+" },
              { label: "Modules", value: "11+" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl border border-[#DDE7D8] p-6 text-center shadow-sm"
              >
                <h3 className="text-3xl font-bold text-[#355E3B]">
                  {item.value}
                </h3>
                <p className="text-[#64748B] text-sm mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNER */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="bg-white border border-[#DDE7D8] rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-bold mb-5 text-[#1F2937]">
            We Are a Trusted Technology Partner
          </h2>

          <p className="text-[#64748B] leading-relaxed mb-5">
            We are a trusted technology partner specializing in Workday HCM
            and Finance solutions for enterprises across multiple industries.
            Our experienced consultants deliver scalable, secure, and
            business-focused solutions that improve workforce productivity
            and financial performance.
          </p>

          <p className="text-[#64748B] leading-relaxed">
            Our mission is to help organizations modernize HR and finance
            operations with efficient digital transformation strategies.
          </p>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-[#EEF5EA] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Business with Workday Solutions
            </h2>

            <p className="text-[#64748B] max-w-3xl mx-auto">
              Empower your organization with intelligent, cloud-based Human
              Capital Management (HCM) and Financial Management solutions.
            </p>
          </div>

          <h3 className="font-bold text-xl mb-8 text-center">
            Our Expertise Includes
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#DDE7D8] rounded-xl p-5 hover:shadow-md transition"
              >
                <p className="font-medium text-[#374151]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HCM SERVICES */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">
            Our Workday HCM Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hcmServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#DDE7D8] rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-3 text-[#355E3B]">
                {service.title}
              </h3>

              <p className="text-[#64748B] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
            {/* SMART WORKFORCE */}
      <section className="bg-[#EEF5EA] border-y border-[#DDE7D8] px-6 py-20">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
              Smart Workforce Management
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-[#1F2937]">
              Transform Your HR Operations with Workday HCM
            </h2>

            <p className="text-[#64748B] max-w-4xl mx-auto leading-relaxed">
              Transform your HR operations with a modern, cloud-based Workday
              Human Capital Management (HCM) solution designed to improve
              employee experience, workforce planning, and business productivity.
            </p>
          </div>

          {/* KEY FEATURES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Core Human Resource Management",
              "Recruitment & Onboarding",
              "Payroll & Benefits Administration",
              "Talent & Performance Management",
              "Time Tracking & Absence Management",
              "Workforce Planning & Analytics",
              "Employee Self-Service Portal",
              "Mobile HR Access",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-[#DDE7D8] rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#C7D92F]/20 text-[#355E3B] flex items-center justify-center font-bold text-sm flex-shrink-0">
                    ✓
                  </span>

                  <p className="text-[#374151] text-sm font-medium">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE CONTENT */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#355E3B] text-xs font-semibold tracking-widest uppercase">
            Training Program
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-[#1F2937]">
            Workday HCM — Course Content
          </h2>

          <p className="text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Our certified instructors have designed a comprehensive curriculum
            covering all core Workday HCM modules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Introduction to Workday",
            "Workday Basics Navigation",
            "Organizations in Workday",
            "Staffing in Workday",
            "Compensation Configuration",
            "Security Configuration",
            "Business Process Configurations",
            "Reports Module",
            "Calculated Fields Module",
            "EIB Module",
            "Connectors in Workday",
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white border border-[#DDE7D8] rounded-xl px-5 py-4 hover:shadow-md transition duration-300 flex items-center gap-4"
            >
              <span className="text-[#355E3B] font-bold text-lg">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <p className="text-[#374151] text-sm font-medium">
                {course}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#355E3B] px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Get Started with Workday HCM?
          </h2>

          <p className="text-[#E5EFE4] text-lg mb-10 max-w-3xl mx-auto">
            Contact our team today to schedule a consultation and take the
            first step toward transforming your HR operations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {/* <a
              href="mailto:campusentry2022@gmail.com"
              className="bg-[#C7D92F] text-[#355E3B] font-semibold px-6 py-3 rounded-lg hover:bg-[#dbe962] transition duration-300"
            >
              Get Started
            </a> */}

            <a
        href="tel:8884243678"
        className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
      >
        Call: 81213 74205
      </a>

            <Link
              to="/workday-finance"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition duration-300"
            >
              View Workday Finance
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default WorkdayHCM;