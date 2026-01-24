import { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import profilePhoto from './assets/profile.jpg'

const typingWords = [
  'Threat Detection',
  'Penetration Testing',
  'SOC Automation',
  'Vulnerability Assessment',
  'Zero Trust',
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Sandy2517',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sandhiya2517',
  },
  {
    label: 'Email',
    href: 'mailto:ssandhiya.eee2023@citchennai.net',
  },
]

const socialIcons = {
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5C5.7.5.6 5.7.6 12c0 5 3.2 9.2 7.6 10.7.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.2-5.2-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 015.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.4-2.7 5.3-5.3 5.6.4.3.8 1 .8 2.1v3.2c0 .4.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.4 5.7 18.3.5 12 .5z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 104.98 8a2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
      <path d="M22 8l-10 6L2 8" />
    </svg>
  ),
}

const projects = [
  {
    name: 'CyberAegisX',
    overview:
      'AI-powered SOC automation platform that consolidates threat detection, monitoring, and alerting.',
    tech: ['Python', 'SIEM Concepts', 'Automation', 'Threat Intelligence'],
    contribution:
      'Designed the end-to-end workflow, automation logic, and incident response routing.',
    impact:
      'Reduced manual triage time by automating alerts and surfacing high-risk vulnerabilities faster.',
  },
  {
    name: 'Federated Learning: AI-driven Threat Detection',
    overview:
      'Privacy-preserving intrusion detection using federated learning on the CIC-IDS 2017 dataset.',
    tech: ['Python', 'Flower', 'Federated Learning', 'CIC-IDS 2017'],
    contribution:
      'Built the client-server training architecture and evaluation pipeline.',
    impact:
      'Achieved 83.2% accuracy while keeping training data distributed across clients.',
  },
  {
    name: 'Sign Language Detection',
    overview:
      'Computer vision system that recognizes sign language gestures in real time.',
    tech: ['Node.js', 'Express.js', 'Jupyter', 'Computer Vision'],
    contribution:
      'Created the detection pipeline and integrated the web-based inference flow.',
    impact:
      'Reached 81.2% accuracy and improved accessibility for hearing-impaired users.',
  },
  {
    name: 'CampusBuddy',
    overview:
      'Smart e-pass gate system for educational institutions with multi-level approvals, QR scanning, and admin dashboards.',
    tech: [
      'Next.js (App Router)',
      'Tailwind CSS',
      'React Context',
      'qrcode.react',
      'html5-qrcode',
    ],
    contribution:
      'Implemented approval workflows, QR-based validation, and admin dashboards with a cohesive UI.',
    impact:
      'Streamlined campus access by reducing manual gate checks and improving entry auditability.',
  },
  {
    name: 'SecLog',
    overview:
      'Real-time security log understanding system using a fine-tuned LLM for classification, severity prediction, and actionable explanations.',
    tech: [
      'Python',
      'HuggingFace Transformers + PEFT (LoRA)',
      'FastAPI (async)',
      'Redis / PostgreSQL',
      'Docker',
      'WebSockets / Redis Streams',
    ],
    contribution:
      'Built streaming inference with async APIs and fine-tuned LLM outputs for structured security insights.',
    impact:
      'Delivered low-latency (<2s) classification and recommendations to accelerate incident response.',
  },
]

const experiences = [
  {
    role: 'Cybersecurity Analytics Intern',
    company: 'L&T Construction',
    time: '06/2025 - 07/2025',
    location: 'Chennai, India',
    highlights: [
      'Automated security monitoring using Azure tools and SIEM workflows.',
      'Built API automation using Postman for security validation.',
      'Worked with Kong and Azure Active Directory for secure access control.',
    ],
  },
  {
    role: 'Vulnerability Assessment and Penetration Testing Intern',
    company: 'Qadit Systems and Solutions',
    time: '10/2024 - 11/2024',
    location: 'Chennai, India',
    highlights: [
      'Performed vulnerability assessments with Nessus, Nmap, and Burp Suite.',
      'Executed web and system penetration testing with Metasploit and Postman.',
      'Delivered mitigation recommendations to reduce enterprise attack surface.',
    ],
  },
  {
    role: 'Networking Intern',
    company: 'Cisco Networking Academy',
    time: '05/2024 - 05/2024',
    location: 'Chennai, India',
    highlights: [
      'Configured routers, switches, and IPv4/IPv6 networks.',
      'Applied subnetting and routing best practices for secure connectivity.',
    ],
  },
  {
    role: 'Intern',
    company: 'Hubert Enviro Care Systems',
    time: '12/2025 - 12/2025',
    location: 'Chennai, India',
    highlights: [
      'Built a log analysis project to track cybersecurity measures.',
      'Monitored system hygiene to strengthen operational visibility.',
    ],
  },
]

