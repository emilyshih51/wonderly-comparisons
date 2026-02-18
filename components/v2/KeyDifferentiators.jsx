export default function KeyDifferentiators({ competitorName, pricingData, keyDifferentiators: sanityDifferentiators }) {
  // Default differentiators (fallback if Sanity has none)
  const defaultDifferentiators = [
    {
      claim: `Wonderly is Free. ${competitorName} is Not.`,
      proof: "Wonderly's entire non-AI platform costs $0/month. No trial that expires. No 'starter' tier with missing features. Just... free.",
      knifeTwist: `${competitorName} starts charging from day one. Every feature, every user—it all adds up fast.`
    },
    {
      claim: `${competitorName} charges you per seat. We don't.`,
      proof: "Invite your entire team—admin, sales, support, everyone. Unlimited seats on every plan, including free.",
      knifeTwist: `With ${competitorName}, you're constantly doing mental math: "Do they really need access?" Growth shouldn't require a spreadsheet.`
    },
    {
      claim: "Wonderly sets up in 20 mins. Not 20 days.",
      proof: "Import your contacts, connect your email, and you're running. Our customers are up and running in under 20 minutes, not weeks.",
      knifeTwist: `${competitorName}'s "guided onboarding" is code for "you'll need a few calls with our team before anything works."`
    }
  ]

  // Use Sanity differentiators if available (and has at least 3), otherwise use defaults
  const differentiators = (sanityDifferentiators && sanityDifferentiators.length >= 3)
    ? sanityDifferentiators.slice(0, 3)
    : defaultDifferentiators

  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-pink-500 tracking-wide mb-3">
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
