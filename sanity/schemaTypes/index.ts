import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import blog from './blog'
import study from './study'
import faq from './faq'
import service from './service'
import process from './process'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blog, study, faq, service, process],
}
