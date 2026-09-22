import { useState } from "react";
import site from "../config/site.js";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="section hero" id="hero" data-index="001">
      <div className="grid">
        <div className="hero-meta">
          <span className="label">001 — Portfolio</span>
          <span className="label label-right">
            Software Engineer Intern · Full-Stack Developer
          </span>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="line">G Sreedev</span>
              <span className="line hero-title-accent">
                builds systems<span className="accent">.</span>
              </span>
            </h1>

            <p className="hero-role">{site.role}</p>

            <p className="hero-lede">
              I build backend systems, AI/ML solutions, and full stack applications using{" "}
              <strong>Python, FastAPI, and React</strong> with <strong>Docker</strong> for containerized development and deployment. I enjoy turning ideas into reliable services, useful AI features, and complete applications from backend logic to the user interface.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
              <a href={site.resume} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>

            <ul className="hero-links" aria-label="Profiles">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                   <Github size={20} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Linkedin size={20} aria-hidden="true"/>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>
                  <Mail size={20} aria-hidden="true" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          <figure className="hero-photo">
            <div className="photo-frame">
              {!photoFailed ? (
                <img
                  src={site.photo.src}
                  alt={site.photo.alt}
                  width={480}
                  height={600}
                  loading="eager"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="photo-placeholder" aria-hidden="true">
                  <span className="photo-initials">GS</span>
                  <span className="photo-hint">
                    Add portrait at
                    <br />
                    <code>/assets/profile.jpg</code>
                  </span>
                </div>
              )}
              <span className="photo-marker" aria-hidden="true" />
            </div>
            <figcaption>
              <span className="label">Fig. 01</span>
              <span>G Sreedev — Software Engineer Intern</span>
            </figcaption>
          </figure>
        </div>

        {/* <div className="hero-rule" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div> */}
      </div>
    </section>
  );
}
