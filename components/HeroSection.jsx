export default function HeroSection({ competitorName, headline, subheadline, headlineHighlight }) {
  // Function to auto-detect and highlight important parts of the headline
  const renderHeadline = () => {
    const text = headline || `The smarter alternative to ${competitorName}`

    // If explicit highlight is provided, use it
    if (headlineHighlight && text.includes(headlineHighlight)) {
      const parts = text.split(headlineHighlight)
      return (
        <>
          {parts[0]}
          <span className="wonderly-text">{headlineHighlight}</span>
          {parts[1]}
        </>
      )
    }

    // Auto-detect: Look for text after em dash (—) - common pattern for key selling point
    if (text.includes('—')) {
      const parts = text.split('—')
      return (
        <>
          {parts[0]}—<span className="wonderly-text">{parts[1]}</span>
        </>
      )
    }

    // Auto-detect: Look for phrases starting with "Without" (case insensitive)
    const withoutMatch = text.match(/(Without [^,.]+)/i)
    if (withoutMatch) {
      const parts = text.split(withoutMatch[1])
      return (
        <>
          {parts[0]}
          <span className="wonderly-text">{withoutMatch[1]}</span>
          {parts[1]}
        </>
      )
    }

    // Auto-detect: Look for "No " phrases like "No Hidden Fees"
    const noMatch = text.match(/(No [A-Z][^,.]+)/i)
    if (noMatch) {
      const parts = text.split(noMatch[1])
      return (
        <>
          {parts[0]}
          <span className="wonderly-text">{noMatch[1]}</span>
          {parts[1]}
        </>
      )
    }

    // Auto-detect: Look for "Free" as a standalone word
    if (text.match(/\bFree\b/)) {
      return text.split(/(\bFree\b)/).map((part, i) =>
        part === 'Free' ? <span key={i} className="wonderly-text">Free</span> : part
      )
    }

    return text
  }

  return (
    <div className="wonderly-bg pt-8 pb-6">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Competitor Name Label */}
        <p className="text-sm text-gray-500 mb-3">Wonderly vs. {competitorName}</p>

        {/* Headline - fully dynamic from Clay/Sanity with optional highlight */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {renderHeadline()}
        </h1>

        {/* Subheadline - fully dynamic from Clay/Sanity */}
        <p className="text-sm text-gray-600 mb-4 max-w-xl mx-auto">
          {subheadline || `Compare features, pricing, and see why businesses are switching to Wonderly.`}
        </p>

        {/* Trust badge */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
            <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm text-gray-600">Wonderly is trusted by 10,000+ growing businesses</span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { label: 'Pricing', id: 'pricing' },
            { label: 'Features', id: 'features' },
            { label: 'AI Features', id: 'ai-features' },
            { label: 'Onboarding', id: 'onboarding' },
            { label: 'FAQ', id: 'faq' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                const element = document.getElementById(tab.id)
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-pink-200 transition"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
