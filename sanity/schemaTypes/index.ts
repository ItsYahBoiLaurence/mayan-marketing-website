import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import blog from './blog'
import study from './study'
import faq from './faq'
import service from './service'
import process from './process'
import banner from './banner'
import gatedContent from './gated-content'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blog, study, faq, service, process, banner, gatedContent],
}
