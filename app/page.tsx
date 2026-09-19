"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  AtSign,
  BadgeCheck,
  BookOpen,
  Bot,
  CalendarDays,
  CirclePlay,
  Code2,
  Droplets,
  Globe2,
  GraduationCap,
  Camera,
  Laptop2,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Quote,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Target,
  Users,
  X,
  Play,
  Zap,
} from "lucide-react";

const courses = [
  { icon: MonitorSmartphone, name: "Basic Computer Course", tone: "cyan", items: ["MS Word, Excel, PowerPoint", "Canva & Typing Practice", "3–4 Months"] },
  { icon: Globe2, name: "Website Designing", tone: "blue", items: ["WordPress & Elementor", "Modern Web Design", "Live Projects"] },
  { icon: Sparkles, name: "Graphic Designing", tone: "violet", items: ["Photoshop, Illustrator, Canva", "Creative Visuals", "Portfolio Building"] },
  { icon: Code2, name: "Web Development", tone: "navy", items: ["HTML, CSS, JavaScript, PHP", "Full Web Applications", "Hands-on Practice"] },
  { icon: Target, name: "Digital Marketing", tone: "orange", items: ["SEO, Social Media, Google Ads", "Online Earning Skills", "Live Campaigns"] },
  { icon: BookOpen, name: "English Language", tone: "sky", items: ["Speaking, Reading, Writing", "Grammar & Vocabulary", "All Levels"] },
  { icon: Bot, name: "Artificial Intelligence", tone: "indigo", items: ["AI Tools & Applications", "Practical Use Cases", "Future-ready Skills"] },
  { icon: Lightbulb, name: "Advanced IT Skills", tone: "teal", items: ["Freelancing & E-commerce", "Professional Development", "Career Guidance"] },
];

const stories = [
  { initials: "AK", name: "Areeba Khan", course: "Graphic Designing Student", quote: "I learned Canva and Photoshop here. Now I am working as a freelance designer.", color: "rose" },
  { initials: "MT", name: "M. Taha", course: "Web Development Student", quote: "The practical projects helped me get my first client. The learning environment is excellent.", color: "blue" },
  { initials: "HS", name: "Hira Saeed", course: "English Language Student", quote: "My confidence in speaking English has improved a lot. The teachers are very supportive.", color: "violet" },
  { initials: "ZA", name: "Zain Ali", course: "Digital Marketing Student", quote: "I learned SEO and social media marketing. Now I manage pages for local clients.", color: "amber" },
];

