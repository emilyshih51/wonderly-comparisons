export default function KnockoutVisual({ competitorName, pricingData, onboarding }) {
  // Try to extract competitor pricing from the data
  // Sanity uses: featureName, wonderlyValue, competitorValue
  const extractCompetitorCost = () => {
    if (!pricingData || pricingData.length === 0) {
      return { monthlyPerSeat: 35, calculation: '$35/seat × 5 people × 24 months', total: 4200 }
    }

    // Look for pricing-related rows
    const pricingRow = pricingData.find(row =>
      row.featureName?.toLowerCase().includes('price') ||
      row.featureName?.toLowerCase().includes('cost') ||
      row.featureName?.toLowerCase().includes('monthly') ||
      row.featureName?.toLowerCase().includes('starter') ||
      row.featureName?.toLowerCase().includes('base')
    )

    if (pricingRow && pricingRow.competitorValue) {
      // Try to extract a number from the competitor value
      const compVal = String(pricingRow.competitorValue)
      const priceMatch = compVal.match(/\$(\d+)/)
      if (priceMatch) {
        const monthlyPerSeat = parseInt(priceMatch[1])
        const total = monthlyPerSeat * 5 * 24 // 5 people × 24 months
        return {
          monthlyPerSeat,
          calculation: `$${monthlyPerSeat}/seat × 5 people × 24 months`,
          total
        }
      }
    }

    // Fallback: look for any row with a dollar amount
    for (const row of pricingData) {
      if (row.competitorValue) {
        const compVal = String(row.competitorValue)
        const priceMatch = compVal.match(/\$(\d+)/)
        if (priceMatch) {
          const monthlyPerSeat = parseInt(priceMatch[1])
          const total = monthlyPerSeat * 5 * 24
          return {
            monthlyPerSeat,
            calculation: `$${monthlyPerSeat}/seat × 5 people × 24 months`,
            total
          }
        }
      }
    }

    // Default fallback
    return { monthlyPerSeat: 35, calculation: '$35/seat × 5 people × 24 months', total: 4200 }
  }

  // Get setup time comparison from onboarding data
  const getSetupComparison = () => {
    if (onboarding && onboarding.length > 0) {
      const setupRow = onboarding.find(row =>
        row.featureName?.toLowerCase().includes('setup') ||
        row.featureName?.toLowerCase().includes('time') ||
        row.featureName?.toLowerCase().includes('onboard')
      )
      if (setupRow) {
        return {
          wonderly: setupRow.wonderlyValue || '~20 minutes',
          competitor: setupRow.competitorValue || 'Days to weeks'
        }
      }
    }
    return { wonderly: '~20 minutes', competitor: 'Days to weeks' }
  }

  const { calculation, total } = extractCompetitorCost()
  const setup = getSetupComparison()

  // Format total with commas
  const formattedTotal = total.toLocaleString()

  return (
    <div className="py-16 wonderly-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-wide mb-3">
            The math doesn't lie
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            What a 5-person team costs over 2 years.
          </h2>
        </div>

        {/* Side by side visual comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Wonderly side */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100 text-center">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">
              Wonderly
            </p>
            <div className="text-6xl md:text-7xl font-bold text-teal-600 mb-4">
              $0
            </div>
            <p className="text-teal-700 font-medium mb-2">
              Free forever. 5 seats included.
            </p>
            <p className="text-teal-600/70 text-sm">
              Need AI? Add $395/mo flat rate.
            </p>

            {/* Visual bar */}
            <div className="mt-6 h-4 bg-teal-200 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-teal-500 rounded-full"></div>
            </div>
            <p className="text-xs text-teal-600 mt-2">$0 spent on platform fees</p>
          </div>

          {/* Competitor side */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              {competitorName}
            </p>
            <div className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
              ${formattedTotal}
            </div>
            <p className="text-gray-600 font-medium mb-2">
              {calculation}
            </p>
            <p className="text-gray-500 text-sm">
              And that's their mid-tier plan.
            </p>

            {/* Visual bar */}
            <div className="mt-6 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-full bg-red-400 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">${formattedTotal} spent on platform fees</p>
          </div>
        </div>

        {/* Setup time comparison */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-8">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
            <div className="p-4 pl-6">
              <span className="font-semibold text-gray-700">Setup time</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold wonderly-text">Wonderly</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-gray-400">{competitorName}</span>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="p-4 pl-6">
              <span className="text-gray-600">Time to get started</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-teal-600 font-semibold">{setup.wonderly}</span>
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 bg-teal-100 rounded-full">
                <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            <div className="p-4 text-center">
              <span className="text-red-500 font-medium">{setup.competitor}</span>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">
            That's <span className="wonderly-text">${formattedTotal}</span> you could spend on marketing, hiring, or literally anything else.
          </p>
        </div>
      </div>
    </div>
  )
}
