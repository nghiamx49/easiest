import styled from "styled-components";
import { theme } from "../../../assests/common/color";

export const Container = styled.div`
  background-color: ${theme.white};
  margin-top: 2rem;
`;
export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 95%;
  margin: auto;
  color: ${theme.red};
  &:hover {
    cursor: pointer;
  }
`;

export const Detail = styled.div`
  color: black;
  li {
    padding: 2px;
    font-weight: 400;
  }
`;

export const StoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 40px;
  span {
    font-weight: 600;
    margin: 5px;
  }
`;

export const CustomImg = styled.img`
  width: 80px;
  height: 80px;
  border: 1px groove;
`;

export const CustomProductName = styled.h4`
  while-space: wrap;
  font-weight: 500;
  width: 400px;
  overflow: hidden;
  text-overflow: clip;
`;

export const MiddleLeft = styled.div`
  margin: 0px 20px;
  display: flex;
  align-items: center;
  img {
    max-height: 5rem;
  }
  span {
    max-width: 80%;
  }
  ul {
    padding: 0rem 2rem;
    margin: 0px;
    li {
      list-style-type: none;
    }
  }
`;
export const MiddleRight = styled.div`
  text-align: right;
  margin-top: 30px;
  margin-right: 50px;
  font-weight: bold;
`;
export const OrderHistoryTagBottom = styled.div`
  max-width: 95%;
  font-weight: 500;
`;
export const BottomLeft = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const CustomButton = styled.button`
  padding: 12px 20px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid ${theme.white};
  box-sizing: border-box;
  background-color: #d73211;
  color: ${theme.white};
  :hover {
    cursor: pointer;
    background-color: ${theme.textRed};
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-right: 20px;
  justity-content: space-evenly;
`;

export const CustomHr = styled.hr`
  width: 90%;
  background-color: gray;
  opacity: 0.5;
`;