const certifications = [
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    value: 'Solid foundation in routing, switching, and network security.',
  },
  {
    name: 'Cisco Junior Cybersecurity Analyst',
    issuer: 'Cisco',
    value: 'Hands-on experience in SOC workflows and incident response.',
  },
  {
    name: 'TryHackMe SOC Analyst',
    issuer: 'TryHackMe',
    value: 'Practical detection and investigation skills using labs.',
  },
  {
    name: 'JR Penetration Tester (TryHackMe)',
    issuer: 'TryHackMe',
    value: 'Offensive security practice in real-world simulations.',
  },
  {
    name: 'Fortinet: Fundamentals of Cybersecurity',
    issuer: 'Fortinet',
    value: 'Core security principles and defensive best practices.',
  },
  {
    name: 'Encryption Basics (Great Learning)',
    issuer: 'Great Learning',
    value: 'Understanding of cryptography fundamentals and secure data flow.',
  },
  {
    name: 'Cisco Networking Basics',
    issuer: 'Cisco',
    value: 'Practical routing and network troubleshooting.',
  },
  {
    name: 'MongoDB Basics for Students',
    issuer: 'MongoDB',
    value: 'Data modeling and query fundamentals for modern apps.',
  },
  {
    name: 'UI Automation Path and Machine Learning',
    issuer: 'Great Learning',
    value: 'Automation pipelines and ML fundamentals for security use cases.',
  },
]

const achievements = [
  {
    name: 'TryHackMe: 50+ Rooms Solved',
    value: 'Demonstrated persistence and hands-on security skills.',
  },
  {
    name: 'Capture The Flag (ExploitX)',
    value: 'Ranked among top contestants through active CTF participation.',
  },
  {
    name: 'Research Paper: Federated Learning',
    value:
      'Authored a paper on privacy-preserving AI for threat detection (82.3% accuracy).',
  },
]

const skills = {
  Security: [
    { name: 'Threat Detection & Mitigation', level: 88 },
    { name: 'Penetration Testing', level: 86 },
    { name: 'Vulnerability Assessment', level: 90 },
    { name: 'Zero Trust & Risk Management', level: 82 },
  ],
  Programming: [
    { name: 'Python', level: 86 },
    { name: 'Bash', level: 75 },
    { name: 'JavaScript', level: 78 },
  ],
  Tools: [
    { name: 'Nmap, Wireshark, Splunk', level: 84 },
    { name: 'Nessus, Burp Suite, OWASP ZAP', level: 88 },
    { name: 'Metasploit, John the Ripper, Hashcat', level: 82 },
    { name: 'Postman, Insomnia, Fiddler', level: 80 },
  ],
  Networking: [
    { name: 'Routing & Switching', level: 82 },
    { name: 'IPv4 / IPv6', level: 78 },
    { name: 'IDS/IPS Concepts', level: 80 },
  ],
}

const contributions = [
  {
    name: 'Blue Sentinel (Centre of Excellence - Cybersecurity)',
    value:
      'Built an AI-driven cyber platform with interactive network visualization for early threat detection.',
  },
  {
    name: 'Federated Learning Research',
    value:
      'Developed privacy-preserving AI workflows to improve distributed threat detection strategies.',
  },
  {
    name: 'CTF & Security Community',
    value:
      'Active competitor and learner with a focus on offensive/defensive security challenges.',
  },
]

const skillIcons = {
  Security: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-neonBlue"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z" />
      <path d="M9.5 12.5l2 2 3.5-4" />
    </svg>
  ),
  Programming: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-neonBlue"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 8l-4 4 4 4" />
      <path d="M16 8l4 4-4 4" />
      <path d="M13.5 6l-3 12" />
    </svg>
  ),
  Tools: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-neonBlue"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14.5 6.5a4 4 0 00-5.7 4.7l-5.1 5.1 2.6 2.6 5.1-5.1a4 4 0 004.7-5.7l-2.2 2.2-2.2-2.2 2.8-2.6z" />
    </svg>
  ),
  Networking: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-neonBlue"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <circle cx="12" cy="17" r="2.5" />
      <path d="M8 8.5l3 6M16 8.5l-3 6" />
    </svg>
  ),
}

const certificateIcon = (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-neonBlue"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M7 3h10a2 2 0 012 2v9a2 2 0 01-2 2H9l-4 4v-4H7a2 2 0 002-2V5a2 2 0 00-2-2z" />
    <path d="M9 8h6M9 12h4" />
  </svg>
)

const MotionSection = ({ id, eyebrow, title, children }) => (
  <motion.section
    id={id}
    className="relative scroll-mt-20"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, margin: '-80px' }}
  >
    <div className="mb-8">
      <p className="section-title">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
    </div>
    {children}
  </motion.section>
)

