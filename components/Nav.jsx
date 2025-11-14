"use client"
import React, { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const WHATSAPP_NUMBER = "6285782475242"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Assalamu'alaikum, saya ingin daftar program belajar di MDIQ."
)
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  let lastScroll = 0

  // Redirect domain
  useEffect(() => {
    if (typeof window !== "undefined" &&
      window.location.hostname === "bimbeldi-mdiq-two.vercel.app") {
      window.location.replace("https://bimbeldi.mdiq.biz.id" + window.location.pathname)
    }
  }, [])

  // Auto hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > lastScroll && current > 50) setHidden(true)
      else setHidden(false)
      lastScroll = current
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <nav
        className={`
          fixed top-0 left-0 w-full z-40 transition-all duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm
        `}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/assets/MDQ.png" alt="MDQ" className="w-12 h-12" />
            <div>
              <div className="font-bold text-teal-700 text-lg">
                Madrasah Diniyah IT & Qur'an
              </div>
              <div className="text-xs text-gray-500">MDIQ</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className="hover:text-teal-600">Home</a>
            <a href="#program" className="hover:text-teal-600">Program</a>
            <a href="#daftar" className="hover:text-teal-600">Daftar</a>
            <a href="#kontak" className="hover:text-teal-600">Kontak</a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-3xl text-teal-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden bg-white/90 backdrop-blur-xl border-b border-white/30
            transition-all duration-300 overflow-hidden
            ${open ? "max-h-80" : "max-h-0"}
          `}
        >
          <div className="flex flex-col p-4 gap-4 text-lg">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#program" onClick={() => setOpen(false)}>Program</a>
            <a href="#daftar" onClick={() => setOpen(false)}>Daftar</a>
            <a href="#kontak" onClick={() => setOpen(false)}>Kontak</a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white text-center py-3 rounded-lg shadow hover:bg-green-700"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
