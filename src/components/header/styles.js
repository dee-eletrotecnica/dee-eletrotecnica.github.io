import styled from 'styled-components'

export const HeaderStyles = styled.div`

  width: 100%;
  height: 80px;
  margin-bottom: 50px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);
  -moz-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);

  background: rgb(77,77,255);
  background: linear-gradient(353deg, rgba(77,77,255,1) 0%, rgba(10,54,157,1) 100%);

  .header-logo {
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }

    h2 {
      
    }
  }

  .header-nav {
    a + a {
      margin-left: 5px;
    }
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`