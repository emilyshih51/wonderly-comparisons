export default function SwitcherTestimonial({ competitorName }) {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-wide mb-3">
            From someone who switched
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            "I wish I'd found Wonderly sooner."
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-pink-100 relative">
          {/* Quote mark */}
          <div className="absolute top-6 left-8 text-8xl text-pink-200 font-serif leading-none">
            "
          </div>

          <div className="relative pt-8">
            {/* The story */}
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We were paying <span className="font-semibold">${competitorName} $280 a month</span> for
              our 8-person team. Every time we hired, I'd cringe knowing the bill was going up.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Then my friend mentioned Wonderly. I thought "free" was a gimmick—there's
              always a catch. But we've been on it for <span className="font-semibold">11 months now</span>,
              and I still haven't paid a dime for the core platform.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The craziest part? <span className="font-semibold">My team actually uses it.</span> With
              {competitorName}, half the features collected dust. Wonderly is simpler, which
              means people actually log in.
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)'}}>
                MR
              </div>
              <div>
                <p className="font-bold text-gray-900">Marcus Rodriguez</p>
                <p className="text-gray-500">Owner, Rodriguez Financial Advisory</p>
                <p className="text-sm text-pink-500">Switched from {competitorName} in 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional mini-testimonials */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { quote: "Setup took me 15 minutes. Not exaggerating.", name: "Sarah K.", role: "Real Estate" },
            { quote: "Finally, a CRM that doesn't nickel and dime us.", name: "James T.", role: "Consulting" },
            { quote: "My whole team uses it. That's never happened before.", name: "Lisa M.", role: "Marketing Agency" },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-gray-600 text-sm mb-3">"{t.quote}"</p>
              <p className="text-gray-900 font-medium text-sm">{t.name}</p>
              <p className="text-gray-400 text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
