import React from "react";
import { FcShipped } from "react-icons/fc";
import { MdAccountBalanceWallet } from "react-icons/md";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

import {
  removeCartItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../../actions/cartAction";

import {
  BtnDelete,
  BtnPlus,
  CartItemLayout,
  ColumnDiv,
  Left,
  Magess,
  Right,
  ShopName,
  Quantity,
} from "./style";
import { connect } from "react-redux";

const CartItem = ({
  handleCheck,
  product,
  token,
  remove,
  increase,
  decrease,
}) => {
  const history = useHistory();
  return (
    <CartItemLayout>
      <ShopName>
        <Left>
          <input
            type="checkbox"
            id={product.id}
            value={product.id}
            onChange={(e) => handleCheck(e)}
          ></input>
          <span>Yêu Thích</span>
          <p>{product.store_name}</p>
        </Left>
        <Right></Right>
      </ShopName>
      <ShopName>
        <Left
          onClick={() => {
            history.push(`/product-detail/${product.id}`);
          }}
        >
          <img src={product.thumbnail_image} alt="" />
          <p>{product.product_name}</p>
        </Left>
        <Right>
          <ColumnDiv>
            {(+product.unit_price).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </ColumnDiv>
          <ColumnDiv>
            {" "}
            <BtnPlus onClick={() => increase(product, token)}>+</BtnPlus>
            <Quantity>{product.quantity_purchased}</Quantity>
            <BtnPlus onClick={() => decrease(product, token)}>-</BtnPlus>
          </ColumnDiv>
          <ColumnDiv>
            {(+product.unit_price * product.quantity_purchased).toLocaleString(
              "it-IT",
              { style: "currency", currency: "VND" },
            )}
          </ColumnDiv>
          <ColumnDiv>
            <BtnDelete onClick={() => remove(product.id, token)}>Xóa</BtnDelete>
          </ColumnDiv>
        </Right>
      </ShopName>
      <Magess>
        <div>
          {" "}
          <MdAccountBalanceWallet></MdAccountBalanceWallet> Shop Voucher giảm
          đến ₫10k
        </div>
      </Magess>
      <Magess>
        <div>
          <FcShipped></FcShipped> Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000
          (giảm tối đa ₫25.000); Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000
          (giảm tối đa ₫70.000)
        </div>
      </Magess>
    </CartItemLayout>
  );
};

CartItem.prototype = {
  product: PropTypes.shape({
    id: PropTypes.number,
    shopName: PropTypes.string,
    linkImage: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    number: PropTypes.number,
    status: PropTypes.bool,
  }),
};

CartItem.propTypes = {
  handleCheck: PropTypes.func,
  product: PropTypes.object,
  token: PropTypes.string,
  remove: PropTypes.func,
  increase: PropTypes.func,
  decrease: PropTypes.func,
};
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id, token) => dispatch(removeCartItem(id, token)),
    increase: (product, token) => dispatch(increaseQuantity(product, token)),
    decrease: (product, token) => dispatch(decreaseQuantity(product, token)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
