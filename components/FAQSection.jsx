import { useState } from 'react'

export default function FAQSection({ faqs, competitorName }) {
  const [openFaq, setOpenFaq] = useState(0)

  if (!faqs || faqs.length === 0) return null

  return (
    <div className="my-8 scroll-mt-24" id="faq">
      <h2 className="text-2xl font-bold wonderly-text mb-1">Frequently Asked Questions</h2>
      <p className="text-sm text-gray-500 mb-6">Common questions about making the switch</p>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-900 text-sm pr-4">{faq.question}</span>
              <svg
                className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${
                  openFaq === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openFaq === index && (
              <div className="px-4 pb-4">
                {/* Comparison pills */}
                {(faq.wonderlyValue || faq.competitorValue) && (
                  <div className="flex gap-3 mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-100 rounded-full">
                      <svg className="w-3.5 h-3.5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-600">Wonderly:</span>
                      <span className="text-xs font-semibold text-teal-700">{faq.wonderlyValue}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                      <span className="text-xs text-gray-500">{competitorName}:</span>
                      <span className="text-xs font-semibold text-gray-600">{faq.competitorValue}</span>
                    </div>
                  </div>
                )}
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
