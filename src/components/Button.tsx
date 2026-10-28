type ButtonProps = {
  label: string
  variant?: 'primary' | 'secondary' | 'outline'   // ? = 안 넘겨도 되는 props
}

// 종류별 스타일을 미리 정리해두기
const variantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
}

function Button({ label, variant = 'primary' }: ButtonProps) {  // 기본값: primary
  return (
    <button
      className={`rounded-lg px-4 py-2 font-semibold transition active:scale-95 ${variantStyles[variant]}`}
    >
      {label}
    </button>
  )
}

export default Button