"use client"
import React from "react"

export default function Daftar() {
  const WHATSAPP_NUMBER = "6285782475242"

  const formatPhone = (phone) => {
    if (!phone) return ""
    phone = String(phone).trim()
    if (phone.startsWith("+")) return phone.replace(/\D/g, "")
    if (phone.startsWith("0")) return "62" + phone.slice(1).replace(/\D/g, "")
    if (phone.startsWith("62")) return phone.replace(/\D/g, "")
    return phone.replace(/\D/g, "")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const name = fd.get("name") || "-"
    const age = fd.get("age") || "-"
    const program = fd.get("program") || "-"
    const rawPhone = fd.get("phone") || "-"
    const phone = formatPhone(rawPhone) || WHATSAPP_NUMBER
    const msg = encodeURIComponent(
      `Assalamu'alaikum, saya ingin daftar:\nNama: ${name}\nUsia: ${age}\nProgram: ${program}\nHP: ${phone}`
    )
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank")
  }

  return (
    <section id="daftar" className="py-10">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-teal-800">Form Pendaftaran</h2>
        <p className="text-gray-600 mt-2">
          Isi data singkat, tim kami akan menghubungi via WhatsApp.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <input
            name="name"
            required
            placeholder="Nama lengkap"
            className="p-3 border rounded"
          />
          <input name="age" placeholder="Usia" className="p-3 border rounded" />
          <select name="program" className="p-3 border rounded">
            <option>Tahsin Al-Qur'an</option>
            <option>Tartil & Tahfidz</option>
            <option>Bahasa Arab & Inggris</option>
            <option>Calistung</option>
            <option>IT & Literasi Digital</option>
            <option>Program Keluarga</option>
          </select>
          <input
            name="phone"
            required
            placeholder="No. WhatsApp (contoh: 0812...)"
            className="p-3 border rounded"
          />
          <div className="md:col-span-2 flex gap-3">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Kirim ke WhatsApp
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Chat Sekarang
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
