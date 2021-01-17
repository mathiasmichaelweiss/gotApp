import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMassage from "../errorMessage";

export default class CharacterPage extends Component {
  state = {
    selectedChar: 130,
    error: false
  };

  onCharSelected = id => {
    // Устанавливает новый  id в selectedChar(поместит id в state.selectedChar)
    this.setState({
      selectedChar: id
    });
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMassage />;
    }

    return (
      <Row>
        <Col md="6">
          <ItemList onCharSelected={this.onCharSelected} />
        </Col>
        <Col md="6">
          <CharDetails charID={this.state.selectedChar} />
        </Col>
      </Row>
    );
  }
}
