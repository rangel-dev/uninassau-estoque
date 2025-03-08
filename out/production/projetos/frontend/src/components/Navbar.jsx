import React from "react";

const Navbar = () => {
  return (
    <header className="bg-blue-400"> {/* Alterado de bg-white para bg-blue-100 */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {[
                  "About",,
                  "Services",
                  "Projects",
                ].map((item) => (
                  <li key={item}>
                    <a
                      className="text-white transition hover:text-gray-200"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:relative md:block">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
              >
                <span className="sr-only">Toggle dashboard menu</span>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
                  alt="Profile"
                  className="size-10 object-cover"
                />
              </button>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
