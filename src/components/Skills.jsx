import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud & AWS",
    skills: [
      "AWS EC2",
      "AWS VPC",
      "AWS IAM",
      "AWS Lambda",
      "AWS Route 53",
      "AWS CloudFormation",
      "AWS CloudWatch",
      "AWS S3",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Terraform",
      "Ansible",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Linux (Ubuntu)",
      "Git",
      "GitHub",
      "Shell Scripting",
      "Notion"
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-16 sm:py-24
        px-4 sm:px-6
        max-w-6xl mx-auto
        bg-black text-white
      "
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
      >
        Skills
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-sm sm:text-base max-w-2xl mb-8 sm:mb-12"
      >
        Technologies and tools I use for cloud infrastructure,
        backend development, automation, and DevOps workflows.
      </motion.p>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              p-5 sm:p-6
              rounded-2xl
              bg-white/5
              border border-white/10
              hover:bg-white/10
              transition
            "
          >

            {/* Category Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-5">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    px-4 py-2
                    text-xs sm:text-sm
                    rounded-full
                    border border-white/10
                    bg-black/40
                    text-gray-300
                    hover:bg-white/10
                    transition
                  "
                >
                  {skill}
                </div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}