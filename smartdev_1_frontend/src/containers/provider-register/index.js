import { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import authService from "../../apiServices/authenticateService";

import { RegisterContainer, RegisterForm, Logo, RegisterButton } from "./style";
import logo from "../../assests/img/logo.png";

const phoneRegExp = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

const providerRegisterSchema = yup.object().shape({
  owner: yup.string().required("họ tên không được để trống"),
  username: yup.string().required("tên đăng nhập không được để trống"),
  password: yup
    .string()
    .required("mật khẩu không được để trống")
    .min(5, "mật khẩu chứa ít nhất 5 kí tự"),
  confirmPassword: yup
    .string()
    .min(5, "mật khẩu chứa ít nhất 5 kí tự")
    .required("mật khẩu cần được xác nhận")
    .oneOf([yup.ref("password"), null], "mật khẩu chưa trùng"),
  address: yup.string().required("địa chỉ không được để trống"),
  phone_number: yup
    .string()
    .matches(phoneRegExp, "Số điện thoại không hợp lệ")
    .required("số điện thoại không được để trống"),
  email: yup
    .string()
    .email("email không hợp lệ")
    .required("email không được để trồng"),
  store_name: yup.string().required("tên cửa hàng không được để trống"),
});

const UserRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(providerRegisterSchema) });

  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const { registerAsProvider } = authService;

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await registerAsProvider(data);
    if (response.errors) {
      return response.errors.map((item) => toast.error(item));
    }
    setLoading(false);
    if (response.status === 201) {
      history.push("/login");
      return toast(<h3 color="black">{response.message}</h3>);
    }
    return toast(<h3 color="black">{response.message}</h3>);
  };
  return (
    <RegisterContainer>
      <Logo src={logo} />
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng kí</h2>

        <RegisterButton>
          <Link to="/register/user">Đăng kí trở thành người dùng</Link>
        </RegisterButton>
        <br />
        <br />
        <label htmlFor="owner">Họ tên:</label>
        <input type="text" {...register("owner")} placeholder="Họ và tên" />
        <span>{errors.owner?.message}</span>
        <br />
        <label htmlFor="username">Tên đăng nhập:</label>
        <input
          type="text"
          {...register("username")}
          placeholder="Tên đăng nhập"
        />
        <span>{errors.username?.message}</span>
        <br />
        <label htmlFor="password">Mật khẩu:</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Mật khẩu"
        />
        <span>{errors.password?.message}</span>
        <br />
        <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Xác nhận mật khẩu"
        />
        <span>{errors.confirmPassword?.message}</span>
        <br />
        <label htmlFor="address">Địa chỉ:</label>
        <input type="text" {...register("address")} placeholder="Địa chỉ" />
        <span>{errors.address?.message}</span>
        <br />
        <label htmlFor="phone_number">Số điện thoại:</label>
        <input
          type="text"
          {...register("phone_number")}
          placeholder="Số điện thoại"
        />
        <span>{errors.phone_number?.message}</span>
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" {...register("email")} placeholder="email" />
        <span>{errors.email?.message}</span>
        <br />
        <label htmlFor="zipcode">Tên Cửa Hàng:</label>
        <input
          type="text"
          {...register("store_name")}
          placeholder="tên cửa hàng"
        />
        <span>{errors.store_name?.message}</span>
        <br />
        <RegisterButton disabled={loading}>
          {loading ? "Loading..." : "Đăng kí"}
        </RegisterButton>
        <p style={{ textAlign: "center" }}>
          Đã có tài khoản? <Link to="/login">Đăng Nhập</Link> ngay!
        </p>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default UserRegister;
