export default function SimpleComparison({ competitorName, pricingData, featureData }) {
  // Build comparison from actual Sanity data, with fallbacks
  const buildComparisons = () => {
    const comparisons = []

    // Add pricing comparisons from pricingData
    // Sanity uses: featureName, wonderlyValue, competitorValue
    if (pricingData && pricingData.length > 0) {
      pricingData.forEach(item => {
        const wonderlyVal = String(item.wonderlyValue || '')
        const competitorVal = String(item.competitorValue || '')

        // Determine if Wonderly wins (free, unlimited, included, etc.)
        const wonderlyWins =
          wonderlyVal.toLowerCase().includes('free') ||
          wonderlyVal.toLowerCase().includes('unlimited') ||
          wonderlyVal.toLowerCase().includes('included') ||
          wonderlyVal.toLowerCase().includes('$0') ||
          item.wonderlyValue === true ||
          (competitorVal.toLowerCase().includes('extra') ||
           competitorVal.toLowerCase().includes('pay per') ||
           competitorVal.match(/\$\d+/))

        comparisons.push({
          feature: item.featureName,
          wonderly: item.wonderlyValue === true ? 'Free' : item.wonderlyValue === false ? '✗' : wonderlyVal,
          competitor: item.competitorValue === true ? '✓' : item.competitorValue === false ? '✗' : competitorVal,
          wonderlyWins: wonderlyWins
        })
      })
    }

    // If no data from Sanity, use sensible defaults
    if (comparisons.length === 0) {
      return [
        { feature: "Platform cost", wonderly: "Free", competitor: "$14-79/seat/mo", wonderlyWins: true },
        { feature: "Team seats", wonderly: "Unlimited", competitor: "Pay per seat", wonderlyWins: true },
        { feature: "Setup time", wonderly: "~20 minutes", competitor: "Days to weeks", wonderlyWins: true },
        { feature: "Hidden fees", wonderly: "None", competitor: "Add-ons extra", wonderlyWins: true },
        { feature: "CRM + Website + Phone", wonderly: "All included", competitor: "Separate tools", wonderlyWins: true },
        { feature: "AI features", wonderly: "$395/mo flat", competitor: "Varies", wonderlyWins: null },
      ]
    }

    return comparisons
  }

  const comparisons = buildComparisons()

  return (
    <div id="comparison" className="py-16 wonderly-bg scroll-mt-8">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-pink-500 uppercase tracking-wide mb-3 text-center">
          The comparison
        </h2>
        <p className="text-3xl font-bold text-gray-900 mb-2 text-center">
          The quick version.
        </p>
        <p className="text-gray-500 mb-10 text-center">
          Everything you need to know in one glance.
        </p>

        {/* Simple comparison table */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
            <div className="p-4"></div>
            <div className="p-4 text-center">
              <span className="font-bold wonderly-text">Wonderly</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-gray-400">{competitorName}</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-b border-gray-50 last:border-b-0 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
              }`}
            >
              <div className="p-4 flex items-center">
                <span className="font-medium text-gray-700 text-sm">{row.feature}</span>
              </div>
              <div className="p-4 text-center flex items-center justify-center">
                <span className={`font-semibold ${row.wonderlyWins ? 'text-teal-600' : 'text-gray-700'}`}>
                  {row.wonderly}
                </span>
                {row.wonderlyWins && (
                  <span className="ml-2 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="p-4 text-center flex items-center justify-center">
                <span className="text-gray-500">{row.competitor}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          * Pricing as of 2024. Check {competitorName}'s website for current rates.
        </p>
      </div>
    </div>
  )
}
