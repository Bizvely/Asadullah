import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Database,
  Download,
  GraduationCap,
  Github,
  Instagram,
  Languages,
  Mail,
  MapPin,
  Rocket,
  Search,
} from "lucide-react";
import Avatar from "../components/Avatar";

/* ============================================================
   এখানের তথ্যগুলো বদলালেই পুরো সাইট বদলে যাবে। কোড ছুঁতে হবে না।
   ============================================================ */

const PROFILE = {
  name: "Md Asadullah",
  initials: "MA",
  role: "Full-Stack Web Developer & SEO / Growth Specialist",
  location: "Barishal, Bangladesh",
  email: "mdasadullahbarishal20@gmail.com",
  photo: "/profile.jpg", // public/profile.jpg ফাইলটা আপলোড করুন
  cv: "/cv.pdf", // public/cv.pdf ফাইলটা আপলোড করুন
  intro:
    "I build and ship real web products with React, Next.js, TypeScript, Node.js/Express, Supabase and MongoDB, and I grow them with technical SEO. My main project is Bizvely, a bilingual toolbox of 40+ free business tools that I designed, built and launched myself, using AI-assisted development.",
};

const LINKS = {
  peerlist: "https://peerlist.io/bizvely",
  x: "https://x.com/asadullah2m",
  instagram: "https://www.instagram.com/bizvely/",
  github: "https://github.com/Bizvely",
};

const STATS = [
  { value: "40+", label: "free tools live on bizvely.com" },
  { value: "98 / 99", label: "PageSpeed performance, mobile / desktop (Nov 2026)" },
  { value: "100", label: "SEO score on PageSpeed Insights (Nov 2026)" },
];

const BIZVELY_POINTS = [
  "40+ free tools in English and বাংলা: invoices, courier bulk sheets, PDF tools, QR codes and barcodes, calculators and more.",
  "Every tool page has its own title, description, canonical URL, FAQ and structured data, and a pre-render step puts them in the raw HTML so search engines can read them.",
  "Supabase Auth with row-level security, and a credit system handled inside secured database functions instead of the browser.",
  "Newsletter, feedback and rating forms with spam protection (honeypot, rate limits) built on Supabase functions.",
  "Hosted on Cloudflare Pages. PageSpeed Insights, Nov 2026: Performance 98 mobile and 99 desktop, SEO 100, Best Practices 100.",
];

type Project = {
  name: string;
  summary: string;
  tech: string[];
  links: { href: string; label: string }[];
};

const OTHER_PROJECTS: Project[] = [
  {
    name: "Doctor Tracker",
    summary:
      "A secure admin portal to manage doctors and patients, with cookie-based JWT login, indexed search, filters, pagination and an analytics dashboard. A separate Next.js client talks to an Express and MongoDB REST API. Login is required, so I can share a demo account on request.",
    tech: ["Next.js", "TypeScript", "Express", "MongoDB", "Render", "Cloudflare Pages"],
    links: [
      { href: "https://doctortracker.bizvely.com", label: "doctortracker.bizvely.com" },
      { href: "https://github.com/Bizvely/doctor-tracker-frontend", label: "Frontend code" },
      { href: "https://github.com/Bizvely/doctor-tracker-backend", label: "Backend code" },
    ],
  },
  {
    name: "HomeCare Job BD",
    summary:
      "A healthcare job marketplace that connects caregivers, agencies and patients across Bangladesh, with role-based access, document upload and verification badges, and an emergency blood-donor matching feature.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    links: [{ href: "https://homecarejobbd.com", label: "homecarejobbd.com" }],
  },
  {
    name: "Nowshin Fashion House",
    summary:
      "An e-commerce and multi-vendor marketplace with a full product catalogue, category filters, cart, vendor dashboards and admin tools, delivered through Cloudflare and Cloudinary.",
    tech: ["React", "TypeScript", "Cloudflare", "Cloudinary"],
    links: [{ href: "https://nowshinfashionhouse.com", label: "nowshinfashionhouse.com" }],
  },
];

