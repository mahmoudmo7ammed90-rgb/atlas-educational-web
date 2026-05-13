export default function LessonCard({ title, icon, desc, details, color }) {
  return (
    <div className={`group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner`}>
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed font-medium">{desc}</p>
      
      <div className="max-h-0 overflow-hidden group-hover:max-h-80 transition-all duration-700 ease-in-out">
        <div className="pt-4 border-t border-gray-50 space-y-3">
          {details.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-xl">
              <span className="text-emerald-500">✔</span> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}