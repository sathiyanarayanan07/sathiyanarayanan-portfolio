export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10">
          About Me to
        </h2>

        {/* Card */}
        <div
          className="
            p-5 sm:p-8
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            hover:bg-white/10
            transition
          "
        >

         

          {/* Intro */}
          <p className="text-gray-300 mt-5 text-sm sm:text-lg leading-relaxed">
            Hi, I’m Sathiya Narayanan.
          </p>

          {/* Paragraph 1 */}
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            I'm an aspiring DevOps Engineer with a foundation in Python development
            and a growing passion for cloud computing and automation.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            I'm a former Software Development Intern where I gained hands-on
            experience in building backend applications and working with APIs
            and real-world projects.
          </p>

          {/* Paragraph 3 */}
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Currently, I am learning and implementing DevOps practices by working
            with AWS, Docker, Jenkins, and CI/CD pipelines to build scalable
            and efficient solutions.
          </p>

        </div>
      </div>
    </section>
  );
}
