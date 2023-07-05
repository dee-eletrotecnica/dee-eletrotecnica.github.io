import styled from "styled-components"


export const CardStyle = styled.div`
    width: 300px;
    min-width: 150px;
    height: 200px;
    outline: 1px solid red;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-header {
        height: 30px;
        outline: 1px solid red;
    }
`