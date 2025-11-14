import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Daftar from "../components/Daftar";
import Kontak from "../components/Kontak";

export const metadata = {
  title: "MDIQ – Belajar Qur'an & IT untuk Semua Usia",
  description:
    "Program pembelajaran Qur'an, IT, dan Diniyah untuk anak, remaja, hingga dewasa di MDIQ.",
};

export default function Page() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <section id="daftar">
        <Daftar />
      </section>

      <section id="kontak">
        <Kontak />
      </section>
    </main>
  );
}
