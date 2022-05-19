import styled from 'styled-components'
import { theme } from '../../assests/common/color';


export const FooterContainer = styled.footer`
    background-color: #fbfbfb;
    border-top: 4px solid ${theme.textRed};
    padding:50px 0 0;
`;
export const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    h3{
        font-size: 14px;
        font-weight: 600;
        color: rgba(0,0,0,.54);
        margin-bottom: 1.25rem;
        margin-top: 2.5rem;
    }
    ul{
        margin:0;
        padding:0;
        list-style: none;
    }
    li{
        margin-bottom: 10px;
        a{
            text-decoration: none;
            color: rgba(0,0,0,.54);
            font-size: 12px;
        }

    }
`;
export const FooterCenter = styled.div`
   border-top: 1px solid rgba(0,0,0,.1);
   display: flex;
   justify-content: space-between;
   padding: 20px 0;
   font-size: 14px;
   color: rgba(0,0,0,.54);
`;
export const FooterBottom = styled.div`
     background: ${theme.bgE5};
     padding: 50px;
     text-align: center;
     p{
         margin:0 auto;
         font-size: 14px;
         color: rgba(0,0,0,.54);
         line-height: 20px;
     }
     img{
         margin:20px 0;

     }
`;
export const FooterBottomHead = styled.div`
    display: flex;
    justify-content: center;
    div{
        padding: 5px 20px;
        border-right: 1px solid rgba(0,0,0,.09);
        font-size: 14px;
         color: rgba(0,0,0,.54);
        &:last-child{
            border-right:none;
        }
    }
`;
