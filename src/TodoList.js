// {Fragment} can replace the outtest div tag, and in html rendered page, it will NOT show up
import React, { Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">Input</label>
          <input
            id="inputArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>Submit</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                item={item}
                index={index}
                key={index}
                handleItemDelete={this.handleItemDelete.bind(this)}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleButtonClick() {
    this.setState({
      inputValue: "",
      list: [...this.state.list, this.state.inputValue],
    });
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list: list });
  }
}

export default TodoList;
