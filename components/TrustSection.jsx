export default function TrustSection() {
  return (
    <div className="my-14 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
        15,000+ service businesses <span className="wonderly-text">trust Wonderly</span>
      </h2>
      <p className="text-sm text-gray-600 mb-5">
        For 3+ years, Wonderly has supported service SMBs with free, user-friendly business software.
      </p>
      <div className="flex justify-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md border border-gray-100 text-xs">
          <span className="font-bold text-yellow-500">G2</span>
          <span className="font-semibold text-gray-900">4.9</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md border border-gray-100 text-xs">
          <span className="font-bold text-orange-500">Capterra</span>
          <span className="font-semibold text-gray-900">4.8</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
