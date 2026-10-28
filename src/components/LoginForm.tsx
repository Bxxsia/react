function LoginForm() {
  const inputStyle =
    'w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-center text-2xl font-bold">로그인</h2>
      <p className="mt-1 text-center text-sm text-gray-500">다시 오신 걸 환영해요</p>

      <div className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
            이메일
          </label>
          <input id="email" type="email" placeholder="example@email.com" className={inputStyle} />
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
            비밀번호
          </label>
          <input id="password" type="password" placeholder="비밀번호를 입력하세요" className={inputStyle} />
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
          로그인하기
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        계정이 없나요?{' '}
        <a href="#" className="font-semibold text-blue-600 hover:underline">
          회원가입
        </a>
      </p>
    </div>
  )
}

export default LoginForm