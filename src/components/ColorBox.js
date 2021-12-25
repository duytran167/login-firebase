import React, { useState } from 'react';

function ColorBox() {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
    const minusClick = () => setCount(count - 1)
  
    return (
      <div>
        <a> useState example</a><br/>
        Current count {count}.
        <div>
          <button onClick={handleClick}>+</button><button onClick={minusClick}>-</button>
        </div>
      </div>
    );
}
export default ColorBox;