function useTypingEffect(words) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next.length === currentWord.length) {
          setIsDeleting(true)
        }
      } else {
        const next = currentWord.slice(0, displayText.length - 1)
        setDisplayText(next)
        if (next.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words])

  return displayText
}

function App() {
  const typedSkill = useTypingEffect(typingWords)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [formStatus, setFormStatus] = useState('')

  const skillGroups = useMemo(() => Object.entries(skills), [])

  const handleInput = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formState.name.trim()) errors.name = 'Name is required.'
    if (!formState.email.trim()) errors.email = 'Email is required.'
    if (
      formState.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)
    ) {
      errors.email = 'Enter a valid email address.'
    }
    if (formState.message.trim().length < 20) {
      errors.message = 'Message should be at least 20 characters.'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateForm()) return
    setFormStatus(
      'Thanks for reaching out! I will reply within 48 hours.'
    )
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <div className="relative min-h-screen bg-ink text-white live-bg bg-animated">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={profilePhoto}
              alt="Sandhiya S portrait"
              className="h-10 w-10 rounded-full border border-neonBlue/50 object-cover shadow-[0_0_18px_rgba(76,201,240,0.4)]"
            />
            <span className="text-sm text-white/70">Portfolio</span>
          </div>
          <nav className="hidden items-center gap-6 text-xs text-white/70 lg:flex">
            {[
              'about',
              'projects',
              'experience',
              'certifications',
              'skills',
              'contributions',
              'contact',
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="uppercase tracking-[0.2em] transition hover:text-neonGreen"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            className="button-primary hidden text-sm md:inline-flex"
            href="mailto:ssandhiya.eee2023@citchennai.net"
          >
            Hire Me
        </a>
      </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:pt-24">
        <section className="grid min-h-[calc(100vh-96px)] items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="section-title">Cybersecurity Student</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Sandhiya S
            </h1>
            <p className="text-lg text-white/75">
              Building resilient security systems that detect threats early,
              automate responses, and protect enterprise infrastructure.
            </p>
            <div className="flex items-center gap-2 text-sm text-neonBlue">
              <span className="rounded-full border border-neonBlue/40 px-3 py-1 shadow-[0_0_20px_rgba(76,201,240,0.25)]">
                {typedSkill}
              </span>
              <span className="animate-pulse">|</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  className="button-ghost"
                  href={item.href}
                  target={item.label !== 'Email' ? '_blank' : undefined}
                  rel={item.label !== 'Email' ? 'noreferrer' : undefined}
                >
                  <span className="flex items-center gap-2">
                    {socialIcons[item.label]}
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="glass neon-border rounded-3xl p-6 shadow-[0_0_35px_rgba(57,255,176,0.12)]">
            <div className="mb-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neonGreen/80">
                Education Background
              </p>
              <p className="mt-2 text-sm text-white/70">
                Cybersecurity Student · Chennai, India
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Location</span>
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Education</span>
                <span>B.E. CS & Cybersecurity</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Secondary Program</span>
                <span>B.Sc Data Science (IIT Madras)</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>CGPA</span>
                <span>8.68</span>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-line bg-midnight p-4">
              <p className="text-sm text-white/70">
                Focused on SOC automation, vulnerability assessment, and
                threat detection research.
              </p>
            </div>
          </div>
        </section>

        <MotionSection id="about" eyebrow="About" title="Professional Summary">
          <div className="glass rounded-3xl p-8">
            <p className="text-lg text-white/75">
              Cybersecurity analyst-in-training with hands-on experience in SOC
              automation, penetration testing, and network security. Proven
              ability to ship threat detection solutions using federated
              learning, automate security workflows with cloud tooling, and
              deliver actionable vulnerability insights. Adept at collaborating
              across engineering teams to reduce risk, strengthen defenses, and
              translate technical findings into business-ready outcomes.
            </p>
          </div>
        </MotionSection>

        <MotionSection id="projects" eyebrow="Projects" title="Security Projects">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                whileHover={{ y: -8 }}
                className="group glass relative overflow-hidden rounded-3xl p-6 transition"
              >
                <div className="relative z-10 transition duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="mt-3 text-sm text-white/70">
                    {project.overview}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-neonGreen/80">
                    {project.tech.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-midnight/90 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="flex h-full flex-col justify-end p-6">
                    <p className="text-sm text-white/80">
                      {project.overview}
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      {project.contribution}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ scale: 1.05 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.04, duration: 0.3 }}
                          className="flex items-center gap-2 text-xs text-neonBlue"
                        >
                          <span className="h-2 w-2 rounded-full bg-neonBlue shadow-[0_0_12px_rgba(76,201,240,0.6)]" />
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          id="experience"
          eyebrow="Experience"
          title="Internships & Experience"
        >
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-line" />
            <div className="space-y-8 pl-12">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative glass rounded-3xl p-6"
                >
                  <span className="absolute -left-7 top-8 h-4 w-4 rounded-full border border-neonBlue bg-midnight shadow-[0_0_20px_rgba(76,201,240,0.6)]" />
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="text-sm text-white/70">{item.company}</p>
                    </div>
                    <div className="text-sm text-white/60">
                      {item.time} · {item.location}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-neonGreen" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection
          id="certifications"
          eyebrow="Credentials"
          title="Certifications & Achievements"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative">
              <h3 className="text-xl font-semibold">Certifications</h3>
              <p className="mt-2 text-sm text-white/60">
                Swipe-through stack with depth and motion.
              </p>
              <div className="mt-6 space-y-4">
                {certifications.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`relative rounded-3xl border border-line bg-midnight/80 p-5 shadow-[0_0_25px_rgba(76,201,240,0.12)] ${
                      index === 0 ? '' : '-mt-4'
                    }`}
                    style={{
                      zIndex: certifications.length - index,
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-neonGreen/70">
                          {item.issuer}
                        </p>
                        <h4 className="mt-2 text-lg font-semibold">
                          {item.name}
                        </h4>
                        <p className="mt-2 text-sm text-white/70">
                          {item.value}
        </p>
      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neonBlue/40 bg-ink/60 shadow-[0_0_18px_rgba(139,92,246,0.35)]">
                        {certificateIcon}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-semibold">Achievements</h3>
              <div className="mt-4 grid gap-3">
                {achievements.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-line bg-midnight/80 p-4 transition hover:border-neonBlue/60 hover:shadow-[0_0_20px_rgba(76,201,240,0.2)]"
                  >
                    <p className="text-sm font-medium text-neonGreen">
                      {item.name}
                    </p>
                    <p className="mt-2 text-xs text-white/70">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="skills" eyebrow="Capabilities" title="Skills">
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map(([category, items]) => (
              <div key={category} className="glass rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-neonBlue/40 bg-midnight shadow-[0_0_18px_rgba(76,201,240,0.4)]">
                    {skillIcons[category]}
                  </span>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <div className="mt-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/80">{item.name}</span>
                        <span className="text-white/60">{item.level}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <motion.div
                          className="h-2 rounded-full bg-neonBlue shadow-[0_0_12px_rgba(76,201,240,0.4)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection
          id="contributions"
          eyebrow="Leadership"
          title="Contributions & Research"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {contributions.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-6"
              >
                <h3 className="text-lg font-semibold text-neonBlue">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-white/70">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </MotionSection>

        <MotionSection id="contact" eyebrow="Contact" title="Start a Conversation">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
            <form className="glass rounded-3xl p-6" onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-white/70" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleInput}
                    className="input-field"
                    placeholder="Your full name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-neonGreen">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-white/70" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInput}
                    className="input-field"
                    placeholder="you@email.com"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-neonGreen">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-white/70" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInput}
                    className="input-field min-h-[140px]"
                    placeholder="Tell me about the role or project."
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-neonGreen">
                      {formErrors.message}
                    </p>
                  )}
                </div>
              </div>
              <button type="submit" className="button-primary mt-6 w-full">
                Send Message
              </button>
              {formStatus && (
                <p className="mt-4 text-sm text-neonGreen">{formStatus}</p>
              )}
            </form>
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-semibold">Let&apos;s connect</h3>
              <p className="mt-3 text-sm text-white/70">
                Available for security collaborations, research, and recruitment
                conversations aligned to SOC automation and threat detection.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                <p>Email (Primary): ssandhiya.eee2023@citchennai.net</p>
                <p>Email (Alt): sandhiyasworkspace@gmail.com</p>
                <p>Phone: +91 63851 16777</p>
                <p>Location: Chennai, India</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    className="button-ghost"
                    href={item.href}
                    target={item.label !== 'Email' ? '_blank' : undefined}
                    rel={item.label !== 'Email' ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                {[
                  { label: 'GH', href: socials[0].href },
                  { label: 'IN', href: socials[1].href },
                  { label: '@', href: socials[2].href },
                ].map((icon) => (
                  <a
                    key={icon.label}
                    href={icon.href}
                    className="social-icon"
                    target={icon.label !== '@' ? '_blank' : undefined}
                    rel={icon.label !== '@' ? 'noreferrer' : undefined}
                  >
                    {icon.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>
      </main>

      <footer className="border-t border-line py-6 text-center text-xs text-white/50">
        Designed &amp; built by Sandhiya S · Cybersecurity Portfolio
      </footer>
    </div>
  )
}

export default App
