import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculate = (op: '+' | '-') => {
    if (num1.trim() === '' || num2.trim() === '' ||
        isNaN(Number(num1)) || isNaN(Number(num2))) {
      setError('숫자를 입력하세요.');
      setResult(null);
      return;
    }

    setError('');
    setResult(op === '+' ? Number(num1) + Number(num2) : Number(num1) - Number(num2));
  };

  return (
    <div>
      <input
        type="text"
        value={num1}
        placeholder="첫 번째 숫자"
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        value={num2}
        placeholder="두 번째 숫자"
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={() => calculate('+')}>더하기</button>
      <button onClick={() => calculate('-')}>빼기</button>

      {error && <p>{error}</p>}
      <p>결과: {result ?? ''}</p>
    </div>
  );
}

export default Calculator;