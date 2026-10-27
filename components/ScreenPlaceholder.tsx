type Props = { title: string; rows: string[] };

/** Screenshot placeholder for the features page: swap for real product screenshots later. */
export default function ScreenPlaceholder({ title, rows }: Props) {
  return (
    <figure className="border-2 border-graphite bg-white" aria-label={`Illustration of the ${title} screen`}>
      <div className="border-b-2 border-graphite bg-graphite px-4 py-2 font-display text-lg font-semibold text-paper">{title}</div>
      <ul className="divide-y divide-steel p-2">
        {rows.map((r, i) => (
          <li key={r} className="flex items-center justify-between gap-3 px-2 py-3 text-sm">
            <span>{r}</span>
            <span className={`h-2 ${["w-16", "w-10", "w-20"][i % 3]} bg-gold`} aria-hidden />
          </li>
        ))}
      </ul>
    </figure>
  );
}
