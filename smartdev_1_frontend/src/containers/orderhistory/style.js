import  styled from "styled-components"
import { theme } from "../../assests/common/color"

export const LayoutOrderHistory = styled.div`
    background-color: ${theme.bgE5};
    padding-bottom : 10rem;
`
export const Container = styled.div`
    display: flex;
    max-width: 1150px;
    justify-content: space-between;
    margin: 0 auto;
`
export const MainHistory = styled.div`
    margin-top: 2rem;
    flex-basis: 80%;
    font-size: 15px;
`
export const OrderHistoryTop = styled.div`
    margin-top : 0px;
    min-height: 5rem;
    background-color: ${theme.white};
    display: flex;
    justify-content: space-between;
`
export const  OrderHistoryTopLink = styled.div`
    margin : auto;
    &:hover {
        color: ${theme.textRed};
    }
`
export const  Search = styled.div`
    margin :  2rem 0rem ;
    height: 3rem;
    input {
        width: 90%;
        border: 0rem;
        height: 100%;
        padding: 0rem;
        padding-left: 20px;
        outline: none;
        box-sizing: border-box;
    }
    button {
        width: 10%;
        height: 100%;
        border: 0rem;
        padding: 0rem;
        color:${theme.white};
        background-color:  ${theme.textRed};
        &:hover{
            cursor: pointer;
        }
    }
`

