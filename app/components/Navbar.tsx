"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  
  const pathname = usePathname();
  const router = useRouter();

  // 1. مراقبة التمرير لتغيير شكل النافبار
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. مراقبة الرابط والـ SessionStorage لتوجيه المستخدم فور وصوله للصفحة الرئيسية
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);

      if (pathname === "/") {
        // نتحقق مما إذا كان هناك طلب نزول معلق من صفحة أخرى
        const pendingTarget = sessionStorage.getItem("pendingScroll");
        const targetId = pendingTarget || (window.location.hash ? window.location.hash.substring(1) : null);

        if (targetId) {
          const scrollToElement = () => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
              // استخدام replaceState يمنع تكرار الهاش في الرابط نهائياً
              window.history.replaceState(null, "", `/#${targetId}`);
              setCurrentHash(`#${targetId}`);
              return true;
            }
            return false;
          };

          // إذا لم يكتمل بناء الصفحة بعد، نحاول لعدة مرات (Polling ذكي)
          if (!scrollToElement()) {
            let attempts = 0;
            const interval = setInterval(() => {
              attempts++;
              if (scrollToElement() || attempts >= 20) {
                clearInterval(interval);
              }
            }, 100);
          }
          
          // تنظيف الذاكرة بعد الاستخدام
          if (pendingTarget) sessionStorage.removeItem("pendingScroll");
        }
      }
    }
  }, [pathname]);

  // 3. نظام التوجيه المخصص (خارج الصندوق) لمنع أخطاء Next.js
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // إيقاف السلوك الافتراضي المزعج
    setIsOpen(false);

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");

      if (pathname === "/") {
        // نحن في الرئيسية: ننزل للقسم فوراً وبنعومة
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", `/#${targetId}`);
          setCurrentHash(`/#${targetId}`);
        }
      } else {
        // نحن في صفحة أخرى: نحفظ الهدف في الذاكرة وننتقل للرئيسية
        sessionStorage.setItem("pendingScroll", targetId);
        router.push("/");
      }
    } else {
      // روابط طبيعية (مثل /team أو /contact)
      router.push(href);
    }
  };

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  const navLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عقد لاحق التخصص", href: "/post-allocation" },
    { name: "فريق العمل", href: "/team" }, 
    { name: "معرض الأعمال", href: "/portfolio" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md border-white/10 shadow-lg"
          : "bg-transparent border-transparent py-0 md:py-1"
      }`}
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* تم استبدال الـ Link الافتراضي هنا أيضاً بنظامنا المخصص */}
          <a href="/#home" onClick={(e) => handleNavClick(e, "/#home")} className="flex items-center gap-2 md:gap-4 group cursor-pointer">
            <div className="relative w-12 md:w-16 h-auto transition-all duration-300">
              <Image
                src="/logo-white.png"
                alt="Our Home Logo"
                width={300}
                height={160}
                className="object-contain w-full rounded-2xl h-auto group-hover:scale-105 transition duration-300"
                priority
              />
            </div>
            <div className="h-10 w-[1px] bg-gray-600 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-white tracking-wide transition-all">
                Our Home
              </span>
              <span className="text-[10px] md:text-xs text-gray-400 font-light tracking-wider whitespace-nowrap">
                للهندسة والمقاولات
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // التحقق من الرابط النشط لتمييزه باللون
              const isHashLink = link.href.includes("#");
              const isActive = (!isHashLink && pathname === link.href) || 
                               (isHashLink && pathname === "/" && currentHash === link.href.replace("/", ""));

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-yellow-500" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] cursor-pointer"
            >
              <FaPhoneFlip size={14} />
              <span>استشارة مجانية</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => {
             const isHashLink = link.href.includes("#");
             const isActive = (!isHashLink && pathname === link.href) || 
                              (isHashLink && pathname === "/" && currentHash === link.href.replace("/", ""));
                              
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`w-full text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive ? "text-yellow-500 bg-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="w-full pt-2">
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="flex justify-center items-center gap-2 w-full bg-blue-600 active:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-bold shadow-md mt-1 cursor-pointer"
            >
              <FaPhoneFlip size={12} />
              <span>اتصل بنا الآن</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}