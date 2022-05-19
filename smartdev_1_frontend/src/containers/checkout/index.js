import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

import Paypal from "./Paypal";

import userService from "../../apiServices/userService";

import { HiLocationMarker } from "react-icons/hi";
import {
  Container,
  SectionContainer,
  AdressContainer,
  UserInformation,
  Decoration,
  Product,
  ProductInfo,
  ProductNameAndImg,
  PaymentMethod,
  MethodContainer,
  MethodDetail,
  PaymentDetail,
  Total,
  PaymentButton,
  ButtonContainer,
} from "./style";
import { connect } from "react-redux";
import { toast } from "react-toastify";

const chosenStyled = {
  border: "1px solid #ee4d2d",
  color: "#ee4d2d",
  fontWeight: 600,
};

const Checkout = ({ account, checkoutItem, token }) => {
  const [paypalSuccess, setPaypalSucess] = useState(false);

  const history = useHistory();

  const { doCheckout } = userService;

  useEffect(() => {
    if (!checkoutItem.id) {
      history.push("/cart");
    }
  }, [history, checkoutItem.id]);

  const { full_name, phone_number, address } = account;

  const { product_name, thumbnail_image, unit_price, quantity_purchased } =
    checkoutItem;
  const formartPhoneNumber = (phone_number) => {
    if (phone_number) {
      let splitDown = phone_number.split("");
      splitDown.splice(0, 1, "(+84) ");
      return splitDown.join("");
    }
  };

  const countFee = +unit_price * quantity_purchased;

  const [payload, setPayload] = useState({
    method: "COD",
    product_id: checkoutItem.product_id,
    total: String(countFee + 20000),
  });

  console.log(payload);

  const handleChosen = (e) => {
    e.preventDefault();
    setPayload({ ...payload, method: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await doCheckout(payload, token);
    if (response.status === 200) {
      history.push(`/order_detail/${checkoutItem.id}`);
    }
    return toast(response.message);
  };

  return (
    <Container>
      <SectionContainer>
        <Decoration />
        <AdressContainer>
          <HiLocationMarker size="20" />
          <h2>Địa chỉ nhận hàng</h2>
        </AdressContainer>
        <UserInformation>
          <h3>{full_name}</h3>
          <h3>{formartPhoneNumber(phone_number)}</h3>
          <span>{address}</span>
        </UserInformation>
      </SectionContainer>
      <SectionContainer>
        <Product>
          <h2>Sản phẩm</h2>
          <hr />
          <ProductInfo>
            <span>Đơn giá</span>
            <span>Số Lượng</span>
            <span>Thành tiền</span>
          </ProductInfo>
        </Product>
        <Product>
          <ProductNameAndImg>
            <img src={thumbnail_image} alt="" />
            <h3>{product_name}</h3>
          </ProductNameAndImg>
          <ProductInfo>
            <span>
              {(+unit_price).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </span>
            <span>{quantity_purchased}</span>
            <span>
              {countFee.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </ProductInfo>
        </Product>
      </SectionContainer>
      <SectionContainer>
        <MethodContainer>
          <h2>Phương Thức Thanh Toán</h2>
          <PaymentMethod
            value="COD"
            onClick={handleChosen}
            style={payload.method === "COD" ? chosenStyled : null}
          >
            Thanh toán khi nhận hàng
          </PaymentMethod>
          <PaymentMethod
            value="Paypal"
            onClick={handleChosen}
            style={payload.method === "Paypal" ? chosenStyled : null}
          >
            Thanh toán bằng Paypal
          </PaymentMethod>
        </MethodContainer>
        <hr />
        <MethodDetail>
          {payload.method === "Paypal" ? (
            <Paypal
              productName={product_name}
              totalFee={countFee + 20000}
              handleSuccess={setPaypalSucess}
            />
          ) : (
            <h1>Thanh Toán khi nhận hàng</h1>
          )}
        </MethodDetail>
        <hr />
        <PaymentDetail>
          <div>
            <span>Tổng tiền hàng:</span>
            <span>
              {countFee.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <div>
            <span>Phí vận chuyển:</span>
            <span>
              {(20000).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <div>
            <span>Tổng tiền hàng:</span>
            <Total>
              {(countFee + 20000).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </Total>
          </div>
        </PaymentDetail>
        <hr />
        <ButtonContainer>
          <PaymentButton
            onClick={handleSubmit}
            disabled={payload.method === "Paypal" && paypalSuccess === false}
          >
            Đặt hàng
          </PaymentButton>
        </ButtonContainer>
      </SectionContainer>
    </Container>
  );
};

Checkout.propTypes = {
  checkoutItem: PropTypes.object,
  account: PropTypes.object,
  token: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    checkoutItem: state.checkoutReducer,
    account: state.authenticateReducer.account,
    token: state.authenticateReducer.token,
  };
};

export default connect(mapStateToProps)(Checkout);
