import { FaArrowUp } from "react-icons/fa";

export function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-center h-20" id="footer-component">
      <div className="w-11/12 flex justify-between items-center">
        <div>
          <p>
            &copy; {year} <span className="text-primary">skadik506</span>. All
            rights reserved.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => {
              document
                .getElementById("main")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="p-4 bg-primary rounded-lg text-dark-100"
          >
            <FaArrowUp />
          </button>
        </div>

        <div className="lg:flex hidden gap-8">
          <li className="list-none hover:text-primary">
            <a href="https://github.com/yopiangga/" target="_blank">
              Github
            </a>
          </li>
          <li className="list-none hover:text-primary">
            <a href="https://www.instagram.com/skadik506/" target="_blank">
              Instagram
            </a>
          </li>
          <li className="list-none hover:text-primary">
            <a href="https://wa.me/6281977394606" target="_blank">
              WhatsApp
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
