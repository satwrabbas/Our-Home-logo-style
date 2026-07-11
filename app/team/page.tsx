import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserTie,
  FaHardHat,
  FaPencilRuler,
  FaCalculator,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export const metadata = {
  title: "فريق العمل | Our Home",
  description: "تعرف على العقول الهندسية والخبرات التي تقف خلف نجاحات مكتب بيتنا للهندسة والمقاولات.",
};

export default function TeamPage() {
  const departments = [
    {
      icon: <FaPencilRuler />,
      title: "قسم التصميم المعماري",
      desc: "نخبة من المهندسين المعماريين لتحويل الأفكار إلى تصاميم عصرية تستغل المساحات بذكاء وإبداع.",
    },
    {
      icon: <FaHardHat />,
      title: "قسم الإشراف التنفيذي",
      desc: "مهندسون مدنيون ومشرفون متواجدون في الموقع لحظة بلحظة لضمان تنفيذ المخططات بدقة وأمان.",
    },
    {
      icon: <FaCalculator />,
      title: "القسم المالي والقانوني",
      desc: "خبراء في حساب الكميات، إدارة عقود لاحق التخصص، وضمان الشفافية المالية في كل قرش يتم استثماره.",
    },
    {
      icon: <FaUserTie />,
      title: "قسم العلاقات والمبيعات",
      desc: "فريق متخصص لاستقبالكم، الإجابة على استفساراتكم، وتقديم أفضل الاستشارات العقارية في مصياف.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-900" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            العقول التي تبني <span className="text-yellow-500">المستقبل</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            في مكتب <span className="text-white font-bold">Our Home</span>، نؤمن أن الإسمنت والحديد لا يبنيان البيوت وحدهما، بل العقول الهندسية المبدعة والأيادي الأمينة هي من تصنع الفارق. تعرف على شركاء نجاحك.
          </p>
        </div>
      </section>

      {/* Founder / Management Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* الصورة المؤقتة للمدير - يمكنك استبدالها لاحقاً بصورة حقيقية */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0 rounded-2xl overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="المهندس محمد كامل علي" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="text-center md:text-right">
              <div className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold rounded-full mb-4">
                المدير العام والمؤسس
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                المهندس محمد كامل علي
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg text-justify">
                "تأسس مكتب بيتنا ليكون أكثر من مجرد شركة مقاولات؛ لقد أردناه حصناً لحماية مدخرات الناس ومكاناً يوحّد الطاقات لبناء سكن لائق. من خلال ابتكار (عقد لاحق التخصص) وغيره من الحلول، نسعى دائماً لنكون الخيار الأكثر أماناً وشفافية لعملائنا في مصياف."
              </p>
              
              <div className="flex justify-center md:justify-start gap-4">
                <a href="tel:0994022889" className="flex items-center gap-2 text-slate-400 hover:text-white transition">
                  <FaPhoneAlt className="text-blue-500" />
                  <span dir="ltr">0994 022 889</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-yellow-500 font-bold tracking-wider uppercase mb-2">هيكلية العمل</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              أقسام متكاملة لخدمتك
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-slate-950 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {dept.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{dept.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {dept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring / Join Us CTA */}
      <section className="py-20 relative text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            هل أنت مهندس أو حرفي متميز؟
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            نحن في "بيتنا" نبحث دائماً عن الطاقات التي "تهد الجبال". انضم إلى شبكة شركائنا وكن جزءاً من منظومة التشاركية.
          </p>
          <Link
            href="/contact?subject=طلب انضمام لفريق العمل"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 hover:bg-yellow-500 font-bold rounded-xl transition-all shadow-lg"
          >
            <FaEnvelope />
            <span>أرسل سيرتك الذاتية</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}