import React from "react";
import { HeaderLoginContainer } from "./style";
import { useLocation, Link } from "react-router-dom";

function HeaderLogin() {
  const location = useLocation();
  console.log(location.pathname);

  const renderTitleHeader = () => {
    switch (location.pathname) {
      case "/login":
        return (
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Đăng nhập </h3>
          </Link>
        );
      case "/register/user":
        return (
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Đăng ký </h3>
          </Link>
        );
      case "/register/provider":
        return (
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Đăng ký </h3>
          </Link>
        );
      case "/forgotpassword":
        return (
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Đặt lại mật khẩu </h3>
          </Link>
        );
      case "/verify_otp":
        return (
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Đặt lại mật khẩu </h3>
          </Link>
        );
      default:
        return (
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Đặt lại mật khẩu </h3>
          </Link>
        );
    }
  };
  return (
    <HeaderLoginContainer>
      {renderTitleHeader()}
      <p>cần trợ giúp</p>
    </HeaderLoginContainer>
  );
}

export default HeaderLogin;
