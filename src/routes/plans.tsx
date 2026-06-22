import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle, ArrowRight, ChevronRight, Info } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/plans')({
  component: PlansPage,
})

const plans = [
  {
    name: 'Copper', icon: '🥉', color: '#cd7f32', ram: '8GB', cpu: '300%', storage: '20GB NVMe',
    price_inr: 374, price_usd: 2.35, yearly_inr: 2999, yearly_usd: 18.99,
    desc: 'Perfect for small servers up to 10 players',
    features: ['8GB RAM', '300% CPU', '20GB NVMe Storage', 'DDoS Protection', 'Pterodactyl Panel', 'Full SFTP Access', 'MySQL Included', '24/7 Discord Support', 'Instant Setup', '99.9% Uptime'],
  },
  {
    name: 'Iron', icon: '⚙️', color: '#a8a9ad', ram: '12GB', cpu: '400%', storage: '30GB NVMe',
    price_inr: 524, price_usd: 4.10, yearly_inr: 4299, yearly_usd: 32.99,
    desc: 'Great for medium servers up to 30 players',
    features: ['12GB RAM', '400% CPU', '30GB NVMe Storage', 'DDoS Protection', 'Pterodactyl Panel', 'Full SFTP Access', 'Unlimited MySQL DBs', '24/7 Support', 'Instant Setup', '99.9% Uptime'],
  },
  {
    name: 'Gold', icon: '🥇', color: '#ffd700', ram: '16GB', cpu: '600%', storage: '50GB NVMe',
    price_inr: 749, price_usd: 6.70, yearly_inr: 5799, yearly_usd: 52.99, popular: true,
    desc: 'Best for servers with 50–100 players',
    features: ['16GB RAM', '600% CPU', '50GB NVMe Storage', 'DDoS Protection', 'Pterodactyl Panel', 'Full SFTP Access', 'Unlimited MySQL DBs', '24/7 Priority Support', 'Instant Setup', '99.9% Uptime', 'Custom Domain'],
  },
  {
    name: 'Emerald', icon: '💎', color: '#50c878', ram: '24GB', cpu: '800%', storage: '80GB NVMe',
    price_inr: 1199, price_usd: 11.95, yearly_inr: 9499, yearly_usd: 94.99,
    desc: 'For large networks with 100+ players',
    features: ['24GB RAM', '800% CPU', '80GB NVMe Storage', 'DDoS Protection', 'Pterodactyl Panel', 'Full SFTP Access', 'Unlimited MySQL DBs', '24/7 Priority Support', 'Instant Setup', '99.9% Uptime', 'Custom Domain', 'Daily Backups'],
  },
  {
    name: 'Obsidian', icon: '🖤', color: '#a855f7', ram: '32GB', cpu: '1000%', storage: '100GB NVMe',
    price_inr: 2099, price_usd: 22.40, yearly_inr: 16999, yearly_usd: 179.99,
    desc: 'Ultimate power for massive networks',
    features: ['32GB RAM', '1000% CPU', '100GB NVMe Storage', 'DDoS Protection', 'Pterodactyl Panel', 'Full SFTP Access', 'Unlimited MySQL DBs', '24/7 VIP Support', 'Instant Setup', '99.9% Uptime', 'Custom Domain', 'Daily Backups', 'Dedicated IP'],
  },
]

const otherPlans = [
  { icon: '🖥️', name: 'VPS PAID PLANS', status: 'online', desc: 'Full root access VPS servers' },
  { icon: '⛏️', name: 'MINECRAFT PAID PLANS', status: 'online', desc: 'Premium Minecraft servers' },
  { icon: '🚀', name: 'BOOST PLANS', status: 'online', desc: 'Turbo performance upgrades' },
  { icon: '🎁', name: 'MINECRAFT FREE PLANS', status: 'online', desc: 'Start for free, upgrade later' },
  { icon: '🎥', name: 'YOUTUBER PLANS', status: 'online', desc: 'Special plans for content creators' },
  { icon: '🖥️', name: 'VPS FREE PLANS', status: 'offline', desc: 'Currently unavailable' },
]

