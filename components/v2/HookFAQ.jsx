import { useState } from 'react'

export default function HookFAQ({ competitorName, faqs: sanityFaqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  // Default hook-driven FAQs that address real objections
  const defaultFaqs = [
    {
      question: "Wait, you're actually free? What's the catch?",
      answer: `No catch. Wonderly's core platform—CRM, website builder, phone system, email, SMS—is completely free. We make money when businesses upgrade to our AI tier ($395/mo), which includes AI receptionist, AI texting, and automations. But the base platform? Free. Forever. We're betting that once you see the value, you'll want the AI stuff too. And if you don't, that's fine—you still get a great business platform at no cost.`
    },
    {
      question: "Why would you give this away for free?",
      answer: `Simple economics. ${competitorName} and others spend millions acquiring customers through ads and sales teams. We'd rather put that money into the product and let word-of-mouth do the work. When you love something that's free, you tell people. That's our growth strategy. Plus, we genuinely believe small businesses shouldn't have to choose between paying rent and paying for software.`
    },
    {
      question: "Can I bring my data from " + competitorName + "?",
      answer: `Yes. Export your contacts as a CSV from ${competitorName}, then upload to Wonderly. Most people have their data moved over in under 30 minutes. If you get stuck, our support team (yes, free users get support too) can help.`
    },
    {
      question: "What if I need help? Is support free too?",
      answer: `Yep. Email support is free and unlimited. We don't believe in making you pay extra just to ask a question. Our average response time is under 2 hours during business hours. We also have a help center with guides, videos, and templates to get you started.`
    },
    {
      question: "Is this really as good as " + competitorName + "?",
      answer: `Depends what you mean by "good." If you need 200 features, complex automations, and enterprise-grade customization, ${competitorName} might be better. But if you need a CRM, website, phone system, and email marketing that your team will actually use—without the complexity and cost—Wonderly wins. We're not trying to be everything. We're trying to be exactly what growing service businesses need.`
    },
    {
      question: "What happens if you raise prices later?",
      answer: `The free tier is free forever—we've committed to that publicly. If you're on the AI tier and we ever raise prices, you'd be grandfathered at your current rate. We're not in the business of bait-and-switch. That's exactly why people leave platforms like ${competitorName} in the first place.`
    }
  ]

  // Combine Sanity FAQs with defaults to ensure at least 5
  const getFaqs = () => {
    // Start with Sanity FAQs if available
    const sanityItems = sanityFaqs && sanityFaqs.length > 0
      ? sanityFaqs.map(faq => ({ question: faq.question, answer: faq.answer }))
      : []

    // If we have at least 5 from Sanity, use those
    if (sanityItems.length >= 5) {
      return sanityItems
    }

    // Otherwise, combine with defaults to reach at least 5
    const combined = [...sanityItems]
    const existingQuestions = new Set(sanityItems.map(f => f.question.toLowerCase()))

    for (const defaultFaq of defaultFaqs) {
      if (combined.length >= 5) break
      // Avoid duplicates
      if (!existingQuestions.has(defaultFaq.question.toLowerCase())) {
        combined.push(defaultFaq)
      }
    }

    return combined.length > 0 ? combined : defaultFaqs
  }

  const faqs = getFaqs()

  // Determine the hook headline based on whether we have custom FAQs
  const hookHeadline = sanityFaqs && sanityFaqs.length > 0
    ? "Common Questions"
    : `"Are you <span class=\"wonderly-text\">really</span> free?"`

  const hookSubheadline = sanityFaqs && sanityFaqs.length > 0
    ? `Everything you need to know about switching from ${competitorName}`
    : "(and other questions skeptics ask)"

  return (
    <div className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        {/* Pre-header */}
        <p className="text-sm font-semibold text-pink-500 uppercase tracking-wide mb-3 text-center">
          FAQs
        </p>

        {/* Hook headline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          <span dangerouslySetInnerHTML={{ __html: hookHeadline }} />
          <span className="block text-lg font-normal text-gray-500 mt-2">
            {hookSubheadline}
          </span>
        </h2>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                openIndex === index
                  ? 'border-pink-200 bg-pink-50/50'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-5 text-left flex items-center justify-between"
              >
                <span className={`font-medium pr-4 ${
                  openIndex === index ? 'text-gray-900' : 'text-gray-700'
                }`}>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180 text-pink-500' : 'text-gray-400'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
