import React from "react";
//this import will provide functions to check props data type
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // check if the new props is different to current props, then component should update
  // what if only data in parent component changes, then child component should NOT update
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item !== this.props.item) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("child render");
    const { item } = this.props;
    // const { item, test } = this.props;
    return (
      <div onClick={this.handleClick}>
        {/* {test} - {item} */}
        {item}
      </div>
    );
  }

  handleClick() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }
}

// this is the way to check props data type is what we desired
// .isRequired is the way to force this data must be available / passed from parent
TodoItem.propTypes = {
  //   test: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  handleItemDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

// TodoItem.defaultProps = {
//   test: "hello world",
// };

export default TodoItem;

/*<li
  key={index}
  onClick={this.handleItemDelete.bind(this, index)}
  dangerouslySetInnerHTML will ignore <h1> like tags to display but will transform into HTML format
  dangerouslySetInnerHTML={{ __html: item }}
>
</li>;
 */
