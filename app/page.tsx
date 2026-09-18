'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  MessageCircle,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const services = [
  { icon: Code2, title: 'Web experiences', text: 'High-performance digital products that feel as good as they function.', tags: ['Design systems', 'Next.js', 'E-commerce'] },
  { icon: Cpu, title: 'App development', text: 'Native-quality mobile and desktop apps built around real user behavior.', tags: ['iOS & Android', 'Product strategy', 'APIs'] },
  { icon: Zap, title: 'Automation', text: 'Remove repetitive work with intelligent workflows that move at machine speed.', tags: ['AI agents', 'Workflows', 'Integrations'] },
  { icon: Cloud, title: 'Cloud infrastructure', text: 'Resilient, observable foundations engineered to scale without friction.', tags: ['DevOps', 'Cloud-native', 'Reliability'] },
  { icon: Layers3, title: 'ERP / CRM systems', text: 'Connected business systems with modules made for how your team actually works.', tags: ['ERP modules', 'CRM', 'Dashboards'] },
  { icon: ShieldCheck, title: 'AI & cybersecurity', text: 'Practical intelligence and defense for a world that never stops changing.', tags: ['Security posture', 'Threat detection', 'AI copilots'] },
]

const replies: Record<string, string> = {
  'What does ScubenAI build?': 'We build intelligent digital systems — websites, apps, automations, cloud platforms, ERP/CRM modules, and AI-powered security solutions.',
  'Tell me about the hardware': 'ScubenAI hardware is currently in development. Join the signal list and we’ll notify you when the first product is ready to reveal.',
  'I need a project estimate': 'Great. Tell us what you are building and your ideal launch window. Our team will get back to you with a focused next step.',
}

function ScubenMark({ small = false }: { small?: boolean }) {
  return <img src="/scubenai-logo.svg" alt="ScubenAI" className={small ? 'brand-logo brand-logo-small' : 'brand-logo'} />
}

