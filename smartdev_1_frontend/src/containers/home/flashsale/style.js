import styled from 'styled-components'
import {theme} from "../../../assests/common/color"


export const FlashSaleStyle = styled.div`
    position: relative;
    height: 180px;
    width: 180px;
    img{
        height: 180px;
    width: 180px;
    }
    p{
        color: ${theme.textRed};
        font-weight: 600;
        font-size: 24px;
        margin:0;
        text-align: center;
        span{
            font-size: 12px;
            margin-right: 5px;
        }
    }
`;
export const FaleSaleItemDiscount = styled.div`
 position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(255, 212, 36, 0.9);
        height: 60px;
        width: 60px;
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 48% 83%, 0 100%);
        span{
            text-align: center;
            font-weight: 400;
            color: rgb(238, 77, 45);
            text-transform: uppercase;
            font-size: 16px;
            display: block;
            &:last-child{
                color:${theme.white};
                font-size: 15px;
                text-transform: uppercase;
                text-align: center;
            }
        }`;
export const FaleSaleItemSaled = styled.div`
height: 20px;
        width: 160px;
        border-radius: 20px;
        margin:0 auto;
        text-align: center;
        position: relative;
        overflow: hidden;
        background-color: ${theme.itemHomeSale};
        div{
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            height: 20px;
            width: 100px;
            background-color: ${theme.red};
        }
        span{
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            text-transform: uppercase;
            color: ${theme.white};
            position: relative;
            z-index: 10;
}`;
