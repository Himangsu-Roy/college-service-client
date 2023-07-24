import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Colleges",
    href: "/colleges",
  },
  {
    name: "Admission",
    href: "/addmission",
  },
  {
    name: "My College",
    href: "/mycollege",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    // Handle the sign-out logic
    console.log("logout");
    logOut();
  };

  return (
    <div className="fixed w-full bg-white ">
      <div className="flex items-center justify-between w-full px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="inline-flex items-center space-x-2">
          
          <span className="font-bold">COLLEGE BOOKING</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="items-center hidden gap-4 md:block">
          <div className="flex items-center gap-4">
            {/* User Name */}
            {user ? (
              <div className="relative">
                <button
                  className="px-4 py-2 text-gray-800 bg-white border rounded-lg focus:outline-none"
                  onClick={handleDropdownToggle}>
                  {user?.displayName} {/* Replace with the actual user name */}
                  <i
                    className={`ml-2 transition-transform rotate-90 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}>
                    &#x25BE;
                  </i>
                </button>
                {isOpen && (
                  <div className="absolute right-0 w-40 mt-2 bg-white border rounded-lg shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Profile
                    </Link>

                    <Link
                      to="/login"
                      onClick={handleSignOut}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow "
                to="/login">
                Login
              </Link>
            )}
          </div>
        </div>

        {/* tablet and mobile responsive */}
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden">
            <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    
                    <span className="font-bold">COLLEGE BOOKING</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                      <span className="sr-only">Close menu</span>
                      <X className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center p-3 -m-3 text-sm font-semibold rounded-md hover:bg-gray-50">
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                  <div className="flex gap-4 mt-4">
                    {loggedIn ? (
                      <div className="relative">
                        <button
                          className="px-4 py-2 text-gray-800 bg-white border rounded-lg focus:outline-none"
                          onClick={handleDropdownToggle}>
                          User Name {/* Replace with the actual user name */}
                          <i
                            className={`ml-2 transition-transform rotate-90 ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}>
                            &#x25BE;
                          </i>
                        </button>
                        {isOpen && (
                          <div className="absolute right-0 w-40 mt-2 bg-white border rounded-lg shadow-lg">
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                              Profile
                            </Link>

                            <Link
                              to="/login"
                              onClick={handleSignOut}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                              Logout
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow "
                        to="/login">
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;