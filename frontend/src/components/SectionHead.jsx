export default function SectionHead({ index, label, title, note, invert }) {
  return (
    <header className={`section-head${note ? " section-head-split" : ""}`}>
      <div>
        <span className="label">
          {index} — {label}
        </span>
        <h2
          className={`section-title${invert ? " section-title-invert" : ""}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      {note ? (
        <p className={`section-note${invert ? " section-note-invert" : ""}`}>
          {note}
        </p>
      ) : null}
    </header>
  );
}
