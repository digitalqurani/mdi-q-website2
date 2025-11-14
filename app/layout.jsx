import "../styles/globals.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export const metadata = {
  title: "Madrasah Diniyah IT & Qur'an (MDIQ)",
  description:
    "Belajar Qur'an, IT & Ilmu Diniyah untuk Semua Usia — Anak, Remaja, hingga Orang Tua.",
  openGraph: {
    title: "MDIQ - Madrasah Diniyah IT & Qur'an",
    description: "Belajar Qur'an, IT & Ilmu Diniyah untuk Semua Usia",
    url: "https://bimbeldi.mdiq.biz.id",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gradient-to-b from-teal-200 to-white text-gray-900">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
