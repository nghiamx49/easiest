import { connect } from "react-redux";
import { Route, Redirect } from "react-router";
import ErrorPage from "../containers/page404/";
import { toast } from "react-toastify";

import { useEffect } from "react";
import { submitLogout } from "../actions/authenticateAction";

import authenticateService from "../apiServices/authenticateService";

const AuthorizeRoute = ({
  children,
  role,
  authenticateReducer,
  logout,
  ...rest
}) => {
  const { isLoggedIn, account, token } = authenticateReducer;
  const { check } = authenticateService;

  useEffect(() => {
    const checkAuth = async () => {
      if (token !== "") {
        let response = await check(token);
        if (response.status === 401) {
          logout();
          return toast(response.message);
        }
      }
    };
    checkAuth();
  }, [check, logout]);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return (
            <Redirect to={{ pathname: "/login", state: props.location }} />
          );
        } else if (role !== account.role) {
          return <ErrorPage />;
        } else {
          return children;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
  const { authenticateReducer } = state;
  return { authenticateReducer: authenticateReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(submitLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeRoute);
