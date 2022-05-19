import styled from "styled-components";
import {theme} from "../../assests/common/color"
export const LayoutCart = styled.div`
    background-color: ${theme.bgE5};
    padding:30px;
    input[type = "checkbox"]{
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: relative;
        width: 16px;
        height: 16px;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        border-radius: 2px;
        border: 1px solid rgba(0,0,0,.14);
        text-align: center;
        box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
        margin-right: 8px;
        }
`
export const Container = styled.div`
    max-width: 1150px;
    padding-top: 2rem;
    margin: 0 auto;
    font-size: 15px;
    
`
export const Message = styled.div`
    display: flex;
    background-color: ${theme.bgMessCart};
    border: 1px solid ${theme.borderMessCart};
    min-height: 4rem;
    flex-direction: column;
    justify-content: center;
    div{
        margin-left: 5rem;
     }
`
export const CartSlibar = styled.div`
    margin-top: 2rem;
    display: flex;
    background-color: ${theme.white};
    min-height: 5rem;
    flex-direction: row;
    justify-content: space-between;
`
export const Left = styled.div`
    margin: auto;
    flex-basis: 30%;
`
export const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-basis: 60%;
`
export const ColumnDiv = styled.div`
    flex-direction: row;
    margin : auto;
`
