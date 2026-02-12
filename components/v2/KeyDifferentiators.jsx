export default function KeyDifferentiators({ competitorName, pricingData }) {
  // Build differentiators from pricing data, with intelligent defaults
  // Sanity uses: featureName, wonderlyValue, competitorValue
  const buildDifferentiators = () => {
    const differentiators = []

    // Try to extract pricing info
    let competitorPrice = null

    if (pricingData && pricingData.length > 0) {
      // Look for price-related row
      const priceRow = pricingData.find(row =>
        row.featureName?.toLowerCase().includes('price') ||
        row.featureName?.toLowerCase().includes('cost') ||
        row.featureName?.toLowerCase().includes('monthly') ||
        row.featureName?.toLowerCase().includes('starter')
      )
      if (priceRow && priceRow.competitorValue) {
        const compVal = String(priceRow.competitorValue)
        const match = compVal.match(/\$(\d+)/)
        if (match) competitorPrice = match[1]
      }

      // If no price row found, look for any row with a dollar amount
      if (!competitorPrice) {
        for (const row of pricingData) {
          if (row.competitorValue) {
            const compVal = String(row.competitorValue)
            const match = compVal.match(/\$(\d+)/)
            if (match) {
              competitorPrice = match[1]
              break
            }
          }
        }
      }
    }

    // 1. Price differentiator
    const priceKnife = competitorPrice
      ? `${competitorName} starts at $${competitorPrice}/seat/month. Add 5 team members? That's $${parseInt(competitorPrice) * 5}/month before you've helped a single customer.`
      : `${competitorName} starts at $14/seat/month. Add 5 team members? That's $70/month before you've helped a single customer.`

    differentiators.push({
      claim: "We're actually free. They're not.",
      proof: "Wonderly's entire non-AI platform costs $0/month. No trial that expires. No 'starter' tier with missing features. Just... free.",
      knifeTwist: priceKnife,
      icon: "💰"
    })

    // 2. Seats differentiator
    differentiators.push({
      claim: "Your whole team can use it. No seat math required.",
      proof: "Invite your entire team—admin, sales, support, everyone. Unlimited seats on every plan, including free.",
      knifeTwist: `With ${competitorName}, you're constantly doing mental math: "Do they really need access?" Growth shouldn't require a spreadsheet.`,
      icon: "👥"
    })

    // 3. Setup differentiator
    differentiators.push({
      claim: "Set up in 20 minutes. Not 20 days.",
      proof: "Import your contacts, connect your email, and you're running. Our customers are up and running in under 20 minutes, not weeks.",
      knifeTwist: `${competitorName}'s "guided onboarding" is code for "you'll need a few calls with our team before anything works."`,
      icon: "⚡"
    })

    return differentiators
  }

  const differentiators = buildDifferentiators()

  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-pink-500 uppercase tracking-wide mb-3">
          Why people switch
        </h2>
        <p className="text-3xl font-bold text-gray-900 mb-12">
          Three things {competitorName} customers wish they'd known sooner.
        </p>

        <div className="space-y-12">
          {differentiators.map((diff, index) => (
            <div key={index} className="relative">
              {/* Number badge */}
              <div className="absolute -left-4 md:-left-12 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              <div className="pl-8">
                {/* Claim */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {diff.claim}
                </h3>

                {/* Proof */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {diff.proof}
                </p>

                {/* Knife twist - styled differently */}
                <div className="bg-gray-50 border-l-4 border-pink-300 pl-4 py-3 rounded-r-lg">
                  <p className="text-gray-500 text-sm italic">
                    {diff.knifeTwist}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
