export default function NarrativeHero({ competitorName }) {
  return (
    <div className="wonderly-bg pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Small label */}
        <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">
          Wonderly vs. {competitorName}
        </p>

        {/* Criteria-setting headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          You Shouldn't Have to Pay{' '}
          <span className="wonderly-text">Per Seat</span>{' '}
          Just to Run Your Business.
        </h1>

        {/* Subheadline that twists the knife */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {competitorName} charges you more every time your team grows.
          We think that's backwards. Wonderly is free for unlimited users—because
          growth shouldn't come with a bill.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-4 wonderly-gradient text-white rounded-full font-semibold text-lg hover:opacity-90 transition shadow-lg"
          >
            Start Free — No Credit Card
          </a>
          <a
            href="#comparison"
            className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border border-gray-200 hover:border-pink-200 transition"
          >
            See the Comparison ↓
          </a>
        </div>

        {/* Trust signal */}
        <p className="mt-8 text-sm text-gray-500">
          Trusted by 15,000+ service businesses • 4.9/5 on G2
        </p>
      </div>
    </div>
  )
}
