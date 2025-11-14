import React from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const WHATSAPP_NUMBER = "6285782475242"
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Assalamu'alaikum, saya ingin daftar program belajar di MDIQ."
  )
  const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  return (
    <section id="home" className="min-h-[60vh] flex items-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-teal-800"
          >
            Madrasah Diniyah IT & Qur'an (MDIQ)
          </motion.h1>

          <p className="mt-4 text-gray-700 text-lg">
            Belajar Qur'an, IT & Ilmu Diniyah untuk Semua Usia — Anak, Remaja,
            hingga Orang Tua.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#daftar"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded shadow"
            >
              Daftar Sekarang
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded shadow"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-6">
          <h3 className="font-bold text-teal-700">Program Unggulan</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>📖 Tahsin Al-Qur'an</li>
            <li>🔈 Tartil & Tahfidz</li>
            <li>🗣️ Bahasa Arab & Inggris</li>
            <li>🔢 Calistung (Baca-Tulis-Hitung)</li>
            <li>💻 IT & Literasi Digital</li>
            <li>👪 Program Keluarga Muslim Produktif</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
