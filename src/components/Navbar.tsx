import Button from './Button'

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* 로고 */}
        <a href="#" className="text-xl font-black tracking-tight">
          INFO STORE
        </a>

        {/* 메뉴: 모바일에서는 숨기고, md(768px) 이상에서만 보이기 */}
        <ul className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
          <li><a href="#" className="hover:text-black">신상품</a></li>
          <li><a href="#" className="hover:text-black">베스트</a></li>
          <li><a href="#" className="text-red-500 hover:text-red-600">세일</a></li>
        </ul>

        <Button label="로그인" variant="outline" />
      </nav>
    </header>
  )
}

export default Navbar