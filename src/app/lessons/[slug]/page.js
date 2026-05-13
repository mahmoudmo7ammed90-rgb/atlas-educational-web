"use client";
import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function LessonDetail() {
  const params = useParams();
  const slug = params.slug;

  const lessonsData = {
    'climate': {
      title: "مناخ الوطن العربي",
      subtitle: "الأقاليم المناخية والنبات الطبيعي",
      icon: "☀️",
      intro: "يتميز الوطن العربي بتنوع مناخي كبير أدى إلى تنوع النباتات والمحاصيل الزراعية، مما يساعد على تحقيق التكامل العربي.",
      sections: [
        {
          head: "إقليم البحر المتوسط",
          content: "يوجد في الأطراف الشمالية للوطن العربي المطلة على سواحل البحر المتوسط. يتميز بصيف حار جاف وشتاء معتدل ممطر. تنمو فيه الغابات المعتدلة مثل أشجار البلوط والأرز.",
          tags: ["معتدل", "ممطر شتاءً", "أشجار الأرز"]
        },
        {
          head: "الإقليم الصحراوي",
          content: "أكبر الأقاليم المناخية مساحة (80%). يمتد بين إقليم البحر المتوسط شمالاً والمداري جنوباً. يتميز بمناخ قاري شديد الحرارة صيفاً وشديد البرودة شتاءً.",
          tags: ["80% من المساحة", "مناخ قاري", "نباتات شوكية"]
        }
      ]
    },
    'population': {
      title: "توزيع سكان وطننا العربي",
      subtitle: "النمو السكاني والكثافة السكانية",
      icon: "👥",
      intro: "ينقسم سكان الوطن العربي إلى سكان الحضر والريف والبدو، مع اختلاف كبير في توزيعهم الجغرافي بناءً على الموارد المتاحة.",
      sections: [
        {
          head: "عوامل توزيع السكان",
          content: "تنقسم العوامل إلى طبيعية (الموارد المائية، التربة الخصبة، التضاريس، المناخ) وعوامل بشرية (الأنشطة الاقتصادية، الصراعات والحروب، النقل والمواصلات).",
          tags: ["تضاريس", "موارد مائية", "حروب"]
        }
      ]
    },
    'economy': {
      title: "الاقتصاد العربي",
      subtitle: "الموارد والأنشطة الاقتصادية",
      icon: "💰",
      intro: "وهب الله الوطن العربي موارد اقتصادية متنوعة في البر والبحر، من محاصيل زراعية إلى ثروات معدنية ومصادر طاقة.",
      sections: [
        {
          head: "المعادن ومصادر الطاقة",
          content: "يعتبر البترول والغاز الطبيعي من أهم مصادر الطاقة، ويحتل الوطن العربي المركز الأول عالمياً في احتياطي البترول.",
          tags: ["بترول", "غاز طبيعي", "فوسفات"]
        }
      ]
    }
  };

  const lesson = lessonsData[slug];

  if (!lesson) return <div className="text-center py-20 font-bold">الدرس غير موجود</div>;

  return (
    <main className="min-h-screen bg-[#fcfcfc]" dir="rtl">
      <Navbar />

      {/* Header Section */}
      <header className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-emerald-600 font-bold mb-4 inline-block hover:underline">← العودة للرئيسية</Link>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-4xl shadow-sm">
              {lesson.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900">{lesson.title}</h1>
              <p className="text-emerald-600 text-xl font-medium mt-2">{lesson.subtitle}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
              مقدمة الدرس
            </h3>
            <div className="prose prose-lg text-gray-600 leading-relaxed bg-white p-8 rounded-3xl shadow-sm border border-gray-50 italic">
              "{lesson.intro}"
            </div>
          </section>

          {lesson.sections.map((sec, i) => (
            <section key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{sec.head}</h3>
              <p className="text-lg text-gray-600 leading-loose mb-6">{sec.content}</p>
              <div className="flex flex-wrap gap-3">
                {sec.tags.map((tag, j) => (
                  <span key={j} className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold border border-emerald-100">
                    #{tag}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 text-white p-8 rounded-3xl sticky top-28 shadow-2xl">
            <h4 className="text-xl font-bold mb-6">ملخص سريع 📝</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">●</span>
                <p className="text-gray-300 text-sm">شرح مبسط وموافق للمنهج المدرسي الجديد.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">●</span>
                <p className="text-gray-300 text-sm">استخدام الخرائط الذهنية لتسهيل الحفظ.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">●</span>
                <p className="text-gray-300 text-sm">أهم النقاط المتوقعة في الامتحان.</p>
              </li>
            </ul>
            <button className="w-full mt-8 bg-emerald-500 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors">
              تحميل ملف الـ PDF
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}