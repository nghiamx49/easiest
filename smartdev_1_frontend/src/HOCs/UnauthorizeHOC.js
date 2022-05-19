import { connect } from "react-redux";
import { Route, Redirect } from "react-router";

const UnauthorizeRoute = ({ children, authenticateReducer, ...rest }) => {
  const { isLoggedIn, account } = authenticateReducer;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          if (account.role === "admin") {
            return (
              <Redirect to={{ pathname: "/admin", state: props.location }} />
            );
          } else if (account.role === "provider") {
            return (
              <Redirect to={{ pathname: "/provider", state: props.location }} />
            );
          } else {
            return <Redirect to={{ pathname: "", state: props.location }} />;
          }
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

export default connect(mapStateToProps)(UnauthorizeRoute);
