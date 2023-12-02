import styled from 'styled-components'
import Page from '@/components/Page'

export default function CmsPage({cms, title, image, video}) {

  return (
    <Page>
      <CmsPageStyled>
        <h1>{cms}</h1>
        <h2>Title: {title}</h2>
        {image && <img src={image} />}
        {video && (
          <video autoPlay playsInline loop muted>
            <source src={video} type="video/mp4" />
          </video>
        )}
      </CmsPageStyled>
    </Page>
  )
}


const CmsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img, 
  video {
    width: 40%;
    margin-top: 20px;
  }
`