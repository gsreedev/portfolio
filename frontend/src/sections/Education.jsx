import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { education } from "../data/content.js";

export default function Education() {
  return (
    <section className="section section-compact" id="education" data-index="007">
      <div className="grid">
        <SectionHead
          index="007"
          label="Education"
          title='Foundations<span class="accent">.</span>'
        />

        <div className="education-list">
          {education.map((entry) => (
            <Reveal
              as="article"
              key={entry.id}
              className={`education-item${entry.primary ? " is-primary" : ""}`}
            >
              <span className="education-period">{entry.period}</span>
              <div className="education-body">
                <h3>{entry.degree}</h3>
                <p className="education-focus">{entry.focus}</p>
                <p className="education-institution">{entry.institution}</p>
              </div>
              <span className="education-result">{entry.result}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
