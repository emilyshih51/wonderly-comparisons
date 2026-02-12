import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Fetch a single competitor by slug
export async function getCompetitor(slug) {
  return client.fetch(
    `*[_type == "competitor" && slug.current == $slug][0]`,
    { slug }
  )
}

// Fetch all competitors (for listing page)
export async function getAllCompetitors() {
  return client.fetch(
    `*[_type == "competitor"] | order(name asc) {
      name,
      "slug": slug.current
    }`
  )
}

// Fetch all slugs (for static generation)
export async function getAllCompetitorSlugs() {
  return client.fetch(
    `*[_type == "competitor"] { "slug": slug.current }`
  )
}
