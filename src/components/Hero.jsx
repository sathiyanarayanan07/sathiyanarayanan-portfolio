import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">

      {/* Left Social Icons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-gray-400 z-20">

        <a
          href="mailto:sathiyanarayanan2003s@gmail.com"
          className="hover:text-white hover:scale-110 transition"
        >
          <FaEnvelope size={22} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 hover:scale-110 transition"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition"
        >
          <FaGithub size={22} />
        </a>

        {/* Vertical Line */}
        <div className="w-[1px] h-24 bg-gray-600 mx-auto mt-2"></div>

      </div>

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="text-center z-10 px-4 sm:px-6 max-w-4xl">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight"
        >
          Sathiya Narayanan R
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-2xl text-gray-300 mt-4 font-medium"
        >
          DevOps & Cloud Engineer
        </motion.h2>

        {/* Short Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Aspiring DevOps Engineer with hands-on experience in
          cloud infrastructure, CI/CD automation, and backend development.
          Passionate about building scalable, reliable, and production-ready systems.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >

          {[
            "AWS",
            "Docker",
            "Jenkins",
            "Terraform",
            "Linux",
            "Python",
            "Kubernetes",
          ].map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2
                text-sm
                rounded-full
                border border-white/10
                bg-white/5
                text-gray-300
                backdrop-blur-md
              "
            >
              {skill}
            </span>
          ))}

        </motion.div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#projects"
            className="
              px-6 py-3
              bg-white text-black
              rounded-full
              hover:scale-105
              active:scale-95
              transition
              text-sm sm:text-base
              font-medium
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3
              border border-white/20
              rounded-full
              hover:bg-white
              hover:text-black
              active:scale-95
              transition
              text-sm sm:text-base
            "
          >
            Hire Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            download="Sathiya_Narayanan_Resume.pdf"
            className="
              px-6 py-3
              border border-white/40
              rounded-full
              hover:bg-white/10
              active:scale-95
              transition
              text-sm sm:text-base
            "
          >
            Resumes
          </a>

        </div>

      </div>
    </section>
  );
}