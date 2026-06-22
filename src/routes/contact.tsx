import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MessageCircle, Mail, Ticket, Send, ExternalLink } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open mailto as fallback
    const mailto = `mailto:shopdaksh@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto)
    setSent(true)
  }

  const channels = [
    { icon: MessageCircle, title: 'Discord', desc: 'Get instant help from our community and support team. Response time: < 5 minutes', action: 'Join Discord', link: 'https://discord.gg/ej9TruFDRx', color: '#5865f2' },
    { icon: Ticket, title: 'Support Ticket', desc: 'Open a formal support ticket for billing, account, or technical issues.', action: 'Open Ticket', link: 'https://discord.gg/ej9TruFDRx', color: '#22c55e' },
    { icon: Mail, title: 'Email', desc: 'For business inquiries, partnerships, or formal communication.', action: 'shopdaksh@gmail.com', link: 'mailto:shopdaksh@gmail.com', color: '#f59e0b' },
  ]

  return (
    <div>
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 className="section-title">Get <span className="gradient-text">Support</span></h1>
          <p className="section-sub">We're here 24/7 to help. Choose the best way to reach us below.</p>

          {/* Support Channels */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
            {channels.map(c => (
              <a key={c.title} href={c.link} target={c.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, borderRadius: '0.75rem', padding: '0.875rem', width: 'fit-content' }}>
                    <c.icon size={24} style={{ color: c.color, display: 'block' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.4rem' }}>{c.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{c.desc}</p>
                    <span style={{ color: c.color, fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      {c.action} <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="card" style={{ maxWidth: '700px', margin: '0 auto', padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Send us a Message</h2>
            <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#22c55e' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: '#64748b' }}>Your email client should have opened. You'll hear from us soon!</p>
                <button onClick={() => setSent(false)} className="btn-secondary" style={{ marginTop: '1.5rem' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: '#94a3b8' }}>Your Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: '#94a3b8' }}>Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: '#94a3b8' }}>Subject *</label>
                  <input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: '#94a3b8' }}>Message *</label>
                  <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Describe your issue or question in detail..." style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