const EXPERIENCE = [
  {
    role: "Founder & Growth Operations Lead",
    org: "Bizvely",
    place: "Barishal, Bangladesh (Remote)",
    period: "Present",
    points: [
      "Independently designed, built, launched and scaled bizvely.com, a bilingual (Bangla / English) SaaS platform with 40+ free business tools and utilities, built on React, TypeScript, Supabase and Cloudflare.",
      "Optimised technical SEO and performance: PageSpeed Insights Performance 98 (mobile) and 99 (desktop), SEO 100 and Best Practices 100 (Nov 2026).",
    ],
  },
  {
    role: "Founder & Lead Developer",
    org: "Insaf Web Solution",
    place: "Dhaka, Bangladesh",
    period: "2024 – 2025",
    points: [
      "Led agency operations delivering end-to-end custom websites, e-commerce web applications and web-to-app conversions for small and medium businesses.",
      "Set up and managed cloud infrastructure: Cloudflare DNS and Email Routing, plus Vercel and Cloudflare deployments.",
    ],
  },
  {
    role: "Full-Stack Web Developer & Digital Marketer",
    org: "Sara Technical Institute & Expert Care Academy",
    place: "Medical sector, Dhaka",
    period: "nov 2025",
    points: [
      "Developed and optimised official web platforms for medical training and healthcare services: expertcareacademy.com and betterlifehomecareservice.com.",
      "Integrated AI-powered chatbots to automate student and patient enquiries, and applied technical SEO to grow organic reach.",
    ],
  },
  {
    role: "Full-Stack Developer (Client Projects & Marketplaces)",
    org: "Service Share BD & others",
    place: "Remote",
    period: "Completed Oct 2026",
    points: [
      "Engineered Service Share BD (servicesharebd.vercel.app), a multi-vendor SaaS and service marketplace with dynamic listings and secure user flows.",
      "Delivered production-ready e-commerce platforms, including Nowshin Fashion House and HomeCare Job BD.",
    ],
  },
];

const SKILLS = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS", "Responsive design"],
  },
  {
    title: "Backend & data",
    items: [
      "Supabase (Postgres, Auth, RLS, Edge Functions)",
      "Node.js",
      "Express",
      "MongoDB (Mongoose)",
      "REST APIs",
      "JWT cookie authentication",
      "Zod validation",
      "Python",
    ],
  },
  {
    title: "SEO & growth",
    items: [
      "Technical & on-page SEO",
      "AEO / GEO (answer engine optimisation)",
      "Google Search Console",
      "Core Web Vitals",
      "Conversion tracking",
    ],
  },
  {
    title: "Tools & delivery",
    items: [
      "GitHub",
      "Cloudflare (Pages, DNS, Email Routing)",
      "Vercel",
      "Render",
      "MongoDB Atlas",
      "Cloudinary",
      "AI-assisted development",
      "Prompt engineering",
    ],
  },
];

