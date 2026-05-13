"use client";
import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Link from 'next/link';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      questionText: 'ما هو أكبر الأقاليم المناخية مساحة في الوطن العربي؟',
      answerOptions: [
        { answerText: 'إقليم البحر المتوسط', isCorrect: false },
        { answerText: 'الإقليم المداري', isCorrect: false },
        { answerText: 'الإقليم الصحراوي', isCorrect: true },
        { answerText: 'الإقليم الاستوائي', isCorrect: false },
      ],
    },
    {
      questionText: 'أي من الدول الآتية تعاني من "فائض سكاني" ونقص في الموارد؟',
      answerOptions: [
        { answerText: 'السعودية', isCorrect: false },
        { answerText: 'مصر', isCorrect: true },
        { answerText: 'الكويت', isCorrect: false },
        { answerText: 'الإمارات', isCorrect: false },
      ],
    },
    {
      questionText: 'تنمو أشجار "الأرز" التي اتخذتها لبنان شعاراً لها في إقليم:',
      answerOptions: [
        { answerText: 'البحر المتوسط', isCorrect: true },
        { answerText: 'الصحراوي', isCorrect: false },
        { answerText: 'المداري', isCorrect: false },
        { answerText: 'الموسمي', isCorrect: false },
      ],
    },
    {
      questionText: 'يحتل الوطن العربي المركز الأول عالمياً في احتياطي:',
      answerOptions: [
        { answerText: 'الحديد', isCorrect: false },
        { answerText: 'الفوسفات', isCorrect: false },
        { answerText: 'النحاس', isCorrect: false },
        { answerText: 'البترول', isCorrect: true },
      ],
    },
    {
      questionText: 'تعتمد الزراعة في معظم أجزاء الوطن العربي على مياه:',
      answerOptions: [
        { answerText: 'الأنهار', isCorrect: false },
        { answerText: 'الأمطار', isCorrect: true },
        { answerText: 'المياه الجوفية', isCorrect: false },
        { answerText: 'تحلية المياه', isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (index, isAnswerCorrect) => {
    setSelectedAnswer(index);
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 800); // تأخير بسيط عشان الطالب يشوف النتيجة
  };

  return (
    <main className="min-h-screen bg-[#F0F4F8]" dir="rtl">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-2xl">
          
          {showScore ? (
            <div className="bg-white rounded-[40px] p-12 shadow-2xl text-center border-b-8 border-emerald-500 transform transition-all scale-105">
              <div className="text-8xl mb-6 animate-bounce">🏆</div>
              <h2 className="text-4xl font-black text-gray-800 mb-2">بطل الجغرافيا!</h2>
              <p className="text-xl text-gray-500 mb-8">لقد أنهيت التحدي بنجاح</p>
              
              <div className="bg-emerald-50 inline-block px-12 py-6 rounded-3xl mb-8">
                <span className="text-5xl font-black text-emerald-600">{score}</span>
                <span className="text-2xl text-emerald-300 mx-2">/</span>
                <span className="text-2xl font-bold text-gray-400">{questions.length}</span>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-emerald-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all active:scale-95"
                >
                  إعادة التحدي
                </button>
                <Link href="/" className="text-gray-400 font-bold hover:text-emerald-600 transition-colors">
                  العودة للرئيسية
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* شريط التقدم العلوي */}
              <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
                <span className="font-bold text-emerald-600 min-w-[60px]">
                  {currentQuestion + 1} من {questions.length}
                </span>
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* كارت السؤال */}
              <div className="bg-white rounded-[35px] p-8 md:p-12 shadow-xl border border-white">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-10 text-center">
                  {questions[currentQuestion].questionText}
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {questions[currentQuestion].answerOptions.map((option, index) => (
                    <button
                      key={index}
                      disabled={selectedAnswer !== null}
                      onClick={() => handleAnswerOptionClick(index, option.isCorrect)}
                      className={`
                        group relative overflow-hidden text-right p-6 rounded-2xl font-bold text-lg transition-all duration-300 border-2
                        ${selectedAnswer === index 
                          ? (isCorrect ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg' : 'bg-red-500 border-red-500 text-white shadow-lg')
                          : 'bg-white border-gray-100 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50 shadow-sm active:scale-[0.98]'
                        }
                        ${selectedAnswer !== null && option.isCorrect ? 'bg-emerald-500 border-emerald-500 text-white' : ''}
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <span>{option.answerText}</span>
                        {selectedAnswer === index && (
                          <span>{isCorrect ? '✓' : '✕'}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}