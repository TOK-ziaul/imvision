"use client";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
const logoImg = "/logo.png";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <img
              src={logoImg}
              alt="IMvision Logo"
              className="h-10 lg:h-12 w-auto object-contain mb-4"
            />
            <p
              className="text-white/60 max-w-xs"
              style={{
                fontSize: "0.95rem",
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "#2BCC07",
              }}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {[
                { key: "services", label: t.footer.links.services },
                { key: "portfolio", label: t.footer.links.portfolio },
                { key: "process", label: t.footer.links.process },
                { key: "about", label: t.footer.links.about },
                { key: "contact", label: t.footer.links.contact },
              ].map((link) => (
                <li key={link.key}>
                  <button
                    className="cursor-pointer text-white/60 hover:text-[#2BCC07] transition-colors duration-300"
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 300,
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "#2BCC07",
              }}
            >
              {t.footer.followUs}
            </h4>
            <div className="flex gap-4">
              <button className="cursor-pointer w-10 h-10 border border-white/20 hover:border-[#2BCC07] hover:bg-[#2BCC07]/10 flex items-center justify-center transition-all duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </button>
              <button className="cursor-pointer w-10 h-10 border border-white/20 hover:border-[#2BCC07] hover:bg-[#2BCC07]/10 flex items-center justify-center transition-all duration-300">
                <Linkedin size={18} strokeWidth={1.5} />
              </button>
              <button className="cursor-pointer w-10 h-10 border border-white/20 hover:border-[#2BCC07] hover:bg-[#2BCC07]/10 flex items-center justify-center transition-all duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-white/40"
            style={{
              fontSize: "0.85rem",
              fontWeight: 300,
            }}
          >
            {t.footer.copyright}
          </p>
          <div className="flex gap-8">
            <button
              className="cursor-pointer text-white/40 hover:text-[#2BCC07] transition-colors duration-300"
              style={{
                fontSize: "0.85rem",
                fontWeight: 300,
              }}
            >
              {t.footer.privacy}
            </button>
            <button
              className="cursor-pointer text-white/40 hover:text-[#2BCC07] transition-colors duration-300"
              style={{
                fontSize: "0.85rem",
                fontWeight: 300,
              }}
            >
              {t.footer.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
