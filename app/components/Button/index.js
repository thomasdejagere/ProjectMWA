import {Button, Glyphicon} from 'react-bootstrap';
import React from 'react';

class MyButton extends React.Component{
  constructor (props) {
    super(props);
  }

  render() {
    const {size = "medium", style = "primary", icon = null, text = "", onClick} = this.props;

    return (
      <div>
        <Button bsSize={size} bsStyle={style} onClick={onClick}>
          {
            icon ? <Glyphicon glyph={icon}/> : null
          }
          {text}
        </Button>
      </div>
    )
  }
}

export default MyButton;
