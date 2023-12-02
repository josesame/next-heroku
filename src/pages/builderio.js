
import CmsPage from '@/components/CmsPage'
import { builder } from '@builder.io/react'

export default (props) => <CmsPage cms='Builder.io' {...props} />

export async function getStaticProps(context) {

  builder.init('4e1db48cecad44038ed154b94f2e28b8')
  // const res = await builder.get('builder-page', { url: location.pathname })
  // const res = await builder.get('builder-page')
  const res = await builder.get('builder-page', { url: '/builderio' });


  const title = res.data.title || null
  const image = res.data.image || null
  const video = res.data.video || null

  console.log(res.data.video)

  return {props: {title, image, video}}
}



