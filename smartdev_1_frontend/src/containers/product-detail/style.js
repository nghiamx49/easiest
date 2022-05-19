import styled from "styled-components";
import { theme } from "../../assests/common/color";

export const Layout = styled.div`
    background-color: ${theme.bgE5};
    padding-bottom : 10rem;
    padding-top: 2rem;
`;

export const Container01 = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    background-color: ${theme.white};
    border-radius: 3px;
    font-size: 15px;
    display: flex;
`;

export const MainLeft = styled.div`
    margin: 15px;
`;

export const ImgShow = styled.img`
    width: 430px;
    height: 430px;
`;

export const ListImgProduct = styled.div`
    display: flex;
    img {
        width: 100px;
        height: 100px;
        margin-right: 8px;
        border: 1px solid ${theme.bgE5};
        cursor: pointer;
    }
`;

export const MainRight = styled.div`
    margin: 15px;
`;

export const Title = styled.p`
    font-size: 23px;
    font-weight: 500;
    line-height: 23px;
    margin-top: 5px;
`;

export const StarCommetAmount = styled.div`
    display: flex;
    align-items: center;
  
`;

export const StarCommetAmountDiv = styled.div`
    border-left : 1px solid rgba(0,0,0,.14) ;
    margin-left: 10px;
    padding: 7px 10px;
`;

export const AverageStar = styled.span`
    color: ${theme.textRed};
    border-bottom: 1px solid ${theme.textRed};
    margin-right: 5px;
    font-size: 18px;
    font-weight: 400;
`;

export const TotalComment = styled.span`
    border-bottom: 1px solid ${theme.black};
    margin-right: 5px;
    font-size: 18px;
    font-weight: 400;
`;

export const TotalSold = styled.span`
    margin-right: 5px;
    font-size: 18px;
    font-weight: 400;
`;

export const StarCommetAmountText = styled.span`
    font-size: 15px;
    color: #767676;
    text-transform: capitalize;
`;

export const Price = styled.div`
    padding: 15px 20px;
    margin-top: 15px;
    background: #fafafa;
    font-size: 30px;
    font-weight: 700;
    color: ${theme.textRed};
`;

export const Delivery = styled.div`
    display: flex;
    padding-top: 30px;
    span{
        margin-left: 5px;
        font-size: 15px;
    color: #767676;
    text-transform: capitalize;
    }
`;

export const FeeDelivery = styled.div`
    display: flex;
    margin-top: 5px;
    span{
        margin-right: 15px;  
    }
`;

export const LeftText = styled.p`
    font-size: 15px;
    color: #767676;
    text-transform: capitalize;
    margin-right: 30px;
    margin-top: 0px;
`;

export const Amount = styled.div`
    display: flex;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: rgb(253, 245, 245);
