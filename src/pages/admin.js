import styled from 'styled-components'
import {useRef} from 'react'

export const Admin = () => {
  const frame = useRef()

  return (
      <AdminStyled>
        <button className='refresh' onClick={() => {
          frame.current.contentDocument.location.reload()
        }}>↻</button>
        <iframe ref={frame} className='preview' src="http://localhost:3000/sanity" />
        <iframe className='cms' src="http://localhost:3333/" />
      </AdminStyled>
  )
}

const AdminStyled = styled.div `
  display: flex;
  width: 100%;
  height: 100vh;

  .refresh {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 40px;
    padding: 0;
    background: white;
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    line-height: 0;
    cursor: pointer;
  }

  iframe {
    border: 0;
    /* width: 100%; */
  }

  .preview {
    flex: 1;
  }

  .cms {
    width: 30%;
    box-sizing: border-box;
    border-left: 1px solid black;
  }
`

export default Admin
