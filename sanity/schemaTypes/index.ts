import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import blog from './blog'
import study from './study'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blog, study],
}
