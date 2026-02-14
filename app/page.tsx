"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedCount, useInView } from "@/lib/utils";
import { ArrowDownRight, CheckCircle, ChevronRight, Cloud, Code2, Database, Facebook, Github, Linkedin, Mail, Palette, Sparkles } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

const socialLinks = [
  { icon: Github, url: "https://github.com/CyberWhisker" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/erick-john-lopez-646299238/" },
  { icon: Facebook, url: "https://www.facebook.com/tericult" },
  { icon: Mail, url: "https://mail.google.com/mail/u/0/#inbox" },
]

const iconMap: any = {
  Frontend: Code2,
  Backend: Database,
  DevOps: Cloud,
  Design: Palette,
};

const statData = [
  {
    label: "Experience",
    value: "3",
    suffix: "+",
  },
  {
    label: "Projects Completed",
    value: "4",
    suffix: "",
  },
  {
    label: "Contracts Signed",
    value: "8",
    suffix: "",
  },
]

const experienceData = [
  {
    title: "SYSTEM ANALYST (PROGRAMMER)",
    company: "Marinduque State University",
    status: "Past",
    start_date: "Jul 2025",
    end_date: "Dec 2025",
  },
  {
    title: "SYSTEM ANALYST (PROGRAMMER)",
    company: "Marinduque State University",
    status: "Past",
    start_date: "Jan 2025",
    end_date: "Jun 2025",
  },
  {
    title: "SYSTEM ANALYST (PROGRAMMER)",
    company: "Marinduque State University",
    status: "Past",
    start_date: "Aug 2024",
    end_date: "Dec 2024",
  },
  {
    title: "SYSTEM ANALYST (PROGRAMMER)",
    company: "Marinduque State University",
    status: "Past",
    start_date: "Apr 2024",
    end_date: "Jul 2024",
  },
  {
    title: "SYSTEM ANALYST (PROGRAMMER)",
    company: "Marinduque State University",
    status: "Past",
    start_date: "Jan 2024",
    end_date: "Mar 2024",
  },
  {
    title: "SYSTEM ANALYST (PROGRAMMER)",
    company: "Marinduque State University",
    status: "Past",
    start_date: "Jul 2023",
    end_date: "Dec 2023",
  },
  {
    title: "SYSTEM ANALYST (PROGRAMMER)",
    company: "Marinduque State University",
    status: "Past",
    start_date: "Jan 2023",
    end_date: "Jun 2023",
  },
  {
    title: "SYSTEM ANALYST (PROGRAMMER)",
    company: "Marinduque State University",
    status: "Past",
    start_date: "Aug 2022",
    end_date: "Dec 2022",
  },
];

// Skills data
const skillDatas = [
  {
    label: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Material UI",
      "ShadCN UI",
      "React JS",
      "Next.js",
      "React Native",
      "AJAX",
      "jQuery",
      "Vite",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "Laravel",
      "Laravel Queue",
      "PHP",
      "REST API",
      "Socket.IO",
      "Reverb",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Stripe",
      "Graph AI",
    ],
  },
  {
    label: "DevOps",
    items: [
      "Docker",
      "Render",
      "Netlify",
      "Vercel",
      "Cloudflare Tunnel (cloudflared)",
      "Github Actions",
      "Linux CLI",
      "XAMPP",
      "Serverless Hosting",
      "CI/CD",
      "API Development",
      "Deployment",
    ],
  },
  {
    label: "Design",
    items: [
      "Figma",
      "UI/UX",
      "Responsive Design",
      "Design Systems",
    ],
  },
  {
    label: "Other / Tools",
    items: [
      "Data Exports & Imports",
      "Report Generation",
      "Automation",
      "Mobile Development",
      "Desktop Applications",
      "Desk Dev",
    ],
  },
];


