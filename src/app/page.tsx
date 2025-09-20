"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Mail, Instagram, Linkedin, Download, ArrowRight, ExternalLink, MapPin, Briefcase, GraduationCap, Award, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Tag from "../components/Tag";
import Card from "../components/Card";
import Pill from "../components/Pill";
import { profile, experience, projects, education, certs, nav } from "../data/site";
import ThemeToggle from "../components/ThemeToggle";

export default function Page() {
  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (saved === "dark" || (!saved && prefersDark)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // fail quietly
    }
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-zinc-950/60 border-b border-gray-100 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <li key={n.id}><a className="hover:text-orange-600 dark:hover:text-orange-300" href={`#${n.id}`}>{n.label}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={profile.links.resume} className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-orange-700 text-sm hover:bg-orange-100 dark:border-orange-900/40 dark:bg-orange-950/40 dark:text-orange-200">
              <Download className="h-4 w-4" /> Resume
            </a>
            <a href={`mailto:${profile.email}`} className="hidden md:inline-flex items-center gap-2 rounded-full bg-orange-600 px-3 py-1.5 text-white text-sm hover:bg-orange-700">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-24 h-64 bg-gradient-to-b from-orange-100/70 to-transparent pointer-events-none dark:from-orange-900/20" />
        <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-2xl">
                <Pill>Open to internships & freelance</Pill>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{profile.name}</h1>
                <p className="mt-2 text-lg font-medium text-orange-700 dark:text-orange-300">{profile.title}</p>
                <p className="mt-4 text-gray-600 dark:text-zinc-300/90">{profile.blurb}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                    View Work <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={profile.links.instagram} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5">
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                  <a href={profile.links.linkedin} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-orange-600" /> {profile.location}</span>
                  <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4 text-orange-600" /> {profile.email}</span>
                  <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4 text-orange-600" /> {profile.phone}</span>
                </div>
              </div>
              <div className="md:flex-1 flex justify-center">
                <Card className="p-6 flex flex-col items-center text-center max-w-xs">
                  <div className="relative h-48 w-48 rounded-full bg-gradient-to-br from-orange-500 to-orange-300 overflow-hidden dark:from-orange-600 dark:to-orange-400">
                    <Image src="/headshot.jpg" alt="Vincent" fill className="object-cover" sizes="192px" />
                  </div>
                  <p className="mt-4 text-sm italic text-gray-600 dark:text-zinc-400">
                    &ldquo;I am someone who shaped by fire and driven by a dream.&rdquo; - Vincent
                  </p>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 md:col-span-2">
            <h3 className="font-semibold mb-2">Summary</h3>
            <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
              Business-focused analyst and strategist. I translate data and customer insight into clear requirements, prioritize ROI, and craft go‑to‑market plans. I partner with stakeholders to frame problems, validate assumptions, and turn ideas into measurable business outcomes.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Highlights</h3>
            <ul className="text-gray-600 dark:text-zinc-300 space-y-2 list-disc list-inside">
              <li>Business analysis - requirements, process mapping, KPIs, ROI</li>
              <li>Strategy & growth - market research, segmentation, GTM, pricing</li>
              <li>Data-driven decisions - dashboards, experiments, A/B testing</li>
              <li>Stakeholder communication - executive slides & concise storytelling</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {experience.map((job, i) => (
            <Card key={i} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2"><Briefcase className="h-5 w-5 text-orange-600" /> {job.role}</h3>
                  <p className="text-gray-700 dark:text-zinc-200">{job.company} · <span className="text-gray-500 dark:text-zinc-400">{job.location}</span></p>
                </div>
                <div className="shrink-0 text-sm text-orange-700 dark:text-orange-300 font-medium">{job.period}</div>
              </div>
              <ul className="mt-4 text-gray-600 dark:text-zinc-300 space-y-2 list-disc list-inside">
                {job.bullets.map((b, j) => (<li key={j}>{b}</li>))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((t) => (<Tag key={t}>{t}</Tag>))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={i} className="p-6 flex flex-col">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-zinc-300 flex-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => (<Tag key={t}>{t}</Tag>))}</div>
              <div className="mt-4 flex items-center gap-3">
                {p.links.map((l, idx) => (
                  <a key={idx} href={l.url} className="inline-flex items-center gap-1 text-orange-700 dark:text-orange-300 hover:underline">
                    {l.label} <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">{profile.skills.languages.map((s) => (<Tag key={s}>{s}</Tag>))}</div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold">Business</h3>
            <div className="mt-3 flex flex-wrap gap-2">{profile.skills.business.map((s) => (<Tag key={s}>{s}</Tag>))}</div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold">Computer Science</h3>
            <div className="mt-3 flex flex-wrap gap-2">{profile.skills.computer.map((s) => (<Tag key={s}>{s}</Tag>))}</div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold">Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2">{profile.skills.tools.map((s) => (<Tag key={s}>{s}</Tag>))}</div>
          </Card>
        </div>
      </Section>

      <Section id="education" title="Education & Certifications">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5 text-orange-600" /> Education</h3>
            {education.map((e, i) => (
              <div key={i} className="mt-3">
                <p className="font-bold text-lg text-orange-700 dark:text-orange-300">{e.school}</p>
                <p className="text-gray-700 dark:text-zinc-200">{e.degree}</p>
                <p className="text-sm text-orange-700 dark:text-orange-300 font-medium">{e.period}</p>
                <ul className="mt-2 text-gray-600 dark:text-zinc-300 list-disc list-inside space-y-1">
                  {e.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
              </div>
            ))}
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2"><Award className="h-5 w-5 text-orange-600" /> Certifications</h3>
            <ul className="mt-3 space-y-2">
              {certs.map((c, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-zinc-200">{c.title} · <span className="text-gray-500 dark:text-zinc-400">{c.org}</span></span>
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">{c.year}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold">Let’s build something great</h3>
              <p className="mt-2 text-gray-600 dark:text-zinc-300">Feel free to reach out for collaborations, freelance work, or just a friendly chat.</p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a className="inline-flex items-center gap-2 text-orange-700 dark:text-orange-300 hover:underline" href={`mailto:${profile.email}`}><Mail className="h-4 w-4" /> {profile.email}</a>
                <a className="inline-flex items-center gap-2 text-orange-700 dark:text-orange-300 hover:underline" href={profile.links.linkedin}><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <a className="inline-flex items-center gap-2 text-orange-700 dark:text-orange-300 hover:underline" href={profile.links.instagram}><Instagram className="h-4 w-4" /> Instagram</a>
              </div>
            </div>
            <form className="grid gap-3">
              <input required placeholder="Your name" className="rounded-xl border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-orange-300 dark:border-white/10 dark:bg-zinc-900" />
              <input required type="email" placeholder="Email" className="rounded-xl border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-orange-300 dark:border-white/10 dark:bg-zinc-900" />
              <textarea required placeholder="Message" rows={4} className="rounded-xl border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-orange-300 dark:border-white/10 dark:bg-zinc-900" />
              <button className="rounded-xl bg-orange-600 text-white px-4 py-2 hover:bg-orange-700">Send</button>
              <p className="text-xs text-gray-500 dark:text-zinc-400"></p>
            </form>
          </div>
        </Card>
      </Section>

      <footer className="border-t border-gray-100 dark:border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-zinc-400">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href={profile.links.instagram} className="inline-flex items-center gap-1 text-orange-700 dark:text-orange-300 hover:underline"><Instagram className="h-4 w-4" /> Instagram</a>
            <a href={profile.links.linkedin} className="inline-flex items-center gap-1 text-orange-700 dark:text-orange-300 hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 text-orange-700 dark:text-orange-300 hover:underline"><Mail className="h-4 w-4" /> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}