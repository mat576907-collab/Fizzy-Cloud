import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { getUser, logout } from '@netlify/identity'
import {
  LayoutDashboard, Package, Megaphone, Settings, LogOut,
  Plus, Edit2, Trash2, Save, X, Bell, Users, Server, Globe, DollarSign, Eye
} from 'lucide-react'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})

type Plan = {
  id: string
  name: string
  icon: string
  ram: string
  cpu: string
  storage: string
  price_inr: number
  price_usd: number
  yearly_inr: number
  yearly_usd: number
  popular: boolean
}

type Announcement = {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'success'
  active: boolean
  date: string
}

const defaultPlans: Plan[] = [
  { id: '1', name: 'Copper', icon: '🥉', ram: '8GB', cpu: '300%', storage: '20GB', price_inr: 374, price_usd: 2.35, yearly_inr: 2999, yearly_usd: 18.99, popular: false },
  { id: '2', name: 'Iron', icon: '⚙️', ram: '12GB', cpu: '400%', storage: '30GB', price_inr: 524, price_usd: 4.10, yearly_inr: 4299, yearly_usd: 32.99, popular: false },
  { id: '3', name: 'Gold', icon: '🥇', ram: '16GB', cpu: '600%', storage: '50GB', price_inr: 749, price_usd: 6.70, yearly_inr: 5799, yearly_usd: 52.99, popular: true },
  { id: '4', name: 'Emerald', icon: '💎', ram: '24GB', cpu: '800%', storage: '80GB', price_inr: 1199, price_usd: 11.95, yearly_inr: 9499, yearly_usd: 94.99, popular: false },
  { id: '5', name: 'Obsidian', icon: '🖤', ram: '32GB', cpu: '1000%', storage: '100GB', price_inr: 2099, price_usd: 22.40, yearly_inr: 16999, yearly_usd: 179.99, popular: false },
]

const defaultAnnouncements: Announcement[] = [
  { id: '1', title: '🎉 Yearly Plans Now Available!', message: 'Save up to 15% with our new yearly hosting plans. Limited time offer!', type: 'success', active: true, date: '2025-06-01' },
  { id: '2', title: '🔧 Scheduled Maintenance', message: 'IN-5 and IN-7 nodes are coming soon. Stay tuned for the launch announcement on Discord.', type: 'info', active: true, date: '2025-06-10' },
]

function AdminSidebar({ activeSection, setSection, onLogout }: { activeSection: string; setSection: (s: string) => void; onLogout: () => void }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'plans', label: 'Hosting Plans', icon: Package },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="admin-sidebar">
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <img src="/logo.png" alt="FizzyHost" style={{ height: '32px' }} />
          <div>
            <div style={{ fontWeight: 900, fontSize: '1rem' }} className="gradient-text">FizzyHost</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Admin Panel</div>
          </div>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setSection(item.id)} style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '0.5rem',
              border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', width: '100%', textAlign: 'left', transition: 'all 0.2s',
              background: activeSection === item.id ? 'rgba(34,197,94,0.1)' : 'transparent',
              color: activeSection === item.id ? '#22c55e' : '#64748b',
            }}>
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
          <button onClick={onLogout} style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '0.5rem',
            border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', width: '100%', textAlign: 'left', transition: 'all 0.2s',
            background: 'transparent', color: '#ef4444', marginTop: '1rem',
          }}>
            <LogOut size={18} /> Sign Out
          </button>
        </nav>
      </div>
    </div>
  )
}

