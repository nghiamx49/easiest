import styled  from 'styled-components'
import { theme } from '../../assests/common/color';


export const HeaderLoginContainer = styled.div`
    background-color: ${theme.white};
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    padding: 0 160px;
    box-shadow: 0 6px 6px rgb(0 0 0 / 6%);
    h3{
        color: ${theme.black};
        font-size: 24px;
        line-height: 1.2;
        text-transform: capitalize;
    }
    p{
        color: ${theme.textRed};
        font-size: 13px;
        cursor: pointer;
    }
`;
