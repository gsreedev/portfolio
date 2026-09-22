import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section
      className="section section-inverse"
      id="experience"
      data-index="004"
    >
      <div className="grid">
        <SectionHead
          index="004"
          label="Professional Experience"
          title='Work that runs<br>in production<span class="accent">.</span>'
          note="Experience building enterprise systems, AI powered features, and production ready applications with a focus on reliable deployment and maintainable engineering."
          invert
        />

        <div className="experience-list">
          {experience.map((role) => (
            <Reveal as="article" className="experience-card" key={role.id}>
              <div className="experience-head">
                <div>
                  <span className="experience-period">
                    {role.period}
                    {role.current ? (
                      <span className="experience-now">Current</span>
                    ) : null}
                  </span>
                  <h3 className="experience-role">{role.role}</h3>
                  <p className="experience-company">{role.company}</p>
                </div>
                <ul className="experience-stack" aria-label="Technologies">
                  {role.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <ul className="experience-highlights">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
