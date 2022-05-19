import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { FcShipped } from "react-icons/fc";
import CartItem from "./cartItem";
import TotalCart from "./cartTotal";

import { setCheckoutItem } from "../../actions/cartAction";

import { Loadingbtn } from "../../components/loading/";

import { getAllProductInCart } from "../../actions/cartAction";

import {
  CartSlibar,
  ColumnDiv,
  Container,
  LayoutCart,
  Left,
  Message,
  Right,
} from "./style";
import { connect } from "react-redux";

const Cart = ({
  cartLists,
  token,
  getCarItems,
  loading,
  setCheckOut,
  checkOutItem,
}) => {
  useEffect(() => {
    getCarItems(token);
  }, [getCarItems, token]);

  const handleCheck = (e) => {
    const id = e.target.value;
    document.querySelectorAll('input[type="checkbox"]').forEach(function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    const obj = cartLists.filter((item) => parseInt(item.id) === parseInt(id));
    setCheckOut(obj[0]);
  };

  return (
    <LayoutCart>
      <Container>
        <Message>
          <div>
            <FcShipped></FcShipped> Nhấn vào mục Mã giảm giá ở cuối trang để
            hưởng miễn phí vận chuyển bạn nhé!
          </div>
        </Message>
        <CartSlibar>
          <Left></Left>
          <Right>
            <ColumnDiv>Đơn Giá</ColumnDiv>
            <ColumnDiv>Số Lượng</ColumnDiv>
            <ColumnDiv>Thành TIền</ColumnDiv>
            <ColumnDiv>Thao Tác</ColumnDiv>
          </Right>
        </CartSlibar>
        {loading === false ? (
          <>
            {cartLists.length !== 0 &&
              cartLists.map((product) => (
                <CartItem
                  product={product}
                  key={product.id}
                  handleCheck={handleCheck}
                  token={token}
                ></CartItem>
              ))}
          </>
        ) : (
          <Loadingbtn />
        )}
        <TotalCart
          total={cartLists.length}
          count={checkOutItem.quantity_purchased || 0}
          totalMoney={
            checkOutItem.id
              ? (
                  checkOutItem.quantity_purchased * +checkOutItem.unit_price
                ).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              : (0).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
          }
        ></TotalCart>
      </Container>
    </LayoutCart>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authenticateReducer.token,
    cartLists: state.cartReducer.data,
    loading: state.cartReducer.loading,
    checkOutItem: state.checkoutReducer,
  };
};

Cart.propTypes = {
  loading: PropTypes.bool,
  cartLists: PropTypes.array,
  token: PropTypes.string,
  getCarItems: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCarItems: (token) => dispatch(getAllProductInCart(token)),
    setCheckOut: (item) => dispatch(setCheckoutItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
