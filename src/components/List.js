import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";

import { addProscons } from "../redux/proscons/thunk";

class List extends Component {
  state = {
    newItem: ""
  };

  handleSubmit = () => {
    const { type, addProscons } = this.props;
    addProscons(this.state.newItem, type);
    this.setState({ newItem: "" });
  };

  handleInputChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  render() {
    const { data } = this.props;

    return (
      <ListGroup>
        {data.map((item, index) => (
          <ListGroupItem key={index}>{item}</ListGroupItem>
        ))}

        <ListGroupItem>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup>
              <Input
                placeholder="and..."
                onChange={this.handleInputChange}
                value={this.state.newItem}
              />
              <InputGroupAddon addonType="append" onClick={this.handleSubmit}>
                <Button type="button" color="primary">
                  Add
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

const mapStateToProps = state => ({
  // loading: state.proscons.loading,
  // loaded: state.proscons.loaded,
  // data: state.proscons.data
});

export default connect(mapStateToProps, {
  addProscons
})(List);
