import SectionHead from "../components/SectionHead.jsx";
import ContactForm from "../components/ContactForm.jsx";
import site from "../config/site.js";

export default function Contact() {
  return (
    <section className="section cta-section" id="contact" data-index="009">
      <div className="grid">
        <SectionHead
          index="009"
          label="Contact"
          title='Let&rsquo;s build<br>something useful<span class="accent">.</span>'
          note="Open to software engineering roles and collaborations in backend, AI/ML, and full-stack development."
        />

        <div className="contact-grid">
          <div className="contact-channels">
            <a
              className="contact-channel"
              href={`mailto:${site.email}`}
            >
              <span className="label">Email</span>
              <span className="contact-value">{site.email}</span>
            </a>
            <a className="contact-channel" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
              <span className="label">Phone</span>
              <span className="contact-value">{site.phone}</span>
            </a>
            <a
              className="contact-channel"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="label">LinkedIn</span>
              <span className="contact-value">Profile</span>
            </a>
            <a
              className="contact-channel"
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="label">GitHub</span>
              <span className="contact-value">Repositories ↗</span>
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
