const columns = [
  { name: "Quoted", jobs: [{ id: "Q-1042", part: "Hydraulic manifold", qty: "120 pcs", pct: 35 }, { id: "Q-1045", part: "Flange adaptor", qty: "400 pcs", pct: 20 }] },
  { name: "In production", jobs: [{ id: "WO-2417", part: "Pump housing", qty: "60 pcs", pct: 70 }, { id: "WO-2419", part: "Gear blank", qty: "900 pcs", pct: 45 }] },
  { name: "Dispatched", jobs: [{ id: "WO-2408", part: "Bracket, zinc plated", qty: "2,000 pcs", pct: 100 }] },
];

/** Decorative product UI mockup built from markup, so it stays sharp and weighs nothing. */
export default function Mockup() {
  return (
    <div role="img" aria-label="KanchanFlow pipeline board showing jobs in Quoted, In production and Dispatched stages" className="border-2 border-graphite bg-paper shadow-[10px_10px_0_0_#e0a419]">
      <div className="flex items-center justify-between border-b-2 border-graphite bg-graphite px-4 py-2 text-sm text-paper">
        <span className="font-display text-lg font-semibold">Pipeline</span>
        <span className="text-steel-dark">6 open jobs</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3" aria-hidden>
        {columns.map((col, i) => (
          <div key={col.name} className={i === 2 ? "hidden sm:block" : ""}>
            <p className="mb-2 text-sm font-semibold text-muted">{col.name}</p>
            <div className="space-y-2">
              {col.jobs.map((j) => (
                <div key={j.id} className="border border-steel-dark bg-white p-3">
                  <p className="text-xs font-semibold text-gold-deep">{j.id}</p>
                  <p className="text-sm font-semibold leading-tight">{j.part}</p>
                  <p className="text-xs text-muted">{j.qty}</p>
                  <div className="mt-2 h-1.5 bg-steel">
                    <div className="bar-fill h-full bg-gold" style={{ ["--w" as string]: `${j.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
