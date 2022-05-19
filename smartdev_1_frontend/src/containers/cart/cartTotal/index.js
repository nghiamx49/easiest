import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import { LeftBottom, RightBottom, Total, TotalCartBottom } from "./style";

export default function TotalCart(props) {
  const { count, totalMoney } = props;
  const history = useHistory();
  return (
    <Total>
      <TotalCartBottom>
        <LeftBottom></LeftBottom>
        <RightBottom>
          <div>
            <span>Tổng thanh toán ({count} Sản phẩm):</span>{" "}
          </div>
          <h3>₫{totalMoney}</h3>
          <div>
            <button
              onClick={() => {
                if (!count) {
                  return toast("Bạn chưa chọn sản phẩm");
                } else {
                  history.push("/checkout");
                }
              }}
            >
              Mua Hàng
            </button>
          </div>
        </RightBottom>
      </TotalCartBottom>
    </Total>
  );
}
