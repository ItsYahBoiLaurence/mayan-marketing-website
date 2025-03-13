import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import caseStudies from './case-studies'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, caseStudies],
}
