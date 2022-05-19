import styled from "styled-components";
import { theme } from "../../../assests/common/color";

export const HomeSearchStyle = styled.div`
 display: flex;
   background-color: ${theme.white};
   border-right: 1px solid rgba(0,0,0,.05);
   width: 230px;
   p {
       padding: 0 21px;
    span{
        display: block;
        &:first-child{
            color: ${theme.black};
            font-weight: 500;
            text-transform: capitalize;
            font-size: 13px;
        }
        &:last-child{
            margin-top: .3125rem;
            color: ${theme.gray};
            font-size: 11px;
        }
   }
   }
   img{
       height: 100px;
       width: 100px;
   }
`;