export default function NarrativeCTA({ competitorName }) {
  return (
    <div className="py-16 wonderly-bg">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Pre-header */}
        <p className="text-sm font-semibold text-pink-500 uppercase tracking-wide mb-4">
          Ready to switch?
        </p>

        {/* Main headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Just try it. Seriously.
        </h2>

        {/* Risk removal */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          No credit card. No 14-day trial that expires. No "let's schedule a demo call."
          Just sign up, import your contacts, and see if it works for you.
        </p>

        {/* Zero-risk points */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Free forever (really)</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Import from {competitorName}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-block px-10 py-5 wonderly-gradient text-white rounded-full font-bold text-xl hover:opacity-90 transition shadow-xl hover:shadow-2xl"
        >
          Create Your Free Account →
        </a>

        {/* Soft follow-up */}
        <p className="mt-6 text-gray-400 text-sm">
          Takes about 2 minutes. Your {competitorName} data can come with you.
        </p>
      </div>
    </div>
  )
}
