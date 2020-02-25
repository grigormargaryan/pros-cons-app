import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { connect } from "react-redux";

import { fetchProscons } from "../redux/proscons/thunk";

import List from "./List";

class ProsCons extends Component {
  componentDidMount() {
    this.props.fetchProscons();
  }

  render() {
    const { data, loading, loaded } = this.props;

    if (loading || !loaded) return <Spinner type="primary" />;

    return (
      <Container>
        <Row>
          <Col>
            <List data={data.pros} type="pros" />
          </Col>
          <Col>
            <List data={data.cons} type="cons" />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.proscons.loading,
  loaded: state.proscons.loaded,
  data: state.proscons.data
});

export default connect(mapStateToProps, {
  fetchProscons
})(ProsCons);
