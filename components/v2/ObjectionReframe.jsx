export default function ObjectionReframe({ competitorName }) {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-purple-100">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

          <div className="relative">
            {/* Label */}
            <p className="text-pink-500 text-sm font-semibold uppercase tracking-wide mb-4">
              The elephant in the room
            </p>

            {/* The objection */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-gray-900">
              "But {competitorName} has more features..."
            </h3>

            {/* The reframe */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sure. They also have more complexity, more onboarding calls, and more invoices
              hitting your inbox. Features don't help if your team never uses them.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The businesses that switch to Wonderly aren't looking for <em>more</em>.
              They're looking for <em>enough</em>—the tools that actually move the needle,
              without the bloat that slows everyone down.
            </p>

            {/* The flip */}
            <div className="bg-white rounded-xl p-6 border border-purple-100 shadow-sm">
              <p className="text-gray-800 font-medium">
                💡 Here's the real question: Do you need 200 features, or do you need
                a CRM, website, and phone system that your team will actually use
                by next Tuesday?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
