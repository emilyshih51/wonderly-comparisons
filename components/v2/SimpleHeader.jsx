export default function SimpleHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold wonderly-text">
          Wonderly
        </a>

        {/* CTA */}
        <a
          href="#"
          className="px-5 py-2.5 wonderly-gradient text-white rounded-full font-medium text-sm hover:opacity-90 transition"
        >
          Start Free
        </a>
      </div>
    </header>
  )
}
