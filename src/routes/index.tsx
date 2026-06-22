import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
  Server, Zap, Shield, Database, Cpu, HardDrive, LifeBuoy,
  Users, Star, ChevronRight, ArrowRight, Globe, CheckCircle,
  MessageCircle, Clock, Lock, Activity
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: React.ElementType }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const count = useCounter(value, 2000, visible)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '2rem', animation: visible ? 'count-up 0.5s ease forwards' : 'none', opacity: visible ? 1 : 0 }}>
      <Icon size={32} style={{ color: '#22c55e', margin: '0 auto 0.75rem', display: 'block' }} />
      <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }} className="gradient-text">
        {count}{suffix}
      </div>
      <div style={{ color: '#64748b', marginTop: '0.5rem', fontSize: '1rem', fontWeight: 500 }}>{label}</div>
    </div>
  )
}

function ParticlesBg() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="particle" style={{
          left: `${Math.random() * 100}%`,
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          background: i % 2 === 0 ? 'rgba(34,197,94,0.6)' : 'rgba(168,85,247,0.6)',
          animationDuration: `${10 + Math.random() * 20}s`,
          animationDelay: `${Math.random() * 10}s`,
        }} />
      ))}
    </div>
  )
}

const plans = [
  { name: 'Copper', icon: '🥉', color: '#cd7f32', ram: '8GB', cpu: '300%', storage: '20GB', price_inr: 374, price_usd: 2.35, yearly_inr: 2999, yearly_usd: 18.99 },
  { name: 'Iron', icon: '⚙️', color: '#a8a9ad', ram: '12GB', cpu: '400%', storage: '30GB', price_inr: 524, price_usd: 4.10, yearly_inr: 4299, yearly_usd: 32.99 },
  { name: 'Gold', icon: '🥇', color: '#ffd700', ram: '16GB', cpu: '600%', storage: '50GB', price_inr: 749, price_usd: 6.70, yearly_inr: 5799, yearly_usd: 52.99, popular: true },
  { name: 'Emerald', icon: '💎', color: '#50c878', ram: '24GB', cpu: '800%', storage: '80GB', price_inr: 1199, price_usd: 11.95, yearly_inr: 9499, yearly_usd: 94.99 },
  { name: 'Obsidian', icon: '🖤', color: '#a855f7', ram: '32GB', cpu: '1000%', storage: '100GB', price_inr: 2099, price_usd: 22.40, yearly_inr: 16999, yearly_usd: 179.99 },
]

const features = [
  { icon: Cpu, title: 'Ryzen CPUs', desc: 'AMD Ryzen processors for blazing-fast game server performance.' },
  { icon: HardDrive, title: 'NVMe SSD', desc: 'Ultra-fast NVMe storage ensures rapid world loading and data access.' },
  { icon: Shield, title: 'DDoS Protection', desc: 'Enterprise-grade DDoS mitigation protecting your server 24/7.' },
  { icon: Zap, title: 'Instant Setup', desc: 'Your server is live in seconds — no waiting, no delays.' },
  { icon: Activity, title: '99.9% Uptime', desc: 'Guaranteed uptime SLA so your players never get disconnected.' },
  { icon: Lock, title: 'SFTP Access', desc: 'Full SFTP access to manage your files with ease.' },
  { icon: Database, title: 'MySQL Included', desc: 'Unlimited MySQL databases for plugins and mods.' },
  { icon: Server, title: 'Pterodactyl Panel', desc: 'Powerful game panel with one-click installs and backups.' },
  { icon: LifeBuoy, title: '24/7 Support', desc: 'Round-the-clock expert support via Discord and tickets.' },
  { icon: Globe, title: 'Global Nodes', desc: 'Low latency servers in India, Singapore, USA, UK and more.' },
]

const nodeStatus = [
  { flag: '🇺🇸', name: 'US FREE NODE', status: 'offline' as const },
  { flag: '🇺🇸', name: 'US NODE-2', status: 'online' as const },
  { flag: '🇮🇳', name: 'IN-1 PAID NODE', status: 'online' as const },
  { flag: '🇮🇳', name: 'IN-2 PAID NODE', status: 'online' as const },
  { flag: '🇮🇳', name: 'IN-3 PAID NODE', status: 'online' as const },
  { flag: '🇸🇬', name: 'SINGAPORE NODE-1', status: 'online' as const },
  { flag: '🇬🇧', name: 'UK NODE-1', status: 'coming' as const },
]

const testimonials = [
  { name: 'Arjun S.', role: 'Minecraft Server Owner', rating: 5, text: 'FizzyHost has been incredible! Zero lag, instant setup, and the support team helped me 24/7. Best hosting I\'ve used.' },
  { name: 'Priya M.', role: 'Gaming Community Leader', rating: 5, text: 'Switched from another host and the difference is night and day. Ryzen CPUs make my server super smooth.' },
  { name: 'Rohan K.', role: 'YouTuber', rating: 5, text: 'Perfect for YouTube content creators! The uptime is amazing and performance never drops even with 100+ players.' },
  { name: 'Divya R.', role: 'Mod Developer', rating: 5, text: 'The Pterodactyl panel makes management so easy. SFTP access and unlimited databases are a game changer.' },
]

