import { createFileRoute } from '@tanstack/react-router'
import { Footer } from './index'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})

export default function PrivacyPage() {
  return (
    <div>
      <section style={{ padding: '5rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left' }}>Privacy <span className="gradient-text">Policy</span></h1>
        <p style={{ color: '#64748b', marginBottom: '3rem' }}>Last updated: June 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#94a3b8', lineHeight: 1.8 }}>
          {[
            {
              title: '1. Information We Collect',
              content: 'We collect information you provide directly: name, email address, billing information, and server configuration preferences. We also collect usage data including IP addresses, browser type, pages visited, and server resource usage for operational purposes.',
            },
            {
              title: '2. How We Use Your Information',
              content: 'We use your information to: provide and improve our hosting services, process payments, send service-related communications, provide technical support, detect and prevent fraud, comply with legal obligations, and send promotional emails (with your consent).',
            },
            {
              title: '3. Data Storage and Security',
              content: 'Your data is stored securely on our servers in India and other jurisdictions where we operate. We implement industry-standard security measures including encryption, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.',
            },
            {
              title: '4. Data Sharing',
              content: 'We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our services (payment processors, etc.) under strict confidentiality agreements. We may disclose information when required by law.',
            },
            {
              title: '5. Cookies',
              content: 'We use cookies and similar technologies to maintain your session, remember your preferences, and analyze usage patterns. You can control cookie settings in your browser, but disabling cookies may affect functionality.',
            },
            {
              title: '6. Your Rights',
              content: 'You have the right to: access your personal data, correct inaccurate data, request deletion of your data, opt out of marketing communications, and data portability. Contact us at shopdaksh@gmail.com to exercise these rights.',
            },
            {
              title: '7. Data Retention',
              content: 'We retain your data for as long as your account is active or as needed to provide services. After account termination, data is retained for 30 days before secure deletion, except where required by law to retain longer.',
            },
            {
              title: '8. Children\'s Privacy',
              content: 'Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have collected data from a child, contact us immediately.',
            },
            {
              title: '9. International Transfers',
              content: 'Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.',
            },
            {
              title: '10. Contact Us',
              content: 'For privacy-related questions or requests, contact us at shopdaksh@gmail.com or mat576907@gmail.com, or join our Discord at discord.gg/ej9TruFDRx.',
            },
          ].map(section => (
            <div key={section.title} style={{ paddingBottom: '2rem', borderBottom: '1px solid rgba(30,58,95,0.5)' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.75rem' }}>{section.title}</h2>
              <p style={{ fontSize: '0.95rem' }}>{section.content}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
