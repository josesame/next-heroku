
import { createClient } from 'contentful';
import CmsPage from '@/components/CmsPage'

export default (props) => <CmsPage cms='Contentful' {...props} />

export async function getStaticProps() {

  const client = createClient({
    space: 'dxs05nbbmheu', // CF_SPACE_ID, // ID of a Compose-compatible space to be used \
    accessToken: 'FUqcZQ5jpULeDpFBkEmygj-sVIVxKxEyT9a_m-gotHI', // CF_DELIVERY_ACCESS_TOKEN, // delivery API key for the space \
    host: 'preview.contentful.com',
  });

  const res = await client.getEntry('73Qu87rk07iWcYim8A3qvl')
  const title = res.fields.title || null
  const image = res.fields.image?.fields.file.url || null
  const video = res.fields.video?.fields.file.url || null
  return {props: {title, image, video}}
}