export default function NovabizPage() {
  return <main className="section space-y-8"><h1 className="title">NOVABIZ Event Platform</h1><div className="glass rounded-2xl p-6">Countdown: 120 days · Highlights: startup booths, judges, live demos, pitch arena.</div><div className="grid md:grid-cols-4 gap-4">{[['Teams','48'],['Products','62'],['Visitors','1800+'],['Awards','12']].map(([k,v])=><div key={k} className="glass rounded-xl p-4"><p>{k}</p><p className="text-3xl font-semibold text-leaf">{v}</p></div>)}</div></main>;
}