const PROJECTS = [
  {
    title: "Admin Dashboard",
    description: "A centralized dashboard for managing users, roles, and system analytics with role-based access control.",
    tags: ["React", "Next.js", "TypeScript", "ShadCN UI", "Tailwind CSS", "Node.js", "Express", "MySQL", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    title: "Inventory & POS System",
    description: "A real-time inventory and point-of-sale system with barcode scanning, stock tracking, and reporting.",
    tags: ["Laravel", "Bootstrap", "MySQL", "Reverb", "Laravel Queue", "REST API", "CI/CD", "Docker", "Node.js"],
    link: "#",
  },
  {
    title: "Realtime Chat & AI Agent",
    description: "A WebSocket-based live chat platform with AI-assisted responses and internal messaging analytics.",
    tags: ["React", "Next.js", "WebSocket", "Node.js", "Express", "TypeScript", "MongoDB", "AI/Graph AI", "ShadCN UI"],
    link: "#",
  },
  {
    title: "Task Automation & Workflow Tool",
    description: "Drag-and-drop automation platform connecting APIs and services with visual pipeline building.",
    tags: ["Vue 3", "Python", "FastAPI", "Redis", "Docker", "CI/CD", "API Development"],
    link: "#",
  },
  {
    title: "Marsu PCR & Marsu Clinic HSIS",
    description: "Healthcare systems including patient record management, DTR, online transactions, and report generation.",
    tags: ["Laravel", "Bootstrap", "MySQL", "PostgreSQL", "TypeScript", "React", "Next.js", "Node.js", "Serverless Hosting", "Stripe"],
    link: "#",
  },
  {
    title: "E-Commerce & Blog Website",
    description: "A full-stack e-commerce platform with blog integration, payment processing, and admin CMS for content management.",
    tags: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "Node.js", "Express", "Tailwind CSS", "ShadCN UI", "Netlify", "CI/CD"],
    link: "#",
  },
  {
    title: "Data Exports, Imports & Report Generation",
    description: "Automated system to generate reports, export/import data, and manage large datasets efficiently.",
    tags: ["Laravel", "MySQL", "PostgreSQL", "Node.js", "Express", "TypeScript", "Docker", "CI/CD", "API Development"],
    link: "#",
  },
  {
    title: "Website Deployment & Serverless Hosting",
    description: "Deploying dynamic websites and dashboards on serverless infrastructure with CI/CD pipelines.",
    tags: ["Vercel", "Netlify", "Docker", "CI/CD", "Node.js", "Express", "React", "Next.js", "TypeScript"],
    link: "#",
  },
  {
    title: "Mobile Development & Desk Applications",
    description: "Cross-platform mobile apps and desktop applications for productivity, task management, and internal tools.",
    tags: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "API Development"],
    link: "#",
  },
];


