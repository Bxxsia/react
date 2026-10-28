import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count는 State, setCount로 변경

  return (
    <div>
      <p>숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>더하기</button>
    </div>
  );
}

export default Counter;
