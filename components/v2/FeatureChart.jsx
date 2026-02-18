export default function FeatureChart({ competitorName, featureData, aiFeatures }) {
  // Combine feature and AI data (exclude onboarding - that goes to KnockoutVisual)
  // Sanity uses: featureName, wonderlyValue, competitorValue
  const getFeatures = () => {
    const allFeatures = []

    // Add feature comparison data
    if (featureData && featureData.length > 0) {
      featureData.forEach(item => {
        const wonderlyVal = item.wonderlyValue
        const competitorVal = item.competitorValue
        allFeatures.push({
          feature: item.featureName,
          wonderly: wonderlyVal === true ? '✓' : wonderlyVal === false ? '✗' : String(wonderlyVal || ''),
          competitor: competitorVal === true ? '✓' : competitorVal === false ? '✗' : String(competitorVal || ''),
        })
      })
    }

    // Add AI features data
    if (aiFeatures && aiFeatures.length > 0) {
      aiFeatures.forEach(item => {
        const wonderlyVal = item.wonderlyValue
        const competitorVal = item.competitorValue
        allFeatures.push({
          feature: item.featureName,
          wonderly: wonderlyVal === true ? '✓' : wonderlyVal === false ? '✗' : String(wonderlyVal || ''),
          competitor: competitorVal === true ? '✓' : competitorVal === false ? '✗' : String(competitorVal || ''),
          category: 'AI'
        })
      })
    }

    // If no Sanity data at all, use defaults
    if (allFeatures.length === 0) {
      return [
        { feature: "CRM & Contact Management", wonderly: "✓", competitor: "✓" },
        { feature: "Email Marketing", wonderly: "✓", competitor: "✓" },
        { feature: "Website Builder", wonderly: "✓", competitor: "Add-on" },
        { feature: "Phone System", wonderly: "✓", competitor: "Add-on" },
        { feature: "SMS/Text Messaging", wonderly: "✓", competitor: "✓" },
        { feature: "Online Booking", wonderly: "✓", competitor: "✓" },
        { feature: "Invoicing & Payments", wonderly: "✓", competitor: "✓" },
        { feature: "Workflow Automation", wonderly: "✓", competitor: "Pro plan" },
        { feature: "Cost predictability", wonderly: "10/10", competitor: "Usage-based" },
      ]
    }

    return allFeatures
  }

  const features = getFeatures()

  // Helper to render Wonderly cell content
  const renderWonderlyCell = (value) => {
    const strVal = String(value || '')
    const isPositive = strVal === '✓' || strVal.toLowerCase() === 'yes' || strVal.toLowerCase() === 'included' || strVal.toLowerCase() === 'free' || value === true
    const isNegative = strVal === '✗' || strVal.toLowerCase() === 'no' || strVal.toLowerCase() === 'not available' || value === false

    if (isPositive) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-100">
          <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      )
    }

    if (isNegative) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      )
    }

    // Check if it's a score like "10/10" - add checkmark
    if (strVal.match(/^\d+\/\d+$/)) {
      return (
        <span className="inline-flex items-center gap-1">
          <span className="text-sm text-teal-600 font-semibold">{strVal}</span>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100">
            <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </span>
      )
    }

    // Check if it's "AI tier" - show checkmark with small "AI Tier" text underneath
    if (strVal.toLowerCase().includes('ai tier')) {
      return (
        <div className="flex flex-col items-center">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-100">
            <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-[10px] text-teal-500 mt-0.5">AI Tier</span>
        </div>
      )
    }

    // Regular text value
    return <span className="text-sm text-teal-600 font-medium">{strVal}</span>
  }

  // Helper to render Competitor cell content (red themed with X)
  const renderCompetitorCell = (value) => {
    const strVal = String(value || '')
    const isPositive = strVal === '✓' || strVal.toLowerCase() === 'yes' || strVal.toLowerCase() === 'included' || value === true
    const isNegative = strVal === '✗' || strVal.toLowerCase() === 'no' || strVal.toLowerCase() === 'not available' || value === false

    if (isPositive) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      )
    }

    if (isNegative) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      )
    }

    // Check if it's a pricing value like "$125-398/technician/month" or "$90-560/mo"
    const pricingMatch = strVal.match(/(\$[\d,]+-?[\d,]*)\/?(.*)$/i)
    if (pricingMatch) {
      const price = pricingMatch[1]
      let unit = pricingMatch[2]?.trim() || ''

      // Convert units to readable format - check longer patterns first!
      if (unit === 'mo' || unit === 'month') {
        unit = 'per month'
      } else if (unit.includes('/month')) {
        // Check /month BEFORE /mo to avoid "monthnth" bug
        unit = unit.replace('/month', ' per month')
      } else if (unit.includes('/mo')) {
        unit = unit.replace('/mo', ' per month')
      } else if (unit.includes('month')) {
        unit = unit.replace('month', 'per month')
      }

      return (
        <div className="flex flex-col items-center">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 mb-1">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-sm text-red-500 font-medium">{price}</span>
          {unit && <span className="text-[10px] text-red-400">{unit}</span>}
        </div>
      )
    }

    // Regular text - show with X and in red
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
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-pink-500 tracking-wide mb-3 text-center">
          Feature details
        </h2>
        <p className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Here's a detailed look at Wonderly's features.
        </p>
        <p className="text-sm text-gray-500 mb-10 text-center max-w-2xl mx-auto">
          We know unpredictable pricing is stressful—that's why ALL AI features (Receptionist, Text, Automations) are included in one flat rate of $395/mo after the first 14 days. No surprises, ever.
        </p>

        {/* Feature comparison table */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="p-4 pl-6">
              <span className="font-semibold text-gray-700">Feature</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold wonderly-text">Wonderly</span>
              <span className="block text-xs text-gray-400 mt-0.5">Free</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-gray-400">{competitorName}</span>
              <span className="block text-xs text-gray-400 mt-0.5">Paid</span>
            </div>
          </div>

          {/* Feature rows */}
          {features.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-b border-gray-50 last:border-b-0 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              } hover:bg-pink-50/30 transition-colors`}
            >
              <div className="p-4 pl-6 flex items-center">
                <span className="font-medium text-gray-700">{row.feature}</span>
                {row.category && (
                  <span className="ml-2 text-xs px-2 py-0.5 bg-purple-100 text-purple-600 rounded">
                    {row.category}
                  </span>
                )}
              </div>
              <div className="p-4 flex items-center justify-center">
                {renderWonderlyCell(row.wonderly)}
              </div>
              <div className="p-4 flex items-center justify-center">
                {renderCompetitorCell(row.competitor)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
