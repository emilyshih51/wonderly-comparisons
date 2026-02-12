import { getCompetitor, getAllCompetitorSlugs } from '../../../lib/sanity'
import Header from '../../../components/Header'
import HeroSection from '../../../components/HeroSection'
import TableSection from '../../../components/TableSection'
import FAQSection from '../../../components/FAQSection'
import BottomLine from '../../../components/BottomLine'
import WhyChooseSection from '../../../components/WhyChooseSection'
import RelatedComparisons from '../../../components/RelatedComparisons'
import TrustSection from '../../../components/TrustSection'
import FinalCTA from '../../../components/FinalCTA'
import TestimonialsMarquee from '../../../components/TestimonialsMarquee'

export default function ComparisonPage({ competitor }) {
  if (!competitor) {
    return (
      <div className="min-h-screen wonderly-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Comparison not found</h1>
          <a href="/" className="text-pink-600 hover:underline">← Back to all comparisons</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen wonderly-bg">
      {/* Header with logo and CTA */}
      <Header />

      {/* Hero Section with tabs */}
      <HeroSection
        competitorName={competitor.name}
        headline={competitor.heroHeadline}
        subheadline={competitor.heroSubheadline}
        headlineHighlight={competitor.heroHeadlineHighlight}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* 1. Pricing Table */}
        {competitor.pricingTable && competitor.pricingTable.length > 0 && (
          <TableSection
            id="pricing"
            title="Pricing"
            data={competitor.pricingTable}
            competitorName={competitor.name}
          />
        )}

        {/* 2. Why Choose Section - right after pricing */}
        <WhyChooseSection competitorName={competitor.name} />

        {/* 3. Feature Comparison */}
        {competitor.featureComparison && competitor.featureComparison.length > 0 && (
          <TableSection
            id="features"
            title="Features"
            data={competitor.featureComparison}
            competitorName={competitor.name}
          />
        )}

        {/* 4. Trust Section - 15,000+ businesses - before AI Features */}
        <TrustSection />

        {/* 5. AI Features - with subtitle */}
        {competitor.aiFeatures && competitor.aiFeatures.length > 0 && (
          <TableSection
            id="ai-features"
            title="AI Features"
            subtitle="Wonderly AI tier: $395/mo (annual) or $495/mo (monthly)"
            data={competitor.aiFeatures}
            competitorName={competitor.name}
          />
        )}

        {/* 6. Onboarding */}
        {competitor.onboarding && competitor.onboarding.length > 0 && (
          <TableSection
            id="onboarding"
            title="Setup & Onboarding"
            data={competitor.onboarding}
            competitorName={competitor.name}
          />
        )}

        {/* 7. Testimonials Marquee - scrolling customer reviews */}
        <TestimonialsMarquee />

        {/* 8. Bottom Line - light pink stats */}
        <BottomLine />

        {/* 8. FAQs */}
        {competitor.faqs && competitor.faqs.length > 0 && (
          <FAQSection
            faqs={competitor.faqs}
            competitorName={competitor.name}
          />
        )}

        {/* 9. Related Comparisons */}
        <RelatedComparisons currentCompetitor={competitor.name} />

        {/* 10. Final CTA - "Wonderly is 100% free" - LAST before footer */}
        <FinalCTA />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xl font-bold wonderly-text mb-2">Wonderly</div>
          <p className="text-gray-400 text-sm">The all-in-one platform for growing businesses.</p>
        </div>
      </footer>

      {/* Version switcher - for A/B comparison */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`/compare/${competitor.slug?.current || competitor.slug}/v2`}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          <span>View Narrative Version</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </a>
      </div>
    </div>
  )
}

// This fetches data at build time
export async function getStaticProps({ params }) {
  const competitor = await getCompetitor(params.slug)

  if (!competitor) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      competitor,
    },
    revalidate: 60,
  }
}

// This tells Next.js which pages to generate
export async function getStaticPaths() {
  const slugs = await getAllCompetitorSlugs()

  return {
    paths: slugs.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: 'blocking',
  }
}
