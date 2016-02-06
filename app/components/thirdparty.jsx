// thirdparty.jsx
import React from 'react';

let BoxComponent = (props) => {

const style = {
  backgroundColor: 'yellow',
  padding: 15,
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: 'blue',
  width: 200,
  ...props.style
}

return (
  <div style={style}>Third party component 1</div>
  )
}

export default BoxComponent;