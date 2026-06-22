import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Search, ChevronRight, Book, Server, CreditCard, LifeBuoy, Settings, Shield } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/knowledge-base')({
  component: KnowledgeBasePage,
})

const categories = [
  { icon: Server, label: 'Getting Started', color: '#22c55e' },
  { icon: Settings, label: 'Server Management', color: '#a855f7' },
  { icon: CreditCard, label: 'Billing & Payments', color: '#f59e0b' },
  { icon: LifeBuoy, label: 'Troubleshooting', color: '#06b6d4' },
  { icon: Shield, label: 'Security', color: '#ef4444' },
  { icon: Book, label: 'Tutorials', color: '#84cc16' },
]

const articles = [
  { cat: 'Getting Started', q: 'How do I set up my first Minecraft server?', a: 'After purchasing a plan, your server is automatically deployed within seconds. Log into the Pterodactyl panel using the credentials sent to your email. From there, click "Start" to launch your server. The default game port will be shown in the panel.' },
  { cat: 'Getting Started', q: 'What is Pterodactyl panel?', a: 'Pterodactyl is a modern, open-source game server management panel. It provides a web interface to manage your server files, console, databases, backups, and more. All FizzyHost plans include full access to Pterodactyl.' },
  { cat: 'Getting Started', q: 'How do I connect to my server via SFTP?', a: 'In your Pterodactyl panel, go to the "Settings" tab. You\'ll find SFTP connection details including host, port, username, and password. Use a client like FileZilla or WinSCP to connect and manage your server files.' },
  { cat: 'Server Management', q: 'How do I install plugins on my Minecraft server?', a: 'Upload plugins to the /plugins folder via SFTP or the File Manager in Pterodactyl. Make sure your server is running Paper, Spigot, or Purpur as these support plugins. Restart your server after uploading plugins.' },
  { cat: 'Server Management', q: 'How do I create a MySQL database?', a: 'In Pterodactyl, go to the "Databases" tab and click "Create Database". Enter a name and click create. Your database host, name, username, and password will be displayed. Use these credentials in your plugin config.' },
  { cat: 'Server Management', q: 'How do I restore a backup?', a: 'Navigate to the "Backups" tab in Pterodactyl. Click the three-dot menu on any backup and select "Restore". This will restore your server files to that backup point. Note: the server must be offline to restore.' },
  { cat: 'Billing & Payments', q: 'What payment methods do you accept?', a: 'We accept UPI, PhonePe, Google Pay, PayPal, Fampay, Junio, and all international payment methods allowed in India. Contact us on Discord for alternative payment arrangements.' },
  { cat: 'Billing & Payments', q: 'Do you offer refunds?', a: 'No. We have a strict no-refund policy after server deployment. Please read our Refund Policy page in full before ordering. In case of billing errors, contact us immediately at shopdaksh@gmail.com.' },
  { cat: 'Billing & Payments', q: 'How do I upgrade my plan?', a: 'Contact our support team on Discord or via email to request an upgrade. Upgrades take effect immediately and you pay the prorated difference. Downgrades take effect at the next billing cycle.' },
  { cat: 'Troubleshooting', q: 'My server won\'t start — what do I do?', a: 'First, check the console in Pterodactyl for error messages. Common issues: (1) Not enough RAM allocated (2) Plugin conflicts (3) Corrupt world data. Try removing recently added plugins and restarting. If issues persist, open a Discord ticket.' },
  { cat: 'Troubleshooting', q: 'Players are experiencing high latency/lag', a: 'High latency can be caused by: (1) Server being overloaded (check CPU/RAM usage in panel) (2) Player location vs server location (3) Plugin-related TPS drops. Use /tps in-game to check server performance. Consider upgrading your plan if resources are maxed.' },
  { cat: 'Security', q: 'How is my server protected from DDoS attacks?', a: 'All FizzyHost servers include enterprise-grade DDoS mitigation capable of handling attacks up to 1Tbps. Protection is automatic and transparent — your server stays online even during attacks. Additional IP protection can be requested.' },
  { cat: 'Security', q: 'How do I enable 2FA on my panel account?', a: 'In Pterodactyl, go to your Account Settings (top right user icon) and navigate to "Two Factor Authentication". Scan the QR code with Google Authenticator or Authy and enter the 6-digit code to enable 2FA.' },
]

export default function KnowledgeBasePage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [openArticle, setOpenArticle] = useState<number | null>(null)

  const filtered = articles.filter(a => {
    const matchSearch = !search || a.q.toLowerCase().includes(search.toLowerCase()) || a.a.toLowerCase().includes(search.toLowerCase())
    const matchCat = !activeCategory || a.cat === activeCategory
    return matchSearch && matchCat
  })

  return (
    <div>
      <section style={{ padding: '5rem 1.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 className="section-title">Knowledge <span className="gradient-text">Base</span></h1>
          <p className="section-sub">Find answers, tutorials, and guides for everything FizzyHost.</p>

          {/* Search */}
          <div style={{ maxWidth: '600px', margin: '0 auto 3rem', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              value={search}
              onChange={e => { setSearch(e.target.value); setActiveCategory(null) }}
              placeholder="Search articles..."
              style={{ paddingLeft: '3rem', height: '52px', fontSize: '1rem' }}
            />
          </div>

          {/* Categories */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <button
              onClick={() => setActiveCategory(null)}
              style={{ padding: '0.5rem 1.25rem', borderRadius: '999px', border: `1px solid ${!activeCategory ? 'rgba(34,197,94,0.5)' : 'var(--color-border)'}`, background: !activeCategory ? 'rgba(34,197,94,0.1)' : 'transparent', color: !activeCategory ? '#22c55e' : '#94a3b8', fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem', transition: 'all 0.2s' }}
            >
              All Articles
            </button>
            {categories.map(c => (
              <button
                key={c.label}
                onClick={() => { setActiveCategory(c.label === activeCategory ? null : c.label); setSearch('') }}
                style={{ padding: '0.5rem 1.25rem', borderRadius: '999px', border: `1px solid ${activeCategory === c.label ? `${c.color}50` : 'var(--color-border)'}`, background: activeCategory === c.label ? `${c.color}15` : 'transparent', color: activeCategory === c.label ? c.color : '#94a3b8', fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <c.icon size={14} /> {c.label}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
                No articles found. <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" style={{ color: '#22c55e', textDecoration: 'none' }}>Ask on Discord →</a>
              </div>
            ) : filtered.map((article, i) => (
              <div key={i} style={{ background: 'var(--color-surface)', border: `1px solid ${openArticle === i ? 'rgba(34,197,94,0.4)' : 'var(--color-border)'}`, borderRadius: '0.75rem', overflow: 'hidden', transition: 'border-color 0.3s' }}>
                <button
                  onClick={() => setOpenArticle(openArticle === i ? null : i)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{article.cat}</div>
                    <div style={{ fontWeight: 700, color: '#e2e8f0', fontSize: '1rem' }}>{article.q}</div>
                  </div>
                  <ChevronRight size={18} style={{ color: '#22c55e', transition: 'transform 0.3s', transform: openArticle === i ? 'rotate(90deg)' : 'none', flexShrink: 0 }} />
                </button>
                {openArticle === i && (
                  <div style={{ padding: '0 1.5rem 1.25rem', color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', animation: 'fadeInDown 0.3s ease', borderTop: '1px solid rgba(30,58,95,0.5)', paddingTop: '1rem', marginTop: '-0.25rem' }}>
                    {article.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '1rem' }}>
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>Can't find what you're looking for?</p>
            <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" className="btn-primary">Ask on Discord</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
