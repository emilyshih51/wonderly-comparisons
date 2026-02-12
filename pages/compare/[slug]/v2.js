import { getCompetitor, getAllCompetitorSlugs } from '../../../lib/sanity'
import SimpleHeader from '../../../components/v2/SimpleHeader'
import NarrativeHero from '../../../components/v2/NarrativeHero'
import KeyDifferentiators from '../../../components/v2/KeyDifferentiators'
import SimpleComparison from '../../../components/v2/SimpleComparison'
import ObjectionReframe from '../../../components/v2/ObjectionReframe'
import KnockoutVisual from '../../../components/v2/KnockoutVisual'
import SwitcherTestimonial from '../../../components/v2/SwitcherTestimonial'
import NarrativeCTA from '../../../components/v2/NarrativeCTA'
import HookFAQ from '../../../components/v2/HookFAQ'

export default function NarrativeComparisonPage({ competitor }) {
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
    <div className="min-h-screen">
      {/* Sticky header */}
      <SimpleHeader />

      {/* 1. HEADLINE - Sets criteria in your favor */}
      <NarrativeHero competitorName={competitor.name} />

      {/* 2. KEY DIFFERENTIATORS - Claim, proof, knife twist */}
      <KeyDifferentiators
        competitorName={competitor.name}
        pricingData={competitor.pricingTable}
      />

      {/* 3. COMPARISON CHART - Simple validation layer */}
      <SimpleComparison
        competitorName={competitor.name}
        pricingData={competitor.pricingTable}
        featureData={competitor.featureComparison}
      />

      {/* 4. OBJECTION REFRAME - Flip their strength */}
      <ObjectionReframe competitorName={competitor.name} />

      {/* 5. KNOCKOUT VISUAL - One dramatic data point */}
      <KnockoutVisual competitorName={competitor.name} />

      {/* 6. TESTIMONIAL - Switcher story */}
      <SwitcherTestimonial competitorName={competitor.name} />

      {/* 7. FAQ - Hook-driven */}
      <HookFAQ competitorName={competitor.name} />

      {/* 8. CTA - Zero risk */}
      <NarrativeCTA competitorName={competitor.name} />

      {/* Simple footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold wonderly-text mb-3">Wonderly</div>
          <p className="text-gray-400 mb-6">
            The all-in-one platform for growing service businesses.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

      {/* Version switcher - for comparison */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`/compare/${competitor.slug?.current || competitor.slug}`}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          <span>View Chart Version</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </a>
      </div>
    </div>
  )
}

// Same data fetching as the main page
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

export async function getStaticPaths() {
  const slugs = await getAllCompetitorSlugs()

  return {
    paths: slugs.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: 'blocking',
  }
}
