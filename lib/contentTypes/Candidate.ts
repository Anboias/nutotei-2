import { Image, RichText } from './generic'

export interface Candidate {
  sys: {
    id: string
    firstPublishedAt: string
  }
  name: string
  slug: string
  review: string
  mainImage: Image
  content: RichText
  documentsCollection: {
    items: Image[]
  }
  party: string
  facebookLink: string
}
