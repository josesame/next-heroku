
import CmsPage from '@/components/CmsPage'
import axios from 'axios';

export default (props) => <CmsPage cms='Strapi' {...props} />

// export async function getStaticProps() {
export async function getServerSideProps() {
  console.log('about to debug')
  debugger

  const local = {
    token: '0f2a6c2c4b3c9f4bc1be80360293569cc56b35dbf357fe1e9eced43d4ef786e4600ce060213349d527527bcff6bf4b54722f74cfb9e94ffc0ff8ac3637f534f5c7776d393d67fbae1f86890cc2f37f53aa3891f11d5d2fc1658921c2a7d6156c697c45342e1a34906c04ee6092d160975819a121400e45fa61243ee75b013442',
    origin: 'http://localhost:1337',
  }

  const heroku = {
    token: '6b8093745a2730dba15f9ff61ccbc8960628bce52921f839946ad4c6ccb8b77909542f287ff94bfb0eb9f00cf5dd56ae6b2a90b24218e03a9bada23457075bb00a572d25fe52bece69888709ea649f83106d26466f3b5b089a616ce3ec12113b4a74b7b1c62da4c8f9b7acf1bcfeea672f81808aa35ef9b07afd0bca26fd43be',
    origin: 'https://sesame-strapi-poc-26afe0159b0c.herokuapp.com',
  }

  // const {token, origin } = local
  const {token, origin } = heroku

  const url = `${origin}/api/home-page?publicationState=preview&populate=*`
  const res = await axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = res.data.data.attributes
  const title = data?.title || null
  const image = data.image.attributes ? `http://localhost:1337${data?.image.data.attributes.url}` : null
  const video = data.video.attributes ? `http://localhost:1337${data?.video.data.attributes.url}` : null
  return {props: {title, image, video}}
}
