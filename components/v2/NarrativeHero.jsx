export default function NarrativeHero({ competitorName, headline, subheadline, headlineHighlight }) {
  // Function to auto-detect and highlight important parts of the headline
  const renderHeadline = () => {
    const text = headline || `You Shouldn't Have to Pay Per Seat Just to Run Your Business.`

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

    // Auto-detect: Look for "Per Seat" as a phrase
    if (text.match(/Per Seat/i)) {
      return text.split(/(Per Seat)/i).map((part, i) =>
        part.toLowerCase() === 'per seat' ? <span key={i} className="wonderly-text">{part}</span> : part
      )
    }

    return text
  }

  // Generate dynamic subheadline based on competitor or use provided one
  const getSubheadline = () => {
    if (subheadline) return subheadline
    return `${competitorName} charges you more every time your team grows. We think that's backwards. Wonderly is free for unlimited users—because growth shouldn't come with a bill.`
  }

  return (
    <div className="wonderly-bg pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Small label */}
        <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">
          Wonderly vs. {competitorName}
        </p>

        {/* Criteria-setting headline - dynamic from Sanity */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {renderHeadline()}
        </h1>

        {/* Subheadline - dynamic from Sanity */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {getSubheadline()}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-4 wonderly-gradient text-white rounded-full font-semibold text-lg hover:opacity-90 transition shadow-lg"
          >
            Start Free — No Credit Card
          </a>
          <a
            href="#comparison"
            className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border border-gray-200 hover:border-pink-200 transition"
          >
            See the Comparison ↓
          </a>
        </div>

        {/* Trust signal */}
        <p className="mt-8 text-sm text-gray-500">
          Trusted by 15,000+ service businesses • 4.9/5 on G2
        </p>
      </div>
    </div>
  )
}
