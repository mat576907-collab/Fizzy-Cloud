import { createFileRoute } from '@tanstack/react-router'
import { AlertTriangle } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/refund')({
  component: RefundPage,
})

export default function RefundPage() {
  return (
    <div>
      <section style={{ padding: '5rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left' }}>Refund <span className="gradient-text">Policy</span></h1>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>Last updated: June 2025</p>

        <div style={{ padding: '1.5rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <AlertTriangle size={24} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 800, color: '#ef4444', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Important Notice</div>
            <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>
              <strong>NO REFUNDS are provided after server deployment.</strong> By ordering any FizzyHost service, you acknowledge and agree that the service is immediately provisioned upon payment and no refund will be issued under any circumstance after deployment.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#94a3b8', lineHeight: 1.8 }}>
          {[
            {
              title: '1. No Refund Policy',
              content: 'FizzyHost operates a strict no-refund policy for all services once a server has been deployed. This applies to all plan types including Minecraft Hosting, VPS, Boost Plans, and Youtuber Plans. The digital nature of our services means they are consumed immediately upon provisioning.',
            },
            {
              title: '2. Pre-Deployment Cancellation',
              content: 'Refund requests made before server deployment (within 1 hour of payment, if the server has not yet been provisioned) will be reviewed on a case-by-case basis. Contact shopdaksh@gmail.com immediately with your order details.',
            },
            {
              title: '3. Service Outages and Downtime',
              content: 'Extended downtime exceeding our 99.9% SLA may result in service credits (not cash refunds) at FizzyHost\'s sole discretion. Service credits are applied to your account and can be used toward future billing cycles.',
            },
            {
              title: '4. Billing Errors',
              content: 'If you were billed incorrectly (wrong amount, duplicate charge, etc.), please contact us within 7 days at shopdaksh@gmail.com. Verified billing errors will be corrected or refunded within 5-7 business days.',
            },
            {
              title: '5. Free Plan Termination',
              content: 'Free plans may be terminated at any time without notice. No refund or compensation is applicable for free tier services.',
            },
            {
              title: '6. Chargebacks',
              content: 'Initiating a chargeback or payment dispute without first contacting FizzyHost support will result in immediate account suspension and permanent ban from all FizzyHost services. We take all chargebacks very seriously.',
            },
            {
              title: '7. Service Credits',
              content: 'Service credits are non-transferable, have no cash value, and expire 90 days after issuance. Credits can only be applied to FizzyHost services and cannot be combined with promotional offers.',
            },
            {
              title: '8. How to Request Support',
              content: 'For any billing concerns, contact us at shopdaksh@gmail.com or mat576907@gmail.com, or open a ticket in our Discord at discord.gg/ej9TruFDRx. Our team responds within 24 hours on business days.',
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
