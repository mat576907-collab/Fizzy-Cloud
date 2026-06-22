import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { login, signup, oauthLogin, handleAuthCallback, getUser, AuthError } from '@netlify/identity'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // Handle OAuth callbacks
    handleAuthCallback().then(result => {
      if (result?.type === 'oauth' || result?.type === 'confirmation') {
        navigate({ to: '/admin' })
      }
    }).catch(() => {})

    // If already logged in, redirect to admin
    getUser().then(user => {
      if (user) navigate({ to: '/admin' })
    }).catch(() => {})
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError(''); setSuccess('')
    try {
      await login(email, password)
      navigate({ to: '/admin' })
    } catch (err) {
      if (err instanceof AuthError) {
        setError(err.status === 401 ? 'Invalid email or password.' : err.message)
      } else {
        setError('Login failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError(''); setSuccess('')
    try {
      const user = await signup(email, password, { full_name: name })
      if (user.emailVerified) {
        navigate({ to: '/admin' })
      } else {
        setSuccess('Account created! Check your email to confirm your account.')
      }
    } catch (err) {
      if (err instanceof AuthError) {
        setError(err.status === 403 ? 'Registrations are currently restricted.' : err.message)
      } else {
        setError('Registration failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError(''); setSuccess('')
    try {
      const { requestPasswordRecovery } = await import('@netlify/identity')
      await requestPasswordRecovery(email)
      setSuccess('Password reset email sent! Check your inbox.')
    } catch (err) {
      setError('Failed to send reset email. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = () => oauthLogin('google')

  return (
    <div style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.5rem', position: 'relative' }}>
      <div className="hero-bg" />
      <div style={{ width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src="/logo.png" alt="FizzyHost" style={{ height: '56px', objectFit: 'contain', margin: '0 auto 0.75rem', display: 'block' }} />
          <div style={{ fontWeight: 900, fontSize: '1.5rem' }} className="gradient-text">FizzyHost</div>
        </div>

        {/* Card */}
        <div className="card" style={{ padding: '2.5rem' }}>
          {/* Tabs */}
          {mode !== 'forgot' && (
            <div style={{ display: 'flex', background: 'rgba(30,58,95,0.3)', borderRadius: '0.75rem', padding: '0.25rem', marginBottom: '2rem' }}>
              {(['login', 'register'] as const).map(m => (
                <button key={m} onClick={() => { setMode(m); setError(''); setSuccess('') }} style={{
                  flex: 1, padding: '0.6rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.2s',
                  background: mode === m ? 'var(--color-surface2)' : 'transparent',
                  color: mode === m ? '#22c55e' : '#64748b',
                }}>
                  {m === 'login' ? 'Sign In' : 'Register'}
                </button>
              ))}
            </div>
          )}

          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.25rem' }}>
            {mode === 'login' ? 'Welcome back' : mode === 'register' ? 'Create account' : 'Reset password'}
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
            {mode === 'login' ? 'Sign in to your FizzyHost account' : mode === 'register' ? 'Join thousands of happy server owners' : 'Enter your email to receive a reset link'}
          </p>

          {error && (
            <div style={{ padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '0.5rem', color: '#ef4444', fontSize: '0.875rem', marginBottom: '1rem' }}>
              {error}
            </div>
          )}
          {success && (
            <div style={{ padding: '0.75rem 1rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '0.5rem', color: '#22c55e', fontSize: '0.875rem', marginBottom: '1rem' }}>
              {success}
            </div>
          )}

          <form onSubmit={mode === 'login' ? handleLogin : mode === 'register' ? handleRegister : handleForgot}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {mode === 'register' && (
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Full Name</label>
                  <input value={name} onChange={e => setName(e.target.value)} required placeholder="Your Name" />
                </div>
              )}
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Email Address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" />
              </div>
              {mode !== 'forgot' && (
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Password</label>
                  <div style={{ position: 'relative' }}>
                    <input type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" style={{ paddingRight: '3rem' }} />
                    <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '0.875rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {mode === 'login' && (
                    <button type="button" onClick={() => { setMode('forgot'); setError(''); setSuccess('') }} style={{ marginTop: '0.4rem', float: 'right', background: 'none', border: 'none', color: '#22c55e', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}>
                      Forgot password?
                    </button>
                  )}
                </div>
              )}
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }} disabled={loading}>
                {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : mode === 'register' ? 'Create Account' : 'Send Reset Link'}
                {!loading && <ArrowRight size={16} />}
              </button>
            </div>
          </form>

          {mode !== 'forgot' && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
                <span style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 500 }}>or continue with</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
              </div>
              <button onClick={handleGoogle} className="btn-secondary" style={{ width: '100%', justifyContent: 'center', gap: '0.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Sign in with Google
              </button>
            </>
          )}

          {mode === 'forgot' && (
            <button onClick={() => { setMode('login'); setError(''); setSuccess('') }} style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: '#22c55e', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}>
              ← Back to Sign In
            </button>
          )}
        </div>

        <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.8rem', marginTop: '1.5rem' }}>
          By {mode === 'register' ? 'registering' : 'signing in'}, you agree to our{' '}
          <Link to="/terms" style={{ color: '#22c55e', textDecoration: 'none' }}>Terms</Link> and{' '}
          <Link to="/privacy" style={{ color: '#22c55e', textDecoration: 'none' }}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}
