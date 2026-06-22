import { createFileRoute } from '@tanstack/react-router'
import { Users, Globe, Zap, Heart, Award, Clock } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const team = [
  { name: 'Daksh', role: 'Founder & CEO', avatar: '👨‍💻', desc: 'Passionate about gaming and making high-quality hosting accessible to everyone.' },
  { name: 'Mat', role: 'Co-Founder & CTO', avatar: '🧑‍💻', desc: 'Infrastructure expert with years of experience managing large-scale game server networks.' },
]

const values = [
  { icon: Zap, title: 'Performance First', desc: 'We never compromise on hardware quality. Only the best CPUs and NVMe SSDs for your servers.' },
  { icon: Heart, title: 'Community Driven', desc: 'Built for the gaming community, by gamers. We listen to our players and constantly improve.' },
  { icon: Clock, title: 'Always Available', desc: '24/7 support because gaming doesn\'t have business hours. We\'re always here when you need us.' },
  { icon: Award, title: 'Transparent Pricing', desc: 'No hidden fees, no surprise charges. What you see is what you pay, always.' },
  { icon: Globe, title: 'Global Reach', desc: 'With nodes across multiple continents, we bring low-latency hosting to players worldwide.' },
  { icon: Users, title: 'Growing Community', desc: 'Over 8,500 Discord members and growing. Join the FizzyHost family today.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 className="section-title">About <span className="gradient-text">FizzyHost</span></h1>
          <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            FizzyHost was born out of a simple idea: every gamer deserves access to high-performance, affordable game server hosting. We started in India and have grown into a global hosting provider trusted by thousands of server owners.
          </p>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.8 }}>
            Our mission is to power the gaming communities of tomorrow — from small friend groups to massive networks with thousands of players. We believe performance and affordability don't have to be mutually exclusive.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { value: '2022', label: 'Year Founded' },
            { value: '5000+', label: 'Happy Customers' },
            { value: '14', label: 'Global Nodes' },
            { value: '8500+', label: 'Discord Members' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900 }} className="gradient-text">{s.value}</div>
              <div style={{ color: '#64748b', marginTop: '0.25rem', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-title">Our <span className="gradient-text">Values</span></h2>
          <p className="section-sub">The principles that guide every decision we make at FizzyHost.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {values.map(v => (
              <div key={v.title} className="card" style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '0.75rem', padding: '0.75rem', height: 'fit-content' }}>
                  <v.icon size={22} style={{ color: '#22c55e', display: 'block' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.4rem' }}>{v.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">Meet the <span className="gradient-text">Team</span></h2>
          <p className="section-sub">The people behind FizzyHost who work tirelessly to give you the best experience.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {team.map(member => (
              <div key={member.name} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.avatar}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{member.name}</h3>
                <div style={{ color: '#22c55e', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem' }}>{member.role}</div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Want to <span className="gradient-text">Connect?</span></h2>
          <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.7 }}>
            We'd love to hear from you. Whether it's feedback, partnership inquiries, or just saying hi — reach out anytime.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" className="btn-primary">Join Discord</a>
            <a href="mailto:shopdaksh@gmail.com" className="btn-secondary">Email Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
