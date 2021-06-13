import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { item } = this.props;
    return <div onClick={this.handleClick}>{item}</div>;
  }

  handleClick() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
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
