export default function ObjectionReframe({ competitorName }) {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative">
            {/* Label */}
            <p className="text-pink-400 text-sm font-semibold uppercase tracking-wide mb-4">
              The elephant in the room
            </p>

            {/* The objection */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              "But {competitorName} has more features..."
            </h3>

            {/* The reframe */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sure. They also have more complexity, more onboarding calls, and more invoices
              hitting your inbox. Features don't help if your team never uses them.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The businesses that switch to Wonderly aren't looking for <em>more</em>.
              They're looking for <em>enough</em>—the tools that actually move the needle,
              without the bloat that slows everyone down.
            </p>

            {/* The flip */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <p className="text-white font-medium">
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
