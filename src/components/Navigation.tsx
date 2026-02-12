"use client";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations";
import Image from "next/image";
const logoImg = "/logo.png";

const navItems = [
  { label: "nav.projects", path: "/projects" },
  { label: "nav.sales", path: "/sales" },
  { label: "nav.rental", path: "/rental" },
  { label: "nav.service", path: "/service" },
  { label: "nav.about", path: "/about" },
  { label: "nav.contact", path: "/contact" },
  { label: "nav.support", path: "/support" },
];

export function Navigation({ isRelative }: { isRelative?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[language];

  const getTranslation = (key: string) => {
    const keys = key.split(".");
    let value: any = t;
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };

  return (
    <>
      <nav
        className={`${isRelative ? "relative" : "fixed"} top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md py-2"
            : "bg-black/80 backdrop-blur-sm py-3"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src={logoImg}
              alt="IMvision Logo"
              className="h-8 lg:h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={` hover:text-[#2BCC07] transition-colors duration-300 relative group ${currentPath === item.path ? "text-[#2BCC07]" : "text-white/80"}`}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                {getTranslation(item.label)}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2BCC07] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="cursor-pointer flex items-center gap-2 text-white/80 hover:text-[#2BCC07] transition-colors duration-300 border border-white/20 hover:border-[#2BCC07] px-3 py-2 rounded"
              style={{
                fontSize: "0.85rem",
                fontWeight: 400,
                fontFamily: "Jost, sans-serif",
              }}
            >
              <Globe size={16} />
              <span>{language === "en" ? "EN" : "SV"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="cursor-pointer lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`hover:text-[#2BCC07] transition-colors duration-300 ${currentPath === item.path ? "text-[#2BCC07]" : "text-white/80"}`}
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                letterSpacing: "0.05em",
                fontFamily: "Jost, sans-serif",
              }}
            >
              {getTranslation(item.label)}
            </Link>
          ))}

          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="cursor-pointer flex items-center gap-2 text-white hover:text-[#2BCC07] transition-colors duration-300 border border-white/30 hover:border-[#2BCC07] px-6 py-3 rounded mt-4"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: "Jost, sans-serif",
            }}
          >
            <Globe size={20} />
            <span>{language === "en" ? "English" : "Svenska"}</span>
          </button>
        </div>
      </div>
    </>
  );
}
