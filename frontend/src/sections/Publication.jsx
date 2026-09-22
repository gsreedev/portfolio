import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { publication } from "../data/content.js";
import { FileText } from 'lucide-react';

export default function Publication() {
  return (
    <section className="section" id="publication" data-index="006">
      <div className="grid">
        <SectionHead
          index="006"
          label="Publication / Research"
          title='Published work,<br>peer-reviewed<span class="accent">.</span>'
        />

        <Reveal as="article" className="publication-card">
          <div className="publication-meta">
            <span className="label">Paper</span>
            <span className="label">{publication.venue}</span>
          </div>

          <h3 className="publication-title">{publication.title}</h3>

          <div className="publication-body">
            <span className="label publication-contrib-label">
              Technical contribution
            </span>
            <ul className="publication-contribs">
              {publication.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="publication-actions">
            {publication.link ? (
              <a
                href={publication.link}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FileText className="icon" />
                Read Paper
              </a>
            ) : (
              <span className="label publication-link-pending">
                DOI / publisher link pending — will be added when available
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
