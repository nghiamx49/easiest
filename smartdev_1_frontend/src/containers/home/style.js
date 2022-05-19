import styled from "styled-components"
import {theme} from "../../assests/common/color"


export const HomeSlider = styled.div`
    margin:30px 0 10px;
    box-sizing: border-box;
    display: flex;
    img{
        width: 100%;
    }
`;

export const HomeSliderLeft = styled.div`
    flex-basis: 70%;
    margin-right: 10px;
`;
export const HomeSliderRight = styled.div`
    flex-basis: 30%;
    img{
        height: 115px;
        &:first-child{
            margin-bottom: 7px;
        }
    }
`;

export const HomeBgF5F5F5 = styled.div`
    background-color: ${theme.grayF5};
    padding: 30px 0;
`;
export const HomeDonateImg = styled.div`
    img{
        width: 100%;
    }
`;
export const HomeCategory = styled.div`
    background-color: ${theme.white};
    margin: 20px 0;

`;
export const HomeTitle = styled.div`
    height: 60px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0,0,0,.05); 
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.white};
    p{
        font-size: 16px;
        margin: 0;
        font-size: 300;
        color: rgba(0,0,0,.54);
    }
`;
export const HomeFaleSale = styled.div`
    background-color: ${theme.white};
`;
export const HomeFaleSaleList = styled.div`
    display: flex;
    justify-content: space-between;
    height: 250px;
`;

export const HomeImgSale = styled.div`
    display: flex;
    margin:20px 0;
    img{
        width: 33.3%;
    }
`;
export const HomeShoppeSmallTopLeft = styled.div`
   display: flex;
   align-items: center;
   h3{
    color: ${theme.titleHomeSmall};
    text-transform: uppercase;
    font-size: 20px;
    margin-right: 10px;
   }
   p span{
       display: inline-flex;
       align-items: center;
        font-size: 16px;
        margin-right: 10px;
        svg{
            margin-right: 5px;
        }
    }
`;
export const HomeShoppeSmallTopRight = styled.div`
   span{
       display: inline-flex;
       align-items: center;
        font-size: 16px;
        margin-right: 10px;
        color: ${theme.titleHomeSmall};
        svg{
            margin-top: 5px;
        }
    }
`;
export const HomeShoppeSmallBottom = styled.div`
    display: flex;
    background-color: ${theme.white};
    padding: 10px;
`;
export const HomeMargin20 = styled.div`
   margin: 20px 0;
`;
export const HomeSearchTopItem = styled.div`
    background-color: ${theme.white};
    padding: 20px;
        img{
            width: 100%;
        }
    p{
        margin:10px 0 0;
        font-size: 20px;
        text-transform: capitalize;
    }
`;
export const HomeProductList = styled.div`
    margin: 20px auto;
    width:1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;