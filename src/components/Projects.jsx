import { motion } from "framer-motion";

const projects = [
  {
    title: "WhatsApp AI Assistant Chatbot",
    desc: "AI-powered chatbot for real-time WhatsApp communication using AWS Lambda and Amazon Lex.",
    tech: "Python • AWS Lambda • Amazon Lex • Twilio API",
    github: "#",
    live: "#",
  },
  {
    title: "Learning Management System (LMS) – Backend",
    desc: "REST APIs for course management, authentication, and role-based access control.",
    tech: "Django REST Framework • PostgreSQL • Docker",
    github: "#",
    live: "#",
  },
  {
    title: "Terraform AWS EC2 Web Server",
    desc: "Provisioned AWS infrastructure using Terraform including VPC, EC2, Subnet, Security Groups and routing.",
    tech: "Terraform • AWS EC2 • VPC • IAM • CloudWatch",
    github: "https://github.com/sathiyanarayanan07/terraform-aws-ec2-webserver",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto bg-black text-white"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

        {projects.map((p) => (
          <div
            key={p.title}
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
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {p.desc}
            </p>

            {/* Tech */}
            <p className="text-gray-500 text-xs mt-3">
              {p.tech}
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3">

              {/* Live */}
              <a
                href={p.live}
                className="
                  w-full sm:w-auto text-center
                  px-4 py-2.5 text-sm
                  rounded-xl bg-white text-black
                  font-medium hover:opacity-90
                  transition active:scale-95
                "
              >
                Live
              </a>

              {/* GitHub */}
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="
                  w-full sm:w-auto text-center
                  px-4 py-2.5 text-sm
                  rounded-xl border border-white/20
                  text-white hover:bg-white/10
                  transition active:scale-95
                "
              >
                GitHub
              </a>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}