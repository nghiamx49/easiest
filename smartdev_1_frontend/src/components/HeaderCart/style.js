import styled from "styled-components";
import { theme } from "../../assests/common/color";

export const Header = styled.div`
  background: ${theme.textRed};

`;
export const ContainerTop = styled.div`
    max-width:1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    min-height: 3.5rem;
    align-items: center;
    font-size: 15px;
`;
export const LeftTop = styled.div`
    margin: 0 auto;
    display: flex;
`;
export const HeaderLink = styled.span`
  color: ${theme.white};
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 10px;
`;
export const HeaderLinkBoder = styled.span`
  color: ${theme.white};
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 0 10px;
  border-left: 1px solid hsla(0, 0%, 100%, 0.22);
  border-right: 1px solid hsla(0, 0%, 100%, 0.22);
`;
export const HeaderUser = styled.span`
  font-size: 14px;
  font-weight: 700;
  color:${theme.white};
`;
export const Bottom = styled.div`
  background: ${theme.white};
`;
export const ContainerBottom = styled.div`
    max-width:1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
`;
export const HeaderBottomLeft = styled.div`
    flex-basis: 30%;
    text-align: center;
    display: flex;
    align-items: center;
    img {
        padding: 2rem 0rem;
    }
    span {
        margin-left: 2rem;
        font-size: 30px;
        color:${theme.textRed};
    }
`;
export const HeaderBottomRight = styled.div`
    flex-basis: 50%;
    input {
        width: 85%;
        height: 30px;
        border: 2px solid ${theme.textRed};
        outline: none;       

    }
    button{
        width: 13%;
        height: 36px;
        background-color: ${theme.textRed};
        border: 2px solid ${theme.textRed};
        color: ${theme.white};
        &:hover{
            background-color:${theme.textRed};
        }
    }
`
