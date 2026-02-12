export default function FinalCTA() {
  return (
    <div className="my-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Wonderly is 100% free,<br/>always.
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="px-6 py-3 wonderly-gradient text-white rounded-xl font-semibold text-sm hover:opacity-90 transition">
          Create a Free Account →
        </button>
        <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition">
          Why we build Wonderly →
        </button>
      </div>
    </div>
  )
}
