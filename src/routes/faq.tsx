import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { Footer } from './index'

export const Route = createFileRoute('/faq')({
  component: FaqPage,
})

function FaqPage() {
  return (
    <div>
      <section style={{ padding: '5rem 1.5rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h1>
        <p className="section-sub">Everything you need to know about FizzyHost game server hosting.</p>
        <Link to="/knowledge-base" className="btn-primary">
          View Full Knowledge Base <ChevronRight size={16} />
        </Link>
      </section>
      <Footer />
    </div>
  )
}
