import React from "react"

export default function Programs() {
  const items = [
    { title: "Tahsin Al-Qur'an", desc: "Perbaikan bacaan, tajwid & makhraj." },
    { title: "Tartil & Tahfidz", desc: "Latihan baca & hafalan juz." },
    {
      title: "Bahasa Arab & Inggris",
      desc: "Percakapan & keterampilan bahasa.",
    },
    { title: "Calistung", desc: "Baca-tulis-hitung untuk anak." },
    { title: "IT & Literasi Digital", desc: "Dasar IT untuk generasi muda." },
    { title: "Program Keluarga", desc: "Kelas keluarga & parenting islami." },
  ]

  return (
    <section
      id="program"
      className="py-10 bg-gradient-to-b from-teal-100 to-white"
    >
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-teal-800">Program Kami</h2>
        <p className="mt-2 text-gray-600">
          Private offline — Guru datang ke rumah atau murid datang ke kantor.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-semibold text-teal-700">{it.title}</h3>
              <p className="text-gray-600 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
