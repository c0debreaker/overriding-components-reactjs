// thirdparty.jsx
import React from 'react';

let BoxComponent = (props) => {

const style = {
  backgroundColor: '#2196F3',
  padding: 15,
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: 'blue',
  width: 200,
  ...props.style
}

return (
  <div style={style}>Submodule</div>
  )
}

export default BoxComponent;