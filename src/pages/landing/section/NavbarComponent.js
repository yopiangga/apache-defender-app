import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export function NavbarComponent() {
  const [sectionActive, setSectionActive] = useState("main");
  const [mobileMenu, setMobileMenu] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 0) {
      document.getElementById("navbar-component").classList.add("bg-dark-200");
    } else {
      document
        .getElementById("navbar-component")
        .classList.remove("bg-dark-200");
    }

    if (window.scrollY < 700) {
      setSectionActive("main");
    } else if (window.scrollY < 1400) {
      setSectionActive("job-position");
    } else {
      setSectionActive("contact");
    }
  };

  return (
    <div
      className="fixed z-10 w-full h-20 flex justify-center"
      id="navbar-component"
    >
      <div className="flex items-center justify-between w-11/12">
        <div className="lg:hidden flex">
          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <FiMenu />
          </button>

          <div
            className={`rounded-xl border border-white absolute top-16 overflow-hidden w-56 ${
              mobileMenu ? "block" : "hidden"
            }`}
          >
            <ul className="bg-dark-200 p-4 rounded-lg flex flex-col gap-2">
              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  document
                    .getElementById("main")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </button>

              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  document
                    .getElementById("job-position")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Berita / Update
              </button>

              <button
                className={`list-none py-2 hover:bg-primary hover:text-dark-300`}
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Layanan Adminstrasi
              </button>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold">
            Wingdik<span className="text-primary">-500/umum</span>
          </h1>
        </div>
        <div className="lg:flex hidden gap-8 outline-none">
          <li
            className={`list-none hover:text-primary ${
              sectionActive == "main" ? "text-primary" : "text-white"
            }`}
          >
            <button
              onClick={() => {
                document
                  .getElementById("main")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </button>
          </li>

          <li
            className={`list-none hover:text-primary ${
              sectionActive == "job-position" ? "text-primary" : "text-white"
            }`}
          >
            <button
              onClick={() => {
                document
                  .getElementById("job-position")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Berita / Update
            </button>
          </li>

          <li
            className={`list-none hover:text-primary ${
              sectionActive == "contact" ? "text-primary" : "text-white"
            }`}
          >
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Layanan Adminstrasi
            </button>
          </li>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/skadik506/"
            target="_blank"
            className="hover:text-primary"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/6281977394606"
            target="_blank"
            className="hover:text-primary"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
