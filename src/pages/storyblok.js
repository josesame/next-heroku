
import CmsPage from '@/components/CmsPage'
import { getStoryblokApi, storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "lOoTDiQO6bGt4V0LQ05QBQtt",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});

export default (props) => <CmsPage cms='Storyblok' {...props} />

export async function getStaticProps() {
  let slug = "storyblok";
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft", // or 'published'
  });
  const title = data.story.content.title
  const image = data.story.content.image.filename
  return {props: {title, image}}
}