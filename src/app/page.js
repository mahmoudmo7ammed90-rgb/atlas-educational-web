// src/app/page.js
import Navbar from '@/Components/Navbar';
import LessonCard from '@/Components/LessonCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white" dir="rtl">
      {/* شريط التنقل العلوي */}
      <Navbar />

      {/* Hero Section - قسم الترحيب */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            مستقبلك في <span className="text-emerald-600">الجغرافيا</span> يبدأ هنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 font-medium">
            شرح تفصيلي لمنهج الدراسات الاجتماعية للصف الثاني الإعدادي بطريقة تفاعلية حديثة.
            اضغط على أي درس للتعمق في تفاصيله.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200">
              استكشف الأطلس
            </button>
            <button className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all">
              شاهد الفيديو التعريفى
            </button>
          </div>
        </div>
        
        {/* خلفية جمالية */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Lessons Grid - شبكة الدروس */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800 border-r-4 border-emerald-600 pr-4">دروس الوحدة الأولى</h2>
          <span className="text-emerald-600 font-semibold underline cursor-pointer">عرض الكل</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-32">
          {/* كارت مناخ الوطن العربي */}
          <Link href="/lessons/climate" className="block">
            <LessonCard 
              title="المناخ المتميز"
              icon="☀️"
              color="bg-orange-50"
              desc="اضغط هنا للدخول لشرح الأقاليم المناخية بالتفصيل الممل."
              details={[
                "إقليم البحر المتوسط: معتدل وممطر شتاءً.",
                "الإقليم الصحراوي: بيغطي 80% من المساحة.",
                "الإقليم المداري: أمطار صيفية غزيرة."
              ]}
            />
          </Link>

          {/* كارت توزيع السكان */}
          <Link href="/lessons/population" className="block">
            <LessonCard 
              title="توزيع السكان"
              icon="👥"
              color="bg-blue-50"
              desc="تعرف على أماكن تركز السكان والمشكلة السكانية في الوطن العربي."
              details={[
                "مناطق تركز السكان (الوديان والأنهار).",
                "أسباب الهجرة والنمو السكاني.",
                "المشكلة السكانية واختلال التوازن."
              ]}
            />
          </Link>

          {/* كارت اقتصاد الوطن العربي */}
          <Link href="/lessons/economy" className="block">
            <LessonCard 
              title="اقتصادنا العربي"
              icon="💰"
              color="bg-emerald-50"
              desc="اكتشف الثروات الزراعية والمعدنية ومصادر الطاقة العربية."
              details={[
                "الزراعة (الأنهار، الأمطار، المياه الجوفية).",
                "المعادن (البترول، الفوسفات، الحديد).",
                "التجارة والتكامل الاقتصادي."
              ]}
            />
          </Link>
           <Link href="/quiz" className="block">
  <LessonCard 
    title="اختبر معلوماتك"
    icon="📝"
    color="bg-purple-50"
    desc="تحدي الـ 5 أسئلة! اختبر مدى استيعابك لدروس الوحدة الأولى."
    details={[
      "أسئلة متنوعة (اختيار من متعدد).",
      "تصحيح فوري للإجابات.",
      "نتيجة نهائية وتقييم لمستواك."
    ]}
  />
</Link> 
        </div>
      </section>

      {/* Footer بسيط */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} أطلسنا التعليمي - جميع الحقوق محفوظة لطلاب تكنولوجيا التعليم</p>
        </div>
      </footer>
    </main>
  );
}