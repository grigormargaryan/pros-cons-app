import React from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import ProsCons from "./ProsCons";

import { fetchUserDetails } from "../redux/user/thunk";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchUserDetails();
  }

  render() {
    const { userLoaded } = this.props;
    return (
      <>
        <Header />
        <ToastContainer />
        {userLoaded && <ProsCons />}
        {!userLoaded && <Spinner color="primary" />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  userLoaded: state.user.loaded
});

export default connect(mapStateToProps, { fetchUserDetails })(App);
