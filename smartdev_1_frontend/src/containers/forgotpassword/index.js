import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

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
import { sendEmailRequest } from "../../actions/userAction";
import { connect } from "react-redux";
const forgotpasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("email không được để trống")
    .email("email không đúng định dạng"),
});

function Forgotpassword({ sendEmail }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgotpasswordSchema) });

  const onSubmit = (dataSubmit) => {
    sendEmail(dataSubmit.email);
  };

  return (
    <FPCoverContainer>
      <FPContainer>
        <FPTitle>
          <FPTitleIcon>
            <Link to="/login">
              <BiArrowBack color="#FD5F32" style={{ fontSize: "25px" }} />
            </Link>
          </FPTitleIcon>
          <FPTitleName>Đặt lại mật khẩu</FPTitleName>
        </FPTitle>
        <FPContent>
          <FPContentName>Vui lòng nhập email để đặt lại mật khẩu</FPContentName>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FPContentInputDiv>
              <FPContentInput
                type="text"
                placeholder="nhập email"
                {...register("email")}
              />
            </FPContentInputDiv>
            {errors.email && (
              <FPContentInputDiv>
                <Error>{errors.email?.message}</Error>
              </FPContentInputDiv>
            )}
            <FPContentBorderButton>
              <FPContentButton type="submit">Đặt lại mật khẩu</FPContentButton>
            </FPContentBorderButton>
          </form>
        </FPContent>
      </FPContainer>
    </FPCoverContainer>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendEmail: (email) => dispatch(sendEmailRequest(email)),
  };
};

export default connect(null, mapDispatchToProps)(Forgotpassword);
