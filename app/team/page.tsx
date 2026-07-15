// app/team/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserTie,
  FaHardHat,
  FaPencilRuler,
  FaChartLine,
  FaCalculator,
  FaEnvelope,
  FaWhatsapp,
  FaGraduationCap,
} from "react-icons/fa";

export const metadata = {
  title: "فريق العمل | Our Home",
  description: "تعرف على العقول الهندسية والمالية التي تقف خلف نجاحات مكتب بيتنا للهندسة والمقاولات.",
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: "عبدالله علي",
      role: "المدير المالي",
      icon: <FaChartLine />,
      desc: "عقلية مالية فذة تدير الأصول العقارية وتضمن الحفاظ على قيمة مدخرات المكتتبين بدلالة مواد البناء (معادل التغير السعري) لتحقيق أقصى درجات الأمان.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", 
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "hover:border-green-500/50",
    },
    {
      name: "م. شيم خضر",
      role: "مهندسة معمارية",
      icon: <FaPencilRuler />,
      desc: "لمسات إبداعية في التصميم المعماري، تعمل على تحويل الأفكار إلى واجهات ومساحات تنبض بالحياة وتلبي تطلعات العملاء بأدق التفاصيل.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop", 
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50",
    },
    {
      name: "م. مرهف يونس",
      role: "مهندس مدني",
      icon: <FaHardHat />,
      desc: "إشراف ميداني دقيق ومتابعة صارمة لتنفيذ المخططات في الموقع، لضمان أعلى معايير الجودة والمتانة والسلامة الإنشائية لمشاريعنا.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop", 
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "hover:border-amber-500/50",
    },
    {
      name: "ديالا محمد",
      role: "محاسبة",
      icon: <FaCalculator />,
      desc: "دقة متناهية في إدارة حسابات المكتتبين، متابعة الأقساط، وإصدار الكشوفات المالية الدورية لضمان الشفافية المطلقة بين المكتب وعملائه.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop", 
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "hover:border-pink-500/50",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-24 pb-16">
        
        {/* طبقة الصورة مع التأثير الحركي السينمائي البطيء */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-110"
          style={{ 
            // هذه هي الصورة المؤقتة لفريق العمل، يمكنك تغيير الرابط لاحقاً بصورتكم الجماعية
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" 
          }}
        >
          {/* طبقة التعتيم (الفلتر) المدمجة لحماية النص وجعله مقروءاً بوضوح */}
          <div className="absolute inset-0 bg-slate-950/70 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        </div>
        
        {/* طبقة المحتوى والنصوص */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            العقول التي تبني <span className="text-yellow-500">المستقبل</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            في مكتب <span className="text-white font-bold">Our Home</span>، نؤمن أن الإسمنت والحديد لا يبنيان البيوت وحدهما، بل العقول الهندسية المبدعة والأيادي الأمينة والإدارة المالية الصارمة هي من تصنع الفارق. تعرف على شركاء نجاحك.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-yellow-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="w-56 h-56 md:w-72 md:h-72 relative shrink-0 rounded-2xl overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="المهندس محمد كامل علي" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="text-center lg:text-right flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold rounded-full mb-4">
                <FaUserTie />
                <span>المدير العام والمؤسس</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                المهندس محمد كامل علي
              </h2>
              <h3 className="text-xl text-yellow-500 font-medium mb-6">مهندس معماري</h3>
              
              <p className="text-slate-300 leading-relaxed mb-8 text-lg text-justify border-r-4 border-yellow-500/50 pr-4">
                "رؤية معمارية وهندسية تمتد لسنوات في قيادة فريق 'بيتنا'. أرسى دعائم (عقد لاحق التخصص) ليكون الحل الأمثل لحماية المدخرات وتملك العقارات بذكاء في مصياف. نهدف لأن نكون أكثر من مجرد شركة مقاولات؛ لقد أردناه حصناً لحماية مدخرات الناس ومكاناً يوحّد الطاقات لبناء سكن لائق."
              </p>
              
              <div className="flex justify-center lg:justify-start gap-4">
                <a 
                  href="https://wa.me/963994022889" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition"
                >
                  <FaWhatsapp className="text-xl" />
                  <span dir="ltr">0994 022 889</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Grid */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            فريق الإدارة المتكامل
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className={`bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group ${member.border}`}>
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className={`absolute bottom-4 right-4 w-10 h-10 rounded-xl ${member.bg} ${member.color} flex items-center justify-center text-lg shadow-lg backdrop-blur-sm`}>
                  {member.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <h4 className={`text-sm font-bold mb-4 ${member.color}`}>{member.role}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship & Training Section - ستايل الشاشة الكاملة */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] w-full flex items-center justify-center overflow-hidden border-t border-b border-white/5 py-16 mt-16">
        
        {/* الخلفية المعمارية المتحركة التي تملأ الشاشة بالكامل */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          {/* تدرج لوني داكن مائل للأزرق مع طبقة مزدوجة لحفظ وضوح الكلمات */}
          <div className="absolute inset-0 bg-slate-950/70 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        </div>

        {/* العناصر المتراصة في المنتصف (تتوسطها الشاشات والكتابات) */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          
          {/* شارة علوية مضيئة متناسقة */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs md:text-sm text-blue-300 font-medium">
              سنوات طويلة من التأهيل والتدريب الهندسي
            </span>
          </div>

          {/* عنوان رئيسي مع تدرج لوني يعكس الأسلوب المعماري */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            باب التدريب والتأهيل <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">مفتوح دائماً</span>
          </h2>

          {/* نص وصفي منسق لتأدية غرض التواصل الفعال */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm text-center">
            استناداً إلى إيماننا العميق بصناعة الأجيال ونقل الخبرات، يفتح مكتب <span className="text-white font-bold">Our Home</span> أبوابه باستمرار استقبالاً للمهندسين المتدربين وحديثي التخرج. نقدم تأهيلاً هندسياً شاملاً وعلى كافة البرامج الهندسية، لدمجهم في بيئة العمل الحقيقية وتجهيزهم لسوق العمل باحترافية لتكون "بيتنا" خيارك الأفضل من الفكرة حتى التنفيذ النهائي.
          </p>

          {/* زر تواصل مجهز بستايل متوهج وأيقونة متفاعلة */}
          <div className="flex justify-center">
            <Link
              href="/contact?subject=طلب تدريب هندسي"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-base"
            >
              <FaEnvelope className="transition-transform group-hover:scale-110" />
              <span>قدم طلب للتدريب معنا</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. شبكة بطاقات مجالات التدريب */}
      <section className="pb-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            ماذا يتضمن <span className="text-blue-500">البرنامج التدريبي؟</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            نحرص على دمج المتدربين في كافة مراحل العمل الهندسي، ليخرج المهندس جاهزاً لمواجهة تحديات سوق العمل الحقيقي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* البطاقة الأولى: التصميم المكتبي */}
          <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 flex flex-col">
            <div className="relative h-56 w-full overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
            </div>
            <div className="p-6 relative z-20 -mt-12 flex-grow flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-4 shadow-lg shadow-blue-900/50 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <FaPencilRuler />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">التصميم وإعداد المخططات</h4>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                تدريب مكثف على التطبيقات الهندسية المعتمدة. تحويل الأفكار المعمارية إلى مخططات تنفيذية دقيقة (2D و 3D)، مع مراعاة الجوانب الجمالية والوظيفية.
              </p>
            </div>
          </div>

          {/* البطاقة الثانية: التدريب الميداني */}
          <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 flex flex-col">
            <div className="relative h-56 w-full overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888082425-eb1bbd9299ce?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
            </div>
            <div className="p-6 relative z-20 -mt-12 flex-grow flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-4 shadow-lg shadow-blue-900/50 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <FaHardHat />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">الإشراف والتنفيذ الميداني</h4>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                النزول إلى ورشات العمل الحقيقية. التدرب على قراءة المخططات في الموقع، استلام أعمال الحديد والبيتون، ومطابقة التنفيذ مع الكودات الهندسية.
              </p>
            </div>
          </div>

          {/* البطاقة الثالثة: حساب الكميات */}
          <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 flex flex-col">
            <div className="relative h-56 w-full overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
            </div>
            <div className="p-6 relative z-20 -mt-12 flex-grow flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl mb-4 shadow-lg shadow-blue-900/50 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <FaCalculator />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">حساب الكميات والتكاليف</h4>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                فهم الجانب التنفيذي المالي. التدرب على حساب الكميات بدقة، تحليل أسعار المواد، وإعداد الكشوفات بما يضمن دقة دراسة ميزانية المشاريع.
              </p>
            </div>
          </div>

        </div>
      </section>

      
      {/* Hiring / Join Us CTA */}
      <section className="py-20 relative text-center border-t border-white/5 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            هل أنت مهندس أو حرفي متميز وتبحث عن عمل؟
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            نحن في "بيتنا" نبحث دائماً عن الطاقات التي "تهد الجبال". انضم إلى شبكة شركائنا وكن جزءاً من منظومة التشاركية.
          </p>
          <Link
            href="/contact?subject=طلب انضمام لفريق العمل"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 hover:bg-yellow-500 font-bold rounded-xl transition-all shadow-lg"
          >
            <FaUserTie />
            <span>أرسل سيرتك الذاتية للتوظيف</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}