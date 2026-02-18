export default function SimpleComparison({ competitorName, pricingData, featureData }) {
  // Build comparison from actual Sanity data, with fallbacks
  // Sanity uses: featureName, wonderlyValue, competitorValue
  const buildComparisons = () => {
    const comparisons = []

    // Add pricing comparisons from pricingData
    if (pricingData && pricingData.length > 0) {
      pricingData.forEach(item => {
        const wonderlyVal = String(item.wonderlyValue || '')
        const competitorVal = String(item.competitorValue || '')

        comparisons.push({
          feature: item.featureName,
          wonderly: item.wonderlyValue === true ? 'Free' : item.wonderlyValue === false ? '✗' : wonderlyVal,
          competitor: item.competitorValue === true ? '✓' : item.competitorValue === false ? '✗' : competitorVal,
        })
      })
    }

    // If no data from Sanity, use sensible defaults
    if (comparisons.length === 0) {
      return [
        { feature: "Platform cost", wonderly: "Free", competitor: "$14-79/seat/mo" },
        { feature: "Team seats", wonderly: "Unlimited", competitor: "Pay per seat" },
        { feature: "Hidden fees", wonderly: "None", competitor: "Add-ons extra" },
        { feature: "AI features", wonderly: "$395/mo flat", competitor: "Varies" },
      ]
    }

    return comparisons
  }

  const comparisons = buildComparisons()

  // Render Wonderly cell with checkmark
  const renderWonderlyCell = (value) => {
    const strVal = String(value || '')

    // Check if it's a score like "10/10" - show in GREEN with checkmark
    if (strVal.match(/^\d+\/\d+$/)) {
      return (
        <span className="inline-flex items-center gap-1">
          <span className="font-semibold text-teal-600">{strVal}</span>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100">
            <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </span>
      )
    }

    // Regular value with checkmark
    return (
      <span className="inline-flex items-center gap-1">
        <span className="font-semibold text-teal-600">{strVal}</span>
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100">
          <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      </span>
    )
  }

  // Render competitor cell - show checkmark if same as Wonderly or positive, X if negative
  const renderCompetitorCell = (value, wonderlyValue) => {
    const strVal = String(value || '')
    const wonderlyStr = String(wonderlyValue || '').toLowerCase()

    // If competitor matches Wonderly (e.g., both "Unlimited"), show neutral checkmark
    if (strVal.toLowerCase() === wonderlyStr ||
        (strVal.toLowerCase() === 'unlimited' && wonderlyStr === 'unlimited') ||
        (strVal.toLowerCase() === 'yes' && wonderlyStr === 'yes') ||
        (strVal.toLowerCase() === 'included' && wonderlyStr === 'included')) {
      return (
        <span className="inline-flex items-center gap-1">
          <span className="font-medium text-gray-600">{strVal}</span>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100">
            <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </span>
      )
    }

    // Check if it's a pricing value like "$125-398/technician/month"
    const pricingMatch = strVal.match(/^(\$[\d,]+-?[\d,]*)\/(.+)$/i)
    if (pricingMatch) {
      const price = pricingMatch[1]
      const unit = pricingMatch[2]?.trim() || ''

      return (
        <div className="flex flex-col items-center">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 mb-1">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-sm text-red-500 font-medium">{price}</span>
          <span className="text-[10px] text-red-400">{unit}</span>
        </div>
      )
    }

    // Check if it's a score like "3/10" - show value and X on right (matching Wonderly's checkmark position)
    if (strVal.match(/^\d+\/\d+$/)) {
      return (
        <span className="inline-flex items-center gap-1">
          <span className="font-medium text-red-500">{strVal}</span>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
            <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </span>
      )
    }

    // Regular text - show X on top, text below
    return (
      <div className="flex flex-col items-center">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 mb-1">
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="text-sm text-red-500 font-medium">{strVal}</span>
      </div>
    )
  }

  return (
    <div id="comparison" className="py-16 wonderly-bg scroll-mt-8">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-pink-500 tracking-wide mb-3 text-center">
          Feature overview
        </h2>
        <p className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Wonderly vs. {competitorName} in one glance.
        </p>
        <p className="text-gray-500 mb-10 text-center">
          The most important things you need to know.
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
                {renderWonderlyCell(row.wonderly)}
              </div>
              <div className="p-4 text-center flex items-center justify-center">
                {renderCompetitorCell(row.competitor, row.wonderly)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
