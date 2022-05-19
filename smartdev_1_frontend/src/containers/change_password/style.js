import styled from "styled-components";
import { theme } from "../../assests/common/color";

export const Layout = styled.div`
    background-color: ${theme.bgE5};
    padding-bottom : 10rem;
`;

export const Container = styled.div`
    display: flex;
    max-width: 1150px;
    margin: 0 auto;
`;

export const Main = styled.div`
    font-size: 15px;
    background-color: ${theme.white};
    flex-basis: 80%;
    margin-top: 2rem;
    padding: 30px;
    border-radius: 3px;
`;

export const ProfileTilte = styled.h2`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5rem;
    text-transform: capitalize;
    color: ${theme.black};
`;

export const ProfileDescribe = styled.p`
    margin-top: 10px;
    font-size: 14px;
    line-height: 10px;
    color: #555;
    font-weight: 500;
`;

export const ProfileTop = styled.div`
  border-bottom : 1px solid ${theme.bgE5} ;
`;

export const ProfileBottom = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const ProfileBottomLeft = styled.div`
    flex-basis: 70%;
`;

export const ProfileFormRow = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
`;
export const ProfileFormName = styled.p`
    width: 150px;
   
    text-align: right;
    margin-right: 30px;
`;
export const ProfileInput = styled.input`
    height: 30px;
    width: 70%;
    border-radius: 2px;
    font-size: 15px;
    border: 1px solid rgba(0,0,0,.14);
    &:focus{
        outline: 1px solid ${theme.black};
    }
`;

export const Error = styled.p`
    color: red;
`;

export const ProfileRadio = styled.div`
    display: flex;
    margin-right: 5px;
    input{
        margin-right: 5px;
    }
`;

export const ProfileButton = styled.button`
    color: ${theme.white};
    background: ${theme.textRed};
    height: 40px;
    padding: 0 20px;
    min-width: 70px;
    max-width: 220px;
    border: none;
    border-radius: 1px;
    cursor: pointer;
`;

export const ProfileBottomRight = styled.div`
    padding-top: 15px;
    margin-left: 50px;
    height: 250px;
    display:flex;
    align-items: center;
    flex-direction: column;
    label{
        margin:20px 0;
        background: ${theme.white};
        color: #555;
        border: 1px solid rgba(0,0,0,.09);
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
        padding:15px 20px;
        cursor: pointer;
    }
    p{
        padding:0;
        margin:0;
        color: #999;
        font-size: 14px;
    }
    input[type="file"] {
        display: none;
    }
`;

export const ProfileAvata = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;
         