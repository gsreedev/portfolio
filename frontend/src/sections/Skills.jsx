import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { skillGroups } from "../data/content.js";

export default function Skills() {
  return (
    <section className="section" id="skills" data-index="003">
      <div className="grid">
        <SectionHead
          index="003"
          label="Technical Skills"
          title='Capability, organized<br>by responsibility<span class="accent">.</span>'
          note="A breakdown of the technologies I work with, organized by their role across the stack, from languages and services to data, AI, interfaces, and deployment."
        />

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal
              as="article"
              className="skill-group"
              key={group.id}
              delay={i * 60}
            >
              <header>
                <span className="cell-index">{group.index}</span>
                <h3>{group.title}</h3>
              </header>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skill-name">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