`;

export const PlusAndMinus = styled.div`
  width: 32px;
    height: 32px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid rgba(0,0,0,.14);
    cursor: text;
    color: rgba(0,0,0,.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const NumberBetweenPlusMinus = styled.div`
    width: 50px;
    height: 32px;
    font-size: 16px;
    font-weight: 400;
    border-top: 1px solid rgba(0,0,0,.14);
    border-bottom: 1px solid rgba(0,0,0,.14);
    color: rgba(0,0,0,.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CoverButton = styled.div`
    display: flex;
`;


export const AddCartButton = styled.button`
    margin-right: 15px;
    min-width: 11.25rem;
    max-width: 250px;
    height: 48px;
    padding: 0 .75rem;
    font-size: 14px;
    background: rgba(255,87,34,0.1);
    color: ${theme.textRed};
    border: 1px solid ${theme.textRed};
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const BuyNowButton = styled.button`
    margin-right: 15px;
    min-width: 11.25rem;
    padding: 0 .75rem;
    font-size: 14px;
    color: ${theme.white};
    background: ${theme.textRed};
    max-width: 250px;
    height: 48px;
    border: none;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Container02 = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    background-color: ${theme.white};
    border-radius: 3px;
    font-size: 15px;
    display: flex;
    margin-top: 1.4rem;
`;

export const ShopInforLeft = styled.div`
    display: flex;
    padding: 25px;
    justify-content: center;
    align-items: center;
`;

export const ImgProvider = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 25px;
`;

export const CoverNameShop = styled.div`
    border-right: 1px solid rgba(0,0,0,.14);
    padding-right: 100px;
    margin-right: 30px;

`;

export const NameShop = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
    color: rgba(0,0,0,.87);
    margin: 0;
`;

export const ShowShopButton = styled.button`
    margin-right: 15px;
    min-width: 11.25rem;
    max-width: 250px;
    height: 34px;
    padding: 0 .75rem;
    font-size: 14px;
    background: rgba(255,87,34,0.1);
    color: ${theme.textRed};
    border: 1px solid ${theme.textRed};
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ShopInforRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 60%;
    padding-right: 120px;
    label{
        text-transform: capitalize;
        color: rgba(0,0,0,.4);
        margin-right: .625rem;
        cursor: default;
    }
    span{
        color:${theme.textRed};
        cursor: pointer;
        
    }
`;

export const Container03 = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    font-size: 15px;
    display: flex;
    margin-top: 1.4rem;
`;

export const Container03Left = styled.div`
    flex-basis: 80%;
    /* background-color: #ffffff;
    border-radius: 3px; */
`;

export const Container03Right = styled.div`
    flex-basis: 20%;
    background-color:${theme.white};
    border-radius: 3px;
    margin-left: 1.2rem;
`;

export const Container03LeftTop = styled.div`
    padding: 25px;
    background-color: ${theme.white};
    border-radius: 3px;
`;

export const ProductDetailContainer03Left = styled.div`
    margin-bottom: 30px;
label{
    padding-left: .875rem;
    color: rgba(0,0,0,.4);
    font-size: 18px;
    margin-right: 2.5rem;
    cursor: default;
}
span{
    color: rgba(0,0,0,.8);
}
`;

export const ProductDescriteContainer03Left = styled.div`
pre{
    white-space: pre-wrap;
    color: rgba(0,0,0,.8);
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.875rem;
}
`;

export const TextDescriceProduct = styled.div`
    background: rgba(0,0,0,.02);
    color: rgba(0,0,0,.87);
    font-size: 20px;
    padding: .875rem;
    text-transform: uppercase;
    margin-bottom: 25px;
`;

export const Container03LeftBottom = styled.div`
    background-color: ${theme.white};
    border-radius: 3px;
    padding-left: 25px;
    padding-bottom: 25px;

`;

export const TitleComment = styled.div`
    font-size: 20px;
    color: rgba(0,0,0,.87);
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    text-transform: uppercase;
    padding-top: 25px;
`;

export const HeaderComment = styled.div`
    background-color: ${theme.bgE5};
    min-height: 5rem;
    border: 1px solid #f9ede5;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 30px;
    margin-right: 35px;
    display: flex;
    align-items: center;
`;

export const Star = styled.div`
    text-align: center;
    color: ${theme.textRed};
    font-size: 18px;
    margin-right: 20px;
`;

export const NumberStar = styled.span`
    font-size: 25px;
`;

export const CoverButtonStar = styled.div`
    font-size: 15px;
    display: flex;
    justify-content: space-evenly;
    flex-basis: 80%;
`;

export const ButtonStar = styled.div`
    height: 30px;
    line-height: 30px;
    min-width: 70px;
    text-align: center;
    padding: 0 .625rem;
    background-color: ${theme.white};
    border: 1px solid rgba(0,0,0,.09);
    margin: 5px;
`;

export const TitleProductTopSale = styled.div`
    color: rgba(0,0,0,.4);
    margin: 10px 0 0;
    text-transform: capitalize;
    padding: 20px 20px;
    font-size: 15px;
`;

export const ProductTopSaleDetailCover = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProductTopSaleDetail = styled.div`
    border-top: 1px solid rgba(0,0,0,.09);
    margin-bottom:40px;
`;