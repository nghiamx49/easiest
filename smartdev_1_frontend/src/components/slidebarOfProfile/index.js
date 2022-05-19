import React from "react";
import { Link } from "react-router-dom";

import defaultAvt from "../../assests/img/user-default.png";
import { FcKindle, FcKey} from "react-icons/fc";
import { FaShoppingCart, FaRegUser } from "react-icons/fa";
import { connect } from "react-redux";
import {
  SlidebarOfProfileTop,
  SlidebarProfile,
  SlidebarOfProfileBottom,
} from "./style";

function SlidebarOfProfile({ account }) {
  return (
    <SlidebarProfile>
      <SlidebarOfProfileTop>
        <div>
          <img src={account.avatar_source || defaultAvt} alt="avatar"></img>
        </div>
        <div>
          <h3>{account.full_name}</h3>
          <Link to="/profile">Chỉnh Sửa Hồ Sơ</Link>
        </div>
      </SlidebarOfProfileTop>
      <SlidebarOfProfileBottom>
        <ul>
          <li>
            <FaRegUser />
            <Link to="/profile">Tài khoản của tôi</Link>
          </li>
          <li>
            <FcKey />
            <Link to="/change_pass">Đổi mật khẩu</Link>
          </li>
          <li>
            <FcKindle />
            <Link to="/order_history">Đơn Mua</Link>
          </li>
          <li>
            <FaShoppingCart color="#FD5F32" />
            <Link to="/cart">Giỏ Hàng</Link>
          </li>
        </ul>
      </SlidebarOfProfileBottom>
    </SlidebarProfile>
  );
}

const mapStateToProps = (state) => {
  return {
    account: state.authenticateReducer.account,
  };
};

export default connect(mapStateToProps)(SlidebarOfProfile);
