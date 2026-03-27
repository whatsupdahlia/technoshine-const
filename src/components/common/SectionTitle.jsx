function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

export default SectionTitle;