export default function Page() {
  const [intro, setIntro] = useState(true)
  const [chatOpen, setChatOpen] = useState(false)
  const [donateOpen, setDonateOpen] = useState(false)
  const [donationAmount, setDonationAmount] = useState('1000')
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi — I’m the ScubenAI guide. What are you looking to build?' }])
  const [activeService, setActiveService] = useState(0)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [robotPosition, setRobotPosition] = useState({ x: -100, y: -100 })
  const chatMessagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatOpen) chatMessagesRef.current?.scrollTo({ top: chatMessagesRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, chatOpen])

  useEffect(() => {
    const timer = window.setTimeout(() => setIntro(false), 2300)
    const capabilityShuffle = window.setInterval(() => setActiveService((current) => (current + 1) % services.length), 1000)
    const moveRobot = (event: PointerEvent) => {
      setRobotPosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('pointermove', moveRobot, { passive: true })
    return () => {
      window.clearTimeout(timer)
      window.clearInterval(capabilityShuffle)
      window.removeEventListener('pointermove', moveRobot)
    }
  }, [])

  function ask(question: string) {

    setMessages((current) => [...current, { from: 'user', text: question }, { from: 'bot', text: replies[question] ?? 'Let’s map that out together. Share a little more and the ScubenAI team will take it from there.' }])
  }

  return (
    <div className="scuben-site">
      <div className="cursor-robot" style={{ transform: `translate3d(${robotPosition.x}px, ${robotPosition.y}px, 0) translate(-50%, -50%)` }} aria-hidden="true"><div className="robot-sparkle" /><div className="robot-antenna" /><div className="robot-face"><span /><span /></div><div className="robot-body"><Bot size={20} /></div><div className="robot-shadow" /></div>
      {intro && <div className="intro-screen" aria-label="ScubenAI intro"><div className="intro-orbit orbit-one" /><div className="intro-orbit orbit-two" /><ScubenMark /><p>BUILDING THE INTELLIGENT EDGE</p></div>}

      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="ScubenAI home"><ScubenMark small /><span>SCUBEN<span className="cyan">AI</span></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Capabilities</a><a href="#product">The product</a><a href="#founder">Founder</a><a href="#contact">Contact</a>
        </nav>
        <div className="header-actions"><button className="donate-link" onClick={() => setDonateOpen(true)}>Donate us <span>↗</span></button><a href="#contact" className="header-cta">Start a conversation <ArrowUpRight size={15} /></a></div>
        <button className="menu-button" aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMobileNavOpen(!mobileNavOpen)}>{mobileNavOpen ? <X size={20} /> : <Menu size={20} />}</button>
        {mobileNavOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[['#services', 'Capabilities'], ['#product', 'The product'], ['#founder', 'Founder'], ['#contact', 'Contact']].map(([href, label]) => <a key={href} href={href} onClick={() => setMobileNavOpen(false)}>{label}</a>)}<button onClick={() => { setMobileNavOpen(false); setDonateOpen(true) }}>Donate us <span>↗</span></button></nav>}
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> SCUBENAI / SYSTEMS FOR TOMORROW</div>
            <h1>Make the next<br /><em>move</em> intelligent.</h1>
            <p className="hero-lede">We design, build, and secure the digital systems that help ambitious teams move from idea to impact.</p>
            <div className="hero-actions"><a className="button-primary" href="#services">Explore capabilities <ArrowUpRight size={17} /></a><a className="text-link" href="#product">Meet the product <span>↘</span></a></div>
            <div className="hero-note"><span>01</span><span>One partner for your entire digital edge.</span></div>
          </div>
          <div className="hero-visual" aria-label="ScubenAI intelligent systems visualization">
            <div className="visual-glow" /><div className="visual-ring ring-a" /><div className="visual-ring ring-b" />
            <div className="core-card"><div className="core-top"><span className="status"><span className="pulse-dot" /> LIVE SYSTEM</span><span className="mono">v.04.26</span></div><div className="core-symbol"><BrainCircuit size={72} strokeWidth={1} /></div><strong>INTELLIGENCE<br /><span>IN MOTION</span></strong><div className="core-grid"><span>THREAT // 0.00%</span><span>UPTIME // 99.99%</span></div></div>
            <div className="float-card float-top"><Sparkles size={14} /><span>AI-NATIVE<br /><b>ARCHITECTURE</b></span></div><div className="float-card float-bottom"><Network size={14} /><span>CONNECTED<br /><b>BY DESIGN</b></span></div>
          </div>
        </section>

        <section className="signal-strip"><div><span className="signal-number">06</span><span>capability clusters</span></div><div><span className="signal-number">∞</span><span>possibilities to explore</span></div><div><span className="signal-number">01</span><span>unified digital partner</span></div><div className="signal-line" /></section>

        <section id="services" className="section-wrap services-section"><div className="section-heading"><div><span className="eyebrow">02 / WHAT WE DO</span><h2>Complex made<br /><em>clear.</em></h2></div><p>From your first sketch to the infrastructure behind it, we bring strategy, craft, and engineering into one focused team.</p></div>
          <div className="services-layout"><div className="service-list">{services.map((service, index) => { const Icon = service.icon; return <button key={service.title} className={`service-row ${activeService === index ? 'active' : ''}`} onClick={() => setActiveService(index)}><span className="service-index">0{index + 1}</span><Icon size={20} /><span>{service.title}</span><ArrowUpRight className="service-arrow" size={18} /></button> })}</div><div className="service-detail"><div className="detail-orb"><div /><div /><div /></div><div className="detail-content"><span className="eyebrow">SELECTED CAPABILITY / 0{activeService + 1}</span><h3>{services[activeService].title}</h3><p>{services[activeService].text}</p><div className="tag-list">{services[activeService].tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="detail-link">Build this with us <ArrowUpRight size={15} /></a></div></div></div>
        </section>

        <section id="clients" className="clients-section section-wrap"><div className="section-heading clients-heading"><div><span className="eyebrow">03 / TRUSTED BY THE SIGNAL</span><h2>Built for<br /><em>real impact.</em></h2></div><p>From community organizations to travel technology, we create systems that make meaningful work move further.</p></div><div className="client-grid"><a className="client-card client-card-dark" href="https://awsjsr.com" target="_blank" rel="noreferrer"><span className="client-mark">AWSJSR</span><span>Adibasi Welfare Society</span><small>Community systems / social impact</small><ArrowUpRight size={18} /></a><a className="client-card" href="https://bmbs.org.in" target="_blank" rel="noreferrer"><span className="client-mark">BMBS</span><span>Birsa Memorial Bikas Samitee</span><small>Digital presence / organization</small><ArrowUpRight size={18} /></a><div className="client-card"><span className="client-mark">TRAVEL RENTAL</span><span>Travel rental platform</span><small>Experience / booking systems</small><ArrowUpRight size={18} /></div></div><div className="affiliate-card"><div><span className="eyebrow cyan-text">SCUBENAI / AFFILIATE NETWORK</span><h3>Meet <em>Opulence Byte.</em></h3></div><p>A creative technology affiliate building elegant digital experiences with the same obsession for craft, clarity, and momentum.</p><a className="text-link" href="https://opulencebyte.com" target="_blank" rel="noreferrer">Explore the network <ArrowUpRight size={16} /></a></div></section>

        <section id="product" className="product-section"><div className="section-wrap product-grid"><div><span className="eyebrow cyan-text">03 / SOMETHING NEW IS FORMING</span><h2>Hardware for a<br /><em>smarter</em> world.</h2><p className="product-copy">The next ScubenAI product is taking shape at the intersection of intelligence, security, and the physical world.</p><div className="coming-soon"><span className="pulse-dot" /> <span>COMING SOON</span><span className="mono">// 2026</span></div><a className="button-ghost" href="#contact">Get the reveal <ArrowUpRight size={16} /></a></div><div className="product-visual"><div className="product-card"><div className="product-label">SCUBENAI / PROTOTYPE_001</div><div className="device-shape"><div className="device-core" /><span className="device-line line-one" /><span className="device-line line-two" /></div><div className="product-footer"><span>FORM FOLLOWS INTELLIGENCE</span><span>●</span></div></div></div></div></section>

        <section id="founder" className="founder-section section-wrap"><div className="founder-portrait"><div className="portrait-grid"><div className="portrait-initial">SK</div></div></div><div className="founder-copy"><span className="eyebrow">04 / THE PERSON BEHIND THE SIGNAL</span><h2>Built with conviction<br />by <em>Sandeep Kashyap.</em></h2><p>ScubenAI is founded on the belief that technology should feel more human, more considered, and more capable. Sandeep brings product thinking and deep engineering together to build what comes next.</p><a className="text-link" href="https://sandeepkashyap.dev" target="_blank" rel="noreferrer">Visit Sandeep&apos;s portfolio <ArrowUpRight size={16} /></a></div></section>

        <section id="contact" className="contact-section section-wrap"><div className="contact-panel"><div><span className="eyebrow">05 / YOUR NEXT MOVE</span><h2>Have a bold<br /><em>idea?</em></h2></div><div className="contact-side"><p>Tell us what you’re imagining. We’ll help turn the signal into a system.</p><a href="mailto:hello@scubenai.com" className="button-primary">hello@scubenai.com <ArrowUpRight size={17} /></a></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><a href="#top" className="brand-lockup"><ScubenMark small /><span>SCUBEN<span className="cyan">AI</span></span></a><span>INTELLIGENT SYSTEMS / EST. 2026</span><span>© SCUBENAI</span></footer>

      <button className={`chat-launcher ${chatOpen ? 'open' : ''}`} onClick={() => setChatOpen(!chatOpen)} aria-label={chatOpen ? 'Close ScubenAI chat' : 'Open ScubenAI chat'}>{chatOpen ? <X size={22} /> : <MessageCircle size={22} />}<span>{chatOpen ? 'Close' : 'Ask ScubenAI'}</span></button>
      {donateOpen && <div className="donate-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setDonateOpen(false) }}><section className="donate-modal" role="dialog" aria-modal="true" aria-labelledby="donate-title"><button className="donate-close" onClick={() => setDonateOpen(false)} aria-label="Close donation dialog"><X size={18} /></button><div className="donate-orb"><span>♥</span></div><span className="eyebrow">SCUBENAI / SUPPORT THE SIGNAL</span><h2 id="donate-title">Fuel what&apos;s<br /><em>next.</em></h2><p>Your contribution helps us explore ambitious ideas in intelligent systems, open innovation, and future-facing hardware.</p><div className="donation-amounts">{['500', '1000', '2500', '5000'].map((amount) => <button key={amount} className={donationAmount === amount ? 'selected' : ''} onClick={() => setDonationAmount(amount)}>₹{Number(amount).toLocaleString('en-IN')}</button>)}</div><label className="custom-amount">Custom amount<input inputMode="numeric" value={donationAmount} onChange={(event) => setDonationAmount(event.target.value.replace(/\\D/g, '').slice(0, 7))} placeholder="Enter amount" /></label><button className="razorpay-button" onClick={() => window.alert('Razorpay checkout is ready to connect. Add your Razorpay Key ID in project Vars to activate live payments.')}>Continue with Razorpay <ArrowUpRight size={17} /></button><small><LockKeyhole size={13} /> Secure checkout powered by Razorpay</small></section></div>}
      {chatOpen && <aside className="chat-panel" aria-label="ScubenAI chatbot"><div className="chat-header"><div><span className="status"><span className="pulse-dot" /> SCUBENAI GUIDE</span><strong>Let&apos;s build forward.</strong></div><button onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={17} /></button></div><div className="chat-messages" ref={chatMessagesRef}>{messages.map((message, index) => <div className={`chat-message ${message.from}`} key={`${message.text}-${index}`}>{message.text}</div>)}</div><div className="quick-asks">{Object.keys(replies).map((question) => <button key={question} onClick={() => ask(question)}>{question}</button>)}</div><div className="chat-input"><input aria-label="Ask a question" placeholder="Ask a question..." onKeyDown={(event) => { if (event.key === 'Enter' && event.currentTarget.value.trim()) { ask(event.currentTarget.value.trim()); event.currentTarget.value = '' } }} /><button aria-label="Send question" onClick={() => { const input = document.querySelector<HTMLInputElement>('.chat-input input'); if (input?.value.trim()) { ask(input.value.trim()); input.value = '' } }}><Send size={16} /></button></div></aside>}
    </div>
  )
}
