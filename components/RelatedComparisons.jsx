import Link from 'next/link'

export default function RelatedComparisons({ currentCompetitor }) {
  const competitors = [
    { name: 'HighLevel', slug: 'highlevel' },
    { name: 'HubSpot', slug: 'hubspot' },
    { name: 'Housecall Pro', slug: 'housecall-pro' },
    { name: 'Assembly', slug: 'assembly' },
    { name: 'Centripe.ai', slug: 'centripe-ai' },
    { name: 'CRMOne', slug: 'crmone' },
    { name: 'Keap', slug: 'keap' },
    { name: 'Trillet AI', slug: 'trillet-ai' },
    { name: 'Pipedrive', slug: 'pipedrive' },
    { name: 'ActiveCampaign', slug: 'activecampaign' },
  ]

  // Filter out the current competitor
  const otherCompetitors = competitors.filter(c =>
    c.name.toLowerCase() !== currentCompetitor?.toLowerCase()
  )

  return (
    <div className="my-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Compare Wonderly to other platforms</h3>
      <div className="flex flex-wrap gap-2">
        {otherCompetitors.map((competitor) => (
          <Link
            key={competitor.slug}
            href={`/compare/${competitor.slug}`}
            className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition"
          >
            vs. {competitor.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
