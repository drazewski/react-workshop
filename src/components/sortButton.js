import React from 'react';

function SortButton(props) {

  const style = {
    backgroundColor: '#987976',
    outline: 'none',
    borderColor: '#644364',
    borderRadius: '5px',
    padding: '3px 20px',
    margin: '0 20px',
    fontSize: '20px'
  }
  return (
    <button style={style} onClick={props}>
      Sort!
    </button>
  );
}
export default SortButton