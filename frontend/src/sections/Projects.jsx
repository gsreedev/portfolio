import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data/content.js";
import { Github} from "lucide-react";

function ArchitectureFlow({ steps }) {
  return (
    <div className="architecture" role="img" aria-label={`System architecture: ${steps.join(" then ")}`}>
      <span className="label">Architecture</span>
      <ol className="architecture-flow">
        {steps.map((step, i) => (
          <li key={step} className="architecture-step">
            <span>{step}</span>
            {i < steps.length - 1 ? (
              <span className="architecture-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProjectBlock({ project }) {
  return (
    <Reveal as="article" className="project" id={`project-${project.id}`}>
      <header className="project-header">
        <div className="project-heading">
          <span className="project-index">{project.index}</span>
          <span className="project-badge">{project.badge}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
      </header>

      <dl className="project-specs">
        <div className="project-spec">
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div className="project-spec">
          <dt>Solution</dt>
          <dd>{project.solution}</dd>
        </div>
        <div className="project-spec">
          <dt>What I built</dt>
          <dd>{project.built}</dd>
        </div>
        <div className="project-spec">
          <dt>Stack</dt>
          <dd>
            <ul className="project-stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="project-spec">
          <dt>Results / Impact</dt>
          <dd>
            <ul className="project-results">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      {project.architecture ? (
        <ArchitectureFlow steps={project.architecture} />
      ) : null}

      {project.links.length > 0 ? (
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn btn-ghost btn-sm"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer noopener" : undefined}
            >
              <Github className="icon" />
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="project-links-note label">
          Repository link available on request
        </p>
      )}
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="section section-bordered" id="projects" data-index="005">
      <div className="grid">
        <SectionHead
          index="005"
          label="Projects"
          title='Problems, solutions,<br>and what I built<span class="accent">.</span>'
          note="Each project highlights the problem I worked on, the system I built, my role in developing it, and the results it achieved, covering everything from hardware and backend systems to the final interface."
        />

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
