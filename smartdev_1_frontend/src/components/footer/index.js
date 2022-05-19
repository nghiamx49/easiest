import React from "react";
import { Container } from "../../assests/common/stylecomon";
import * as ft from "./style";
import * as contants from "./contants";
import { Link } from "react-router-dom";
import pay from "../../assests/img/pay.png";
import bank from "../../assests/img/bank.png";
import Capture from "../../assests/img/Capture.JPG";
import ftbottom from "../../assests/img/ftbottoom.JPG";
function Footer() {
  return (
    <ft.FooterContainer>
      <Container>
        <ft.FooterTop>
          <div>
            <h3>CHĂM SÓC KHÁCH HÀNG</h3>
            <ul>
              {contants.listli_1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>VỀ SHOPEE</h3>
            <ul>
              {contants.listli_2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>THANH TOÁN</h3>
            <img src={pay} alt="" />
            <h3>ĐƠN VỊ VẬN CHUYỂN</h3>
            <img src={bank} alt="" />
          </div>
          <div>
            <h3>THEO DÕI CHÚNG TÔI TRÊN</h3>
            <ul>
              <li>
                <Link to="#">face book</Link>
              </li>
              <li>
                <Link to="#">Instagram</Link>
              </li>
              <li>
                <Link to="#">LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
            <img src={Capture} alt="" />
          </div>
        </ft.FooterTop>
        <ft.FooterCenter>
          <div>© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div>
            Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia
            Việt Nam Philippines Brazil México Colombia Chile.
          </div>
        </ft.FooterCenter>
      </Container>
      <ft.FooterBottom>
        <Container>
          <ft.FooterBottomHead>
            <div>CHÍNH SÁCH BẢO MẬT</div>
            <div>QUY CHẾ HOẠT ĐỘNG</div>
            <div>CHÍNH SÁCH VẬN CHUYỂN</div>
            <div>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</div>
          </ft.FooterBottomHead>
          <img src={ftbottom} alt="" />
          <p>
            Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai,
            phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 19001221 -
            Email: cskh@hotro.shopee.vn
          </p>
          <p>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên
            hệ: 024 73081221 (ext 4678)
          </p>
          <p>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
            lần đầu ngày 10/02/2015
          </p>
          <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
        </Container>
      </ft.FooterBottom>
    </ft.FooterContainer>
  );
}

export default Footer;
