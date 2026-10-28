type ProductCardProps = {
  image: string
  brand: string
  name: string
  price: number
  discount?: number
  isBest?: boolean
}

function ProductCard({ image, brand, name, price, discount, isBest }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* 이미지 영역 */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="size-full object-cover transition duration-300 group-hover:scale-105"
        />
        {isBest && (
          <span className="absolute top-2 left-2 rounded bg-black px-2 py-1 text-xs font-bold text-white">
            BEST
          </span>
        )}
      </div>

      {/* 정보 영역 */}
      <div className="mt-3 space-y-1">
        <p className="text-xs font-semibold text-gray-500">{brand}</p>
        <p className="line-clamp-2 text-sm text-gray-900">{name}</p>
        <p className="text-base font-bold">
          {discount && <span className="mr-1 text-red-500">{discount}%</span>}
          {price.toLocaleString()}원
        </p>
      </div>
    </div>
  )
}

export default ProductCard