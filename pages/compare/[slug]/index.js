import { getCompetitor, getAllCompetitorSlugs } from '../../../lib/sanity'
import SimpleHeader from '../../../components/v2/SimpleHeader'
import NarrativeHero from '../../../components/v2/NarrativeHero'
import KeyDifferentiators from '../../../components/v2/KeyDifferentiators'
import SimpleComparison from '../../../components/v2/SimpleComparison'
import FeatureChart from '../../../components/v2/FeatureChart'
import ObjectionReframe from '../../../components/v2/ObjectionReframe'
import KnockoutVisual from '../../../components/v2/KnockoutVisual'
import NarrativeCTA from '../../../components/v2/NarrativeCTA'
import HookFAQ from '../../../components/v2/HookFAQ'

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
    <div className="min-h-screen">
      {/* Sticky header */}
      <SimpleHeader />

      {/* 1. HEADLINE - Sets criteria in your favor */}
      <NarrativeHero
        competitorName={competitor.name}
        headline={competitor.heroHeadline}
        subheadline={competitor.heroSubheadline}
        headlineHighlight={competitor.heroHeadlineHighlight}
      />

      {/* 2. KEY DIFFERENTIATORS - Claim, proof, knife twist */}
      <KeyDifferentiators
        competitorName={competitor.name}
        pricingData={competitor.pricingTable}
        keyDifferentiators={competitor.keyDifferentiators}
        keyDifferentiatorsHeadline={competitor.keyDifferentiatorsHeadline}
      />

      {/* 3. COMPARISON CHART - Simple validation layer */}
      <SimpleComparison
        competitorName={competitor.name}
        pricingData={competitor.pricingTable}
        featureData={competitor.featureComparison}
      />

      {/* 3b. FEATURE CHART - Detailed feature comparison */}
      <FeatureChart
        competitorName={competitor.name}
        featureData={competitor.featureComparison}
        aiFeatures={competitor.aiFeatures}
      />

      {/* 4. OBJECTION REFRAME - Flip their strength */}
      <ObjectionReframe
        competitorName={competitor.name}
        elephantInRoom={competitor.elephantInRoom}
      />

      {/* 5. KNOCKOUT VISUAL - One dramatic data point */}
      <KnockoutVisual
        competitorName={competitor.name}
        pricingData={competitor.pricingTable}
        onboarding={competitor.onboarding}
      />

      {/* 6. FAQ - Hook-driven */}
      <HookFAQ competitorName={competitor.name} faqs={competitor.faqs} />

      {/* 7. CTA - Zero risk */}
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
