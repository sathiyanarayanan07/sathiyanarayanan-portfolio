const certificates = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    org: "Amazon Web Services",
    date: "2024",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
        py-16 sm:py-24
        px-4 sm:px-6
        max-w-6xl mx-auto
        bg-black text-white
      "
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10">
        Certificatess
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

        {certificates.map((c) => (
          <div
            key={c.title}
            className="
              p-5 sm:p-6
              rounded-2xl
              bg-white/5 border border-white/10
              hover:bg-white/10
              transition
              flex flex-col justify-between
            "
          >

            {/* Title */}
            <h3 className="font-semibold text-base sm:text-lg leading-snug">
              {c.title}
            </h3>

            {/* Org */}
            <p className="text-gray-400 mt-2 text-sm">
              {c.org}
            </p>

            {/* Date */}
            <p className="text-gray-500 text-xs mt-2">
              Issued: {c.date}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}