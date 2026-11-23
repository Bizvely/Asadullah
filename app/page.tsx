import Image from "next/image";
import {
  ArrowDown, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Code2, ExternalLink,
  Github, Globe2, HeartPulse, Mail, MapPin, MessageCircle, ShieldCheck,
  Sparkles, Wrench, GraduationCap, Database, Layers3, Menu, Download
} from "lucide-react";

const profile = {
  name: "Md Asadullah",
  role: "Full-Stack Web Developer",
  specialty: "AI-Assisted SEO, AEO & GEO",
  email: "mdasadullahbarishal20@gmail.com",
  location: "Barishal, Bangladesh",
  portfolio: "asadullah.bizvely.com",
  intro: "I design, build and improve practical web products — from SaaS platforms and healthcare portals to business websites and e-commerce experiences. I work across frontend, backend, databases and deployment, with a strong focus on usability, performance and security fundamentals.",
};

const projects = [
  {
    name: "HomeCare Job BD",
    category: "Healthcare jobs & blood support",
    description: "A healthcare-sector job portal connecting caregivers and nurses with agencies. Includes agency job posts, applications, document-based verification badges, blood donation and blood request posts, reporting, reviews and messaging.",
    stack: ["React", "Supabase", "Vercel"],
    url: "https://homecarejobbd.com",
    tone: "mint",
    mark: "HC",
    features: ["Caregiver & nurse jobs", "Agency verification", "Blood donation & requests"],
  },
  {
    name: "Doctor Tracker",
    category: "Full-stack admin portal",
    description: "A secure doctor and patient management portal with JWT authentication in HTTP-only cookies, indexed search, filters, pagination and an analytics dashboard.",
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "Docker"],
    url: "https://doctortracker.bizvely.com",
    tone: "blue",
    mark: "DT",
    features: ["Secure authentication", "Search & pagination", "Admin dashboard"],
    repos: [
      ["Frontend code", "https://github.com/Bizvely/doctor-tracker-frontend"],
      ["Backend code", "https://github.com/Bizvely/doctor-tracker-backend"],
    ],
  },
  {
    name: "Expert Care Academy",
    category: "Medical & caregiver training",
    description: "Website for a medical training institution offering caregiver training, including NSDA Levels 2, 3 and 4. The institution also connects caregiver and nursing workers with work opportunities.",
    stack: ["Web Development", "Healthcare", "Training"],
    url: "https://expertcareacademy.com",
    tone: "violet",
    mark: "EC",
    features: ["Caregiver training", "NSDA Levels 2, 3 & 4", "Work opportunities"],
  },
  {
    name: "Better Life Home Care Service",
    category: "Medical service agency",
    description: "A website for a medical and home-care service agency, presenting its services and helping visitors explore healthcare support options.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://betterlifehomecareservice.com",
    tone: "teal",
    mark: "BL",
    features: ["Home-care services", "Healthcare information", "Responsive website"],
  },
  {
    name: "Nowshin Fashion House",
    category: "E-commerce platform",
    description: "An online fashion store with product browsing and business-focused shopping workflows.",
    stack: ["React", "TypeScript", "Cloudflare", "Cloudinary"],
    url: "https://nowshinfashionhouse.com",
    tone: "rose",
    mark: "NF",
    features: ["Product catalogue", "Online shopping", "Responsive storefront"],
  },
  {
    name: "Service Share BD",
    category: "Multi-vendor service marketplace",
    description: "A service marketplace with dynamic listings and user workflows, designed to connect customers with service providers.",
    stack: ["React", "Web App", "Marketplace"],
    url: "https://servicesharebd.vercel.app",
    tone: "amber",
    mark: "SS",
    features: ["Dynamic listings", "Service discovery", "User workflows"],
  },
];

