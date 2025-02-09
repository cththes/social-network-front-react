import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuthUser().then((data) => {
      if (data.resultCode === 0) {
        let { userId, email, login } = data.data;
        this.props.setUserData(userId, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
const mapDispatchToProps = {
  setUserData: setUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
