//app\portfolio\page.tsx
import { createClient } from "../utils/supabase/server";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioGrid from "../components/PortfolioGrid";

export const metadata = {
  title: "معرض الأعمال | Our Home",
  description:
    "تصفح أحدث مشاريعنا الهندسية في مصياف، من التصميم المعماري إلى الإكساء الداخلي.",
};

export default async function PortfolioPage() {
  const supabase = await createClient();

  const { data: projects } = await supabase
    .from("projects")
    .select("id, title, category, image_url, location")
    .order("created_at", { ascending: false });

  const allProjects = projects || [];

  return (
    <main className="min-h-screen bg-slate-950" >
      
      <Navbar />

      {/* Hero Section لمعرض الأعمال */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5">
        {/* 1. الصورة الخلفية */}
        <div className="absolute inset-0 bg-[url('/images/portfolio-hero.jpg')] bg-cover bg-center opacity-40 pointer-events-none" />
        
        {/* 2. التدرج اللوني الشفاف لدمج الصورة مع لون الموقع وإبراز النصوص */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950 pointer-events-none" />
        
        {/* 3. باترن المكعبات المحلي (يضيف ملمساً هندسياً خفيفاً) */}
        <div className="absolute inset-0 bg-[url('/images/cubes-pattern.png')] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            أعمالنا تتحدث <span className="text-yellow-500">عنا</span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            جولة بصرية في مشاريعنا المنجزة. نؤمن بأن كل مبنى يحكي قصة، وهنا نعرض
            لكم فصولاً من قصص النجاح التي بنيناها في مصياف.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[50vh] md:min-h-[60vh]">
        {allProjects.length > 0 ? (
          <PortfolioGrid projects={allProjects} />
        ) : (
          <div className="text-center py-12 md:py-20">
            <h2 className="text-xl md:text-2xl text-white font-bold">
              قريباً..
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-2">
              جاري تجهيز وتصوير مشاريعنا لرفعها على الموقع.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
