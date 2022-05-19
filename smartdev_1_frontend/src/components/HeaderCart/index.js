import React from "react";
import {
  Bottom,
  ContainerBottom,
  ContainerTop,
  Header,
  HeaderBottomLeft,
  HeaderBottomRight,
  HeaderLink,
  HeaderLinkBoder,
  HeaderUser,
} from "./style";
import imgLogo from "../../assests/img/logo.png";

export default function HeaderCart() {
  return (
    <>
      <Header>
        <ContainerTop>
          <div>
            <HeaderLink>Kênh người bán</HeaderLink>
            <HeaderLinkBoder>Tải ứng dụng</HeaderLinkBoder>
            <HeaderLink>Kết nối</HeaderLink>
          </div>
          <div>
            <HeaderLink>Thông báo</HeaderLink>
            <HeaderLink>Hổ trợ</HeaderLink>
            <HeaderUser>trang ho</HeaderUser>
          </div>
        </ContainerTop>
      </Header>
      <Bottom>
        <ContainerBottom>
          <HeaderBottomLeft>
            <img src={imgLogo} alt="" />
            <span>Easiest | Cart</span>
          </HeaderBottomLeft>
          <HeaderBottomRight>
            <input></input>
            <button>Search</button>
          </HeaderBottomRight>
        </ContainerBottom>
      </Bottom>
    </>
  );
}
