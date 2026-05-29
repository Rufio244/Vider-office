import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Database, Cpu, Box, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 🚀 HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                VIDER <span className="text-cyan-400">OFFICE</span>
                <br />
                <span className="text-3xl md:text-5xl">Transform Legacy → Offline AI</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                🛡️ <strong>เปลี่ยนระบบเดิมให้เป็นระบบอัจฉริยะ</strong> โดยไม่ต้องรื้อระบบเดิม, ไม่ล่ม, ไม่หยุดงาน
                <br />🧠 <strong>AI ทำงานออฟไลน์ 100%</strong> ข้อมูลปลอดภัยสูงสุด
                <br />🧰 <strong>พร้อมลงเครื่อง MOB ได้ทันที</strong>
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/pricing" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-2xl">
                  เริ่มใช้งานทันที <ArrowRight className="inline ml-2" />
                </Link>
                <Link to="/about" className="border-2 border-white/30 hover:border-white text-white font-bold py-4 px-8 rounded-xl text-lg transition-all backdrop-blur-lg bg-white/10">
                  เรียนรู้เพิ่มเติม
                </Link>
              </div>
            </div>

            {/* 🧠 ANIMATION ILLUSTRATION */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl bg-black/40 p-8 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm">VIDER ENGINE v2.0</span>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-green-400">[✓] SCANNING LEGACY SYSTEM...</div>
                  <div className="text-green-400">[✓] ANALYZING ARCHITECTURE...</div>
                  <div className="text-yellow-400">[⚙] BUILDING BRIDGE LAYER...</div>
                  <div className="text-blue-400">[⚙] INJECTING OFFLINE AI CORE...</div>
                  <div className="text-purple-400">[⚙] PACKAGING FOR MOB...</div>
                  <div className="text-cyan-400 text-lg font-bold animate-pulse">[✅] READY FOR DEPLOYMENT 🧰📦</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✨ FEATURES HIGHLIGHT */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            ทำไมต้องใช้ <span className="text-cyan-500">VIDER OFFICE</span> ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-green-500" />,
                title: "ไม่ทำลายระบบเดิม",
                desc: "เทคโนโลยี Legacy Wrapper ห่อหุ้มระบบเดิมไว้ ใช้งานได้ปกติ 100% ไม่ล่ม ไม่หยุดธุรกิจ"
              },
              {
                icon: <Cpu className="w-12 h-12 text-blue-500" />,
                title: "AI อัจฉริยะทุกแผนก",
                desc: "แปลงระบบธรรมดาให้มีสมอง: การเงิน, คลัง, ผลิต, ขาย, HR ทำงานอัตโนมัติและฉลาดขึ้น"
              },
              {
                icon: <Lock className="w-12 h-12 text-purple-500" />,
                title: "ออฟไลน์ 100% ปลอดภัย",
                desc: "ระบบทำงานบนเครื่องคุณ ไม่ต้องส่งข้อมูลออกภายนอก ปกปิดความลับทางธุรกิจสูงสุด"
              },
              {
                icon: <Box className="w-12 h-12 text-red-500" />,
                title: "รองรับ MOB โดยตรง",
                desc: "สร้างไฟล์รูปแบบ .vpack นำเข้าเครื่อง Machine Offline Builder ติดตั้งอัตโนมัติ 1 คลิก"
              },
              {
                icon: <Zap className="w-12 h-12 text-yellow-500" />,
                title: "ทำงานคู่ขนาน",
                desc: "โหมด Dual System ใช้ระบบเก่าและใหม่พร้อมกัน ค่อยๆ เปลี่ยนผ่านอย่างปลอดภัย"
              },
              {
                icon: <Database className="w-12 h-12 text-indigo-500" />,
                title: "รองรับทุกระบบ",
                desc: "เข้ากันได้กับทุกระบบเดิม: Excel, Manual, ERP, SQL, Oracle, SAP ฯลฯ"
              }
            ].map((feat, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700">
                <div className="mb-6">{feat.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{feat.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/features" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-bold text-lg">
              ดูฟีเจอร์ทั้งหมด <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
