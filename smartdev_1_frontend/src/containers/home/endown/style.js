import styled from "styled-components";


export const EndowStyle = styled.div`
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        margin-top: -3px;
    }
    p{
        font-size: 12px;
        font-weight: 400;
        text-transform: capitalize;
        margin:5px 0 0;
        line-height: 16px;
        max-width: 150px;
    }
    img{
        height: 60px;
        width: 60px;
    }
`;