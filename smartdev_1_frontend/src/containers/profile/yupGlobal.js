import * as yup from "yup";

const REGEX_FULL_NAME = /^[^\d\t`~!@#$%^&*()_\-+=|\\{}[\]:;"'<>,.?/]+$/;
const REGEX_PHONE = /^0[35789]\d{8}$/;
const REGEX_ZIPCODE = /^\d{6}$/;

yup.addMethod(yup.string, "full_name", function (message) {
  return this.matches(REGEX_FULL_NAME, {
    message,
    excludeEmptyString: true,
  });
});

yup.addMethod(yup.string, "phone_number", function (message) {
  return this.matches(REGEX_PHONE, {
    message,
    excludeEmptyString: true,
  });
});

yup.addMethod(yup.string, "zipcode", function (message) {
  return this.matches(REGEX_ZIPCODE, {
    message,
    excludeEmptyString: true,
  });
});

export default yup;
