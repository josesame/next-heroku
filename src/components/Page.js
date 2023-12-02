import styled from 'styled-components'
import Link from 'next/link'

export default function Page({children}) {
  return (
    <PageStyled>
      <nav>
        <div className='logo'>CMS Options</div>
        <div className='links'>
          <Link href='/storyblok'>Storyblok</Link>
          <Link href='/contentful'>Contentful</Link>
          <Link href='/sanity'>Sanity</Link>
          <Link href='/builderio'>Builder.io</Link>
          <Link href='/strapi'>Strapi</Link>
        </div>
      </nav>
      <div className='pageContent'>
      {children}
      </div>
    </PageStyled>
  )
}

const PageStyled = styled.main`
  min-height: 100vh;
  background: black;
  color: #fff;
  font-family: Arial;
  display: flex;
  flex-direction: column;

  nav {
    padding: 25px;
    display: flex;
    .logo {
      flex: 1;
    }
    .links {
      a {
        margin-right: 10px;
  
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .pageContent {
    padding: 25px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #121212;
    text-align: center;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`