const skillGroups = [
  { title: "Frontend", icon: Code2, items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI"] },
  { title: "Backend & APIs", icon: Layers3, items: ["Node.js", "Express.js", "REST APIs", "JWT authentication", "HTTP-only cookies", "Zod validation", "Rate limiting"] },
  { title: "Database & Security", icon: ShieldCheck, items: ["Supabase", "PostgreSQL", "RLS", "MongoDB", "Mongoose", "bcrypt", "API security fundamentals"] },
  { title: "Cloud & Workflow", icon: Database, items: ["Docker", "Cloudflare", "Vercel", "Render", "MongoDB Atlas", "Cloudinary", "GitHub", "Claude & Gemini"] },
];

const experience = [
  { role: "Founder & SaaS Product Developer", org: "Bizvely", period: "Present", detail: "Designed, built and continue to improve a bilingual Bangla/English SaaS platform with 40+ free business tools, using React, TypeScript, Supabase and Cloudflare." },
  { role: "Founder & Lead Developer", org: "Insaf Web Solution", period: "Independent agency", detail: "Founded and operate a web development agency delivering business websites, e-commerce platforms and web applications, including implementation and deployment." },
  { role: "Full-Stack Web Developer & Digital Marketer", org: "Sara Technical Institute & Expert Care Academy", period: "February 2025 – April 2026", detail: "Worked on medical training and healthcare service websites, AI-powered inquiry chatbots, website optimization and AI-assisted SEO activities." },
  { role: "Independent Freelance Full-Stack Developer", org: "Client projects", period: "April 2026 – Present", detail: "Build and improve client websites, web applications and marketplace projects from implementation through deployment." },
];

function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return <div className="section-heading"><p className="eyebrow">{kicker}</p><h2>{title}</h2>{text && <p className="section-copy">{text}</p>}</div>;
}

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`project-preview ${project.tone}`}>
      <div className="preview-browser"><span/><span/><span/><small>PROJECT PREVIEW</small></div>
      <div className="preview-content">
        <div className="preview-mark">{project.mark}</div>
        <p className="preview-category">{project.category}</p>
        <h4>{project.name}</h4>
        <div className="preview-lines"><i/><i/><i/></div>
        <div className="preview-chips"><b/><b/><b/></div>
      </div>
      <span className="preview-note">Visual project card</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav-wrap">
          <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>Md Asadullah</span></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a>
          </div>
          <a className="nav-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="availability"><span/> Open to remote & on-site opportunities</div>
            <p className="hero-kicker"><Sparkles size={15}/> Building useful digital products</p>
            <h1>Hi, I&apos;m <span>Md Asadullah.</span><br/>I build web products<br/><em>that work.</em></h1>
            <h2>{profile.role} <span>|</span> {profile.specialty}</h2>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowDown size={17}/></a>
              <a className="button secondary" href="/cv.pdf" download><Download size={17}/> Download CV</a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/>{profile.location}</span><a href={`mailto:${profile.email}`}><Mail size={15}/>{profile.email}</a></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><Image src="/profile.jpg" alt="Md Asadullah" width={420} height={420} priority className="portrait"/></div>
            <div className="floating-card card-code"><Code2 size={18}/><span>Full-stack</span><b>Frontend + Backend</b></div>
            <div className="floating-card card-launch"><Sparkles size={18}/><span>Product builder</span><b>Idea → Live product</b></div>
            <div className="hero-stamp">BUILD<br/>· SHIP ·<br/>IMPROVE</div>
          </div>
        </div>
        <div className="hero-bottom"><span>SELECTED WORK & CAPABILITIES</span><span>BARISHAL, BANGLADESH</span></div>
      </section>

      <section className="proof-strip">
        <div><strong>40+</strong><span>Bizvely free business tools</span></div>
        <div><strong>98</strong><span>PageSpeed mobile performance*</span></div>
        <div><strong>100</strong><span>PageSpeed desktop performance*</span></div>
        <div><strong>100</strong><span>SEO score in supplied reports*</span></div>
        <p>*PageSpeed Insights lab report shared on 23 Nov 2026. Real-user field data was unavailable in the report.</p>
      </section>

      <section className="section about-section" id="about">
        <SectionHeading kicker="A little about me" title="From idea to a working product." text="I enjoy solving practical problems with clean interfaces, reliable backend logic and thoughtful product details."/>
        <div className="about-grid">
          <article className="about-feature"><div className="feature-icon"><BriefcaseBusiness/></div><h3>I build end-to-end</h3><p>From responsive frontend interfaces to APIs, database integration, authentication and deployment.</p></article>
          <article className="about-feature"><div className="feature-icon"><HeartPulse/></div><h3>I work on real use cases</h3><p>Business tools, healthcare services, caregiver recruitment, training platforms and marketplaces.</p></article>
          <article className="about-feature"><div className="feature-icon"><ShieldCheck/></div><h3>I value the fundamentals</h3><p>Input validation, access control, secure cookies, database rules, performance and usability.</p></article>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionHeading kicker="Selected projects" title="A few things I’ve built." text="A mix of SaaS products, healthcare platforms, business websites and web applications."/>
        <article className="featured-project">
          <div className="featured-image"><Image src="/projects/bizvely-home.png" alt="Bizvely homepage preview" fill sizes="(max-width: 800px) 100vw, 55vw"/></div>
          <div className="featured-info">
            <div className="featured-label"><span/> FEATURED · MY SAAS PRODUCT</div>
            <h3>Bizvely</h3><p className="project-category">Bilingual business tools platform</p>
            <p>Designed, developed and launched a Bangla/English SaaS platform with 40+ free tools for small businesses, online sellers and freelancers.</p>
            <ul><li>Invoice, profit and COD calculators, courier sheets, PDF and image tools</li><li>Supabase authentication, PostgreSQL and Row Level Security</li><li>Deployed with Cloudflare; ongoing product and SEO improvements</li></ul>
            <div className="tags">{["React","TypeScript","Supabase","Cloudflare","AI-assisted SEO"].map(x=><span key={x}>{x}</span>)}</div>
            <a className="text-link" href="https://bizvely.com" target="_blank" rel="noreferrer">Explore Bizvely <ArrowUpRight size={17}/></a>
          </div>
        </article>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectPreview project={project}/>
              <div className="project-body">
                <p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
                <div className="feature-list">{project.features.map(f=><span key={f}><BadgeCheck size={14}/>{f}</span>)}</div>
                <div className="tags">{project.stack.map(t=><span key={t}>{t}</span>)}</div>
                <div className="project-links"><a className="text-link" href={project.url} target="_blank" rel="noreferrer">View live site <ArrowUpRight size={15}/></a>
                {project.repos?.map(([label,url])=><a className="repo-link" key={url} href={url} target="_blank" rel="noreferrer"><Github size={14}/>{label}</a>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <SectionHeading kicker="Experience" title="Where I’ve put the work in."/>
        <div className="timeline">{experience.map((item,i)=><article className="timeline-item" key={item.org}><div className="timeline-dot">{i+1}</div><div className="timeline-content"><div className="timeline-top"><div><h3>{item.role}</h3><p>{item.org}</p></div><span>{item.period}</span></div><p className="timeline-detail">{item.detail}</p></div></article>)}</div>
      </section>

      <section className="section skills-section" id="skills">
        <SectionHeading kicker="Tools of the trade" title="Technologies I work with." text="A practical toolkit across frontend, backend, data, security and deployment."/>
        <div className="skills-grid">{skillGroups.map(group=><article className="skill-card" key={group.title}><div className="skill-title"><group.icon size={20}/><h3>{group.title}</h3></div><div className="tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="education-band">
        <div><GraduationCap size={24}/><span><b>Education</b><small>HSC · Bangladesh Open University · 2026</small></span></div>
        <div><Globe2 size={24}/><span><b>Languages</b><small>Bengali · Native &nbsp;|&nbsp; English · Professional working proficiency</small></span></div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-glow"/>
        <div className="contact-inner"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let&apos;s build something<br/><span>useful together.</span></h2><p>For full-stack development opportunities, collaborations or project enquiries, feel free to get in touch.</p><div className="contact-actions"><a className="button primary" href={`mailto:${profile.email}`}><Mail size={17}/> Email me</a><a className="button secondary" href="https://github.com/Bizvely" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div><div className="footer-meta"><span>© {new Date().getFullYear()} Md Asadullah</span><a href="https://asadullah.bizvely.com">asadullah.bizvely.com <ExternalLink size={13}/></a></div></div>
      </footer>
    </main>
  );
}
