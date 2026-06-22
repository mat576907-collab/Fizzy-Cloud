import { createFileRoute } from '@tanstack/react-router'
import { Footer } from './index'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
})

export default function TermsPage() {
  return (
    <div>
      <section style={{ padding: '5rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left' }}>Terms of <span className="gradient-text">Service</span></h1>
        <p style={{ color: '#64748b', marginBottom: '3rem' }}>Last updated: June 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#94a3b8', lineHeight: 1.8 }}>
          {[
            {
              title: '1. Acceptance of Terms',
              content: 'By accessing and using FizzyHost services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services. These terms apply to all users, including those who access the service without creating an account.',
            },
            {
              title: '2. Service Description',
              content: 'FizzyHost provides game server hosting services including but not limited to Minecraft server hosting, VPS hosting, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with or without notice.',
            },
            {
              title: '3. Account Responsibilities',
              content: 'You are responsible for maintaining the confidentiality of your account credentials. You agree to notify FizzyHost immediately of any unauthorized use of your account. You are responsible for all activities that occur under your account.',
            },
            {
              title: '4. Acceptable Use Policy',
              content: 'Users must not use FizzyHost services for: (a) any illegal activities, (b) hosting malware, viruses, or malicious code, (c) DDoS attacks or network abuse, (d) spam or unauthorized mass communications, (e) mining cryptocurrency without explicit written permission, (f) reselling services without authorization, (g) adult content or gambling services without prior approval.',
            },
            {
              title: '5. Payment Terms',
              content: 'Services are billed in advance on a monthly or yearly basis. All prices are displayed in INR (₹) and USD ($). Payment is processed through supported payment methods including UPI, PayPal, PhonePe, Google Pay, Fampay, and Junio. All major international currencies allowed in India are accepted.',
            },
            {
              title: '6. Refund Policy',
              content: 'NO REFUNDS are provided after server deployment. By ordering a server, you agree that the service is immediately available upon deployment and therefore no refunds will be issued. Please review our full Refund Policy before making a purchase. In exceptional cases at our sole discretion, service credits may be offered.',
            },
            {
              title: '7. Service Level Agreement (SLA)',
              content: 'FizzyHost commits to 99.9% monthly uptime for all paid plans. Scheduled maintenance windows will be announced at least 24 hours in advance via our Discord server. Unplanned downtime exceeding our SLA may result in service credits at our discretion.',
            },
            {
              title: '8. Data and Privacy',
              content: 'We collect and process personal data as described in our Privacy Policy. You retain ownership of all data stored on our servers. FizzyHost is not responsible for data loss — we recommend maintaining regular backups of your important data.',
            },
            {
              title: '9. Termination',
              content: 'FizzyHost reserves the right to terminate any service or account for violation of these terms, non-payment, or conduct harmful to other users or the platform. Upon termination, all data may be deleted after 7 days.',
            },
            {
              title: '10. Limitation of Liability',
              content: 'FizzyHost shall not be liable for any indirect, incidental, special, or consequential damages arising from use of our services. Our total liability shall not exceed the amount paid for the service in the preceding month.',
            },
            {
              title: '11. Changes to Terms',
              content: 'We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance. Major changes will be announced on our Discord server.',
            },
            {
              title: '12. Contact',
              content: 'For questions about these Terms of Service, contact us at shopdaksh@gmail.com or join our Discord at discord.gg/ej9TruFDRx.',
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
