export function Title({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      {kicker ? (
        <p className="text-sm font-medium tracking-wide uppercase text-black/60">{kicker}</p>
      ) : null}
      <h2 className="mt-2 text-3xl sm:text-6xl font-extrabold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-3 text-black/70 max-w-2xl mx-auto">{subtitle}</p> : null}
    </div>
  );
}
