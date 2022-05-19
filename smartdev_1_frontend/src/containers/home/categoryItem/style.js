import styled from 'styled-components'
import {theme} from "../../../assests/common/color"
export const CategoryItemStyle = styled.div`
    color: rgba(0,0,0,.8);
    border-right: 1px solid rgba(0,0,0,.05);
    border-bottom: 1px solid rgba(0,0,0,.05);
    text-align: center;
    background-color: ${theme.white};
    height: 130px;
    width: 114px;
    &:hover{
        cursor: pointer;
        transform: translateZ(0);
        z-index: 1;
        border-color: rgba(0,0,0,.12);
        box-shadow: 0 0 0.8125rem 0 rgb(0 0 0 / 5%);
    }
    img{
        height:80px;
        width: 80px;
    }
    p{
        font-size: 13px;
        text-transform: capitalize;
        margin:0;
    }
`;