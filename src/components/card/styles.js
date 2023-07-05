import styled from "styled-components"


export const CardStyle = styled.div`
    width: 300px;
    min-width: 150px;
    height: 200px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid rgba(0,0,0,0.1);

    /* cursor: pointer; */

    .card {
        display: flex;
        flex-direction: column;
        text-align: start;
    }

    .card-header {
        width: 100%;
        height: 30px;
        background-color: rgba(0,0,0,0.14);
        border-radius: 5px 0px 5px 1px;
        margin: 0 auto;

        box-shadow: 0px 5px 1px 0px rgba(0,0,0,0.14);
        -webkit-box-shadow: 0px 5px 1px 0px rgba(0,0,0,0.14);
        -moz-box-shadow: 0px 5px 1px 0px rgba(0,0,0,0.14);
        
        img {
            height: 110%;
            width: 100%;
            object-fit: cover;
            filter: brightness(.9);
        }
    }

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px;
        height: 100%;
    }

    .card-title {
        text-align: center;
        height: 100%;
        margin: 0 auto;
        font-weight: 400;
    }

    .card-text {
        font-weight: 300;
    }

    .linkto {
        display: flex;
        text-decoration: none;
        height: 30px;
        border: 1px solid rgba(0,0,0,0.1);
        width: fit-content;
        padding: 2px;
        border-radius: 5px;
        align-self: center;
    }
`