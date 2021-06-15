import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   show: true,
      list: [],
    };
    // this.handleToggle = this.handleToggle.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* <div className={this.state.show ? "show" : "hide"}>App</div> */}
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEnter={(element) => {
            element.style.color = "blue";
          }}
          appear={true}
        >
          <div>App</div>
        </CSSTransition> */}
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEnter={(element) => {
                  element.style.color = "blue";
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
        {/* <button onClick={this.handleToggle}>toggle</button> */}
      </Fragment>
    );
  }

  handleToggle() {
    this.setState({
      show: this.state.show ? false : true,
    });
  }

  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, "item"],
      };
    });
  }
}

export default App;