/* ============================================================ */

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  email: `mailto:${PROFILE.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Barishal", addressCountry: "BD" },
  sameAs: [LINKS.peerlist, LINKS.x, LINKS.instagram, LINKS.github, "https://bizvely.com"],
  worksFor: { "@type": "Organization", name: "Bizvely", url: "https://bizvely.com" },
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function BrandBadge({ letter }: { letter: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-5 items-center justify-center rounded bg-white/15 text-[11px] font-black leading-none text-white"
    >
      {letter}
    </span>
  );
}

const socialLinkClass =
  "inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-violet-400/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(55%_60%_at_15%_0%,rgba(124,58,237,0.30),transparent_70%),radial-gradient(45%_50%_at_90%_10%,rgba(34,211,238,0.16),transparent_70%)]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05060f]/85 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-lg font-black tracking-tight text-white">
            {PROFILE.name}
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex min-h-[40px] items-center rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 md:grid-cols-[1.35fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Open to remote and on-site roles
            </p>

            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-slate-200 sm:text-2xl">{PROFILE.role}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{PROFILE.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href="https://bizvely.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                View Bizvely
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.cv}
                download
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4" />
              {PROFILE.location}
            </p>
          </div>

          <div className="mx-auto w-full max-w-[320px]">
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-500/60 via-indigo-400/30 to-cyan-400/50 p-1.5 shadow-2xl shadow-violet-900/40">
              <div className="aspect-square overflow-hidden rounded-[1.7rem] bg-[#0B0D1E]">
                <Avatar src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} initials={PROFILE.initials} />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Highlights" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
          <dl className="grid gap-4 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5">
                <dd className="text-3xl font-black text-white">{s.value}</dd>
                <dt className="mt-1 text-sm leading-6 text-slate-300">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <Section id="about" eyebrow="About" title="How I work">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: <Rocket className="h-5 w-5" />,
                title: "I ship products",
                text: "I take an idea from a blank page to a live site: product thinking, design, development, launch and fixes after launch.",
              },
              {
                icon: <Search className="h-5 w-5" />,
                title: "I care about being found",
                text: "Pages need to load fast and be readable by search engines and AI answer engines. I treat SEO as part of the build, not an afterthought.",
              },
              {
                icon: <Code2 className="h-5 w-5" />,
                title: "I build with AI tools, honestly",
                text: "I use AI-assisted development to move quickly, and I check security, performance and accuracy before anything goes live.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/20 text-violet-200">
                  {c.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{c.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Projects" title="Things I have built">
          {/* Featured: Bizvely */}
          <article className="rounded-3xl border border-violet-400/30 bg-gradient-to-br from-violet-600/15 via-white/[0.03] to-cyan-500/10 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-violet-300">Featured project</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Bizvely</h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-slate-300">
                  A free toolbox for online sellers, freelancers and small businesses, in English and বাংলা. I designed,
                  built, launched and now grow it on my own.
                </p>
              </div>
              <a
                href="https://bizvely.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                bizvely.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {BIZVELY_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex flex-wrap gap-2">
              {["React", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare Pages", "Technical SEO"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {t}
                  </span>
                ),
              )}
            </p>
          </article>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {OTHER_PROJECTS.map((p) => (
              <article key={p.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-300">{p.summary}</p>
                <p className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </p>
                <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
                  {p.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-cyan-300 underline-offset-4 hover:underline"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Experience" title="Where I have worked">
          <ol className="space-y-6">
            {EXPERIENCE.map((job) => (
              <li key={job.role + job.org} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200">
                      <Briefcase className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-sm text-slate-300">
                        {job.org} · {job.place}
                      </p>
                    </div>
                  </div>
                  {job.period ? <p className="text-sm font-medium text-slate-300">{job.period}</p> : null}
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-300">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Skills" title="What I work with">
          <div className="grid gap-5 sm:grid-cols-2">
            {SKILLS.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Database className="h-4 w-4 text-cyan-300" />
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                <GraduationCap className="h-4 w-4 text-cyan-300" />
                Education
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                SSC (Science), Barishal Board, 2021, GPA 3.56 / 5.00
                <br />
                HSC, Open University (continuing)
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                <Languages className="h-4 w-4 text-cyan-300" />
                Languages
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                English, professional working proficiency
                <br />
                Bengali, native
              </p>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let's work together">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-white/[0.03] to-cyan-500/10 p-6 sm:p-10">
            <p className="max-w-2xl text-lg leading-8 text-slate-200">
              I am looking for a remote or on-site role where I can build and grow web products. If you have an opening, or want
              help with a website or SEO, send me a message and I will reply soon.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Profiles">
              <li>
                <a href={LINKS.peerlist} target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                  <BrandBadge letter="P" />
                  Peerlist
                </a>
              </li>
              <li>
                <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                  <BrandBadge letter="X" />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </li>
              <li>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js and Tailwind CSS.
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />
    </div>
  );
}
