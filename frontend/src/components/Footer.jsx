import site from "../config/site.js";
import { Github, InstagramIcon, Linkedin, LinkedinIcon, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="grid footer-grid">
        <div className="footer-brand">
          <span className="brand">G SREEDEV<sup>®</sup></span>
          <p>
            Software Engineer — Backend, AI/ML &amp; Full-Stack
            <br />
            Building practical, scalable systems.
          </p>
          <p className="footer-legal">
            © {new Date().getFullYear()} G Sreedev
          </p>
        </div>

        <div className="footer-col">
          <span className="label">Navigate</span>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <span className="label">Contact</span>
          <a href={`mailto:${site.email}`}>
            <Mail size={15} aria-hidden="true" />
            <span>Email</span>
          </a>
          <a href={site.github} target="_blank" rel="noreferrer noopener">
            <Github size={15} aria-hidden="true" />
            GitHub 
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
            <Linkedin size={15} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer noopener">
            <InstagramIcon size={15} aria-hidden="true" />
            Instagram
          </a>
        </div>

        {/* <div className="footer-colophon">
          <span className="label">Colophon</span>
          <p>
            Set in Inter Tight on a strict grid. React · FastAPI · PostgreSQL ·
            Docker. Structure precedes decoration.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
