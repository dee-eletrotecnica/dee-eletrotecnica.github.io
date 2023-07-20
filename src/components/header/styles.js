import styled from 'styled-components'

export const HeaderStyles = styled.header`

  width: 100%;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    margin-bottom: 15%;
  }

  @media (max-width: 385px) {
    margin-bottom: 15%;
  }

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  

  box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);
  -moz-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);

  background: linear-gradient(353deg, rgba(77,50,200,1) 0%, rgba(10,54,157,1) 100%);

  .header-logo {
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 50%;
      transform: scale(2.5);
      margin-top: 50%;
    }

    h2 {
      
    }
  }

  .banner {
    object-fit: cover;
    width: 100%;

    box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);
    -webkit-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);
    -moz-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.14);
  }

  .header-nav {
    a {
      text-decoration: none;
      font-weight: 100;
      color: white;
    } :hover {
      border-bottom: 1px solid yellow;
    }
    a + a {
      margin-left: 5px;
    }
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`