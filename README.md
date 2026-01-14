# Personal Portfolio & Professional Hub

> **"Strategy and systems for work that matters."**

This is the source code for my personal portfolio website. It serves as a digital headquarters for my work in executive leadership, data strategy, and social impact. The site bridges the gap between "Executive Resume" and "Technical Portfolio," showcasing both high-level strategy and hands-on technical execution.

Currently, I serve as **Chief Strategy and Analytics Officer** at **DC CAP Scholars**, where I lead program strategy, student success, strategic partnerships, and data & technology portfolios. This site reflects that work—and the systems thinking, evidence-based approach, and operational rigor I bring to mission-driven organizations.

## 🚀 The Tech Stack

This project was built using a modern, performance-first architecture:

* **Framework:** [Astro](https://astro.build) (v5.0) - Zero-JS default performance and static site generation
* **Styling:** [Tailwind CSS](https://tailwindcss.com) (v4.1.18) - Utility-first, responsive design with CSS-based theme configuration
* **Language:** TypeScript - Strict mode for type safety
* **Deployment:** [Vercel](https://vercel.com) - Continuous integration and edge deployment
* **Development:** Built using **Cursor** (AI-assisted development workflow)

## 🎨 Design Philosophy

The site follows an **editorial, professional aesthetic** (think Wall Street Journal or The Economist) with subtle color accents:

* **Primary Color:** #1F3D2B (Hunter Green)
* **Secondary Color:** #7A1E2C (Burgundy)
* **Background:** #F5F5F4 (Light Neutral)
* **Typography:** Lora (headings), Inter (body)

The design emphasizes readability, clear hierarchy, and progressive disclosure—letting content drive the experience rather than flashy animations or heavy JavaScript.

## 📂 Project Structure

The project follows a standard Astro architecture with a focus on component reusability and content-driven design:

```text
/
├── public/             # Static assets (images, PDFs, reports)
├── src/
│   ├── components/     # Reusable UI blocks
│   │   ├── Hero.astro          # Landing page hero section
│   │   ├── ProjectGrid.astro   # Data-driven portfolio card system
│   │   ├── SkillsToolkit.astro # Visual tech stack display
│   │   ├── Navigation.astro   # Site-wide navigation (desktop & mobile)
│   │   └── Footer.astro        # Site footer with social links
│   ├── layouts/        # Shared page shells
│   │   ├── Layout.astro        # Base layout (Head, Navigation, Footer)
│   │   └── BlogPost.astro      # Blog post layout with custom spacing
│   ├── pages/          # Route definitions
│   │   ├── index.astro         # Home / Landing
│   │   ├── about.astro         # Narrative, operating principles, family
│   │   ├── experience.astro    # Professional timeline & education
│   │   ├── projects.astro      # Full portfolio & media mentions
│   │   ├── consulting.astro    # Services, engagement models, CTA
│   │   ├── writing/            # Blog listing & posts
│   │   │   ├── writing.astro   # Perspectives listing page
│   │   │   └── five-lessons-leading-change.astro
│   │   └── fitness.astro       # Fitness coaching & credentials
│   └── styles/
│       └── global.css           # Global styles, Tailwind imports, @theme config
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind theme (legacy, now using @theme in CSS)
└── tsconfig.json       # TypeScript configuration
```

## 📄 Site Pages

### Home (`/`)
Hero section with tagline, headline, and subhead. Features selected work preview and technical toolkit. CTAs: "View Selected Work" and "Work With Me."

### About (`/about`)
Professional narrative, operating principles ("Evidence eats Intuition," "Leaders Remove Barriers," "Talent compounds," "Consistency Wins"), and personal section. Sidebar includes current role, core focus, technical stack, and credentials.

### Experience (`/experience`)
Professional timeline with detailed role descriptions. Education section. Skills toolkit component at bottom.

### Portfolio (`/projects`)
Full project grid with detailed descriptions, tags, resources, and links. Media mentions section.

### Consulting (`/consulting`)
Three service areas:
1. **Data & Analytics Strategy** - Turn data into decisions
2. **Grant Writing & Proposal Development** - Translate impact into funded proposals
3. **Organizational Change & Strategic Transitions** - Navigate complexity with clarity

Engagement models table (Advisory Retainer, Project-Based, Intensive Sprint). CTA links to Calendly.

### Perspectives (`/writing`)
Blog listing page with intro: "Thoughts on strategy, data, and building systems for change wherever you are." Currently features "Five Lessons From Leading Change at a College Success Organization."

### Fitness (`/fitness`)
Fitness coaching page with systems thinking approach. Includes 12-Test Fitness Gauntlet link, coaching philosophy, contact section, and credentials (CF-L3, CCFT, etc.).

## 🎯 Key Features

* **Zero-JS by Default:** Astro ships zero JavaScript to the client unless explicitly needed
* **Component-Based:** Reusable Astro components for consistent UI
* **Data-Driven:** Project grid and skills toolkit use JavaScript arrays for easy content management
* **Responsive Design:** Mobile-first approach with Tailwind breakpoints
* **Editorial Typography:** Custom font stack (Lora + Inter) for professional readability
* **Accessibility:** Semantic HTML, proper heading hierarchy, focus states
* **Performance:** Static generation, optimized images, minimal dependencies

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

Content is managed directly in component files and page templates:

* **Projects:** Edit `src/components/ProjectGrid.astro` to update project cards
* **Skills:** Edit `src/components/SkillsToolkit.astro` to update technical stack
* **Navigation:** Edit `src/components/Navigation.astro` to update menu items
* **Blog Posts:** Create new `.astro` files in `src/pages/writing/` using `BlogPost.astro` layout

## 🚢 Deployment

The site is deployed on Vercel with automatic deployments from the main branch. Build command: `npm run build`. Output directory: `dist/`.

## 📧 Contact & Engagement

* **Consulting:** Schedule time via [Calendly](https://calendly.com/preston-magouirk)
* **Email:** Available in footer
* **LinkedIn:** Available in footer

---

**Built with intention.** This site reflects my approach to work: evidence-based, systems-oriented, and focused on outcomes that matter.
