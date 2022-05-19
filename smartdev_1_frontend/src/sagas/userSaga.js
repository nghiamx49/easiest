import { put, call, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { uuid } from "uuidv4";

import history from "./history";
import { authenticateContants } from "../constants/index";
import { sendEmailSuccess, verifyOTPSuccess } from "../actions/userAction";
import userService from "../apiServices/userService";

function* sendEmail(action) {
  try {
    let result = yield call(userService.changePassword, action.payload);
    if (result.status === 200) {
      yield put(sendEmailSuccess(result.data.data));
      return history.push("/verify_otp");
    }
    return toast(<h3 color="black">{result.data.message}</h3>);
  } catch (error) {
    console.log("error" + error);
  }
}

function* resetPassword(action) {
  try {
    let result = yield call(userService.resetPassword, action.payload);
    if (result.status === 200) {
      toast(<h3 color="black">{result.data.message}</h3>);
      return history.push("/login");
    }
    return toast(<h3 color="black">{result.data.message}</h3>);
  } catch (error) {
    console.log(error);
  }
}

function* verifyOTP(action) {
  try {
    let result = yield call(userService.verifyOTP, action.payload);
    if (result.status === 200) {
      var slug = uuid();
      yield put(verifyOTPSuccess(slug));
      return history.push(`/reset_password/${slug}`);
    }
    return toast(<h3 color="black">{result.data.message}</h3>);
  } catch (error) {
    console.log(error);
  }
}

export default function* authenticateSaga() {
  yield takeLatest(authenticateContants.FORGOT_PASSWORD, sendEmail);
  yield takeLatest(authenticateContants.RESET_PASSWORD, resetPassword);
  yield takeLatest(authenticateContants.VERIFY_OTP, verifyOTP);
}
