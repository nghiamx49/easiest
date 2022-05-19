import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../assests/common/color";
export const Header = styled.header`
 background: linear-gradient(
-180deg
,#f53d2d,#f63);
  position: sticky;
  top: 0;
  left: 0;
  a{
    color:${theme.white};
  }
  height: 120px;
  z-index: 100;
`;
export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;
export const HeaderTopLeft =styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  & a:nth-child(2){
    padding:0 10px;
    border-right: 2px solid hsla(0,0%,100%,.22);
    border-left: 2px solid hsla(0,0%,100%,.22);
  }
`;
export const HeaderTopRight =styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`;
export const HeaderLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
  margin-right: 10px;
  svg{
    margin-right: 5px;
    font-size: 15px;
  }
`;
export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  cursor: pointer;
  &:hover div{
      visibility: visible;
      transform:scaleY(1);
    }
  img{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin:0 5px 0 10px;
  }
  p{
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    color:${theme.white};
  }
  div{
    position: absolute;
    top:40px;
    left: -30px;
    height: 120px;
    width: 140px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.white};
    border-radius: 4px;
    padding-top: 10px;
    box-sizing: border-box;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 5;
    &::after{
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      top: -15px;
      right: 27px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid ${theme.white};
    }
    a{
      text-decoration: none;
      color: ${theme.black};
      font-size: 14px;
      width: 100%;
      padding: 5px 10px;
      text-transform: capitalize;
      font-weight: 500;
    }
  }
`;
export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
export const HeaderUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding:0;
  li{
    font-size: 13px;
    color:${theme.white};
    margin-right: 10px;
    margin-top: 5px;
    text-transform: capitalize;
  }
`;

export const HeaderInput = styled.input`
  width: 100%;
  height: 38px;
  position: relative;
  border:none;
  border-radius:5px;
`;
export const HeaderSearch = styled.button`
  position: absolute;
  top:3px;
  right:0px;
  background: ${theme.textRed};
  height: 34px;
  padding: 0 15px;
  min-width: 60px;
  max-width: 190px;
  color: #fff;
  border: none;
  border-radius: 5px;
`;
export const HeaderBottomCenterTop = styled.div`
 position: relative;
`;
export const HeaderBottomCenter = styled.div`
  flex-basis: 70%;
  box-sizing: border-box;
  
`;
export const HeaderBottomLeft = styled.div`
    display: flex;
    align-items: center;
    a{
      text-decoration: none;
      display: flex;
      align-items: center;
    }
    span{
      font-size: 20px;
      font-weight: 600;
      color:${theme.white};
      margin-left:5px;
    }
    img{
      height: 60px;
      width: 60px;
    }
`;
export const HeaderBottomRight = styled.div`
  flex-basis: 40px;
  color:${theme.white};
  height: 30px;
  position: relative;
  top: -4px;
  left: -20px;
  svg{
    font-size: 40px;
  }
  div{
    background-color: ${theme.white};
    position: absolute;
    top: 50px;
    right: -10px;
    height: 0px;
    width: 0px;
    border-radius: 4px;
    box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 / 20%);
    text-align: center;
    transition: all 0.2s ease;
    visibility: hidden;
    opacity: 0;
    &::after{
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      top: -15px;
      right: 17px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid ${theme.white};
    }
    img{
      height: 70px;
      width: 70px;
      margin-top:50px;
    }
    p{
      color:${theme.black};
    }
  }
  &:hover div{
    height: 300px;
    width: 400px;
    visibility: visible;
    opacity: 1;
  }
`;
