"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'مناخ الوطن العربي', href: '#climate', desc: 'دراسة الأقاليم المناخية والعوامل المؤثرة.' },
    { name: 'توزيع السكان', href: '#population', desc: 'نمو السكان وكثافتهم في الدول العربية.' },
    { name: 'اقتصاد الوطن العربي', href: '#economy', desc: 'الزراعة، التعدين، ومصادر الطاقة.' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-emerald-100" dir="rtl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-emerald-600 p-2 rounded-xl shadow-md transform group-hover:rotate-[-6deg] transition-transform">
            <span className="text-white text-xl">🌍</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">أطلس<span className="text-emerald-600">ـنا</span></span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          <li><Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium">الرئيسية</Link></li>
          <li className="relative group/dropdown">
            <button className="text-gray-700 hover:text-emerald-600 font-medium flex items-center gap-1">
              الدروس <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl invisible opacity-0 group-hover/dropdown:visible group-hover/dropdown:opacity-100 transition-all p-4 z-50">
              {services.map((s, i) => (
                <Link key={i} href={s.href} className="block p-2 hover:bg-emerald-50 rounded-lg text-sm text-gray-700 font-semibold">{s.name}</Link>
              ))}
            </div>
          </li>
          <li><Link href="#" className="text-gray-700 hover:text-emerald-600 font-medium">اتصل بنا</Link></li>
        </ul>

        <Link href="#" className="hidden md:block bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
          ابدأ الرحلة
        </Link>
      </div>
    </nav>
  );
}