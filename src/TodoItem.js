import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return <div onClick={this.handleClick}>{this.props.item}</div>;
  }

  handleClick() {
    this.props.handleItemDelete(this.props.index);
  }
}

export default TodoItem;

/*<li
  key={index}
  onClick={this.handleItemDelete.bind(this, index)}
  dangerouslySetInnerHTML will ignore <h1> like tags to display but will transform into HTML format
  dangerouslySetInnerHTML={{ __html: item }}
>
</li>;
 */
