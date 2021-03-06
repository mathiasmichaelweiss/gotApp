import React, { Component } from "react";
import "./itemList.css";
import gotService from "../../services/gotService";
import Spinner from "../spinner";

export default class ItemList extends Component {
  gotService = new gotService();

  state = {
    charList: null,
    id: `f${(~~(Math.random() * 1e8)).toString(16)}`
  };

  componentDidMount() {
    this.gotService.getAllCharacters().then(charList => {
      this.setState({
        charList
      });
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id, name } = item;
      return (
        // Когда мы создаем верстку в Reacte, обязательно надо указать ключ каждого элемента, ключ должен состоять из рандомного значения
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onCharSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { charList } = this.state;

    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItems(charList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
