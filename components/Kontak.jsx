import React from "react"

export default function Kontak() {
  return (
    <section id="kontak" className="py-10 bg-teal-50">
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-teal-700">Kontak & Lokasi</h3>
          <p className="text-gray-600 mt-2">
            Jl. Pendidikan No. 17, Hikam, Sungai Pasir Kabupaten Karimun
          </p>
          <p className="text-gray-600">Jam: Senin - Sabtu | Menyesuaikan</p>
          <p className="text-gray-600 mt-2">Email: info@mdiq.biz.id</p>
          <p className="text-gray-600 mt-2">WhatsApp: +62 857-8247-5242</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="/assets/MDIQ_WhatsApp_QR.png"
            alt="QR"
            className="w-36 h-36 bg-white p-2 rounded"
          />
          <div>
            <p className="text-sm text-gray-600">Scan untuk chat WhatsApp</p>
            <p className="font-semibold">Madrasah Diniyah IT & Qur'an</p>
          </div>
        </div>
      </div>
    </section>
  )
}
