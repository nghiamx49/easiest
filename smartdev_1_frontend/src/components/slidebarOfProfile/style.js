import styled from "styled-components";
import { theme } from "../../assests/common/color";

export const SlidebarProfile = styled.div`
  flex-basis: 20%;
`;
export const SlidebarOfProfileTop = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  margin-top: 2rem;
  font-size: 15px;
  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    min-height: 1rem;
    font-weight: 700;
    margin-bottom: 0px;
    color: ${theme.black};
    font-size: 16px;
    margin-top: 0;
  }
  a {
    color: ${theme.gray};
    text-transform: capitalize;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
  }

  img {
    margin: 1rem 1rem;
    height: 6rem;
    border-radius: 50%;
    width: 6rem;
  }
  border-bottom: 1px solid ${theme.grayF5};
`;
export const SlidebarOfProfileBottom = styled.div`
  margin-top: 2rem;
  font-size: 15px;
  ul {
    padding: 0px;
    li {
      list-style-type: none;
      margin: 1rem;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: black;
        font-size: 16px;
        font-weight: 400;
        margin-left: 10px;
        &:hover {
          color: ${theme.textRed};
          cursor: pointer;
        }
      }
    }
  }
`;