const faqs = [
  { q: 'What games do you support?', a: 'We support Minecraft (Java & Bedrock), Rust, CS:GO, Terraria, Valheim, ARK and 100+ other games via Pterodactyl panel.' },
  { q: 'How fast is the setup?', a: 'Your server is live within seconds after payment confirmation. No waiting period required.' },
  { q: 'What payment methods do you accept?', a: 'We accept UPI, PhonePe, Google Pay, PayPal, Fampay, Junio, and other international payment methods supported in India.' },
  { q: 'Do you offer refunds?', a: 'Refunds are not available after server deployment. Please review our Refund Policy before ordering.' },
  { q: 'How do I get support?', a: 'Join our Discord server at discord.gg/ej9TruFDRx for instant support, or open a ticket via our support panel.' },
  { q: 'Can I upgrade my plan?', a: 'Yes! You can upgrade or downgrade your plan anytime from your billing panel. Changes take effect immediately.' },
]

const paymentMethods = ['UPI', 'PayPal', 'PhonePe', 'Google Pay', 'Fampay', 'Junio']

export default function Home() {
  const [yearlyMode, setYearlyMode] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }} className="grid-overlay">
        <div className="hero-bg" />
        <ParticlesBg />
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '2rem', animation: 'fadeInDown 0.5s ease' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.8)', display: 'inline-block', animation: 'pulse-glow 1.5s infinite' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#22c55e' }}>14 Nodes Online Worldwide</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', animation: 'fadeInUp 0.6s ease' }}>
            <span className="gradient-text">Premium Game Hosting</span>
            <br />
            <span style={{ color: '#e2e8f0' }}>Starting at </span>
            <span style={{ color: '#22c55e' }}>₹374/mo</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7, animation: 'fadeInUp 0.6s ease 0.1s both' }}>
            High-performance Minecraft & game servers powered by AMD Ryzen CPUs, NVMe SSDs, and enterprise DDoS protection. Deployed in seconds.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', animation: 'fadeInUp 0.6s ease 0.2s both' }}>
            <Link to="/plans" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.875rem 2.5rem' }}>
              Get Started <ArrowRight size={18} />
            </Link>
            <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '1.05rem', padding: '0.875rem 2.5rem' }}>
              Join Discord <MessageCircle size={18} />
            </a>
          </div>

          {/* Payment methods */}
          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', animation: 'fadeInUp 0.6s ease 0.3s both' }}>
            <span style={{ color: '#64748b', fontSize: '0.875rem', alignSelf: 'center' }}>Pay via:</span>
            {paymentMethods.map(m => (
              <span key={m} style={{ background: 'rgba(30,58,95,0.5)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0.3rem 0.75rem', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8' }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <StatCard value={5000} suffix="+" label="Customers Served" icon={Users} />
          <StatCard value={12000} suffix="+" label="Servers Hosted" icon={Server} />
          <StatCard value={14} suffix="" label="Nodes Online" icon={Globe} />
          <StatCard value={8500} suffix="+" label="Discord Members" icon={MessageCircle} />
        </div>
      </section>

      {/* Plans Preview */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>🎉 YEARLY OFFER — SAVE BIG (LIMITED TIME)</span>
          </div>
          <h2 className="section-title">Minecraft Hosting Plans</h2>
          <p className="section-sub">Choose the perfect plan for your server. All plans include DDoS protection, instant setup, and 24/7 support.</p>

          {/* Toggle */}
          <div className="toggle-wrapper">
            <span style={{ fontWeight: 600, color: !yearlyMode ? '#22c55e' : '#64748b' }}>Monthly</span>
            <label className="toggle">
              <input type="checkbox" checked={yearlyMode} onChange={e => setYearlyMode(e.target.checked)} />
              <span className="toggle-slider" />
            </label>
            <span style={{ fontWeight: 600, color: yearlyMode ? '#22c55e' : '#64748b' }}>Yearly <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '999px', padding: '0.15rem 0.6rem', fontSize: '0.75rem', color: '#22c55e' }}>Save up to 15%</span></span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {plans.map((plan, i) => (
              <div key={plan.name} className={plan.popular ? 'card-highlight' : 'card'} style={{ animationDelay: `${i * 0.1}s`, display: 'flex', flexDirection: 'column' }}>
                {plan.popular && (
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <span className="badge-popular">Most Popular</span>
                  </div>
                )}
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{plan.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: plan.color, marginBottom: '0.25rem' }}>{plan.name} Plan</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#e2e8f0' }}>
                    ₹{yearlyMode ? plan.yearly_inr.toLocaleString() : plan.price_inr}
                    <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 400 }}>/{yearlyMode ? 'yr' : 'mo'}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    ${yearlyMode ? plan.yearly_usd : plan.price_usd}/{yearlyMode ? 'yr' : 'mo'}
                  </div>
                  {yearlyMode && (
                    <div style={{ fontSize: '0.75rem', color: '#f59e0b', marginTop: '0.25rem' }}>
                      Was ₹{(plan.price_inr * 12).toLocaleString()}/yr
                    </div>
                  )}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                  {[`${plan.ram} RAM`, `${plan.cpu} CPU`, `${plan.storage} NVMe Storage`, 'DDoS Protection', 'Pterodactyl Panel', 'Full SFTP Access', 'MySQL Included', '24/7 Support'].map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8' }}>
                      <CheckCircle size={14} style={{ color: '#22c55e', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/plans" className="btn-primary" style={{ marginTop: '1.5rem', textAlign: 'center', justifyContent: 'center' }}>
                  Order Now
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/plans" className="btn-secondary">View All Plans & Features <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">Why Choose <span className="gradient-text">FizzyHost?</span></h2>
          <p className="section-sub">Everything you need for a perfect game server experience, included in every plan.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {features.map((f, i) => (
              <div key={f.title} className="card" style={{ animationDelay: `${i * 0.05}s` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ background: 'rgba(34,197,94,0.1)', borderRadius: '0.5rem', padding: '0.6rem', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <f.icon size={20} style={{ color: '#22c55e' }} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{f.title}</h3>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Node Locations */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title">Node <span className="gradient-text">Locations</span></h2>
          <p className="section-sub">We operate globally with low-latency nodes across multiple continents.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {nodeStatus.map(node => (
              <div key={node.name} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem' }}>
                <span style={{ fontSize: '1.75rem' }}>{node.flag}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{node.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                    <span className={`status-dot ${node.status}`} />
                    <span style={{ fontSize: '0.8rem', color: node.status === 'online' ? '#22c55e' : node.status === 'offline' ? '#ef4444' : '#f59e0b', fontWeight: 600 }}>
                      {node.status === 'online' ? 'Online' : node.status === 'offline' ? 'Offline' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/status" className="btn-secondary">View Full Status Page <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-title">What Players <span className="gradient-text">Say</span></h2>
          <p className="section-sub">Trusted by thousands of Minecraft server owners and gaming communities.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={t.name} className="testimonial-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                  ))}
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>"{t.text}"</p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-sub">Got questions? We have answers. Can't find what you need? Join our Discord!</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'var(--color-surface)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.4)' : 'var(--color-border)'}`, borderRadius: '0.75rem', overflow: 'hidden', transition: 'border-color 0.3s' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', color: '#e2e8f0', fontWeight: 700, cursor: 'pointer', fontSize: '1rem', textAlign: 'left', gap: '1rem' }}
                >
                  {faq.q}
                  <ChevronRight size={18} style={{ color: '#22c55e', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(90deg)' : 'none', flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.25rem', color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', animation: 'fadeInDown 0.3s ease' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/knowledge-base" className="btn-secondary">Full Knowledge Base <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-border)', background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(168,85,247,0.08))' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1rem' }}>
            Ready to <span className="gradient-text">Launch?</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Join 5,000+ server owners who trust FizzyHost for reliable, high-performance game hosting.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/plans" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
              Start Hosting <ArrowRight size={20} />
            </Link>
            <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
              <MessageCircle size={20} /> Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="FizzyHost" style={{ height: '32px', objectFit: 'contain' }} />
              <span style={{ fontWeight: 900, fontSize: '1.2rem' }} className="gradient-text">FizzyHost</span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Premium game server hosting with Ryzen CPUs, NVMe storage, and DDoS protection. Starting at ₹374/month.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                Discord
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8' }}>Hosting</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[['Plans', '/plans'], ['Features', '/features'], ['Node Status', '/status'], ['Knowledge Base', '/knowledge-base']].map(([l, h]) => (
                <Link key={h} to={h as any} style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                >{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[['About Us', '/about'], ['Contact', '/contact'], ['Support', '/contact']].map(([l, h]) => (
                <Link key={h} to={h as any} style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                >{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[['Terms of Service', '/terms'], ['Privacy Policy', '/privacy'], ['Refund Policy', '/refund']].map(([l, h]) => (
                <Link key={h} to={h as any} style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                >{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8' }}>Payment</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {paymentMethods.map(m => (
                <span key={m} style={{ background: 'rgba(30,58,95,0.5)', border: '1px solid var(--color-border)', borderRadius: '0.35rem', padding: '0.2rem 0.6rem', fontSize: '0.8rem', color: '#64748b' }}>{m}</span>
              ))}
            </div>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.3rem' }}>All major world currencies accepted</div>
              <div style={{ fontSize: '0.75rem', color: '#475569' }}>₹ INR · $ USD · € EUR · £ GBP & more</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
          <div style={{ color: '#475569', fontSize: '0.875rem' }}>© 2025 FizzyHost. All rights reserved.</div>
          <div style={{ color: '#475569', fontSize: '0.875rem' }}>Made with ❤️ for gamers worldwide</div>
        </div>
      </div>
    </footer>
  )
}