// ─── Hero ────────────────────────────────────────────────────────────────
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl opacity-20 dark:opacity-30 bg-[radial-gradient(circle,#34d399,transparent_70%)] dark:bg-[radial-gradient(circle,#22c55e,transparent_70%)]" />
        <div className="absolute bottom-[15%] right-[10%] w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl opacity-15 dark:opacity-25 bg-[radial-gradient(circle,#6366f1,transparent_70%)] dark:bg-[radial-gradient(circle,#818cf8,transparent_70%)]" />
        <div className="absolute top-[60%] left-[55%] w-52 sm:w-64 h-52 sm:h-64 rounded-full blur-3xl opacity-10 dark:opacity-20 bg-[radial-gradient(circle,#f59e0b,transparent_70%)] dark:bg-[radial-gradient(circle,#fbbf24,transparent_70%)]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] dark:bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} mt-5`}>
          <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/5 px-4 py-1.5 text-sm">
            <Sparkles className="w-3.5 h-3.5 mr-2 animate-pulse" />
            Available for freelance work
          </Badge>
        </div>

        <h1 className={`text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight sm:leading-tight md:leading-none tracking-tight transition-all duration-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ fontFamily: "'Playfair Display', serif", transitionDelay: "150ms" }}>
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #34d399, #6366f1, #f59e0b)" }}>
              Erick John Lopez
            </span>
          </span>
        </h1>

        <p className={`text-base sm:text-xl md:text-2xl text-zinc-400 mb-4 font-light transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "300ms" }}>
          Full-Stack Developer &amp; Creative Problem Solver
        </p>

        <p className={`text-zinc-500 max-w-md sm:max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "450ms" }}>
          I craft elegant digital experiences with clean code and thoughtful design.
          Passionate about building products that are fast, accessible, and beautifully intuitive.
        </p>

        <div className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "600ms" }}>
          <a href="#projects" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              View My Work <ArrowDownRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <a href="/files/CV.pdf" download="EJ_Lopez_CV.pdf" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent">
              Download CV
            </Button>
          </a>
        </div>

        <div className={`flex flex-wrap items-center justify-center gap-5 mt-14 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "750ms" }}>
          {socialLinks.map((link, i) => (
            <a key={i} href={link.url} className="p-3 rounded-full border border-zinc-800 text-zinc-500 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 hover:scale-110 hover:bg-emerald-500/5">
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs uppercase tracking-widest animate-bounce">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-emerald-500" />
      </div>
    </section>
  );
}

function About() {
  const { ref, isVisible } = useInView();
  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-emerald-400 text-sm font-mono">01</span>
          <Separator className="w-full bg-emerald-500/40" />
          <span className="text-emerald-400 text-sm font-mono uppercase tracking-widest">About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Building digital products<br />
              <span className="text-zinc-500">that people love</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              I'm a passionate full-stack developer with over 5 years of hands-on experience turning ideas into
              polished, production-ready applications. My background spans both frontend design and backend architecture,
              giving me a holistic understanding of how great products are built.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              When I'm not shipping code, you'll find me exploring new frameworks, contributing to open source,
              or sipping coffee while sketching out the next big idea. I thrive in collaborative environments and
              believe the best software is built when design and engineering work hand in hand.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4">
            {statData.map((s: any, i: any) => (
              <Card key={i} className="hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
                <CardContent className="pt-6 pb-8 text-center">
                  <p className="text-4xl font-bold " style={{ fontFamily: "'Playfair Display', serif" }}>
                    <AnimatedCount target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-zinc-500 text-sm mt-2">{s.label}</p>
                </CardContent>
              </Card>
            ))}

            {/* Experience card — spans 3 cols */}
            <Card className="col-span-3 hover:border-zinc-700 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-base font-semibol">Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                {experienceData.map((data: any, i: any) => (
                  <div key={i}>
                    <Separator className="my-4 bg-zinc-800" />
                    <div className="flex items-center justify-between mb-2 gap-4">
                      <span className="font-semibold truncate">{data.title} — {data.company}</span>
                      <Badge variant="outline" className="border-zinc-600 text-xs">{data.status}</Badge>
                    </div>
                    <p className="text-zinc-500 text-sm">{data.start_date} – {data.end_date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills / Tech Stack ────────────────────────────────────────────────────
function Skills() {
  const { ref, isVisible } = useInView();
  return (
    <section id="skills" className="py-32 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-emerald-400 text-sm font-mono">02</span>
          <Separator className="w-12 bg-emerald-500/40" />
          <span className="text-emerald-400 text-sm font-mono uppercase tracking-widest">Tech Stack</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-14" style={{ fontFamily: "'Playfair Display', serif" }}>
          Technologies I <span className="text-zinc-500">work with</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillDatas.map((skill: any, i: number) => {
            const Icon = iconMap[skill.label] || Code2; // default icon
            return (
              <Card key={i} className="hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 group" style={{ animationDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <CardTitle className="text-base">{skill.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item: string, j: number) => (
                      <Badge key={j} variant="outline" className="border-zinc-700 text-xs hover:border-emerald-500/40 hover:text-emerald-400 transition-colors duration-300">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Scrolling logo strip */}
        <div className="mt-20 overflow-hidden">
          <p className="text-zinc-600 text-xs uppercase tracking-widest text-center mb-6">Also familiar with</p>
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-3 opacity-40">
            {["GraphQL", "Prisma", "Redis", "Stripe", "Vercel", "Tailwind", "Svelte", "Nest.js", "Socket.io", "Jest"].map((t, i) => (
              <span key={i} className=" text-sm font-mono tracking-wide hover:text-emerald-400 transition-colors duration-300 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ───────────────────────────────────────────────────────────────
function Projects() {
  const { ref, isVisible } = useInView();
  return (
    <section id="projects" className="py-32 px-6" >
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 mb-4 ">
          <span className="text-emerald-400 text-sm font-mono">03</span>
          <Separator className="w-full bg-emerald-500/40" />
          <span className="text-emerald-400 text-sm font-mono uppercase tracking-widest">Projects</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold " style={{ fontFamily: "'Playfair Display', serif" }}>
            Selected <span className="text-zinc-500">work</span>
          </h2>
          <Button variant="outline" className="rounded-full self-start">
            View All Projects <ChevronRight />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <Card
              key={i}
              className="hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/5 group overflow-hidden"
            >
              {/* Fake image placeholder */}
              <div className="h-44 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-zinc-700 group-hover:text-emerald-500/50 transition-colors duration-500" />
                </div>
              </div>
              <CardContent className="pt-5">
                <h3 className=" font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors duration-300">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, j) => (
                    <Badge key={j} variant="outline" >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ────────────────────────────────────────────────────────────────
function Contact() {
  const { ref, isVisible } = useInView();
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data)
  };

  return (
    <section id="contact" className="py-32 px-6" >
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex items-center gap-3 mb-4 ">
          <span className="text-emerald-400 text-sm font-mono">04</span>
          <Separator className="bg-emerald-500/40" />
          <span className="text-emerald-400 text-sm font-mono uppercase tracking-widest">Contact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold  mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Let's <span className="text-zinc-500">work together</span>
        </h2>
        <p className="text-zinc-500 mb-16 max-w-lg">Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.</p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
                <CheckCircle className="w-14 h-14 text-emerald-400 mb-4" />
                <p className=" font-semibold text-lg">Message Sent!</p>
                <p className="text-zinc-500 text-sm mt-1">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label className="text-zinc-400 text-sm mb-2 block">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="rounded-xl py-3 px-4"
                  />
                </div>
                <div>
                  <Label className="text-zinc-400 text-sm mb-2 block">Subject</Label>
                  <Input
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                    placeholder="System Request"
                    required
                    className="rounded-xl py-3 px-4"
                  />
                </div>
                <div>
                  <Label className="text-zinc-400 text-sm mb-2 block">Message</Label>
                  <Textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="rounded-xl py-3 px-4 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 font-semibold rounded-full py-3 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            {[
              { icon: Mail, label: "Email", value: "ejlopez0530@email.com" },
              { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/erick-john-lopez-646299238/" },
              { icon: Github, label: "GitHub", value: "github.com/CyberWhisker" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="flex items-center gap-4 py-5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-zinc-600 text-xs uppercase tracking-wide">{item.label}</p>
                    <p className="text-zinc-300 text-sm">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Availability card */}
            <Card className="bg-gradient-to-br from-emerald-900/20 to-emerald-950/30 border-emerald-500/20 mt-4">
              <CardContent className="py-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 font-semibold text-sm">Currently Available</span>
                </div>
                <p className="text-sm ml-6">
                  Open to new opportunities — freelance, contract, or full-time roles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6" >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm">© 2025 Erick Lopez. Built with React & shadcn/ui.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link, i) => (
            <a key={i} href={link.url} className="text-zinc-600 hover:text-emerald-400 transition-colors duration-300">
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
