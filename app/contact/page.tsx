"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaPhoneVolume,
} from "react-icons/fa";

// مكون المحتوى الرئيسي الذي يقرأ الرابط
function ContactContent() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject");
  
  // تحديد الموضوع بناءً على الرابط أو وضع قيمة افتراضية
  const subject = subjectParam ? subjectParam : "استفسار عام عن خدمات المكتب";

  // تجهيز رسالة الواتساب تلقائياً
  const waMessage = `مرحباً مكتب بيتنا (Our Home)،\nأود التواصل معكم بخصوص: *${subject}*.\nهل يمكنكم تزويدي بمزيد من التفاصيل؟`;
  const primaryWaLink = `https://wa.me/963994022889?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="grow py-8 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* القسم الأيمن: أزرار التواصل المباشر */}
        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white border-r-4 border-yellow-500 pr-3 md:pr-4 mb-4">
              كيف يمكننا مساعدتك؟
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              نحن نفضل التواصل المباشر لنفهم احتياجاتك بدقة. اختر الطريقة التي تناسبك وسنكون سعداء بالرد عليك فوراً.
            </p>
          </div>

          {/* موضوع التواصل (يظهر للعميل ليعرف أننا فهمنا طلبه) */}
          <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0"></div>
            <p className="text-slate-300">
              موضوع تواصلك الحالي: <span className="text-white font-bold">{subject}</span>
            </p>
          </div>

          {/* زر الواتساب الرئيسي الضخم */}
          <a
            href={primaryWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white p-6 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                  <FaWhatsapp className="text-3xl" />
                  مراسلة عبر واتساب
                </h3>
                <p className="text-green-100 text-sm">رد سريع ومباشر على استفساراتك (0994022889)</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaWhatsapp className="text-2xl" />
              </div>
            </div>
          </a>

          {/* أرقام الاتصال الهاتفي */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="tel:0944809750"
              className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-white/5 hover:border-yellow-500/30 transition group"
            >
              <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500 group-hover:bg-yellow-500 group-hover:text-slate-900 transition shrink-0">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">اتصال خلوي (ثاني)</h4>
                <p className="text-slate-400 dir-ltr text-right font-medium">0944 809 750</p>
              </div>
            </a>

            <a
              href="tel:0337701646"
              className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-white/5 hover:border-blue-500/30 transition group"
            >
              <div className="bg-blue-500/10 p-3 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition shrink-0">
                <FaPhoneVolume className="text-xl" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">هاتف أرضي (المكتب)</h4>
                <p className="text-slate-400 dir-ltr text-right font-medium">033 7701646</p>
              </div>
            </a>
          </div>

          {/* معلومات إضافية (أوقات العمل والإيميل) */}
          <div className="flex flex-col gap-4 p-6 bg-slate-900 rounded-2xl border border-white/5">
            <div className="flex items-start gap-4">
              <FaClock className="text-slate-500 text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">أوقات العمل الرسمية</h4>
                <p className="text-slate-400 text-sm">السبت - الخميس: 9:00 صباحاً - 5:00 مساءً</p>
                <p className="text-slate-500 text-xs mt-1">الجمعة: عطلة رسمية</p>
              </div>
            </div>
            <div className="w-full h-px bg-white/5 my-2"></div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-slate-500 text-xl mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">البريد الإلكتروني</h4>
                <p className="text-slate-400 text-sm">ourhome.msyaf@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* القسم الأيسر: الخريطة والعنوان */}
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl h-full flex flex-col">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-red-500/10 p-4 rounded-full text-red-500 shrink-0">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">تفضل بزيارة مكتبنا</h2>
                <p className="text-slate-300 leading-relaxed">
                  سوريا - مصياف<br/>
                  شمال الكازية الشمالية بـ 150 متر<br/>
                  طابق أول، على طريق مصياف الزينة.
                </p>
              </div>
            </div>

            {/* الخريطة المكبرة */}
            <div className="rounded-xl overflow-hidden border border-white/10 grow min-h-[350px] shadow-lg relative z-0">
              <iframe
                title="موقع المكتب"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4285.4664205964045!2d36.33783050962611!3d35.07056459461836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15239361bdb9122d%3A0x194d6fc3d2c60ff6!2sOur%20Home!5e1!3m2!1sen!2sus!4v1765527215020!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[0.8] hover:brightness-100 transition duration-500"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// الصفحة الرئيسية لتغليف المحتوى بـ Suspense
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />

      {/* Hero Section لصفحة التواصل */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 text-center px-4 border-b border-white/5 overflow-hidden">
        {/* 1. الصورة الخلفية (صورة الاجتماع والمصافحة) */}
        <div className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center opacity-40 pointer-events-none" />
        
        {/* 2. التدرج اللوني (يبدأ داكناً ليتناسب مع القائمة وينتهي بلون خلفية الموقع) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950 pointer-events-none" />
        
        {/* 3. باترن المكعبات لربط الهوية البصرية بباقي الصفحات */}
        <div className="absolute inset-0 bg-[url('/images/cubes-pattern.png')] opacity-5 pointer-events-none" />

        {/* 4. النصوص (تم رفعها للأعلى z-10 وإضافة ظلال لتبرز فوق الصورة) */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            تواصل معنا
          </h1>
          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            نحن هنا للإجابة على استفساراتك الهندسية والعقارية. باب مكتبنا مفتوح دائماً لاستقبالكم.
          </p>
        </div>
      </section>

      <Suspense fallback={
        <div className="grow flex items-center justify-center text-yellow-500 text-xl animate-pulse py-20">
          جاري تجهيز بيانات التواصل...
        </div>
      }>
        <ContactContent />
      </Suspense>

      <div className="py-6 text-center border-t border-white/5 bg-slate-900/30 mt-auto">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-slate-700 hover:text-yellow-500 transition-colors duration-300 text-xs md:text-sm opacity-60 hover:opacity-100"
          title="دخول الإدارة فقط"
        >
          <FaLock size={10} className="md:w-3 md:h-3" />
          <span>الدخول للإدارة</span>
        </Link>
      </div>

      <Footer />
    </main>
  );
}