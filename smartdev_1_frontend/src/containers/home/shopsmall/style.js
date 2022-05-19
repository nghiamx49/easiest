import styled from "styled-components";
import { theme } from "../../../assests/common/color";

export const ShopSmallItemStyle = styled.div`
    height: 220px;
    width:184px;
    position: relative;
    cursor: pointer;
    p{
        position: absolute;
        bottom:0px;
        left: 15%;
        font-size: 16px;
        text-transform: capitalize;
        margin: 0;
        color: ${theme.titleHomeSmall};
    }
    img{
        width: 100%;
    }
`;