const events = [
  { icon: GraduationCap, name: "Admissions Open", text: "New batches starting soon.", date: "01 Sep 2026", tone: "blue" },
  { icon: Target, name: "Free Admission & 50% OFF", text: "For Girls Batch (Till 10 Sep)", date: "01 Sep 2026", tone: "pink" },
  { icon: CalendarDays, name: "Independence Day Celebration", text: "Special Program at Academy", date: "14 Aug 2026", tone: "green" },
  { icon: BadgeCheck, name: "Kashmir Day Event", text: "Awareness & Unity Program", date: "05 Feb 2026", tone: "blue" },
];

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Courses", "#courses"],
  ["Student Gallery", "#gallery"],
  ["Success Stories", "#stories"],
  ["Admissions", "#admissions"],
  ["Events", "#events"],
  ["Contact", "#contact"],
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`brand ${light ? "brand--light" : ""}`} aria-label="Al-Funun Academy home">
      <span className="brand-mark"><i>A</i><i>F</i></span>
      <span className="brand-copy">
        <b>AL-FUNUN</b>
        <strong>ACADEMY</strong>
        <small>Learn Today, Earn Tomorrow</small>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, note, action }: { eyebrow: string; title: string; note?: string; action?: string }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <div className="title-line">
          <h2>{title}</h2>
          {note && <p>{note}</p>}
        </div>
      </div>
      {action && <a className="outline-btn" href="#gallery">{action}<ArrowRight size={15} /></a>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, href], index) => (
              <a key={label} className={index === 0 ? "active" : ""} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
          <a className="phone-pill" href="https://wa.me/923152111190" aria-label="Chat with us on WhatsApp">
            <MessageCircle size={18} fill="currentColor" /> 0315 211 1190
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker">Skills <b>•</b> Practical Learning <b>•</b> Brighter Future</span>
            <h1>Learn Today,<br /><em>Earn</em> Tomorrow</h1>
            <p>Al Funun Academy provides modern computer and language courses with practical training to help you build real skills and create better opportunities.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#courses">Explore Courses <ArrowRight size={17} /></a>
              <button className="tour-btn" onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>
                <CirclePlay size={19} fill="white" /> Watch Our Tour
              </button>
            </div>
            <div className="hero-features">
              <span><Laptop2 /> Modern Computer Lab</span>
              <span><Users /> Experienced Instructors</span>
              <span><Sparkles /> Practical Projects</span>
              <span><GraduationCap /> Career Guidance</span>
              <span><ShieldCheck /> Separate Girls Batch</span>
            </div>
          </div>

          <aside className="admission-card" id="admissions">
            <div className="form-title">
              <span><GraduationCap /></span>
              <div><h2>Admission Form</h2><p>Start Your Learning Journey Today</p></div>
            </div>
            {submitted ? (
              <div className="form-success" role="status">
                <BadgeCheck size={42} />
                <h3>Application Received!</h3>
                <p>Thank you. Our admissions team will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)}>Submit another application</button>
              </div>
            ) : (
              <form onSubmit={submitForm}>
                <div className="form-grid">
                  <label>Full Name <b>*</b><input required name="name" placeholder="Enter your full name" /></label>
                  <label>Father&apos;s Name <b>*</b><input required name="fatherName" placeholder="Enter father's name" /></label>
                  <label>Phone Number <b>*</b><input required type="tel" name="phone" placeholder="03XX-XXXXXXX" /></label>
                  <label>Email <b>*</b><input required type="email" name="email" placeholder="Enter your email" /></label>
                  <label>Select Course <b>*</b><select required name="course" defaultValue=""><option value="" disabled>-- Select Course --</option>{courses.map(c => <option key={c.name}>{c.name}</option>)}</select></label>
                  <label>Preferred Timing <b>*</b><select required name="timing" defaultValue=""><option value="" disabled>-- Select Timing --</option><option>Morning Batch</option><option>Afternoon Batch</option><option>Evening Batch</option></select></label>
                </div>
                <label>Message (Optional)<textarea name="message" placeholder="Any additional information..." /></label>
                <button className="submit-btn" type="submit">Submit Application <ArrowRight size={17} /></button>
              </form>
            )}
          </aside>
        </div>
      </section>

      <section className="trust-strip" aria-label="Academy facilities">
        <div className="container trust-grid">
          <div><span><Zap /></span><p><b>Solar Power</b><small>24/7 Electricity</small></p></div>
          <div><span><Snowflake /></span><p><b>Cold Water</b><small>Comfortable Environment</small></p></div>
          <div><span><ShieldCheck /></span><p><b>Secure & Safe</b><small>CCTV Surveillance</small></p></div>
          <div><span><Users /></span><p><b>Purdah Environment</b><small>Separate Girls Batch</small></p></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">About Us</span>
            <h2>About AL Funun Academy</h2>
            <p>AL Funun Academy is a modern computer and language training institute committed to providing high-quality, practical education. We focus on skill development, creativity and real-world learning so our students can build successful careers and become financially independent.</p>
            <a className="primary-btn" href="#courses">Learn More <ArrowRight size={17} /></a>
          </div>
          <div className="about-image"><img src="/academy-campus.png" alt="Modern Al Funun Academy campus" /></div>
          <div className="values-list">
            <div><span><Target /></span><p><b>Our Mission</b><small>To provide quality education and practical skills for a brighter future.</small></p></div>
            <div><span><Globe2 /></span><p><b>Our Vision</b><small>To become a leading academy for IT & Language training in Pakistan.</small></p></div>
            <div><span><Users /></span><p><b>Our Values</b><small>Honesty, Discipline, Student Success and Continuous Improvement.</small></p></div>
          </div>
        </div>
      </section>

      <section className="gallery-section section-alt" id="gallery">
        <div className="container">
          <SectionHeading eyebrow="Our Students" title="Student Gallery" note="Moments of learning, practice and achievement at AL Funun Academy" action="View More Photos" />
          <div className="gallery-grid">
            <figure className="gallery-wide"><img src="/academy-hero.png" alt="Students learning in the computer lab" /></figure>
            <figure><img src="/academy-hero.png" alt="Practical computer class" /></figure>
            <figure><img src="/academy-campus.png" alt="Academy learning environment" /></figure>
            <figure><img src="/academy-hero.png" alt="Instructor guiding students" /></figure>
            <figure><img src="/academy-campus.png" alt="Al Funun Academy entrance" /></figure>
            <figure><img src="/academy-hero.png" alt="Modern computer lab" /></figure>
          </div>
        </div>
      </section>

      <section className="stories section" id="stories">
        <div className="container">
          <SectionHeading eyebrow="Real Achievements" title="Student Success Stories" note="Our students are building careers and earning online using their skills." />
          <div className="card-scroller story-grid">
            {stories.map(story => (
              <article className="story-card" key={story.name}>
                <Quote className="quote-icon" />
                <div className={`avatar avatar--${story.color}`}>{story.initials}</div>
                <div><h3>{story.name}</h3><span>{story.course}</span><p>“{story.quote}”</p><div className="stars" aria-label="5 star review">★★★★★</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="courses section-alt" id="courses">
        <div className="container">
          <SectionHeading eyebrow="Courses We Offer" title="Our Popular Courses" note="Learn in-demand skills with practical training and real projects." />
          <div className="card-scroller course-grid">
            {courses.map(({ icon: Icon, name, tone, items }) => (
              <article className="course-card" key={name}>
                <div className={`course-cover cover--${tone}`}><Icon /><span>{name.split(" ")[0]}</span></div>
                <h3>{name}</h3>
                <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
                <a href="#admissions">Learn More <ArrowRight size={14} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="events section" id="events">
        <div className="container">
          <SectionHeading eyebrow="Stay Updated" title="Events & Announcements" note="Latest news, workshops and special events." />
          <div className="card-scroller event-grid">
            {events.map(({ icon: Icon, name, text, date, tone }) => (
              <article className="event-card" key={name}>
                <span className={`event-icon event-icon--${tone}`}><Icon /></span>
                <div><h3>{name}</h3><p>{text}</p><small><CalendarDays /> {date}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-main">
          <Brand light />
          <div className="contact-item"><MapPin /><p>Al Funun Academy<br /><span>Muhaffiz Colony, Warsaiy Road,<br />Sector G/8, P.W.D, Islamabad</span></p></div>
          <div className="contact-stack">
            <a href="tel:+923152111190"><Phone />0315 211 1190</a>
            <a href="mailto:info@alfununacademy.com"><Mail />info@alfununacademy.com</a>
          </div>
          <a className="web-link" href="#home"><Globe2 />www.alfununacademy.com</a>
          <div className="socials"><small>Follow Us</small><div><a href="#contact" aria-label="Facebook"><AtSign /></a><a href="#contact" aria-label="Instagram"><Camera /></a><a href="#contact" aria-label="Youtube"><Play /></a></div></div>
        </div>
        <div className="footer-bottom">
          <div className="container"><small>© 2026 AL Funun Academy. All Rights Reserved.</small><nav>{navItems.slice(0, 6).map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav></div>
        </div>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/923152111190" aria-label="WhatsApp Al Funun Academy"><MessageCircle /></a>
    </main>
  );
}
