
import CmsPage from '@/components/CmsPage'
import { createClient } from '@sanity/client'
import { getFile } from '@sanity/asset-utils';
import imageUrlBuilder from '@sanity/image-url';


export default (props) => <CmsPage cms='Sanity' {...props} />


export async function getStaticProps() {
  const client = createClient({
    projectId: '2q3k4o8m', // 'your-project-id', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
    // perspective: 'previewDrafts',
  })
  const slug = 'post'
  const data = await client.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`)
  const title = data.title || null
  const builder = imageUrlBuilder(client);
  const image = data.image && builder.image(data.image.asset).url() || null
  const video = data.image && getFile(data.video.asset, client.config()).asset.url || null
  return {props: {title, image, video}}
}
