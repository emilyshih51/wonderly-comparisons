export default function Header() {
  return (
    <header className="bg-pink-50/50 py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg wonderly-gradient flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
            </svg>
          </div>
          <span className="font-bold text-gray-900">wonderly</span>
        </div>

        {/* CTA Button */}
        <button className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          Create a Free Account
        </button>
      </div>
    </header>
  )
}
