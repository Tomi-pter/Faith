import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

type BgColor = {
  color: "#000000" | "#061833" | "#ECF0F5" | "#ffffff";
};

const Nav = ({ color }: BgColor) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const mobileMenuBg = isHomePage ? "bg-[#BFE4FE]" : "bg-transparent";
  const bgColor =
    color == "#000000"
      ? `bg-[#000000]`
      : color == "#061833"
      ? `bg-[#061833]`
      : color == "#ECF0F5"
      ? `bg-[#ECF0F5]`
      : `bg-[#ffffff]`;

  const navItems = [
    { name: "Home", href: "/", isHashLink: false },
    { name: "Projects", href: "/live", isHashLink: true },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1YWzeqT5aSAxY9JP596pLp3TT10v0qdR_/view?usp=drivesdk",
      isHashLink: false,
    },
    { name: "Contact", href: "/#contact", isHashLink: true },
  ];

  return (
    <header
      className={`w-full px-4 py-3 flex justify-between items-center relative ${mobileMenuBg} md:bg-transparent z-50`}
    >
      <Logo />

      <nav className="hidden md:flex space-x-8">
        {navItems.map(({ name, href, isHashLink }, index) =>
          isHashLink ? (
            <HashLink smooth to={href} key={index} className="hover:underline">
              {name}
            </HashLink>
          ) : (
            <a href={href} key={index} className="hover:underline">
              {name}
            </a>
          )
        )}
      </nav>

      <div className="md:hidden z-50">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`absolute top-0 left-0 z-40 w-full h-dvh ${bgColor} shadow-md px-4 py-20 flex flex-col gap-20 space-y-4 md:hidden`}
        >
          {navItems.map(({ name, href, isHashLink }, index) =>
            isHashLink ? (
              <HashLink
                smooth
                to={href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg"
              >
                {name}
              </HashLink>
            ) : (
              <a
                href={href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg"
              >
                {name}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Nav;