const payments = ['UPI', 'PayPal', 'PhonePe', 'Google Pay', 'Fampay', 'Junio']

export default function PlansPage() {
  const [yearly, setYearly] = useState(false)

  return (
    <div>
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
            <span style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>🎉 YEARLY OFFER — SAVE BIG (LIMITED TIME) 🎉</span>
          </div>
          <h1 className="section-title">Minecraft Hosting <span className="gradient-text">Plans</span></h1>
          <p className="section-sub">All plans include DDoS protection, Pterodactyl panel, MySQL, SFTP access, and 24/7 support. Instant deployment in seconds.</p>

          <div className="toggle-wrapper">
            <span style={{ fontWeight: 700, color: !yearly ? '#22c55e' : '#64748b', fontSize: '1rem' }}>Monthly</span>
            <label className="toggle">
              <input type="checkbox" checked={yearly} onChange={e => setYearly(e.target.checked)} />
              <span className="toggle-slider" />
            </label>
            <span style={{ fontWeight: 700, color: yearly ? '#22c55e' : '#64748b', fontSize: '1rem' }}>
              Yearly &nbsp;
              <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '999px', padding: '0.15rem 0.6rem', fontSize: '0.75rem', color: '#22c55e', fontWeight: 600 }}>Save up to 15%</span>
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
            {plans.map((plan) => (
              <div key={plan.name} className={plan.popular ? 'card-highlight' : 'card'} style={{ display: 'flex', flexDirection: 'column' }}>
                {plan.popular && (
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <span className="badge-popular">⭐ Most Popular</span>
                  </div>
                )}
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{plan.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: plan.color }}>{plan.name} Plan</h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1rem' }}>{plan.desc}</p>

                <div style={{ marginBottom: '1.25rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '0.75rem', border: '1px solid rgba(30,58,95,0.5)' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900 }}>
                    ₹{(yearly ? plan.yearly_inr : plan.price_inr).toLocaleString()}
                    <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 400 }}>/{yearly ? 'yr' : 'mo'}</span>
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.875rem' }}>${yearly ? plan.yearly_usd : plan.price_usd}/{yearly ? 'yr' : 'mo'}</div>
                  {yearly && (
                    <div style={{ color: '#f59e0b', fontSize: '0.75rem', marginTop: '0.25rem', fontWeight: 600 }}>
                      Was ₹{(plan.price_inr * 12).toLocaleString()}/yr · You save ₹{((plan.price_inr * 12) - plan.yearly_inr).toLocaleString()}!
                    </div>
                  )}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8' }}>
                      <CheckCircle size={14} style={{ color: '#22c55e', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>

                <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1.5rem', textAlign: 'center', justifyContent: 'center' }}>
                  Order Now <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          {/* Payment note */}
          <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '1rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <Info size={20} style={{ color: '#22c55e', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Accepted Payment Methods</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {payments.map(p => (
                  <span key={p} style={{ background: 'rgba(30,58,95,0.5)', border: '1px solid var(--color-border)', borderRadius: '0.35rem', padding: '0.2rem 0.75rem', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>{p}</span>
                ))}
                <span style={{ color: '#64748b', fontSize: '0.85rem', alignSelf: 'center' }}>· All currencies allowed in India accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Plan Types */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title">More Plan <span className="gradient-text">Types</span></h2>
          <p className="section-sub">Beyond Minecraft — we have VPS, Boost, YouTube, and free plans too.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {otherPlans.map(p => (
              <div key={p.name} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>{p.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{p.name}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{p.desc}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className={`status-dot ${p.status}`} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: p.status === 'online' ? '#22c55e' : '#ef4444' }}>
                    {p.status === 'online' ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Contact Us for Custom Plans <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
