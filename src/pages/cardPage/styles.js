import styled from "styled-components"

export const CardPageStyles = styled.div`

ul {
    list-style: none;
    padding: 0;
}

    .wrapper {
        margin: 0 10%;
        display: flex;
    }

    .container {

        @media (max-width: 768px) {
            margin: 1rem;
        }   
        
        display: flex;
        width: 100%;
        
        h1 {
            color: rgba(0,0,0,.5);
        }

        .separator {
            width: 95vw;
            border-bottom: 1px solid rgba(0,0,0,.2);
        }

        .links {
            width: 100%;
        /* display: flex; */
            /* flex-wrap: wrap; */
            /* align-items: center;
            justify-content: center; */
            margin-bottom: 5rem;
            border: 1px solid rgba(0,0,0,.2);
            border-radius: 8px;
            padding: 1.2rem;
            gap: 30px;

            /* .link {
                display: flex;
                flex-direction: column;
                outline: 1px solid rgba(0,0,0,.2);
                border-radius: 8px;
                width: 500px;
                height: 200px;
                padding: 15px;

                /* .separator {
                    width: 100%;
                    border-bottom: 1px solid rgba(0,0,0,.2);
                } */

                .link-header {
                    text-align: left;
                    p {
                        height: 35px;
                        border-bottom: 1px solid rgba(0,0,0,.2);
                        width: max-content;
                    }
                }

                .link-body {
                    text-align: left;
                }
            }
        }
    }
`