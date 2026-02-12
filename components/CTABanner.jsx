export default function CTABanner() {
  return (
    <div className="my-12 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100">
        <p className="text-gray-700 font-medium">Ready to see the difference?</p>
        <button className="px-6 py-3 wonderly-gradient text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg">
          Create Free Account
        </button>
      </div>
    </div>
  )
}
