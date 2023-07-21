import styled from "styled-components"

export const CardPageStyles = styled.div`
    
    .container {
        margin: 0 10%;
        /* height: 100vh; */
        
        h1 {
            color: rgba(0,0,0,.5);
        }

        .separator {
            width: 95vw;
            border-bottom: 1px solid rgba(0,0,0,.2);
        }

        .links {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 5rem;
            gap: 30px;

            .link {
                outline: 1px solid red;
                width: 100%;
                height: 200px;
            }
        }
    }
`