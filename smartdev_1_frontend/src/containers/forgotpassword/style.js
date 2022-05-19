import styled from "styled-components";

export const FPContainer = styled.div`
    background-color: #fff;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
    border-radius: 1px;
    overflow: hidden;
    width: 450px;
`;

export const FPCoverContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 420px;
    margin: 0 auto;
`;

export const FPTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    min-height: 5rem;
`;

export const FPTitleIcon = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FPTitleName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 22px;
    color: #222;
    padding-right: 25px;
`;

export const FPContent = styled.div`
    padding: 0 5rem 4rem;
`;

export const FPContentName = styled.div`
    text-align: center;
    color: rgba(0,0,0,.65);
    font-size: 15px;
`;

export const FPContentInputDiv = styled.div`
    text-align: center;
    margin-top: 20px;
`;

export const FPContentInput = styled.input`
    text-align: center;
    margin-top: 20px;
    width: 80%;
    height: 30px;
`;

export const FPContentBorderButton = styled.div`
    text-align: center;
    margin-top: 20px;
`;

export const Error = styled.p`
    color: red;
`;

export const FPContentButton = styled.button`
    height: 40px;
    padding: 0 20px;
    min-width: 70px;
    max-width: 220px;
    border: none;
    border-radius: 1px;
    color: #fff;
    background: #ee4d2d;
    cursor: pointer;
`;