import Link from 'next/link'
import { getAllCompetitors } from '../lib/sanity'

export default function Home({ competitors }) {
  return (
    <div className="min-h-screen wonderly-bg">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Wonderly vs <span className="wonderly-text">The Competition</span>
          </h1>
          <p className="text-xl text-gray-600">
            See how Wonderly compares to other platforms
          </p>
        </div>

        {/* Competitor Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {competitors && competitors.length > 0 ? (
            competitors.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/compare/${competitor.slug}`}
                className="block bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition hover:border-pink-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Wonderly vs {competitor.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  See the full comparison →
                </p>
                <span className="inline-block px-4 py-2 wonderly-gradient text-white rounded-full text-sm font-medium">
                  View Comparison
                </span>
              </Link>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500 mb-4">No comparisons yet.</p>
              <p className="text-sm text-gray-400">
                Add competitors in your Sanity Studio to see them here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const competitors = await getAllCompetitors()

  return {
    props: {
      competitors: competitors || [],
    },
    revalidate: 60, // Regenerate page every 60 seconds
  }
}
