export default function FeatureChart({ competitorName, featureData }) {
  // Use Sanity feature data or defaults
  // Sanity uses: featureName, wonderlyValue, competitorValue
  const getFeatures = () => {
    if (featureData && featureData.length > 0) {
      return featureData.map(item => {
        const wonderlyVal = item.wonderlyValue
        const competitorVal = item.competitorValue

        return {
          feature: item.featureName,
          wonderly: wonderlyVal === true ? '✓' : wonderlyVal === false ? '✗' : String(wonderlyVal || ''),
          competitor: competitorVal === true ? '✓' : competitorVal === false ? '✗' : String(competitorVal || ''),
        }
      })
    }

    // Default features if no Sanity data
    return [
      { feature: "CRM & Contact Management", wonderly: "✓", competitor: "✓" },
      { feature: "Email Marketing", wonderly: "✓", competitor: "✓" },
      { feature: "Website Builder", wonderly: "✓", competitor: "Add-on" },
      { feature: "Phone System", wonderly: "✓", competitor: "Add-on" },
      { feature: "SMS/Text Messaging", wonderly: "✓", competitor: "✓" },
      { feature: "Online Booking", wonderly: "✓", competitor: "✓" },
      { feature: "Invoicing & Payments", wonderly: "✓", competitor: "✓" },
      { feature: "Workflow Automation", wonderly: "✓", competitor: "Pro plan" },
      { feature: "Reporting & Analytics", wonderly: "✓", competitor: "✓" },
      { feature: "Mobile App", wonderly: "✓", competitor: "✓" },
    ]
  }

  const features = getFeatures()

  // Helper to render cell content
  const renderCell = (value, isWonderly = false) => {
    const strVal = String(value || '')
    const isPositive = strVal === '✓' || strVal.toLowerCase() === 'yes' || strVal.toLowerCase() === 'included' || value === true
    const isNegative = strVal === '✗' || strVal.toLowerCase() === 'no' || value === false

    if (isPositive) {
      return (
        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
          isWonderly ? 'bg-teal-100' : 'bg-gray-100'
        }`}>
          <svg className={`w-4 h-4 ${isWonderly ? 'text-teal-600' : 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
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

    // Text value (like "Add-on", "Pro plan", etc.)
    return (
      <span className={`text-sm ${
        strVal.toLowerCase().includes('add-on') || strVal.toLowerCase().includes('extra') || strVal.toLowerCase().includes('pro')
          ? 'text-amber-600 font-medium'
          : 'text-gray-600'
      }`}>
        {strVal}
      </span>
    )
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-pink-500 uppercase tracking-wide mb-3 text-center">
          Feature by feature
        </h2>
        <p className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Everything you need. Nothing you don't.
        </p>
        <p className="text-gray-500 mb-10 text-center">
          See how Wonderly stacks up against {competitorName} on the features that matter.
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
              <span className="font-bold text-gray-500">{competitorName}</span>
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
              </div>
              <div className="p-4 flex items-center justify-center">
                {renderCell(row.wonderly, true)}
              </div>
              <div className="p-4 flex items-center justify-center">
                {renderCell(row.competitor, false)}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            <span className="text-amber-600 font-medium">Orange text</span> = requires upgrade or additional cost with {competitorName}
          </p>
        </div>
      </div>
    </div>
  )
}
