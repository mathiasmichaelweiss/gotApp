import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMassage from "../errorMessage";
import CharacterPage from "../characterPage";

export default class App extends Component {
  state = {
    showRandomChar: true,
    // Изначально показываем персонажа (true)
    error: false
  };

  componentDidCatch() {
    console.log("error");
    this.setState({
      error: true
    });
  }

  // функция меняющая состояние showRandomChar на противоположное
  toggleCharState = () => {
    this.setState(state => {
      // меняем state
      return {
        showRandomChar: !state.showRandomChar
        // Возвращает значение не равное тому, что сейчас(противоположное)
      };
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMassage />;
    }
    // Условие для изменения верстки
    const char = this.state.showRandomChar ? <RandomChar /> : null; // если state {showRandomChar = true, тогда вставляем в переменную char верстку, если false - вставляем в переменную char пустоту}
    const btnColor = this.state.showRandomChar
      ? "btn btn-primary"
      : "btn btn-secondary";

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {/* Кнопка со стилями */}
              <button onClick={this.toggleCharState} className={btnColor}>
                PUSH
              </button>
              {char}
            </Col>
          </Row>
          <CharacterPage />
        </Container>
      </>
    );
  }
}