function DashboardSection() {
  const stats = [
    { icon: Users, label: 'Total Customers', value: '5,247', change: '+12%', color: '#22c55e' },
    { icon: Server, label: 'Active Servers', value: '12,891', change: '+8%', color: '#a855f7' },
    { icon: Globe, label: 'Nodes Online', value: '14', change: '+2', color: '#06b6d4' },
    { icon: DollarSign, label: 'Revenue (Month)', value: '₹2.4L', change: '+15%', color: '#f59e0b' },
  ]

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.25rem' }}>Dashboard</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>Welcome back to FizzyHost Admin Panel</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {stats.map(stat => (
          <div key={stat.label} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30`, borderRadius: '0.5rem', padding: '0.6rem' }}>
                <stat.icon size={20} style={{ color: stat.color, display: 'block' }} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>{stat.change}</span>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900 }}>{stat.value}</div>
            <div style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.25rem' }}>
        <div className="card">
          <h3 style={{ fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bell size={18} style={{ color: '#22c55e' }} /> Quick Actions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              ['View Plans Page', '/plans'],
              ['Check Node Status', '/status'],
              ['Discord Server', 'https://discord.gg/ej9TruFDRx'],
            ].map(([label, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '0.5rem', color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s' }}>
                <Eye size={14} style={{ color: '#22c55e' }} /> {label}
              </a>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>System Status</h3>
          {[
            { label: 'Website', status: 'Operational', color: '#22c55e' },
            { label: 'Billing System', status: 'Operational', color: '#22c55e' },
            { label: 'Panel (Pterodactyl)', status: 'Operational', color: '#22c55e' },
            { label: 'IN-5 Node', status: 'Coming Soon', color: '#f59e0b' },
            { label: 'US Free Node', status: 'Offline', color: '#ef4444' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid rgba(30,58,95,0.3)' }}>
              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{s.label}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: s.color, background: `${s.color}15`, padding: '0.15rem 0.6rem', borderRadius: '999px' }}>{s.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PlansSection() {
  const [plans, setPlans] = useState<Plan[]>(defaultPlans)
  const [editing, setEditing] = useState<Plan | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<Partial<Plan>>({})

  const openEdit = (plan: Plan) => {
    setEditing(plan); setForm(plan); setShowForm(true)
  }

  const openNew = () => {
    setEditing(null)
    setForm({ id: Date.now().toString(), icon: '⭐', popular: false })
    setShowForm(true)
  }

  const saveForm = () => {
    if (!form.name) return
    if (editing) {
      setPlans(p => p.map(x => x.id === editing.id ? { ...x, ...form } as Plan : x))
    } else {
      setPlans(p => [...p, form as Plan])
    }
    setShowForm(false); setEditing(null); setForm({})
  }

  const deletePlan = (id: string) => {
    if (confirm('Delete this plan?')) setPlans(p => p.filter(x => x.id !== id))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Hosting Plans</h1>
          <p style={{ color: '#64748b' }}>Manage your hosting plans and pricing</p>
        </div>
        <button onClick={openNew} className="btn-primary" style={{ padding: '0.6rem 1.25rem' }}>
          <Plus size={16} /> Add Plan
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {plans.map(plan => (
          <div key={plan.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem' }}>
            <span style={{ fontSize: '1.75rem' }}>{plan.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 800 }}>{plan.name} Plan</span>
                {plan.popular && <span className="badge-popular" style={{ fontSize: '0.65rem' }}>Popular</span>}
              </div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                {plan.ram} RAM · {plan.cpu} CPU · {plan.storage} Storage
              </div>
            </div>
            <div style={{ textAlign: 'right', minWidth: '120px' }}>
              <div style={{ fontWeight: 800 }}>₹{plan.price_inr}/mo</div>
              <div style={{ color: '#64748b', fontSize: '0.8rem' }}>${plan.price_usd}/mo</div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => openEdit(plan)} style={{ padding: '0.5rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '0.5rem', color: '#22c55e', cursor: 'pointer' }}>
                <Edit2 size={16} />
              </button>
              <button onClick={() => deletePlan(plan.id)} style={{ padding: '0.5rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.5rem', color: '#ef4444', cursor: 'pointer' }}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showForm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div className="card" style={{ width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.25rem' }}>{editing ? 'Edit Plan' : 'New Plan'}</h2>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                ['Name', 'name', 'text'],
                ['Icon (emoji)', 'icon', 'text'],
                ['RAM', 'ram', 'text'],
                ['CPU', 'cpu', 'text'],
                ['Storage', 'storage', 'text'],
                ['Price INR/mo', 'price_inr', 'number'],
                ['Price USD/mo', 'price_usd', 'number'],
                ['Price INR/yr', 'yearly_inr', 'number'],
                ['Price USD/yr', 'yearly_usd', 'number'],
              ].map(([label, key, type]) => (
                <div key={key}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>{label}</label>
                  <input type={type} value={(form as any)[key] || ''} onChange={e => setForm({ ...form, [key]: type === 'number' ? parseFloat(e.target.value) : e.target.value })} />
                </div>
              ))}
              <div style={{ gridColumn: '1/-1', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input type="checkbox" id="popular" checked={form.popular || false} onChange={e => setForm({ ...form, popular: e.target.checked })} style={{ width: '18px', height: '18px' }} />
                <label htmlFor="popular" style={{ fontWeight: 600, cursor: 'pointer' }}>Mark as Popular</label>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
              <button onClick={saveForm} className="btn-primary"><Save size={16} /> Save Plan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function AnnouncementsSection() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(defaultAnnouncements)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<Partial<Announcement>>({})
  const [editing, setEditing] = useState<Announcement | null>(null)

  const openNew = () => {
    setEditing(null)
    setForm({ id: Date.now().toString(), type: 'info', active: true, date: new Date().toISOString().split('T')[0] })
    setShowForm(true)
  }

  const openEdit = (a: Announcement) => { setEditing(a); setForm(a); setShowForm(true) }

  const save = () => {
    if (!form.title || !form.message) return
    if (editing) {
      setAnnouncements(a => a.map(x => x.id === editing.id ? { ...x, ...form } as Announcement : x))
    } else {
      setAnnouncements(a => [...a, form as Announcement])
    }
    setShowForm(false)
  }

  const del = (id: string) => { if (confirm('Delete?')) setAnnouncements(a => a.filter(x => x.id !== id)) }
  const toggle = (id: string) => setAnnouncements(a => a.map(x => x.id === id ? { ...x, active: !x.active } : x))

  const typeColor = { info: '#06b6d4', warning: '#f59e0b', success: '#22c55e' }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Announcements</h1>
          <p style={{ color: '#64748b' }}>Manage site-wide announcements and notices</p>
        </div>
        <button onClick={openNew} className="btn-primary" style={{ padding: '0.6rem 1.25rem' }}>
          <Plus size={16} /> Add Announcement
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {announcements.map(ann => (
          <div key={ann.id} className="card" style={{ borderLeft: `3px solid ${typeColor[ann.type]}`, opacity: ann.active ? 1 : 0.5 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 800 }}>{ann.title}</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: typeColor[ann.type], background: `${typeColor[ann.type]}15`, padding: '0.15rem 0.6rem', borderRadius: '999px', textTransform: 'uppercase' }}>{ann.type}</span>
                  {!ann.active && <span style={{ fontSize: '0.7rem', color: '#64748b', background: 'rgba(100,116,139,0.1)', padding: '0.15rem 0.6rem', borderRadius: '999px' }}>Inactive</span>}
                </div>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{ann.message}</p>
                <div style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.5rem' }}>{ann.date}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <button onClick={() => toggle(ann.id)} style={{ padding: '0.5rem', background: ann.active ? 'rgba(245,158,11,0.1)' : 'rgba(34,197,94,0.1)', border: `1px solid ${ann.active ? 'rgba(245,158,11,0.2)' : 'rgba(34,197,94,0.2)'}`, borderRadius: '0.5rem', color: ann.active ? '#f59e0b' : '#22c55e', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700 }}>
                  {ann.active ? 'Deactivate' : 'Activate'}
                </button>
                <button onClick={() => openEdit(ann)} style={{ padding: '0.5rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '0.5rem', color: '#22c55e', cursor: 'pointer' }}><Edit2 size={16} /></button>
                <button onClick={() => del(ann.id)} style={{ padding: '0.5rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '0.5rem', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.25rem' }}>{editing ? 'Edit' : 'New'} Announcement</h2>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Title</label>
                <input value={form.title || ''} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Announcement title..." />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Message</label>
                <textarea rows={3} value={form.message || ''} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Announcement message..." />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Type</label>
                <select value={form.type || 'info'} onChange={e => setForm({ ...form, type: e.target.value as any })} style={{ padding: '0.75rem 1rem' }}>
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                  <option value="success">Success</option>
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input type="checkbox" id="active" checked={form.active ?? true} onChange={e => setForm({ ...form, active: e.target.checked })} style={{ width: '18px', height: '18px' }} />
                <label htmlFor="active" style={{ fontWeight: 600, cursor: 'pointer' }}>Active</label>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
              <button onClick={save} className="btn-primary"><Save size={16} /> Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SettingsSection() {
  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.25rem' }}>Settings</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>Manage admin accounts and site settings</p>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>Admin Emails</h3>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>These email accounts have admin access to the panel.</p>
        {['shopdaksh@gmail.com', 'mat576907@gmail.com'].map(email => (
          <div key={email} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '0.5rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontWeight: 600 }}>{email}</span>
            <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '0.15rem 0.6rem', borderRadius: '999px', fontWeight: 700 }}>Admin</span>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>Quick Links</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            ['Discord Server', 'https://discord.gg/ej9TruFDRx'],
            ['Contact Support', 'mailto:shopdaksh@gmail.com'],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'rgba(30,58,95,0.3)', border: '1px solid var(--color-border)', borderRadius: '0.5rem', color: '#94a3b8', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'all 0.2s' }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [section, setSection] = useState('dashboard')
  const navigate = useNavigate()

  useEffect(() => {
    getUser().then(u => {
      setUser(u)
      setLoading(false)
      if (!u) navigate({ to: '/login' })
    }).catch(() => {
      setLoading(false)
      navigate({ to: '/login' })
    })
  }, [])

  const handleLogout = async () => {
    try { await logout() } catch {}
    navigate({ to: '/login' })
  }

  if (loading) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', animation: 'spin-slow 1s linear infinite', display: 'inline-block' }}>⚙️</div>
          <p style={{ color: '#64748b' }}>Loading admin panel...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div>
      <AdminSidebar activeSection={section} setSection={setSection} onLogout={handleLogout} />
      <div className="admin-content">
        <div style={{ marginBottom: '1.5rem', padding: '1rem 1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg,#22c55e,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', color: 'white' }}>
              {(user.user_metadata?.full_name || user.email || 'A')[0].toUpperCase()}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{user.user_metadata?.full_name || 'Admin'}</div>
              <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{user.email}</div>
            </div>
          </div>
          <Link to="/" className="btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            View Website
          </Link>
        </div>

        {section === 'dashboard' && <DashboardSection />}
        {section === 'plans' && <PlansSection />}
        {section === 'announcements' && <AnnouncementsSection />}
        {section === 'settings' && <SettingsSection />}
      </div>
    </div>
  )
}
