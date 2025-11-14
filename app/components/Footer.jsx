import React from "react"

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white mt-8">
      <div className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/MDQ.png" alt="MDQ" className="w-12 h-12" />
          <div>
            <div className="font-bold">Madrasah Diniyah IT & Qur'an</div>
            <div className="text-sm">© {new Date().getFullYear()} MDIQ</div>
          </div>
        </div>
        <div>
          <p className="text-sm">
            Belajar Bahasa Arab Al Qur'an & IT dengan Semangat Digital Qurani
          </p>
        </div>
      </div>
    </footer>
  )
}
