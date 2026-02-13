export default function SwitcherTestimonial({ competitorName }) {
  return (
    <div className="py-10 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        {/* Compact testimonial card */}
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-2xl p-6 border border-pink-100 relative">
          {/* Small quote mark */}
          <div className="absolute top-4 left-5 text-5xl text-pink-200 font-serif leading-none">
            "
          </div>

          <div className="relative pl-6 pt-4">
            {/* Condensed quote */}
            <p className="text-gray-700 leading-relaxed mb-4">
              We were paying <span className="font-semibold">${competitorName} $280/mo</span> for 8 people.
              Then we switched to Wonderly—<span className="font-semibold">11 months later, still $0</span> for
              the core platform. The best part? My team actually uses it.
            </p>

            {/* Author - inline */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)'}}>
                MR
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Marcus Rodriguez</p>
                <p className="text-gray-500 text-xs">Owner, Rodriguez Financial Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
