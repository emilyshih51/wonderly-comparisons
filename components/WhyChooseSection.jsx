export default function WhyChooseSection({ competitorName }) {
  const bullets = [
    "All-in-one platform (CRM, website, phone, SMS, email)",
    "No per-seat pricing, ever",
    "No hidden costs. No contracts.",
    "AI handles lead follow-up 24/7",
    "Set up in under 20 minutes",
    "Free unlimited support"
  ]

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-purple-100">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left side - Headline + Bullets in 2 columns */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 leading-tight">
                Here's what Wonderly<br/>can do for your business.
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-xs">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-pink-500 mb-1">3x</div>
                <div className="text-gray-600 text-xs">More leads handled</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-500 mb-1">40+</div>
                <div className="text-gray-600 text-xs">Hours saved per month</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-pink-500 mb-1">$0</div>
                <div className="text-gray-600 text-xs">Platform cost</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-500 mb-1">24/7</div>
                <div className="text-gray-600 text-xs">AI never sleeps</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-6">
            <button className="px-6 py-3 wonderly-gradient text-white rounded-xl font-semibold text-sm hover:opacity-90 transition">
              Create a Free Account →
            </button>
            <p className="text-xs text-gray-400 mt-3">* Growth metrics reported by our customers in an internal survey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
