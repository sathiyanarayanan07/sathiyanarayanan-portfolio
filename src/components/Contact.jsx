import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sathiyanarayanan2003s@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setSuccess(true);

        e.target.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-black text-white"
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            Let’s connect for DevOps, Cloud, Freelance, or Internship opportunities.
          </p>
        </motion.div>

        {/* Success Message */}
        {success && (
          <div
            className="
              mb-6
              bg-white/5
              border border-violet-500/40
              text-violet-300
              px-4 py-3
              rounded-2xl
              text-center
            "
          >
            ✅ Message Sent Successfully!
          </div>
        )}

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            bg-[#050505]
            border border-white/10
            rounded-3xl
            p-6 sm:p-8
            shadow-xl
          "
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-black
                  border border-white/10
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  focus:border-violet-500
                  transition-all
                  duration-300
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-black
                  border border-white/10
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  focus:border-violet-500
                  transition-all
                  duration-300
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Write your message..."
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-black
                  border border-white/10
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  focus:border-violet-500
                  transition-all
                  duration-300
                  resize-none
                "
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-4
                rounded-2xl
                bg-white
                text-black
                hover:bg-gray-200
                transition-all
                duration-300
                font-semibold
                active:scale-95
                disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {/* Email Info */}
          <div className="text-center mt-8">
            <p className="text-gray-300 text-sm sm:text-base">
              📧 sathiyanarayanan2003s@gmail.com
            </p>

            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Messages from this form will be sent directly to your email.
            </p>
          </div>

        </motion.div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          I usually respond within 24 hours.
        </p>

      </div>
    </section>
  );
}