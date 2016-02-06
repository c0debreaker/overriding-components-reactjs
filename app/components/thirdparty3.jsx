// thirdparty.jsx
import React from 'react';

let BoxComponent = (props) => {

const style = {
  backgroundColor: '#673AB7',
  color: 'lightblue',
  padding: 15,
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: 'blue',
  width: 200,
  ...props.style
}

return (
  <div style={style}>Another submodule</div>
  )
}

export default BoxComponent;