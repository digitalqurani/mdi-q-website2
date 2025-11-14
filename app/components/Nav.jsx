"use client"
import React, { useEffect } from "react"

const WHATSAPP_NUMBER = "6285782475242"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Assalamu'alaikum, saya ingin daftar program belajar di MDIQ."
)
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Nav() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.hostname === "bimbeldi-mdiq-two.vercel.app"
    ) {
      window.location.replace(
        "https://bimbeldi.mdiq.biz.id" + window.location.pathname
      )
    }
  }, [])

  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src="/assets/MDQ.png" alt="MDQ" className="w-12 h-12" />
          <div>
            <div className="font-bold text-teal-700">
              Madrasah Diniyah IT & Qur'an
            </div>
            <div className="text-xs text-gray-500">MDIQ</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-teal-600">
            Home
          </a>
          <a href="#program" className="hover:text-teal-600">
            Program
          </a>
          <a href="#daftar" className="hover:text-teal-600">
            Daftar
          </a>
          <a href="#kontak" className="hover:text-teal-600">
            Kontak
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </nav>
  )
}
