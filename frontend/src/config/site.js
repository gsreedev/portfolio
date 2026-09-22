/**
 * Centralized site configuration.
 * Replace placeholder contact details with your real ones before deploying.
 */
const site = {
  name: "G Sreedev",
  role: "Software Engineer Intern | Full-Stack Developer",
  tagline: "I build complete systems — backend services, AI-powered features, and full-stack applications.",

  // TODO: replace with your real contact details
  email: "sreedevgireesh007@gmail.com",
  phone: "+91-7909143117",
  github: "https://github.com/gsreedev",
  linkedin: "https://www.linkedin.com/in/sreedev-gireesh/",
  instagram: "https://www.instagram.com/_.sree.dev/",
  photo: {
    src: `${import.meta.env.BASE_URL}assets/profile.jpg`,
    alt: "Portrait of G Sreedev",
  },

  resume: `${import.meta.env.BASE_URL}assets/resume.pdf`, // uses Vite base so it works on GitHub Pages / custom domains

  api: {
    // Empty string → same-origin (nginx proxy in production, Vite proxy in dev)
    baseUrl: import.meta.env.VITE_API_BASE_URL || "",
  },
};

export default site;
