import { HeadContent, Scripts, createRootRoute, Outlet, Link, useRouterState } from '@tanstack/react-router'
import '../styles.css'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Server, Zap, LifeBuoy, BookOpen, Users, FileText } from 'lucide-react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'FizzyHost — Premium Game Server Hosting' },
      { name: 'description', content: 'High-performance game server hosting with Ryzen CPUs, NVMe SSDs, DDoS protection and 99.9% uptime. Starting from ₹374/month.' },
    ],
    links: [
      { rel: 'icon', href: '/logo.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <NavBar />
        <main style={{ paddingTop: '64px' }}>
          {children}
        </main>
        <Scripts />
      </body>
    </html>
  )
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/plans', label: 'Plans' },
  { to: '/features', label: 'Features' },
  { to: '/status', label: 'Status' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const legalLinks = [
  { to: '/terms', label: 'Terms' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/refund', label: 'Refund Policy' },
  { to: '/knowledge-base', label: 'Knowledge Base' },
]

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)
  const router = useRouterState()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setLegalOpen(false)
  }, [router.location.pathname])

  return (
    <>
      <nav style={{
        background: scrolled ? 'rgba(5,10,20,0.97)' : 'rgba(5,10,20,0.85)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <img src="/logo.png" alt="FizzyHost" style={{ height: '36px', width: '36px', objectFit: 'contain' }} />
            <span style={{ fontSize: '1.25rem', fontWeight: 900, background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FizzyHost</span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{ padding: '0.5rem 0.875rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', color: router.location.pathname === link.to ? '#22c55e' : '#94a3b8', transition: 'all 0.2s', background: router.location.pathname === link.to ? 'rgba(34,197,94,0.1)' : 'transparent' }}
                onMouseEnter={e => { if (router.location.pathname !== link.to) (e.target as HTMLElement).style.color = '#e2e8f0' }}
                onMouseLeave={e => { if (router.location.pathname !== link.to) (e.target as HTMLElement).style.color = '#94a3b8' }}
              >
                {link.label}
              </Link>
            ))}
            {/* Legal dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setLegalOpen(!legalOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem 0.875rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: 500, color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
              >
                More <ChevronDown size={14} />
              </button>
              {legalOpen && (
                <div style={{ position: 'absolute', top: '100%', right: 0, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', padding: '0.5rem', minWidth: '180px', zIndex: 200, animation: 'fadeInDown 0.2s ease' }}>
                  {legalLinks.map(link => (
                    <Link key={link.to} to={link.to} style={{ display: 'block', padding: '0.6rem 1rem', fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none', borderRadius: '0.5rem', transition: 'all 0.2s' }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = '#22c55e'; (e.target as HTMLElement).style.background = 'rgba(34,197,94,0.08)' }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = '#94a3b8'; (e.target as HTMLElement).style.background = 'transparent' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Auth buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden-mobile">
            <Link to="/login" style={{ padding: '0.5rem 1.25rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', color: '#94a3b8', border: '1px solid rgba(30,58,95,0.8)', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#22c55e'; (e.target as HTMLElement).style.borderColor = '#22c55e' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#94a3b8'; (e.target as HTMLElement).style.borderColor = 'rgba(30,58,95,0.8)' }}
            >Login</Link>
            <Link to="/plans" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Order Now</Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(true)} style={{ display: 'none', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }} className="show-mobile">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button onClick={() => setMobileOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
          <X size={28} />
        </button>
        <img src="/logo.png" alt="FizzyHost" style={{ height: '60px', objectFit: 'contain' }} />
        <div style={{ fontSize: '1.5rem', fontWeight: 900, background: 'linear-gradient(135deg,#22c55e,#4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FizzyHost</div>
        {[...navLinks, ...legalLinks].map(link => (
          <Link key={link.to} to={link.to} style={{ fontSize: '1.25rem', fontWeight: 600, color: '#e2e8f0', textDecoration: 'none', padding: '0.5rem 2rem' }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Link to="/login" style={{ padding: '0.75rem 2rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', color: '#e2e8f0', textDecoration: 'none', fontWeight: 600 }}>Login</Link>
          <Link to="/plans" className="btn-primary">Order Now</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
