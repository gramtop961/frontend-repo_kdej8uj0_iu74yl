import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const SectionTitle = ({ id, title, subtitle }) => (
  <div id={id} className="scroll-mt-28">
    <h2 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h2>
    {subtitle && <p className="mt-1 text-zinc-400 text-sm sm:text-base">{subtitle}</p>}
  </div>
);

const GlowCard = ({ children }) => (
  <div className="relative">
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 opacity-40 blur-xl" aria-hidden />
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      {children}
    </div>
  </div>
);

function Experience() {
  const items = [
    {
      type: 'Education',
      org: 'National Institute of Technology Sikkim',
      date: 'Dec 2021 – May 2025',
      role: 'Bachelor of Technology – Electrical and Electronics Engineering (CGPA: 7.43)',
      details: 'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Microprocessors, Python for Data Science',
    },
    {
      type: 'Work',
      org: 'Logizee Solutions LLP (Dasho)',
      date: 'Jul 2025 | Bihar, India',
      role: 'Software Developer',
      bullets: [
        'Built a scalable parcel and transportation backend using TypeScript, PostgreSQL, and Flutter.',
        'Created automation and partner tools with real-time updates.',
        'Integrated Zoho and Razorpay payments, and deployed via CI/CD pipeline.',
      ],
    },
    {
      type: 'Work',
      org: 'Eduvanz Financing Pvt. Ltd (Wizr) (Remote)',
      date: 'Feb 2024 – Jul 2025 | Mumbai, India',
      role: 'Software Development Engineer',
      bullets: [
        'Integrated OpenAI and Monster APIs into TypeScript backend with Redis caching and vector search.',
        'Built dynamic Next.js + TypeScript career and course pages.',
        'Developed an AI-powered chatbot using LangChain and FastAPI.',
      ],
    },
    {
      type: 'Work',
      org: 'Grozo (Grocery App)',
      date: 'Sep 2024 – Jan 2025 | Ravangla, Sikkim, India',
      role: 'Freelance Software Development Engineer',
      bullets: [
        'Engineered real-time delivery app using Node.js, Flutter & Redis (6.2K+ orders in 2 months).',
        'Implemented live tracking, route optimization, and dynamic pricing.',
        'Boosted API performance by 30% with Redis caching and load balancing.',
      ],
    },
    {
      type: 'Work',
      org: '9Pointers Tech Pvt. Ltd',
      date: 'Jun 2024 – Aug 2024 | Jaipur, Rajasthan, India',
      role: 'Junior Embedded & IoT Engineer',
      bullets: [
        'Built face detection system using OpenCV, TensorFlow on Raspberry Pi.',
        'Automated smart home controls using ESP32 & Google Home APIs.',
        'Synced devices to cloud backend via FastAPI + MQTT.',
      ],
    },
  ];

  return (
    <section className="relative">
      <SectionTitle id="experience" title="Experience" />
      <div className="mt-6 space-y-5">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            className="relative pl-5"
          >
            <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
            <GlowCard>
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-zinc-200 font-medium">{item.role} — <span className="text-white">{item.org}</span></div>
                  <div className="text-xs text-zinc-400">{item.date}</div>
                </div>
                {item.details && (
                  <p className="mt-2 text-sm text-zinc-300">{item.details}</p>
                )}
                {item.bullets && (
                  <ul className="mt-2 list-disc list-inside text-sm text-zinc-300 space-y-1">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Dasho (Parcel & Transport Platform)',
      desc: 'Logistics and parcel platform backend with Flutter integration and automation dashboard.',
      actions: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishwajeet-kumar-5b7530242' },
      ],
    },
    {
      title: 'Grozo (Real-time Grocery App)',
      desc: 'Real-time grocery delivery platform with live tracking and Firebase-based dynamic pricing.',
      actions: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishwajeet-kumar-5b7530242' },
      ],
    },
    {
      title: 'Crypto Meets UPI',
      desc: 'Hybrid Web3 + UPI payment platform integrating Razorpay, MetaMask, and Firebase.',
      actions: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/Crypto-meets-Upi' },
      ],
    },
    {
      title: 'WanderWise (AI-Powered Travel App)',
      desc: 'AI-based trip recommendation system using LangChain and vector databases.',
      actions: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/wanderWise' },
      ],
    },
    {
      title: 'RCSC 2025 Conference Website',
      desc: 'College conference site built using Next.js with responsive event layout and dynamic content.',
      actions: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/conference' },
        { label: 'Live', href: 'https://rcsc2025nitsk.vercel.app/' },
      ],
    },
    {
      title: 'Face Detection Greeting System',
      desc: 'Real-time face recognition and greeting system using OpenCV, TensorFlow, Flask, Raspberry Pi.',
      actions: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/face-detection-greeting-system' },
      ],
    },
  ];

  return (
    <section className="relative">
      <SectionTitle id="projects" title="Projects" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
          >
            <GlowCard>
              <div className="p-4 sm:p-5 h-full">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.actions.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1.5 rounded-full bg-indigo-600/80 hover:bg-indigo-500 text-white shadow ring-1 ring-inset ring-white/10"
                    >
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const categories = [
    {
      title: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'C/C++', 'SQL'],
    },
    {
      title: 'Backend',
      items: ['FastAPI', 'Express.js', 'Django', 'Node.js', 'Spring Boot', 'RESTful APIs', 'Redis', 'WebSockets'],
    },
    {
      title: 'Frontend & Mobile',
      items: ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'Figma-to-UI'],
    },
    {
      title: 'AI & LLMs',
      items: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Vector Databases', 'NLP', 'Prompt Engineering'],
    },
    {
      title: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'AWS (EC2, S3, Lambda)', 'Firebase'],
    },
    {
      title: 'Automation & Tools',
      items: ['n8n', 'Zapier', 'MQTT', 'Webhooks', 'CI/CD Pipelines', 'Monitoring', 'Git', 'Agile'],
    },
  ];

  return (
    <section className="relative">
      <SectionTitle id="skills" title="Skills" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((c) => (
          <GlowCard key={c.title}>
            <div className="p-4 sm:p-5">
              <h3 className="text-white font-medium mb-3">{c.title}</h3>
              <div className="flex flex-wrap gap-2">
                {c.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs bg-zinc-900/60 border border-white/10 text-zinc-200 hover:text-white hover:shadow-[0_0_24px_#6366f1aa] hover:border-indigo-500/40 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="relative">
      <SectionTitle id="contact" title="Contact" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
        <a
          href="mailto:vishwajeet.7t@gmail.com"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
        >
          <Mail className="w-4 h-4 text-zinc-300" />
          <span className="text-zinc-200">vishwajeet.7t@gmail.com</span>
        </a>
        <a
          href="https://github.com/kumarvishwajeettrivedi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
        >
          <Github className="w-4 h-4 text-zinc-300" />
          <span className="text-zinc-200">github.com/kumarvishwajeettrivedi</span>
        </a>
        <a
          href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
        >
          <Linkedin className="w-4 h-4 text-zinc-300" />
          <span className="text-zinc-200">linkedin.com/in/vishwajeet-kumar-5b7530242</span>
        </a>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
