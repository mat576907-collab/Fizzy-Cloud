import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { RefreshCw, Wifi } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/status')({
  component: StatusPage,
})

const allNodes = [
  { flag: '🇺🇸', region: 'United States', name: 'US FREE NODE', status: 'offline' as const, note: 'Temporarily Offline', cpu: 0, ram: 0 },
  { flag: '🇺🇸', region: 'United States', name: 'US NODE-2', status: 'online' as const, cpu: 42, ram: 58 },
  { flag: '🇮🇳', region: 'India', name: 'IN-1 PAID NODE', status: 'online' as const, cpu: 61, ram: 73 },
  { flag: '🇮🇳', region: 'India', name: 'IN-2 PAID NODE', status: 'online' as const, cpu: 38, ram: 52 },
  { flag: '🇮🇳', region: 'India', name: 'IN-3 PAID NODE', status: 'online' as const, cpu: 55, ram: 67 },
  { flag: '🇮🇳', region: 'India', name: 'IN-4 PAID NODE', status: 'online' as const, cpu: 29, ram: 44 },
  { flag: '🇮🇳', region: 'India', name: 'IN-5 PAID NODE', status: 'coming' as const, cpu: 0, ram: 0 },
  { flag: '🇮🇳', region: 'India', name: 'IN-6 PAID NODE', status: 'online' as const, cpu: 71, ram: 81 },
  { flag: '🇮🇳', region: 'India', name: 'IN-7 PAID NODE', status: 'coming' as const, cpu: 0, ram: 0 },
  { flag: '🇸🇬', region: 'Singapore', name: 'SINGAPORE NODE-1', status: 'online' as const, cpu: 47, ram: 63 },
  { flag: '🇬🇧', region: 'United Kingdom', name: 'UK NODE-1', status: 'coming' as const, cpu: 0, ram: 0 },
  { flag: '🇧🇷', region: 'Brazil', name: 'BRAZIL NODE-1', status: 'coming' as const, cpu: 0, ram: 0 },
  { flag: '🖥️', region: 'Global', name: 'VPS PAID PLANS', status: 'online' as const, cpu: 33, ram: 49 },
  { flag: '⛏️', region: 'Global', name: 'MINECRAFT PAID PLANS', status: 'online' as const, cpu: 65, ram: 77 },
  { flag: '🚀', region: 'Global', name: 'BOOST PLANS', status: 'online' as const, cpu: 28, ram: 41 },
  { flag: '🎁', region: 'Global', name: 'MINECRAFT FREE PLANS', status: 'online' as const, cpu: 88, ram: 92 },
  { flag: '🎥', region: 'Global', name: 'YOUTUBER PLANS', status: 'online' as const, cpu: 51, ram: 68 },
  { flag: '🖥️', region: 'Global', name: 'VPS FREE PLANS', status: 'offline' as const, note: 'Offline', cpu: 0, ram: 0 },
]

function BarUsage({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ height: '6px', background: 'rgba(30,58,95,0.5)', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
      <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: '3px', transition: 'width 1s ease' }} />
    </div>
  )
}

export default function StatusPage() {
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => { setLastUpdate(new Date()); setRefreshing(false) }, 800)
  }

  const onlineCount = allNodes.filter(n => n.status === 'online').length
  const offlineCount = allNodes.filter(n => n.status === 'offline').length
  const comingCount = allNodes.filter(n => n.status === 'coming').length

  return (
    <div>
      <section style={{ padding: '5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                Node <span className="gradient-text">Status</span>
              </h1>
              <p style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Wifi size={14} /> Last updated: {lastUpdate.toLocaleTimeString()}
              </p>
            </div>
            <button onClick={handleRefresh} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RefreshCw size={16} style={{ animation: refreshing ? 'spin-slow 0.8s linear infinite' : 'none' }} />
              Refresh
            </button>
          </div>

          {/* Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#22c55e' }}>{onlineCount}</div>
              <div style={{ color: '#22c55e', fontWeight: 600 }}>Online</div>
            </div>
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ef4444' }}>{offlineCount}</div>
              <div style={{ color: '#ef4444', fontWeight: 600 }}>Offline</div>
            </div>
            <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f59e0b' }}>{comingCount}</div>
              <div style={{ color: '#f59e0b', fontWeight: 600 }}>Coming Soon</div>
            </div>
          </div>

          {/* Node List */}
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '1rem', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--color-border)', fontWeight: 700, fontSize: '0.875rem', color: '#64748b', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '1rem' }}>
              <span>NODE</span>
              <span>STATUS</span>
              <span>CPU</span>
              <span>RAM</span>
            </div>
            {allNodes.map((node, i) => (
              <div key={node.name} style={{
                padding: '1rem 1.5rem',
                borderBottom: i < allNodes.length - 1 ? '1px solid rgba(30,58,95,0.3)' : 'none',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                gap: '1rem',
                alignItems: 'center',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(34,197,94,0.03)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>{node.flag}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{node.name}</div>
                    <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{node.region}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className={`status-dot ${node.status}`} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: node.status === 'online' ? '#22c55e' : node.status === 'offline' ? '#ef4444' : '#f59e0b' }}>
                    {node.status === 'online' ? 'Online' : node.status === 'offline' ? (node.note || 'Offline') : 'Coming Soon'}
                  </span>
                </div>
                <div>
                  {node.status === 'online' ? (
                    <>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: node.cpu > 80 ? '#ef4444' : node.cpu > 60 ? '#f59e0b' : '#22c55e' }}>{node.cpu}%</span>
                      <BarUsage value={node.cpu} color={node.cpu > 80 ? '#ef4444' : node.cpu > 60 ? '#f59e0b' : '#22c55e'} />
                    </>
                  ) : <span style={{ color: '#475569', fontSize: '0.85rem' }}>—</span>}
                </div>
                <div>
                  {node.status === 'online' ? (
                    <>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: node.ram > 80 ? '#ef4444' : node.ram > 60 ? '#f59e0b' : '#22c55e' }}>{node.ram}%</span>
                      <BarUsage value={node.ram} color={node.ram > 80 ? '#ef4444' : node.ram > 60 ? '#f59e0b' : '#22c55e'} />
                    </>
                  ) : <span style={{ color: '#475569', fontSize: '0.85rem' }}>—</span>}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem', color: '#475569', fontSize: '0.85rem', textAlign: 'center' }}>
            Status updates are refreshed every 5 minutes. For real-time alerts, join our <a href="https://discord.gg/ej9TruFDRx" target="_blank" rel="noopener noreferrer" style={{ color: '#22c55e', textDecoration: 'none' }}>Discord server</a>.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
