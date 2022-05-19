import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  FPContainer,
  FPCoverContainer,
  FPTitle,
  FPTitleIcon,
  FPTitleName,
  FPContent,
  FPContentName,
  FPContentInputDiv,
  FPContentInput,
  FPContentButton,
  FPContentBorderButton,
  Error,
} from "./style";
import { verifyOTPRequest } from "../../actions/userAction";

const forgotpasswordSchema = yup.object().shape({
  otp: yup.string().required("otp không được để trống"),
});

function VerifyOTP({ props, verify_otp }) {
  const history = useHistory();

  useEffect(() => {
    const checkValid = (username, history) => {
      if (String(username) === "") {
        return history.push("/forgotpassword");
      }
    };
    checkValid(props.username, history);
  }, [history, props.username]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgotpasswordSchema) });

  const onSubmit = (dataSubmit) => {
    verify_otp({
      otp: dataSubmit.otp,
      username: props.username,
    });
  };

  return (
    <FPCoverContainer>
      <FPContainer>
        <FPTitle>
          <FPTitleIcon>
            <Link to="/forgotpassword">
              <BiArrowBack color="#FD5F32" style={{ fontSize: "25px" }} />
            </Link>
          </FPTitleIcon>
          <FPTitleName>Vui Lòng Nhập Mã Xác Minh</FPTitleName>
        </FPTitle>
        <FPContent>
          <FPContentName>
            Mã xác minh của bạn đã được gửi đến email
          </FPContentName>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FPContentInputDiv>
              <FPContentInput
                type="text"
                placeholder="nhập OTP"
                {...register("otp")}
              />
            </FPContentInputDiv>
            {errors.otp && (
              <FPContentInputDiv>
                <Error>{errors.otp?.message}</Error>
              </FPContentInputDiv>
            )}
            <FPContentBorderButton>
              <FPContentButton>Tiếp theo</FPContentButton>
            </FPContentBorderButton>
          </form>
        </FPContent>
      </FPContainer>
    </FPCoverContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    props: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verify_otp: (data) => dispatch(verifyOTPRequest(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTP);
