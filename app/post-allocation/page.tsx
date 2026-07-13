import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  FaHandshake,
  FaHome,
  FaHardHat,
  FaBoxOpen,
  FaChartLine,
  FaShieldAlt,
  FaCoins,
  FaFileContract,
  FaKey,
  FaUserClock,
  FaCalculator,
  FaTools,          // تمت إضافة هذه
  FaCheckCircle     // وتمت إضافة هذه أيضاً
} from "react-icons/fa";

export const metadata = {
  title: "عقد لاحق التخصص | Our Home",
  description: "الفرصة الادخارية الأذكى لحماية أموالك من التضخم وتملك شقة بدون دفعة أولى عبر معادل التغير السعري.",
};

export default function PostAllocationPage() {
  const invitations = [
    {
      icon: <FaCoins />,
      title: "أصحاب المدخرات المتآكلة",
      desc: "إذا كانت أموالك تفقد قيمتها يومياً بسبب التضخم، ولا تعرف كيف تستثمرها بأمان.",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      icon: <FaHome />,
      title: "أصحاب الشقق (على الهيكل)",
      desc: "بدأت بالبناء أو الإكساء وتوقفت؟ وتدفع إيجاراً يرهق كاهلك وشقتك موحشة وتنتظر؟",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: <FaUserClock />,
      title: "الآباء والمترددون",
      desc: "تبحث عن ادخار حقيقي لمستقبل أطفالك؟ أو راقبتنا لسنوات وضاعت مدخراتك بالانتظار؟",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: <FaHardHat />,
      title: "المهنيون والتجار",
      desc: "طاقات مهدورة، مستودعات مليئة بالمواد، ولا يوجد سوق تصريف أو فرص عمل مستقرة؟",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
  ];

  const journeySteps = [
    {
      num: "1",
      title: "الاكتتاب (الادخار المفتوح)",
      desc: "تبدأ بدفع أقساط شهرية (بدون دفعة أولى). يتم تحويل قيمة القسط فوراً إلى 'أمتار بدلالة مواد البناء' لحمايتها من التضخم.",
    },
    {
      num: "2",
      title: "مرحلة التخصص (تحديد الشقة)",
      desc: "عند وصول مدخراتك لـ 40% من قيمة شقة، تتخصص بها (تحديد الطابق، المساحة، الاتجاه, و المكان).",
    },
    {
      num: "3",
      title: "التسليم الأولي",
      desc: "تستلم الشقة للبدء بالإكساء (يتطلب بلوغ 60% من قيمة الشقة ).",
    },
    {
      num: "4",
      title: "التجهيزات المشتركة",
      desc: "دفع ما يترتب لتجهيز (الدرج، المناور، العدادات، الممرات الخارجية).",
    },
    {
      num: "5",
      title: "التسليم النهائي و نقل الملكية",
      desc: "نقل الملكية (طابو أخضر 2400 سهم) بمجرد الانتهاء من سداد كامل ثمن الشقة.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888082425-eb1bbd9299ce?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-900" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold mb-6 animate-fade-in-up">
            <FaShieldAlt />
            <span>الحصن الآمن لمدخراتك ضد التضخم</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            عقد <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">لاحق التخصص</span>
            <br />
            <span className="text-2xl md:text-4xl text-slate-300 mt-4 block font-medium">الفرصة الادخارية لتملك شقة بدون دفعة أولى</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 text-justify md:text-center">
            ابتكار هندسي ومالي من Our Home يضمن تحويل أموالك مهما كانت صغيرة إلى أمتار مبنية بناءً على "معادل التغير السعري". لا تدع مدخراتك تتهالك في مهب الريح.. حوّلها إلى عقار!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
            >
              <FaCalculator />
              <span>كيف يعمل النظام؟</span>
            </Link>
            <Link
              href="/contact?subject=الاكتتاب في عقد لاحق التخصص"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <FaFileContract />
              <span>اكتتب الآن</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Invitations (لمن هذا العقد؟) */}
      <section className="py-16 md:py-24 bg-slate-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-yellow-500 font-bold tracking-wider uppercase mb-2">الدعوة عامة</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">
              من المستفيد من هذه التشاركية؟
            </h3>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              هذه المبادرة ليست مجرد بيع وشراء، بل هي توحيد للطاقات وتوجيهها لحل جذري لمشاكلنا الاقتصادية الحالية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {invitations.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950 border border-white/5 rounded-2xl p-6 relative group transition-all duration-300 hover:border-yellow-500/30 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-2xl mb-6`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Special Mention Box */}
          <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <FaTools className="text-blue-500" /> هل تملك مهنة أو مواد بناء؟
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                إذا كنت تملك مهنة، آلة نقل، أو مواد بناء.. يمكنك تحويل جزء من أجرك أو ثمن موادك إلى حساب شقتك بالسعر الرائج كقسط شهري!
              </p>
            </div>
            <Link href="/contact" className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors text-sm">
              انضم كشريك مهني
            </Link>
          </div>
        </div>
      </section>

      {/* The Magic (معادل التغير السعري) */}
      <section id="how-it-works" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-yellow-500 font-bold tracking-wider mb-2">سر الضمان والأمان</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                ما هو "معادل التغير السعري"؟
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-justify">
                نظراً لتغير العملة والتضخم، نعتمد في بيتنا عقوداً مبرمجة بذكاء. أنت لا تضع نقوداً جامدة، بل <span className="text-yellow-500 font-bold">تشتري أمتاراً بدلالة مواد البناء الحالية</span>. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                  <span className="text-slate-400 text-sm md:text-base">تحويل القسط الشهري فوراً إلى أمتار مادية (إسمنت، حديد..) لحظة الدفع.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                  <span className="text-slate-400 text-sm md:text-base">يحصل المكتتب على إيصال يوضح (المبلغ، الأمتار المكتسبة، وأسعار المواد لحظة الدفع).</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                  <span className="text-slate-400 text-sm md:text-base">حتى بعد حذف الأصفار من العملة، عقدك محمي لأن التسعير مرتبط بالقرش والمواد الحقيقية.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <FaKey className="text-yellow-500" /> مرونة مطلقة بيدك
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-blue-400 mb-1">تحويل الرصيد:</h5>
                  <p className="text-slate-400 text-sm">يمكنك تحويل قيمة أمتارك لإكساء شقة تملكها مسبقاً، أو لإنشاء شقة في أرض تملكها.</p>
                </div>
                <div>
                  <h5 className="font-bold text-blue-400 mb-1">الانسحاب الآمن:</h5>
                  <p className="text-slate-400 text-sm">إذا رغبت بالانسحاب، نشتري أمتارك المملوكة بـ <span className="text-white font-bold">آخر سعر رائج</span> (مأخوذ كمتوسط لآخر 3 أشهر) ونرد لك قيمتها ضمن جدول زمني مجدول.</p>
                </div>
                <div>
                  <h5 className="font-bold text-blue-400 mb-1">الاستفادة من الرصيد:</h5>
                  <p className="text-slate-400 text-sm">استخدام الرصيد المتراكم في أي مشروع جديد لشركتنا في أي محافظة.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey (رحلة تملك شقة) */}
      <section className="py-16 md:py-24 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              رحلة تملك شقة سكنية
            </h2>
            <p className="text-slate-400 text-lg">من الدفعة الأولى  وحتى استلام الطابو الأخضر</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="relative p-6 bg-slate-950 border border-white/5 rounded-2xl hover:border-yellow-500/50 transition-colors group">
                <div className="absolute -top-5 -right-5 w-12 h-12 bg-slate-800 border-2 border-yellow-500 rounded-full flex items-center justify-center text-xl font-bold text-yellow-500 shadow-lg group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 mt-2">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section (الأسئلة الشائعة) */}
      <section className="py-16 md:py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-yellow-500 font-bold tracking-wider uppercase mb-2">إجابات شفافة</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              الأسئلة الأكثر شيوعاً
            </h3>
            <p className="text-slate-400 text-lg">
              كل ما تحتاج معرفته عن عقد لاحق التخصص لتبدأ وأنت مطمئن.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* سؤال 1 */}
            <div className="bg-slate-900 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-yellow-500/30 transition-colors">
              <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-yellow-500 text-xl">؟</span>
                هل أحتاج إلى دفعة أولى كبيرة للبدء؟
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed pr-6">
                لا، ليس بالضرورة. يمكنك الاكتتاب والبدء بالادخار "بدون دفعة أولى"، حيث يكون القسط الشهري بالحد الأدنى (يبدأ من 50,000 ليرة شهرياً)، ويتم تحويله فوراً لأمتار تحفظ قيمته.
              </p>
            </div>

            {/* سؤال 2 */}
            <div className="bg-slate-900 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-yellow-500/30 transition-colors">
              <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-yellow-500 text-xl">؟</span>
                ماذا لو احتجت لمالي وأردت الانسحاب؟
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed pr-6">
                الانسحاب آمن ومضمون. في حال رغبتك بالانسحاب، يقوم المكتب بشراء جميع الأمتار التي تملكها بـ <span className="text-white font-bold">آخر سعر رائج</span> (متوسط آخر 3 أشهر)، وتسترد قيمتها ضمن جدول زمني (من 6 إلى 9 أشهر).
              </p>
            </div>

            {/* سؤال 3 */}
            <div className="bg-slate-900 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-yellow-500/30 transition-colors">
              <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-yellow-500 text-xl">؟</span>
                متى أستطيع تحديد شقتي بالضبط (الطابق، الموقع)؟
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed pr-6">
                تدخل في مرحلة "التخصص" عندما تصل مدخراتك (أمتارك) إلى تملك 40% أو أكثر من مساحة الشقة المطلوبة. عندها يتم تحديد موقعها، مساحتها، طابقها، وسعرها المتبقي بدقة.
              </p>
            </div>

            {/* سؤال 4 */}
            <div className="bg-slate-900 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-yellow-500/30 transition-colors">
              <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-yellow-500 text-xl">؟</span>
                هل يمكنني استخدام رصيدي لتجهيز شقتي الحالية؟
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed pr-6">
                نعم بكل تأكيد! عقد لاحق التخصص مرن جداً. يمكنك تحويل قيمة الرصيد لإكساء شقة تملكها، أو لإنشاء شقة في أرض تملكها، أو حتى الاستفادة منه في أي مشروع جديد لشركتنا.
              </p>
            </div>

            {/* سؤال 5 */}
            <div className="bg-slate-900 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-yellow-500/30 transition-colors md:col-span-2">
              <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-yellow-500 text-xl">؟</span>
                كيف أضمن أن أموالي لن تتأثر بحذف الأصفار من العملة أو التضخم؟
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed pr-6 md:w-3/4">
                نحن لا نقيّم رصيدك بالليرة الورقية الجامدة، بل نعطيك <span className="text-yellow-500 font-bold">"معادل تغير سعري"</span>. عند دفعك للقسط، يتم تحويله إلى أجزاء من (إسمنت، حديد، إلخ) ومقيمة بـ "القرش". هذا يعني أنك تملك مواد بناء حقيقية، ترتفع قيمتها تلقائياً مع السوق، لتبقى أموالك في حصن منيع ضد أي تضخم أو تعديل في العملة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            بيتنا.. خيارك الأفضل من الفكرة للتنفيذ
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            العقد مؤلف من 6 صفحات موثقة ومبصومة تضمن حقوق الفريقين. القسط الشهري بالحد الأدنى يبدأ من 50,000 ليرة (قابلة للتغير حسب الدراسة).
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact?subject=تحديد موعد لتوقيع العقد"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400 font-bold rounded-xl transition-all text-lg shadow-xl"
            >
              <FaHandshake />
              <span>احجز موعداً في المكتب</span>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            مصياف - شمال الكازية الشمالية طابق أول على طريق مصياف الزينة<br />
            إشراف المهندس: محمد كامل علي
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}