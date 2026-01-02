# Personal Portfolio & Professional Hub

> **"Building the systems that scale opportunity."**

This is the source code for my personal portfolio website. It serves as a digital headquarters for my work in executive leadership, data strategy, and social impact. The site is designed to bridge the gap between "Executive Resume" and "Technical Portfolio," showcasing both high-level strategy and hands-on technical execution.

## 🚀 The Tech Stack

This project was built using a modern, performance-first architecture:

* **Framework:** [Astro](https://astro.build) (v5.0) - For zero-JS default performance and static site generation.
* **Styling:** [Tailwind CSS](https://tailwindcss.com) - For utility-first, responsive design.
* **UI Components:** React - For interactive elements where needed.
* **Deployment:** [Vercel](https://vercel.com) - For continuous integration and edge deployment.
* **Development:** Built using **Cursor** (AI-assisted "Vibe Coding" workflow).

## 📂 Project Structure

The project follows a standard Astro architecture with a focus on component reusability:

```text
/
├── public/             # Static assets (images, PDFs, reports)
├── src/
│   ├── components/     # Reusable UI blocks
│   │   ├── Hero.astro          # Landing page hook
│   │   ├── ProjectGrid.astro   # The data-driven portfolio card system
│   │   ├── SkillsToolkit.astro # Visual tech stack display
│   │   └── Navigation.astro    # Site-wide nav
│   ├── layouts/        # Shared page shells (Head, Footer, SEO)
│   └── pages/          # Route definitions
│       ├── index.astro         # Home / Landing
│       ├── about.astro         # Narrative & Values
│       ├── experience.astro    # Professional Timeline
│       ├── projects.astro      # Full Portfolio & Media
│       ├── consulting.astro    # Services & Advisory
│       └── fitness.astro       # Discipline & Credentials
└── astro.config.mjs    # Configuration
