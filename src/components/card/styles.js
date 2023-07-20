import styled from "styled-components"


export const CardStyle = styled.div.attrs((props) => ({color: props.color, imageUrl: props.imageUrl}))`
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, .02);

    .card {
        max-width: 380px;
        min-width: 380px;
        display: flex;
        flex-direction: column;
        text-align: start;
        border: 1px solid ${(props) => props.color};;
        border-radius: 8px;
        min-height: 485px;
        max-height: 485px;
        @media (max-width: 385px) { 
        max-width: 300px;
        min-width: 300px;
    }
    }

    .card-header {
        @media (max-width: 385px) {
            width: 100%;
            height: 50px;
        }
        display: flex;
        align-items: center;
        width: 381px;
        max-width: 381px;
        background-color: ${(props) => props.color}; 
        margin: 0 auto;
        border-radius: 8px 8px 0px 0px;

        svg {
            margin-right: 1rem;
            color: white;
            cursor: pointer;
        }& svg:hover {
            margin-right: .2rem;
            width: 30px;
        }
    }

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        height: 450px;
    }

    .card-image {
        display: flex;
        justify-content: center;
        width: 100%;
        min-height: 185px;
        max-height: 185px;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        img {
            width: 50%;
            transform: scale(1);
            object-fit: contain;
        }
    }

    .card-image:hover {
        img {
            transition: ease-in-out .3s;
            transform: scale(1.1);
        }
    }

    .card-readmore {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;
    }

    .card-title {
        text-align: center;
        height: 100%;
        margin: 8px auto;
        font-weight: bold;
        color: rgba(0, 0, 0, .5);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        cursor: pointer;
    }

    .card-desc {
        font-weight: 300;
        font-size: 17px;
        height: 75px;
        color: rgba(0, 0, 0, .5);
        text-align: center;
        overflow-y: scroll;
        overflow-x: hidden;
        text-overflow: ellipsis;
        font-family: 'Times New Roman', Times, serif;
        margin: 0;
        padding: 10px;
        /* border: .5px inset; */
        border-radius: 8px;
        /* background-color: rgba(255,255,255, .1); */
}

.card-descdiv::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.card-desc::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

.card-desc::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

    

    .card-content {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        line-height: 1.5rem;
        justify-content: space-between;
    }

    .card-item {
        margin: 0;
        text-decoration: none;
        color: black;
        font-weight: 200;
        border-bottom: 1px solid transparent;
        text-align: center;
        border-bottom: 1px solid ${(props) => props.color};
    }

    .card-items {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .card-item:hover {
        transition: ease-in-out.3s;
        border-bottom: 1px solid ${(props) => props.color};
        transform: scale(1.01);
    }

    .linkto {
        display: flex;
        text-decoration: none;
        width: fit-content;
        border-bottom: 1px solid transparent ;
        align-self: center;
        color: #0A369D;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        &:hover {
            transition: .2s ease-in-out;
            border-bottom: 1px solid ${(props) => props.color};
        }
    }
`