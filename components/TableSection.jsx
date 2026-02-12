function renderValue(value, isNegative = false) {
  if (value === true || value === 'true') {
    return (
      <div className="inline-flex items-center gap-1.5 justify-center">
        <span className="text-lg font-bold text-teal-600">Free</span>
        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100">
          <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    )
  }

  if (value === false || value === 'false') {
    return (
      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
        <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    )
  }

  // Text values with positive/negative indicator
  return (
    <div className="inline-flex items-center gap-1.5 justify-center flex-wrap">
      <span className={`text-lg font-bold ${isNegative ? 'text-gray-700' : 'text-teal-600'}`}>{value}</span>
      {isNegative ? (
        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100">
          <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100">
          <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default function TableSection({ title, subtitle, data, competitorName, id }) {
  if (!data || data.length === 0) return null

  return (
    <div className="mb-10 scroll-mt-24" id={id}>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 wonderly-text">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="grid" style={{gridTemplateColumns: '200px 1fr 1fr'}}>
          <div className="py-4 px-5 bg-gray-50/80 rounded-tl-3xl"></div>
          <div className="py-4 px-4 text-center bg-gray-50/80 border-l border-gray-100">
            <span className="wonderly-text font-bold">Wonderly</span>
          </div>
          <div className="py-4 px-4 text-center bg-gray-50/80 border-l border-gray-100 rounded-tr-3xl">
            <span className="font-bold text-gray-400">{competitorName}</span>
          </div>
        </div>

        {/* Rows */}
        {data.map((row, index) => (
          <div key={index} className="grid border-t border-gray-100" style={{gridTemplateColumns: '200px 1fr 1fr'}}>
            <div className="py-5 px-5 flex items-start" style={{backgroundColor: '#faf8f5'}}>
              <span className="font-semibold text-gray-800 text-sm">{row.featureName}</span>
            </div>
            <div className="py-5 px-4 border-l border-gray-100 bg-teal-50/40">
              <div className="text-center mb-2">{renderValue(row.wonderlyValue, false)}</div>
              {row.wonderlyBlurb && (
                <p className="text-xs text-gray-600 text-center leading-relaxed">{row.wonderlyBlurb}</p>
              )}
            </div>
            <div className="py-5 px-4 border-l border-gray-100 bg-gray-50/40">
              <div className="text-center mb-2">{renderValue(row.competitorValue, true)}</div>
              {row.competitorBlurb && (
                <p className="text-xs text-gray-500 text-center leading-relaxed">{row.competitorBlurb}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
