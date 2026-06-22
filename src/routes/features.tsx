import { createFileRoute } from '@tanstack/react-router'
import { Cpu, HardDrive, Shield, Zap, Activity, Lock, Database, Server, LifeBuoy, Globe, Terminal, RefreshCw, Cloud, BarChart2, Bell, Settings } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/features')({
  component: FeaturesPage,
})

const features = [
  { icon: Cpu, title: 'AMD Ryzen CPUs', desc: 'Industry-leading AMD Ryzen processors with high single-thread performance ensure your game server runs buttery smooth with zero lag.', color: '#ef4444' },
  { icon: HardDrive, title: 'NVMe SSD Storage', desc: 'Ultra-fast NVMe solid-state drives for lightning-quick world loads, chunk generation, and database operations.', color: '#f59e0b' },
  { icon: Shield, title: 'Enterprise DDoS Protection', desc: 'Multi-layer DDoS mitigation up to 1Tbps. Your server stays online even during the most intense attacks.', color: '#22c55e' },
  { icon: Zap, title: 'Instant Server Deployment', desc: 'Your server goes live in seconds after payment. No waiting, no configuration needed — just play.', color: '#a855f7' },
  { icon: Activity, title: '99.9% Uptime SLA', desc: 'We guarantee 99.9% uptime backed by redundant infrastructure and 24/7 monitoring.', color: '#06b6d4' },
  { icon: Lock, title: 'Full SFTP Access', desc: 'Complete SFTP access to your server files. Upload mods, plugins, and world files with ease.', color: '#ec4899' },
  { icon: Database, title: 'Unlimited MySQL Databases', desc: 'Create as many MySQL databases as you need for your plugins and applications. No extra cost.', color: '#84cc16' },
  { icon: Server, title: 'Pterodactyl Panel', desc: 'Industry-standard Pterodactyl game panel with one-click installs, backups, console access, and file manager.', color: '#22c55e' },
  { icon: LifeBuoy, title: '24/7 Expert Support', desc: 'Our team is available around the clock via Discord, ticket system, and live chat to resolve any issue fast.', color: '#f59e0b' },
  { icon: Globe, title: 'Global Node Network', desc: 'Strategically placed servers across India, Singapore, USA, UK, and more for the lowest possible latency.', color: '#06b6d4' },
  { icon: Terminal, title: 'Console Access', desc: 'Full real-time console access through the panel. Run commands, read logs, and debug issues instantly.', color: '#a855f7' },
  { icon: RefreshCw, title: 'Automated Backups', desc: 'Scheduled daily backups keep your world data safe. Restore to any point with a single click.', color: '#ef4444' },
  { icon: Cloud, title: 'One-Click Game Install', desc: 'Install Minecraft, Rust, CS:GO, and 100+ games with a single click directly from the panel.', color: '#22c55e' },
  { icon: BarChart2, title: 'Resource Monitoring', desc: 'Real-time CPU, RAM, and disk usage graphs. Know exactly how your server is performing.', color: '#f59e0b' },
  { icon: Bell, title: 'Instant Alerts', desc: 'Get notified via Discord or email when your server goes offline or resources are running low.', color: '#ec4899' },
  { icon: Settings, title: 'Custom JAR Support', desc: 'Upload and run any custom JAR file — Paper, Purpur, Forge, Fabric, Spigot, and more.', color: '#64748b' },
]

const panel = [
  'One-click server start/stop/restart',
  'Real-time console output',
  'File manager with editor',
  'Automated & manual backups',
  'Sub-user management with permissions',
  'SFTP access credentials',
  'Schedule tasks (cron-style)',
  'Database management',
  'Resource usage graphs',
  'Multiple game server support',
  'API access for automation',
  '2FA security',
]

export default function FeaturesPage() {
  return (
    <div>
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 className="section-title">Powerful <span className="gradient-text">Features</span></h1>
          <p className="section-sub">Everything you need for a world-class game server. No compromises, no hidden limits.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {features.map((f, i) => (
              <div key={f.title} className="card" style={{ animationDelay: `${i * 0.05}s`, display: 'flex', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ background: `${f.color}15`, border: `1px solid ${f.color}30`, borderRadius: '0.75rem', padding: '0.75rem', height: 'fit-content', flexShrink: 0 }}>
                  <f.icon size={22} style={{ color: f.color, display: 'block' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: '0.4rem', fontSize: '1rem' }}>{f.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pterodactyl Panel */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title">Pterodactyl Game <span className="gradient-text">Panel</span></h2>
          <p className="section-sub">Industry-standard game management panel trusted by thousands of hosting providers worldwide.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
            {panel.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '0.75rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games supported */}
      <section style={{ padding: '5rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">100+ <span className="gradient-text">Games Supported</span></h2>
          <p className="section-sub">From Minecraft to Rust, CS:GO to Terraria — we support virtually every popular game server.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {['Minecraft Java', 'Minecraft Bedrock', 'Rust', 'CS:GO', 'CS2', 'Terraria', 'Valheim', 'ARK', 'Team Fortress 2', 'Garry\'s Mod', 'Factorio', 'Don\'t Starve Together', '7 Days to Die', 'Insurgency', 'Squad', 'Project Zomboid', 'V Rising', 'Palworld', 'SatisfactoryAnd more...'].map(g => (
              <span key={g} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0.4rem 1rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500 }}>{g}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
