export default function BoldStatement({ statement, primaryCTA, secondaryCTA }) {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
          {statement || "Wonderly is free. Really."}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 wonderly-gradient text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
            {primaryCTA || "Get Started Free"} <span>→</span>
          </button>
          <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
            {secondaryCTA || "Talk to Sales"} <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
