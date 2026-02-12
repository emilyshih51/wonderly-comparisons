export default function TableNav() {
  const sections = [
    { id: 'pricing', label: 'Pricing' },
    { id: 'features', label: 'Features' },
    { id: 'ai-features', label: 'AI Features' },
    { id: 'onboarding', label: 'Setup & Onboarding' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex justify-center gap-2 mb-8">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 bg-white rounded-full border border-gray-200 hover:border-pink-200 transition-all"
        >
          {section.label}
        </button>
      ))}
    </div>
  )
}
