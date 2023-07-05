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

  background-color: #0A369D;

  .header-nav {
    a + a {
      margin-left: 5px;
    }
  }
`