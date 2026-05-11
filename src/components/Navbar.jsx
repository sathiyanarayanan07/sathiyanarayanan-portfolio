import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  // Smooth scroll
  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  // Active section detection (scroll spy)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">

        {/* Logo */}
        <h1
          onClick={() => handleClick("hero")}
          className="text-xl font-semibold cursor-pointer hover:text-gray-300 transition"
        >
          SN.
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm">

          {links.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`
                cursor-pointer transition
                ${active === item.id ? "text-white" : "text-gray-400"}
                hover:text-white
              `}
            >
              {item.name}
            </li>
          ))}

        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-white text-xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-5">

          <ul className="flex flex-col gap-4 text-sm">

            {links.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`
                  cursor-pointer transition
                  ${active === item.id ? "text-white" : "text-gray-400"}
                  hover:text-white
                `}
              >
                {item.name}
              </li>
            ))}

          </ul>

        </div>
      )}

    </nav>
  );
}