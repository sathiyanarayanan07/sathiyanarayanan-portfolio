export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Qualification
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          My personal journey
        </p>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-10 mt-14 mb-20">

          <div className="flex items-center gap-2 text-violet-400 text-xl sm:text-2xl font-semibold">
            🎓 <span>Education</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-xl sm:text-2xl font-semibold">
            💼 <span>Work</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-violet-500/60 -translate-x-1/2"></div>

          <div className="space-y-24">

            {[
              {
                side: "left",
                title: "B.Tech – Information Technology",
                company: "Kingston Engineering College",
                sub: "Anna University",
                extra: "CGPA: 7.5 / 10",
                date: "2020 – 2024",
              },

              {
                side: "right",
                title: "Software Development Intern",
                company: "ThirdVizion Labs Pvt Ltd",
                sub: "DevOps & Backend Development",
                bullets: [
                  "RESTful APIs using Django & DRF",
                  "Dockerized apps on Linux",
                  "CI/CD pipelines using Jenkins & GitHub",
                  "AWS (EC2, S3, Lambda, CloudWatch)",
                  "Built LMS, ERP, CMS systems",
                ],
                date: "Jan 2025 – Dec 2025",
              },

              {
                side: "left",
                title: "AWS Certified Solutions Architect",
                company: "Henry Harvin",
                sub: "Cloud & Infrastructure Certification",
                extra: "AWS Certification",
                date: "Oct 2024",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative flex ${
                  item.side === "right"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {/* Dot */}
                <div className="absolute left-1/2 top-5 w-5 h-5 bg-violet-500 rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(139,92,246,0.9)]"></div>

                {/* Content */}
                <div className="w-full md:w-[38%] text-center">

                  <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 hover:border-violet-500/40 transition-all duration-300">

                    <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 mt-3 text-sm sm:text-base">
                      {item.company}
                    </p>

                    <p className="text-gray-400 text-sm sm:text-base mt-1">
                      {item.sub}
                    </p>

                    {item.extra && (
                      <p className="text-violet-300 mt-3 text-sm sm:text-base">
                        {item.extra}
                      </p>
                    )}

                    {item.bullets && (
                      <div className="mt-5 space-y-2 text-gray-300 text-sm sm:text-base">
                        {item.bullets.map((bullet, idx) => (
                          <p key={idx}>• {bullet}</p>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-500 mt-6 text-sm">
                      📅 {item.date}
                    </p>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}