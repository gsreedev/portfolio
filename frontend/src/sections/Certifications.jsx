import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { certifications } from "../data/content.js";

export default function Certifications() {
  return (
    <section
      className="section section-compact section-bordered"
      id="certifications"
      data-index="008"
    >
      <div className="grid">
        <SectionHead
          index="008"
          label="Certifications"
          title='Verified learning<span class="accent">.</span>'
        />

        <ul className="certs-grid">
          {certifications.map((cert, i) => (
            <Reveal as="li" className="cert-card" key={cert.id} delay={i * 60}>
              <span className="cert-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="cert-title-link"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h3>
                <p>{cert.issuer}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
