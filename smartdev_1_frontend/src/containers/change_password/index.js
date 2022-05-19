import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import apiClient from "../../apiServices/axiosClient";
import SlidebarOfProfile from "../../components/slidebarOfProfile";
import * as UP from "./style";

const passwordSchema = yup.object().shape({
  old_password: yup.string().required("mật khẩu cũ không được bỏ trống"),
  new_password: yup
    .string()
    .required("mật khẩu mới không được bỏ trống")
    .min(5, "mật khẩu ít 5kí tự. vui lòng nhập lại"),
  confirm_password: yup
    .string()
    .required("nhập lại mật khẩu không được bỏ trống")
    .oneOf(
      [yup.ref("new_password"), null],
      "nhập lại mật khẩu không trùng khớp",
    ),
});

const ChangePass = (props) => {
  const { apiClientPost } = apiClient;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = (dataSubmit) => {
    changePassword(dataSubmit);
  };

  const changePassword = async (data) => {
    const value = {
      old_password: data.old_password,
      new_password: data.new_password,
    };
    console.log(value);
    const result = await apiClientPost(
      "/user/change_password",
      value,
      props.token,
    );
    if (result.status === 200) {
      return toast(<h3 color="black">{result.message}</h3>);
    }
    return toast(<h3 color="black">{result.message}</h3>);
  };

  return (
    <UP.Layout>
      <UP.Container>
        <SlidebarOfProfile />
        <UP.Main>
          <UP.ProfileTop>
            <UP.ProfileTilte>Đổi Mật Khẩu </UP.ProfileTilte>
            <UP.ProfileDescribe>
              Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người
              khác
            </UP.ProfileDescribe>
          </UP.ProfileTop>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UP.ProfileBottom>
              <UP.ProfileBottomLeft>
                <UP.ProfileFormRow>
                  <UP.ProfileFormName>Mật khẩu hiện tại:</UP.ProfileFormName>
                  <UP.ProfileInput type="text" {...register("old_password")} />
                </UP.ProfileFormRow>
                {errors.old_password && (
                  <UP.ProfileFormRow>
                    <UP.ProfileFormName></UP.ProfileFormName>
                    <UP.Error>{errors.old_password?.message}</UP.Error>
                  </UP.ProfileFormRow>
                )}

                <UP.ProfileFormRow>
                  <UP.ProfileFormName>Mật khẩu mới:</UP.ProfileFormName>
                  <UP.ProfileInput type="text" {...register("new_password")} />
                </UP.ProfileFormRow>
                {errors.new_password && (
                  <UP.ProfileFormRow>
                    <UP.ProfileFormName></UP.ProfileFormName>
                    <UP.Error>{errors.new_password?.message}</UP.Error>
                  </UP.ProfileFormRow>
                )}

                <UP.ProfileFormRow>
                  <UP.ProfileFormName>Xác nhận mật khẩu:</UP.ProfileFormName>
                  <UP.ProfileInput
                    type="text"
                    {...register("confirm_password")}
                  />
                </UP.ProfileFormRow>
                {errors.confirm_password && (
                  <UP.ProfileFormRow>
                    <UP.ProfileFormName></UP.ProfileFormName>
                    <UP.Error>{errors.confirm_password?.message}</UP.Error>
                  </UP.ProfileFormRow>
                )}
                <UP.ProfileFormRow>
                  <UP.ProfileFormName></UP.ProfileFormName>
                  <UP.ProfileButton type="submit">Xác nhận</UP.ProfileButton>
                </UP.ProfileFormRow>
              </UP.ProfileBottomLeft>
            </UP.ProfileBottom>
          </form>
        </UP.Main>
      </UP.Container>
    </UP.Layout>
  );
};

const mapStateToProp = (state) => {
  return {
    token: state.authenticateReducer.token,
  };
};

export default connect(mapStateToProp)(ChangePass);
