import { type SchemaTypeDefinition } from 'sanity'
import navbar from './navbar'
import hero from './hero'
import middle from './middle'
import about from './about'
import customer from './customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navbar,hero,middle,about,customer]
}
