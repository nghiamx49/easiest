import React from "react";
import PropsTypes from "prop-types";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { submitLogin } from "../../actions/authenticateAction";

import { LoginContainer, Logo, LoginForm, LoginButton } from "./style";
import logo from "../../assests/img/logo.png";
import { connect } from "react-redux";

const loginSchema = yup.object().shape({
  username: yup.string().required("username không được để trống"),
  password: yup.string().required("password không được để trống"),
});

const Login = ({ loading, login }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data) => {
    await login(data);
  };
  return (
    <>
      <LoginContainer>
        <Logo src={logo} />
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <h2 style={{ fontWeight: 400 }}>Đăng nhập</h2>
          <input
            type="text"
            {...register("username")}
            placeholder="tên đăng nhập"
          />
          <span>{errors.username?.message}</span>
          <input
            type="password"
            {...register("password")}
            placeholder="mật khẩu"
          />
          <span>{errors.password?.message}</span>
          <LoginButton disabled={loading}>
            {loading ? "Loading..." : "Đăng nhập"}
          </LoginButton>
          {/* <a href="#forgotpassword">Quên Mật Khẩu</a> */}
          <Link to="/forgotpassword">Quên mật khẩu?</Link>
          <hr />
          <p style={{ textAlign: "center" }}>
            Chưa có tài khoản? <Link to="/register/user">Đăng ký</Link> ngay!
          </p>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loadingReducer,
  };
};

Login.propTypes = {
  loading: PropsTypes.bool,
  login: PropsTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(submitLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
