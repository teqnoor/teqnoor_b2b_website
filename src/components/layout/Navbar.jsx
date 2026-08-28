"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Send, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: "AI SEO", href: "/ai-seo" },
    { name: "B2B SEO Services", href: "/b2b-seo-services" },
    { name: "B2B SEO Consultant", href: "/b2b-seo-consultant" },
    { name: "B2B SEO Audit", href: "/b2b-seo-audit" },
  ];

  const industryLinks = [
    { name: "SaaS SEO", href: "/saas-seo" },
    { name: "SEO for Accountants", href: "/seo-for-accountants" },
    { name: "SEO for Law Firms", href: "/seo-for-law-firms" },
    { name: "Healthcare SEO", href: "/healthcare-seo" },
    { name: "SEO for Financial Services", href: "/seo-for-financial-services" },
  ];

  const caseStudyLinks = [
    { name: "Wholesale Food SEO", href: "/wholesale-food-seo" },
  ];

  const insightLinks = [{ name: "All Blogs", href: "/blog" }];

  const dropdownMenus = [
    { id: "services", label: "SERVICES", links: serviceLinks },
    { id: "industries", label: "INDUSTRIES", links: industryLinks },
    { id: "case-studies", label: "CASE STUDIES", links: caseStudyLinks },
    { id: "insights", label: "INSIGHTS", links: insightLinks },
  ];

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 bg-white ${
          isScrolled ? "shadow-sm h-20" : "border-b border-gray-100 h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Clickable Logo */}
          <Link
            href="/"
            className="relative h-16 w-52 flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/b2b-logo.png"
              alt="b2b Logo"
              width={150}
              height={50}
              priority
            />
          </Link>

          <nav
            className="hidden xl:flex items-center gap-6 2xl:gap-8"
            ref={dropdownRef}
          >
            <Link
              href="/"
              className={`font-sans font-bold text-sm tracking-wider transition-colors duration-200 whitespace-nowrap ${
                pathname === "/"
                  ? "text-purple-700"
                  : "text-slate-500 hover:text-purple-700"
              }`}
            >
              HOME
            </Link>

            {dropdownMenus.map((menu) => {
              const isGroupActive = menu.links.some(
                (link) => pathname === link.href,
              );
              const isOpen = activeDropdown === menu.id;

              return (
                <div key={menu.id} className="relative">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : menu.id)}
                    onMouseEnter={() => setActiveDropdown(menu.id)}
                    className={`flex items-center gap-1.5 font-sans font-bold text-sm tracking-wider transition-colors duration-200 whitespace-nowrap ${
                      isGroupActive || isOpen
                        ? "text-purple-700"
                        : "text-slate-500 hover:text-purple-700"
                    }`}
                  >
                    {menu.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-3 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                    >
                      {menu.links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`block px-5 py-2.5 text-sm font-sans font-semibold transition-colors duration-150 ${
                              isActive
                                ? "bg-purple-50 text-purple-700 font-bold"
                                : "text-slate-600 hover:bg-gray-50 hover:text-purple-700"
                            }`}
                          >
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/about"
              className={`font-sans font-bold text-sm tracking-wider transition-colors duration-200 whitespace-nowrap ${
                pathname === "/about"
                  ? "text-purple-700"
                  : "text-slate-500 hover:text-purple-700"
              }`}
            >
              ABOUT
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden xl:flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-sans font-bold text-sm tracking-widest px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-purple-700/10 hover:shadow-purple-700/20 uppercase"
            >
              CONTACT <Send className="w-3.5 h-3.5 fill-white stroke-[2.5]" />
            </Link>

            <button
              onClick={toggleMenu}
              className="xl:hidden p-2.5 rounded-xl bg-gray-50 text-slate-800 hover:bg-purple-50 hover:text-purple-700 border border-gray-200/50 transition-all active:scale-95"
            >
              <Menu className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-white p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            {/* Clickable Logo for Mobile Menu */}
            <Link
              href="/"
              onClick={toggleMenu}
              className="relative h-14 w-44 flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/logo2.png"
                alt="Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2.5 bg-gray-100 text-slate-800 rounded-full hover:bg-purple-50 hover:text-purple-700 transition-all active:scale-95"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          <nav className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
            <Link
              href="/"
              onClick={toggleMenu}
              className={`w-full flex justify-between items-center p-3.5 rounded-xl border transition-all font-sans font-bold text-base tracking-wide ${
                pathname === "/"
                  ? "bg-purple-50 border-purple-100 text-purple-700"
                  : "bg-gray-50 border-gray-100 text-slate-800 hover:text-purple-700"
              }`}
            >
              <span>HOME</span>
              <ArrowRight
                className={`w-4 h-4 ${pathname === "/" ? "text-purple-700" : "text-gray-400"}`}
              />
            </Link>

            {dropdownMenus.map((menu) => (
              <div key={menu.id} className="space-y-2">
                <div className="px-1 text-xs font-bold text-slate-400 tracking-wider uppercase">
                  {menu.label}
                </div>
                <div className="pl-2 space-y-1.5 border-l-2 border-purple-100">
                  {menu.links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={toggleMenu}
                        className={`w-full flex justify-between items-center p-2.5 rounded-lg border transition-all font-sans font-semibold text-sm tracking-wide ${
                          isActive
                            ? "bg-purple-50 border-purple-100 text-purple-700"
                            : "bg-gray-50 border-gray-100 text-slate-700 hover:text-purple-700"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 ${isActive ? "text-purple-700" : "text-gray-400"}`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            <Link
              href="/about"
              onClick={toggleMenu}
              className={`w-full flex justify-between items-center p-3.5 rounded-xl border transition-all font-sans font-bold text-base tracking-wide ${
                pathname === "/about"
                  ? "bg-purple-50 border-purple-100 text-purple-700"
                  : "bg-gray-50 border-gray-100 text-slate-800 hover:text-purple-700"
              }`}
            >
              <span>ABOUT</span>
              <ArrowRight
                className={`w-4 h-4 ${pathname === "/about" ? "text-purple-700" : "text-gray-400"}`}
              />
            </Link>
          </nav>
        </div>

        <div className="w-full pt-4 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-sans font-bold text-center py-4 px-6 rounded-xl block transition-all shadow-lg shadow-purple-700/10 tracking-widest uppercase"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}