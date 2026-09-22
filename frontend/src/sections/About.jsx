import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { about } from "../data/content.js";

export default function About() {
  return (
    <section className="section" id="about" data-index="002">
      <div className="grid">
        <SectionHead
          index="002"
          label="About"
          title='Software engineer who<br>ships complete systems<span class="accent">.</span>'
        />

        <div className="about-grid">
          <Reveal className="about-lead">
            <p>{about.summary}</p>
          </Reveal>

          <Reveal className="about-detail" delay={80}>
            <p>{about.detail}</p>
            <ul className="about-stack" aria-label="Core technologies">
              {about.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
