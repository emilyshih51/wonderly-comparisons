const testimonials = [
  {
    text: "Everything about Wonderly suits us—NO fees, ease of use, and customer experience as well as their client support!!",
    name: "Jennifer K.",
    company: "Real Estate Agency",
    initials: "JK"
  },
  {
    text: "We were incurring a ton of fees with our past CRM and Wonderly has helped us save so much more of our revenue.",
    name: "Sarah M.",
    company: "Marketing Agency",
    initials: "SM"
  },
  {
    text: "Wonderly has been invaluable in helping me track my clients, sales, and revenue in one spot. The coolest thing is it's really free!",
    name: "David L.",
    company: "Consulting Firm",
    initials: "DL"
  },
  {
    text: "Since using Wonderly, our client conversion has skyrocketed. It's an easy platform to use. Plus customer support has always been responsive!",
    name: "Marcus W.",
    company: "Financial Advisory",
    initials: "MW"
  },
  {
    text: "We couldn't believe there was a free business platform. Wonderly took ZERO fees from us, which is huge when you run on tight margins.",
    name: "Michael R.",
    company: "Home Services",
    initials: "MR"
  },
  {
    text: "We were ready to run our business in less than 30 minutes. The setup was better than some paid platforms I've used.",
    name: "Lisa T.",
    company: "Photography Studio",
    initials: "LT"
  }
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-shrink-0 w-56 bg-white rounded-lg p-3 shadow-sm border border-gray-100 mx-1.5">
      <Stars />
      <p className="text-xs text-gray-700 mb-3 leading-relaxed line-clamp-4">{testimonial.text}</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs" style={{background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)'}}>
          {testimonial.initials}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-xs">{testimonial.name}</div>
          <div className="text-[10px] text-gray-500">{testimonial.company}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsMarquee() {
  // Double the testimonials for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials]

  return (
    <div className="my-12 -mx-6 px-0" style={{width: '100vw', marginLeft: 'calc(-50vw + 50%)', overflow: 'hidden'}}>
      {/* First row - moves left */}
      <div className="flex animate-marquee mb-4">
        {doubledTestimonials.map((t, i) => (
          <TestimonialCard key={`row1-${i}`} testimonial={t} />
        ))}
      </div>

      {/* Second row - moves right */}
      <div className="flex animate-marquee-reverse">
        {[...doubledTestimonials].reverse().map((t, i) => (
          <TestimonialCard key={`row2-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  )
}
