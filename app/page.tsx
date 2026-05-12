import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="section">
        <div className="glass rounded-3xl p-8 md:p-14">
          <p className="text-sun font-medium">Faculty of Agriculture · University of Ruhuna</p>
          <h1 className="title mt-3">ABDA – Agribusiness Development Association</h1>
          <p className="mt-4 text-lg text-slate-700">Empowering Agricultural Innovation & Student Entrepreneurship</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/novabiz" className="rounded-xl bg-leaf px-5 py-3 text-white">Explore NOVABIZ</Link>
            <Link href="/products" className="rounded-xl border border-leaf px-5 py-3 text-leaf">View Student Products</Link>
          </div>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-leaf to-moss p-4 text-white">NOVABIZ 2026: Annual business launch & product development exhibition by 3rd-year undergraduates.</div>
        </div>
      </section>
      <section className="section grid md:grid-cols-2 gap-6">
        {['Vision: National model for youth-led agribusiness innovation.', 'Mission: Build entrepreneurial graduates through practical product ventures.', 'Objectives: Mentorship, commercialization, sustainability leadership, industry links.', 'ABDA bridges student startups with faculty expertise and partner ecosystems.'].map((t) => (
          <article key={t} className="glass rounded-2xl p-6">{t}</article>
        ))}
      </section>
    </main>
  );
}
