import styled from "styled-components";
import { theme } from "../../assests/common/color";

export const Page404Container = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        text-align: center;
        h1{
            font-size: 100px;
            margin:0;
            padding: 0 20px;
            box-sizing: border-box;
           
        }
        h3{
            margin:0;
            font-size: 30px;
            text-transform: capitalize;
        }
        p{
            font-size: 14px;
            font-weight: 500;
            margin: 10px 0 10px;
            text-transform: capitalize;
        }
        a{
            display: inline-block;
            background-color: ${theme.textRed};
            color:${theme.white};
            padding: 10px 30px;
            text-decoration: none;
            font-size: 15px;

        }
    }
`;