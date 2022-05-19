import styled from "styled-components";
import {theme} from "../../assests/common/color"
export const SideBarContainer = styled.div`
    background-color: ${theme.bgSideBarAdmin};
    flex-basis: 20%;
    position: sticky;
    height: 100vh;
    top: 0;
    left: 0;
`;
export const SideBarLogo  = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0 15px 30px;
    img{
        height: 40px;
        width: 40px;
        margin-right:10px;
    }
    p{
        color:${theme.textLogoAdmin};
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;

    }
`;
export const SideBarUl  = styled.ul`
   padding: 0;
   margin: 0;
   li:nth-child(5){
        
        border-bottom:1px solid ${theme.gray};
   }
 
`;