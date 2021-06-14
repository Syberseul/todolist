// {Fragment} can replace the outtest div tag, and in html rendered page, it will NOT show up
import React, { Fragment } from "react";
import TodoItem from "./TodoItem";

import "./style.css";
import axios from "axios";

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
            // ref={(input) => {
            //   this.input = input;
            // }}
          />
          <button onClick={this.handleButtonClick}>Submit</button>
        </div>
        <ul
        // ref={(ul) => {
        //   this.ul = ul;
        // }}
        >
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  // Always put ajax request in componentDidMount to fetch data from outside
  // in terminal, under the file root, type npm install axios
  // axios is a way to send ajax request
  componentDidMount() {
    axios
      .get("/api/todoList")
      .then((res) => {
        this.setState(() => ({
          list: [...res.data],
        }));
      })
      .catch(() => {
        alert("error");
      });
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          item={item}
          index={index}
          key={item}
          handleItemDelete={this.handleItemDelete}
        />
      );
    });
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value,
    }));
  }

  handleButtonClick() {
    this.setState(
      (prevState) => ({
        //prevState is the parameter that will automatically receive when call setState
        // prevState = this.state
        inputValue: "",
        list: [...prevState.list, prevState.inputValue],
      })
      // }),
      // // call-back function will accecute after the setState async function finish
      // () => {
      //   console.log(this.ul.querySelectorAll("div").length);
      // }
    );
    // this.setState({
    //   inputValue: "",
    //   list: [...this.state.list, this.state.inputValue],
    // });
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
    // this.setState({ list: list });
  }
}

export default TodoList;
